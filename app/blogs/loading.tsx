import { LoadingBlogs } from "@/components/Blog/Blog";

export default function Loading() {
	return (
		<section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
			<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				<LoadingBlogs />
				<LoadingBlogs />
				<LoadingBlogs />
				<LoadingBlogs />
				<LoadingBlogs />
			</div>
		</section>
	);
}
