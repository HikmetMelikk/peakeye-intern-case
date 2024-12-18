import { fetchBlogs } from "@/data/blogList";
import { Calendar } from "lucide-react";
import Link from "next/link";
import BlogAvatar from "./BlogAvatar";
import BlogImage from "./BlogImage";

async function BlogsList() {
	const data = await fetchBlogs();
	return (
		<section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
			<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				{data.map((blog) => (
					<Link key={blog.id} href={`/blog/${blog.slug}`}>
						<article className="flex flex-col group rounded-xl border bg-card transition-colors hover:bg-accent h-full">
							<div className="relative h-48 overflow-hidden">
								<BlogImage imageData={blog} />
							</div>
							<div className="p-6 flex-1">
								<span className="mb-2 inline-block rounded bg-blue-600 px-3 py-1 text-sm text-white">
									{blog.topic}
								</span>
								<h3 className="mb-4 text-xl font-bold">{blog.title}</h3>
								<section className="flex flex-col justify-between flex-1">
									<p className="mb-4 text-muted-foreground">{blog.title}</p>
									<div className="flex items-center gap-4">
										<BlogAvatar avatar={blog.avatar} name={blog.name} />
										<div className="flex items-center gap-2">
											<Calendar className="h-4 w-4" />
											<span className="text-sm">
												{blog.createdAt.toDateString()}
											</span>
										</div>
									</div>
								</section>
							</div>
						</article>
					</Link>
				))}
			</div>
		</section>
	);
}

export default BlogsList;
