import { cn } from "@/lib/utils";
import React from "react";

interface BlogContentProps {
	content: string;
}

const BlogContent: React.FC<BlogContentProps> = ({ content }) => {
	return (
		<div
			className={cn(
				"prose max-w-none",
				"prose-h1:text-primary text-xl my-2",
				"prose-headings:text-foreground",
				"prose-p:text-muted-foreground text-lg",
				"prose-strong:text-foreground",
				"prose-a:text-primary hover:prose-a:text-primary/80",
				"prose-ul:text-muted-foreground",
				"prose-ol:text-muted-foreground",
				"dark:prose-invert"
			)}
			dangerouslySetInnerHTML={{ __html: content }}
		/>
	);
};

export default BlogContent;
