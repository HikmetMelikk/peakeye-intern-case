import { Menu, Search, Sun } from "lucide-react";
import SignIn from "../Authentication/sign-in";
import Logo from "../Logo";
import { Button } from "../ui/button";
import { NavbarLinks } from "./NavbarLinks";

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
					<Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
					<input
						type="search"
						placeholder="Search..."
						className="w-64 rounded-md border border-input bg-background px-9 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
					/>
				</div>
				<SignIn />
				<Button variant="ghost" size="icon">
					<Sun className="h-5 w-5" />
				</Button>
				<Button variant="ghost" size="icon" className="md:hidden">
					<Menu className="h-5 w-5" />
				</Button>
			</div>
		</nav>
	);
}
