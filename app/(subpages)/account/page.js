"use client";

import { useAuth } from "@/context/AuthContext";
import { useRef, useState, useEffect } from "react";
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function account() {
	const [password, setPassword] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [depositAmount, setDepositAmount] = useState("");
	const [withdrawAmount, setWithdrawAmount] = useState("");
	const [updateBalance, setUpdateBalance] = useState(false);
	const { updatePassword, logout, user, otp, deleteUser, getBalance, balance, sendDeposit, sendWithdraw, setPage } =
		useAuth();
	const username = user;

	const handlePassword = async (e) => {
		e.preventDefault();
		await updatePassword(username, password, newPassword);
	};

	const handleDeleteAccount = async (e) => {
		e.preventDefault();
		await deleteUser(username, password, otp);
	};

	const handleDeposit = async (e) => {
		e.preventDefault();
		if (depositAmount > 0) {
			await sendDeposit(username, otp, depositAmount);
			setDepositAmount("");
			setUpdateBalance(!updateBalance);
		}
	};
	const handleWithdraw = async (e) => {
		e.preventDefault();
		if (withdrawAmount > 0) {
			await sendWithdraw(username, otp, withdrawAmount);
			setWithdrawAmount("");
			setUpdateBalance(!updateBalance);
		}
	};

	useEffect(() => {
		if (user && otp) {
			getBalance(username, otp);
		}
	}, [user, otp, updateBalance]);

	useEffect(() => {
		setPage("account");
	}, []);

	return (
		<>
			{user ? (
				<div className="flex flex-col sm:flex-row gap-2">
					<Card className="flex flex-col mx-auto px-16 md:px-0 min-w-full max-w-full sm:min-w-fit sm:min-h-fit">
						<CardHeader>
							<CardTitle className="text-2xl">
								<span className="text-5xl text-orange-400 font-black">Account</span>
								<br />
								Current balance: {balance.balance} kr
							</CardTitle>
							<CardDescription>View balance, perform transactions, manage account</CardDescription>
						</CardHeader>
						<CardContent>
							{" "}<Label htmlFor="depositAmount">Deposit Amount</Label>
							<form onSubmit={handleDeposit} className="flex flex-row gap-4 mt-2 p-4">
								
								<Input
									type="number"
									id="depositAmount"
									value={depositAmount}
									onChange={(e) => setDepositAmount(e.target.value)}
									placeholder="0"
									aria-label="Amount to deposit"
									className=" max-w-40"
									required
								/>
								<Button className="w-40" type="submit">
									Deposit
								</Button>
							</form><Label htmlFor="withdrawAmount">Withdraw Amount</Label>
							<form onSubmit={handleWithdraw} className="flex flex-row gap-4 p-4">
								
								<Input
									type="number"
									id="withdrawAmount"
									value={withdrawAmount}
									onChange={(e) => setWithdrawAmount(e.target.value)}
									placeholder="0"
									aria-label="Amount to withdraw"
									className="max-w-40"
									required
								/>
								<Button className="w-40" type="submit">
									Withdraw
								</Button>
							</form>
						</CardContent>
					</Card>
					<Card className="flex flex-col mx-auto px-16 md:px-0 min-w-full max-w-full sm:min-w-fit sm:min-h-fit">
						<CardContent>
							<CardTitle className="text-2xl mt-4">
								<span className="text-xl text-orange-400 font-black">Change Password</span>
							</CardTitle>

							<form onSubmit={(e) => handlePassword(e)} className="flex flex-col gap-4 mt-2 p-4">
								<Label htmlFor="passwordInputId">Current password</Label>
								<Input
									onChange={(e) => setPassword(e.target.value)}
									value={password}
									id="passwordInputId"
									type="password"
									placeholder="password"
									autoComplete="current-password"
									required
								/>
								<Label htmlFor="newPasswordInputId">New password</Label>
								<Input
									onChange={(e) => setNewPassword(e.target.value)}
									value={newPassword}
									id="newPasswordInputId"
									type="password"
									placeholder="new password"
									autoComplete="current-password"
									required
								/>
								<Button type="submit">Submit</Button>
							</form>
							<CardTitle className="text-2xl">
								<span className="text-xl text-orange-400 font-black">Delete account</span>
							</CardTitle>

							<form onSubmit={(e) => handleDeleteAccount(e)} className="flex flex-col gap-4 mt-2 p-4">
								<Label htmlFor="passwordDeleteAccountInputId">Current password</Label>
								<Input
									onChange={(e) => setPassword(e.target.value)}
									value={password}
									id="passwordDeleteAccountInputId"
									type="password"
									placeholder="password"
									autoComplete="current-password"
									required
								/>
								<Button type="submit">Delete</Button>
							</form>
						</CardContent>
					</Card>
				</div>
			) : (
				<Card className="flex flex-col mx-auto px-16 md:px-0 min-w-full max-w-full sm:min-w-fit sm:min-h-full">
					<CardHeader>
						<CardTitle className="text-2xl">
							<span className="text-2xl font-semibold">You have been logged out.</span>
						</CardTitle>
					</CardHeader>
				</Card>
			)}
		</>
	);
}
