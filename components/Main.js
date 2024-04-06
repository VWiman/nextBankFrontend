"use client";
import { AuthProvider } from "@/context/AuthContext";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";


export default function Main({ children }) {
	return (
		<>
			<AuthProvider>
				<Header />
				<main className="flex flex-col justify-center items-center sm:p-8">{children}</main>
				<Footer />
			</AuthProvider>
		</>
	);
}
