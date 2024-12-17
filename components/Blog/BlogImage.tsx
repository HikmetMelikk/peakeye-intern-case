import Image from "next/image";

interface BlogImageProps {
	imageData: {
		image: string;
		name: string;
	};
}

function BlogImage({ imageData }: BlogImageProps) {
	return (
		<div className="relative h-48 overflow-hidden">
			<Image
				key={imageData.name}
				src={imageData.image}
				alt={imageData.name}
				width={400}
				height={300}
				className="rounded object-cover transition-transform duration-300 group-hover:scale-105 w-auto h-auto"
			/>
		</div>
	);
}

export default BlogImage;
