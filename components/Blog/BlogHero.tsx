import { Calendar } from "lucide-react";
import Image from "next/image";

interface BlogHeroProps {
	src: string;
	alt: string;
	title: string;
	category: string;
	date: Date;
}

export default function BlogHero({
	src,
	alt,
	title,
	category,
	date,
}: BlogHeroProps) {
	return (
		<section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
			<span className="mb-2 inline-block rounded bg-blue-600 px-3 py-1 text-sm">
				{category}
			</span>
			<h1 className="text-4xl font-bold leading-tight text-foreground">
				{title}
			</h1>
			<div className="relative h-[500px] w-full overflow-hidden rounded-xl">
				<Image
					src={src}
					alt={alt}
					fill
					className="object-cover transition-transform duration-300 hover:scale-105"
				/>
			</div>
			<div className="flex items-center gap-2">
				<Calendar className="h-4 w-4" />
				<span className="text-sm">{date.toDateString()}</span>
			</div>
		</section>
	);
}
