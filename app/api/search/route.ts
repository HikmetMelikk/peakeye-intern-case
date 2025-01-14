import { prisma } from "@/prisma/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const query = searchParams.get("q");

	if (!query) {
		return NextResponse.json([]);
	}

	const posts = await prisma.post.findMany({
		where: {
			OR: [
				{
					title: {
						contains: query,
						mode: "insensitive",
					},
				},
				{
					content: {
						contains: query,
						mode: "insensitive",
					},
				},
				{
					topic: {
						contains: query,
						mode: "insensitive",
					},
				},
			],
		},
		select: {
			id: true,
			title: true,
			slug: true,
			topic: true,
		},
	});

	return NextResponse.json(posts);
}
