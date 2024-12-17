"use client";

import { Button } from "../ui/button";

export function NewsletterForm() {
	return (
		<section className="w-full max-w-sm p-6 rounded-md bg-background space-y-4 my-2">
			<h3 className="text-lg font-semibold">Weekly Newsletter</h3>
			<p className="text-sm text-muted-foreground">
				Get blog articles and offers via email
			</p>
			<form className="space-y-2">
				<input
					type="email"
					placeholder="Your Email"
					className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
				/>
				<Button type="submit" className="w-full">
					Subscribe
				</Button>
			</form>
		</section>
	);
}
