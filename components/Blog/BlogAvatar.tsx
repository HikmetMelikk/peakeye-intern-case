import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface BlogAvatarProps {
	avatar: string;
	name: string;
}

export default function BlogAvatar({ avatar, name }: BlogAvatarProps) {
	return (
		<div className="flex items-center gap-2">
			<Avatar>
				<AvatarImage src={avatar} alt={name} />
				<AvatarFallback>CN</AvatarFallback>
			</Avatar>
			<span className="text-sm">{name}</span>
		</div>
	);
}
