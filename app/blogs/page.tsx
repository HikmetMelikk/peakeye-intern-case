import Blog from "@/components/Blog/Blog";
import { fetchBlogs } from "@/data/blogList";

export default async function AllBlogs() {
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
