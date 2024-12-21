import { Calendar } from "lucide-react";
import Link from "next/link";
import { Skeleton } from "../ui/skeleton";
import BlogAvatar from "./BlogAvatar";
import BlogImage from "./BlogImage";

interface IBlogCardProps {
	item: {
		id: string;
		title: string;
		topic: string;
		avatar: string;
		name: string;
		createdAt: Date;
		slug: string;
		content: string;
		image: string;
	};
}

export default function Blog({ item }: IBlogCardProps) {
	return (
		<Link key={item.id} href={`/blog/${item.slug}`}>
			<article className="flex flex-col group rounded-xl border bg-card transition-colors hover:bg-accent h-full">
				<div className="relative h-48 overflow-hidden">
					<BlogImage imageData={{ image: item.image, name: item.name }} />
				</div>
				<div className="p-6 flex-1">
					<span className="mb-2 inline-block rounded bg-blue-600 px-3 py-1 text-sm text-white">
						{item.topic}
					</span>
					<h3 className="mb-4 text-xl font-bold">{item.title}</h3>
					<section className="flex flex-col justify-between flex-1">
						<p className="mb-4 text-muted-foreground">{item.title}</p>
						<div className="flex items-center gap-4">
							<BlogAvatar avatar={item.avatar} name={item.name} />
							<div className="flex items-center gap-2">
								<Calendar className="h-4 w-4" />
								<span className="text-sm">{item.createdAt.toDateString()}</span>
							</div>
						</div>
					</section>
				</div>
			</article>
		</Link>
	);
}

export function LoadingBlogs() {
	return (
		<div>
			{Array.from({ length: 1 }).map((_, index) => (
				<div
					key={index}
					className="flex flex-col group rounded-xl border bg-card transition-colors hover:bg-accent h-full p-4">
					{/* Image Skeleton */}
					<Skeleton className="h-48 w-full rounded-md mb-4" />
					{/* Topic Skeleton */}
					<Skeleton className="h-4 w-1/3 mb-2" />
					{/* Title Skeleton */}
					<Skeleton className="h-6 w-2/3 mb-4" />
					{/* Avatar and Date Skeleton */}
					<div className="flex items-center gap-4">
						<Skeleton className="h-8 w-8 rounded-full" />
						<div className="flex items-center gap-2">
							<Skeleton className="h-4 w-4" />
							<Skeleton className="h-4 w-20" />
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
