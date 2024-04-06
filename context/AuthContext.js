
import { useRouter } from "next/navigation";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
const localhost = "http://localhost:3001";

export function useAuth() {
	return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
	const router = useRouter();
	const [user, setUser] = useState("");
	const [otp, setOtp] = useState("");
	const [balance, setBalance] = useState(0);
	const [error, setError] = useState(false);
	const [page, setPage] = useState("");
	const [alertMessage, setAlertMessage] = useState("");

	const create = async (username, password) => {
		const response = await fetch(`${localhost}/users`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ username, password }),
		});
		if (response.ok) {
			router.push("/login");
		} else {
			console.log("Failed to create account");
			res.send(500);
		}
	};

	const deleteUser = async (username, password, otp) => {
		const response = await fetch(`${localhost}/delete-user`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ username, password, otp }),
		});
		if (response.ok) {
			router.push("/");
		} else {
			console.log("Failed to delete account");
			res.send(500);
		}
	};

	const login = async (username, password) => {
		const response = await fetch(`${localhost}/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ username, password }),
		});
		if (response.ok) {
			const data = await response.json();
			setUser(username);
			setOtp(data.otp);
			router.push("/account");
		}
		else {
			res.send(401);
		}
	};

	const updatePassword = async (username, password, newPassword) => {
		const response = await fetch(`${localhost}/update-password`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ username, password, newPassword }),
		});
		if (response.ok) {
			alert("Password updated");
		} else {
			console.log("Failed update password");
		}
	};

	const getBalance = async (username, otp) => {
		const response = await fetch(`${localhost}/me/account`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ username, otp }),
		});
		const data = await response.json();
		setBalance(data);
	};

	const sendDeposit = async (username, otp, amount) => {
		const response = await fetch(`${localhost}/me/account/transaction/deposit`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ username, otp, amount }),
		});
		const data = await response.json();
		setBalance(data.balance);
	};

	const sendWithdraw = async (username, otp, amount) => {
		const response = await fetch(`${localhost}/me/account/transaction/withdraw`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ username, otp, amount }),
		});
		const data = await response.json();
		setBalance(data.balance);
	};

	const logout = async (username, otp) => {
		const response = await fetch(`${localhost}/logout`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ username, otp }),
		});
		if (response.ok) {
			setUser("");
			setOtp("");
			setBalance(0);
			router.push("/login");
		} else {
			console.log("Failed to log out or already logged out");
		}
	};

	const value = {
		user,
		otp,
		balance,
		login,
		logout,
		create,
		updatePassword,
		deleteUser,
		getBalance,
		sendDeposit,
		sendWithdraw,
		error,
		setError,
		page,
		setPage,
		setAlertMessage,
		alertMessage
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
