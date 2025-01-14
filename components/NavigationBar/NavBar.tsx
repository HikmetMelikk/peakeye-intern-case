import SignIn from "../Authentication/sign-in";
import Logo from "../Logo";
import { ThemeToggle } from "../theme-toggle";
import { MobileNav } from "./MobileNav";
import { NavbarLinks } from "./NavbarLinks";
import { SearchBar } from "./Search";

export default function Navbar() {
	return (
		<nav className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
			<div className="flex items-center space-x-2">
				<Logo />
			</div>

			<div className="flex items-center space-x-4">
				<NavbarLinks />
			</div>

			<div className="flex items-center gap-4">
				<div className="relative hidden md:block">
					<SearchBar />
				</div>
				<div className="hidden md:flex items-center gap-4">
					<SignIn />
					<ThemeToggle />
				</div>
				<MobileNav />
			</div>
		</nav>
	);
}
