import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface BlogAvatarProps {
	data: {
		avatar: string;
		name: string;
	};
}

export default function BlogAvatar({ data }: BlogAvatarProps) {
	return (
		<div className="flex items-center gap-2">
			<Avatar>
				<AvatarImage src={data.avatar} alt={data.name} />
				<AvatarFallback>CN</AvatarFallback>
			</Avatar>
			<span className="text-sm">{data.name}</span>
		</div>
	);
}
