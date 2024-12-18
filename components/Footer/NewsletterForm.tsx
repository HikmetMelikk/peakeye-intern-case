"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { Button } from "../ui/button";

export function NewsletterForm() {
	const [email, setEmail] = useState("");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		// Optional: Show a loading toast
		const loadingToastId = toast.loading("Submitting your email...");

		try {
			const res = await fetch("/api/newsletter", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email }),
			});

			const data = await res.json();

			if (res.ok) {
				toast.dismiss(loadingToastId);
				toast.success(data.message);
				setEmail("");
			} else {
				toast.dismiss(loadingToastId);
				toast.error(data.error || "An error occurred.");
			}
		} catch (error: any) {
			toast.dismiss(loadingToastId);
			// If you're targeting a specific language, retain the original message
			toast.error("Bir hata oluştu.");
			console.error("Newsletter subscription error:", error);
		}
	};

	return (
		<form
			className="w-full max-w-sm p-6 rounded-md bg-background space-y-4 my-2"
			onSubmit={handleSubmit}>
			<h3 className="text-lg font-semibold">Weekly Newsletter</h3>
			<p className="text-sm text-muted-foreground">
				Get blog articles and offers via email
			</p>
			<div className="space-y-2">
				<input
					type="email"
					placeholder="Your Email"
					className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
				<Button type="submit" className="w-full">
					Subscribe
				</Button>
			</div>
		</form>
	);
}
