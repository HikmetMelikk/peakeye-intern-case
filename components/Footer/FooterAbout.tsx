import { Mail, Phone } from "lucide-react";

export function FooterAbout() {
	return (
		<div className="space-y-4">
			<h3 className="text-lg font-semibold">About</h3>
			<p className="text-sm text-muted-foreground">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam
			</p>
			<div className="space-y-2">
				<div className="flex items-center gap-2 text-sm">
					<Mail className="h-4 w-4" />
					<span>hikmetmelik@gmail.com</span>
				</div>
				<div className="flex items-center gap-2 text-sm">
					<Phone className="h-4 w-4" />
					<span>000 000 000 000</span>
				</div>
			</div>
		</div>
	);
}
