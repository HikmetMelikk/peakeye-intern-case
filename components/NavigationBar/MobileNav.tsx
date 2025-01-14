"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import ClientSignIn from "../Authentication/ClientSignIn";
import Logo from "../Logo";
import { ThemeToggle } from "../theme-toggle";
import { Button } from "../ui/button";
import { navbarLinks } from "./NavbarLinks";

export function MobileNav() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="md:hidden">
			<Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
				<Menu className="h-5 w-5" />
			</Button>

			{isOpen && (
				<div className="fixed inset-0 z-50">
					<div
						className="fixed inset-0 bg-background/80 backdrop-blur-sm"
						onClick={() => setIsOpen(false)}
					/>
					<div className="fixed right-0 top-0 h-full w-3/4 bg-background p-6 shadow-lg animate-in slide-in-from-right">
						<div className="flex items-center justify-between mb-8 border-b pb-4">
							<Logo />
							<Button
								variant="ghost"
								size="icon"
								onClick={() => setIsOpen(false)}>
								<X className="h-5 w-5" />
							</Button>
						</div>
						<nav className="flex flex-col space-y-4">
							{navbarLinks.map((link) => (
								<Link
									key={link.id}
									href={link.href}
									onClick={() => setIsOpen(false)}
									className="text-lg font-medium hover:text-primary transition-colors">
									{link.name}
								</Link>
							))}
						</nav>
						<div className="absolute bottom-0 left-0 right-0 border-t p-6">
							<div className="flex items-center justify-between">
								<ClientSignIn />
								<ThemeToggle />
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
