import Main from "@/components/Main";
import "./globals.css";

export const metadata = {
	title: "Bank",
	description: "A bank app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className="bg-card h-screen max-w-[100vw] overflow-x-hidden">
			<body className="flex flex-col h-screen text-foreground md:bg-gradient bg-no-repeat max-w-[100vw] overflow-x-hidden">
				<Main>{children}</Main>
			</body>
		</html>
	);
}
