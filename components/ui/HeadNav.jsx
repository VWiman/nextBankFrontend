
import Link from "next/link";
import { HeaderLinks } from "../Header/constants";
import { useAuth } from "@/context/AuthContext";
import { SquareChevronRight, PiggyBank } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export default function HeadNav() {
	const { page } = useAuth();
	return (
		<nav className="flex gap-4 text-sm text-muted-foreground pl-5 pt-2">
			{HeaderLinks.map((link) => (
				<li
					id={link.id}
					key={link.id}
					className="list-none hidden md:grid gap-4 text-xl font-semibold hover:text-foreground">
					<Link href={link.href} className={page === link.href ? "text-foreground" : "hover:text-foreground"}>
						{link.text}
					</Link>
				</li>
			))}

			<Sheet>
				<SheetTrigger>
					<SquareChevronRight className="md:hidden stroke-white h-8 w-8" />
				</SheetTrigger>
				<SheetContent>
					<SheetHeader>
						<SheetTitle className="inline-flex text-orange-400 font-black">
							<PiggyBank />
							<p>NextBank</p>
						</SheetTitle>
						<SheetDescription>
							{HeaderLinks.map((link) => (
								<li
									id={link.id}
									key={link.id}
									className="list-none grid grid-flow-row gap-4 text-xl font-semibold hover:text-foreground text-left">
									<Link href={link.href} className={page === link.href ? "text-foreground" : "hover:text-foreground"}>
										{link.text}
									</Link>
								</li>
							))}
						</SheetDescription>
					</SheetHeader>
				</SheetContent>
			</Sheet>
		</nav>
	);
}
