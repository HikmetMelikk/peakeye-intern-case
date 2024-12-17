import React from "react";

interface BlogContentProps {
	content: string;
}

const BlogContent: React.FC<BlogContentProps> = ({ content }) => {
	return (
		<div>
			<div
				className="mt-4 text-gray-700"
				dangerouslySetInnerHTML={{ __html: content }}
			/>
		</div>
	);
};

export default BlogContent;
