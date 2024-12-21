import Link from "next/link";

interface FooterLinksProps {
	title: string;
	links: Array<{
		label: string;
		href: string;
	}>;
}

export function FooterLinks({ title, links }: FooterLinksProps) {
	return (
		<div className="space-y-4">
			<h3 className="text-lg font-semibold">{title}</h3>
			<ul className="space-y-2">
				{links.map((link) => (
					<li key={link.label}>
						<Link
							key={link.href}
							href={link.href}
							className="text-sm text-muted-foreground hover:text-foreground">
							{link.label}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
