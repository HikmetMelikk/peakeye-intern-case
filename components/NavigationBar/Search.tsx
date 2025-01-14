"use client";

import { useDebounce } from "@/hooks/use-debounce";
import { Search } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

interface SearchResult {
	id: string;
	title: string;
	slug: string;
	topic: string;
}

export function SearchBar() {
	const router = useRouter();
	const [searchQuery, setSearchQuery] = useState("");
	const [results, setResults] = useState<SearchResult[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [showResults, setShowResults] = useState(false);
	const [showAll, setShowAll] = useState(false);
	const debouncedSearch = useDebounce(searchQuery, 300);

	useEffect(() => {
		const searchBlogs = async () => {
			if (debouncedSearch.length < 2) {
				setResults([]);
				return;
			}

			setIsLoading(true);
			try {
				const res = await fetch(`/api/search?q=${debouncedSearch}`);
				const data = await res.json();
				setResults(data);
			} catch (error) {
				console.error("Search error:", error);
			} finally {
				setIsLoading(false);
			}
		};

		searchBlogs();
	}, [debouncedSearch]);

	const displayedResults = showAll ? results : results.slice(0, 3);
	const hasMoreResults = results.length > 3;

	return (
		<div className="relative">
			<Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
			<input
				type="search"
				placeholder="Search blogs..."
				className="w-64 rounded-md border border-input bg-background px-9 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
				value={searchQuery}
				onChange={(e) => setSearchQuery(e.target.value)}
				onFocus={() => setShowResults(true)}
				onBlur={() => setTimeout(() => setShowResults(false), 200)}
			/>

			{showResults && searchQuery.length >= 2 && (
				<div className="absolute top-full mt-2 w-full rounded-md border bg-background p-2 shadow-lg z-50">
					{isLoading ? (
						<div className="p-2 text-sm text-muted-foreground">
							Searching...
						</div>
					) : results.length > 0 ? (
						<div className="space-y-1">
							{displayedResults.map((result) => (
								<Link
									key={result.id}
									href={`/blog/${result.slug}`}
									className="block rounded-md p-2 hover:bg-accent">
									<div className="text-sm font-medium">{result.title}</div>
									<div className="text-xs text-muted-foreground">
										{result.topic}
									</div>
								</Link>
							))}
							{hasMoreResults && !showAll && (
								<Button
									variant="ghost"
									className="w-full text-sm text-muted-foreground hover:text-foreground"
									onClick={(e) => {
										e.preventDefault();
										setShowAll(true);
									}}>
									Show All Results ({results.length})
								</Button>
							)}
						</div>
					) : (
						<div className="p-2 text-sm text-muted-foreground">
							No results found
						</div>
					)}
				</div>
			)}
		</div>
	);
}
