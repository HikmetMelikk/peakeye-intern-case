import { signInAction } from "./signInAction";

export default function SignIn() {
	return (
		<form action={signInAction}>
			<button type="submit">Signin with Google</button>
		</form>
	);
}
