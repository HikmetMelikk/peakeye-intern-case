import Image from "next/image";
import Link from "next/link";
import { FooterAbout } from "./FooterAbout";
import { FooterLinks } from "./FooterLinks";
import { NewsletterForm } from "./NewsletterForm";

const quickLinks = [
	{ label: "Home", href: "/" },
	{ label: "About", href: "/about" },
	{ label: "Blog", href: "/blog" },
	{ label: "Archived", href: "/archived" },
	{ label: "Author", href: "/author" },
	{ label: "Contact", href: "/contact" },
];

const categories = [
	{ label: "Lifestyle", href: "/category/lifestyle" },
	{ label: "Technology", href: "/category/technology" },
	{ label: "Travel", href: "/category/travel" },
	{ label: "Business", href: "/category/business" },
	{ label: "Economy", href: "/category/economy" },
	{ label: "Sports", href: "/category/sports" },
];

export default function Footer() {
	return (
		<footer className="border-t bg-muted/40">
			<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
					<FooterAbout />
					<FooterLinks title="Quick Link" links={quickLinks} />
					<FooterLinks title="Category" links={categories} />
					<NewsletterForm />
				</div>
				<section className="border-t ">
					<div className="container flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
						<div className="flex items-center gap-2">
							<Image src="/bloglogo.svg" alt="logo" width={100} height={100} />
							<span className="text-sm text-muted-foreground">
								© Hikmet Melik FIRAT {new Date().getFullYear()}. All Rights
								Reserved.
							</span>
						</div>
						<div className="flex gap-4">
							<Link href="/terms" className="text-sm hover:text-foreground">
								Terms of Use
							</Link>
							<Link href="/privacy" className="text-sm hover:text-foreground">
								Privacy Policy
							</Link>
							<Link href="/cookie" className="text-sm hover:text-foreground">
								Cookie Policy
							</Link>
						</div>
					</div>
				</section>
			</div>
		</footer>
	);
}
