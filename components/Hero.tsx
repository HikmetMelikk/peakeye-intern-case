"use client";

import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
	return (
		<section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
			<Link href="/">
				<div className="relative h-[500px] w-full overflow-hidden rounded-xl">
					<Image
						src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
						alt="Featured blog post"
						fill
						className="object-cover transition-transform duration-300 hover:scale-105"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
					<div className="absolute bottom-0 p-8 text-white">
						<span className="mb-2 inline-block rounded bg-blue-600 px-3 py-1 text-sm">
							Technology
						</span>
						<h1 className="mb-4 text-2xl font-bold lg:text-4xl">
							The Impact of Technology on the Workplace: How Technology is
							Changing
						</h1>
						<div className="flex items-center gap-4">
							<div className="flex items-center gap-2">
								<Image
									src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3"
									alt="Author"
									width={32}
									height={32}
									className="rounded-full"
								/>
								<span>Tracey Wilson</span>
							</div>
							<div className="flex items-center gap-2">
								<Calendar className="h-4 w-4" />
								<span>August 20, 2022</span>
							</div>
						</div>
					</div>
				</div>
			</Link>
		</section>
	);
}
