import { fetchBlogs } from "@/data/blogList";
import { Suspense } from "react";
import Blog, { LoadingBlogs } from "./Blog";

export function HomePageAllBlogs() {
	return (
		<Suspense fallback={<LoadingBlogCard />}>
			<LoadHomePageBlogs />
		</Suspense>
	);
}

async function LoadHomePageBlogs() {
	const data = await fetchBlogs();

	return (
		<section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
			<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				{data.map((blog) => (
					<Blog key={blog.id} item={blog} />
				))}
			</div>
		</section>
	);
}

function LoadingBlogCard() {
	return (
		<section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
			<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				<LoadingBlogs />
				<LoadingBlogs />
				<LoadingBlogs />
				<LoadingBlogs />
				<LoadingBlogs />
				<LoadingBlogs />
			</div>
		</section>
	);
}
