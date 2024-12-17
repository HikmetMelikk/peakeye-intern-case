import BlogContent from "@/components/Blog/BlogContent";
import BlogHero from "@/components/Blog/BlogHero";
import { fetchBlog } from "@/data/blogList";
import { notFound } from "next/navigation";

export default async function BlogDetailPage(props: {
	params: Promise<{ slug: string }>;
}) {
	const params = await props.params;
	const blog = await fetchBlog(params.slug);

	if (!blog) {
		notFound();
	}

	return (
		<main className="min-h-screen bg-background">
			<article className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<BlogHero
					title={blog.title}
					category={blog.topic}
					date={blog.createdAt}
					src={blog.image}
					alt={blog.id}
				/>
				<div className="mt-8">
					<BlogContent content={blog.content} />
				</div>
			</article>
		</main>
	);
}
