"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const navbarLinks = [
	{
		id: 0,
		name: "Home",
		href: "/",
	},
	{
		id: 1,
		name: "Blogs",
		href: "/blogs",
	},
	{
		id: 2,
		name: "Contact",
		href: "/",
	},
];

export function NavbarLinks() {
	const location = usePathname();
	return (
		<div className="hidden md:flex justify-center items-center gap-x-2 ml-8">
			{navbarLinks.map((link) => (
				<Link
					href={link.href}
					key={link.id}
					className={cn(
						location === link.href
							? "bg-muted"
							: "hover:bg-muted hover:bg-opacity-75",
						"group p-2 font-medium rounded-md"
					)}>
					{link.name}
				</Link>
			))}
		</div>
	);
}
