"use client";
import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
	const { setPage } = useAuth();

	useEffect(() => {
		setPage("/");
	}, []);

	return (
		//--
		<Card className="flex flex-col-reverse md:flex md:flex-row mx-auto px-16 md:px-0 min-w-full max-w-full sm:min-w-fit sm:min-h-full">
			<div className="flex mx-auto">
				<Image
					src="/hero-image.png"
					width={331}
					height={496}
					className="min-h-[60vw] md:min-h-[496px] max-h-[60vw] md:max-h-[100%] min-w-[60vw] md:min-w-[auto] max-w-[60vw] md:max-w-[auto] object-cover shadow-xl md:shadow-none rounded-full md:rounded-none md:rounded-l-lg"
					alt="Image of happy man with hiking gear, standing in a city."
					priority
				/>
			</div>

			<div>
				<CardHeader>
					<CardTitle className="text-2xl">
						<span className="text-5xl text-orange-400 font-black">NextBank</span>
						<br />
						Create your account today and be happy knowing your money is with us!
					</CardTitle>
					<CardDescription>Easy, fast and safe transactions</CardDescription>
				</CardHeader>
				<CardContent className="flex flex-row mx-auto my-auto max-w-lg p-5">
					<section className="text-center text-sm">
						<p className="inline italic w-full">
							"Before I discovered NEXT Bank, my life was a dismal abyss of financial uncertainty. I would lay awake at
							night, pondering the existential dread of my savings not achieving their full potential. But then, like a
							beacon of hope, NEXT Bank appeared on my horizon. Signing up was a breeze; I've spent more time waiting
							for my coffee than I did opening my account. It was so easy, I almost thought I did it wrong. But no, they
							assured me, 'It's supposed to be this fast and effortless!' And the safety measures – oh, the safety
							measures! I'm half-convinced my money is now guarded by an elite squad of money hungry cyber-ninjas, ready
							to karate chop any online threat to my digital dough."
						</p>{" "}
						<span className=" font-semibold">- Tom Fool</span>
					</section>
				</CardContent>
			</div>
		</Card>
	);
}
