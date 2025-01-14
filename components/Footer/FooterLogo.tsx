"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export function FooterLogo() {
	const { theme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return <Image src="/bloglogo.svg" alt="logo" width={100} height={100} />;
	}

	return (
		<Image
			src={theme === "dark" ? "/bloglogo-white.svg" : "/bloglogo.svg"}
			alt="logo"
			width={100}
			height={100}
			className="transition-opacity"
		/>
	);
}
