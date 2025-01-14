"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Logo() {
	const { theme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return (
			<Link href="/">
				<Image src="/bloglogo.svg" alt="logo" width={150} height={150} />
			</Link>
		);
	}

	return (
		<Link href="/">
			<Image
				src={theme === "dark" ? "/bloglogo-white.svg" : "/bloglogo.svg"}
				alt="logo"
				width={150}
				height={150}
				className="transition-opacity"
			/>
		</Link>
	);
}
