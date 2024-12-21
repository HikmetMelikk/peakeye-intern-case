import { auth } from "@/auth";
import { signInAction, signOutAction } from "./signInAction";

export default async function SignIn() {
	const session = await auth();
	const user = session?.user;
	return user ? (
		<form action={signOutAction}>
			<button type="submit">Sign Out</button>
		</form>
	) : (
		<form action={signInAction}>
			<button type="submit">Sign In</button>
		</form>
	);
}
