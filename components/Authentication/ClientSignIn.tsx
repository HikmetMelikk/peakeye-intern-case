"use client";

import { signOutAction } from "./signInAction";

export default function ClientSignIn() {
	return (
		<form action={signOutAction}>
			<button type="submit">Sign Out</button>
		</form>
	);
}
