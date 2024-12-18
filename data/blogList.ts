import { prisma } from "@/prisma/prisma";

export async function fetchBlogs() {
	const blogs = await prisma.post.findMany({
		select: {
			id: true,
			title: true,
			content: true,
			topic: true,
			slug: true,
			image: true,
			avatar: true,
			name: true,
			createdAt: true,
		},
	});
	return blogs;
}

export async function fetchBlog(slug: string) {
	const blog = await prisma.post.findUnique({
		where: {
			slug: slug,
		},
		select: {
			id: true,
			title: true,
			content: true,
			topic: true,
			slug: true,
			image: true,
			avatar: true,
			name: true,
			createdAt: true,
		},
	});
	if (!blog) {
		return null;
	}
	return blog;
}
