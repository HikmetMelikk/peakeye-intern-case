import { Search } from "lucide-react";

export function SearchBar() {
	return (
		<div className="relative hidden md:block">
			<Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
			<input
				disabled
				type="search"
				placeholder="Search..."
				className="w-64 rounded-md border border-input bg-background px-9 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
			/>
		</div>
	);
}
