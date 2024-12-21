"use client";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
	return (
		<Link href="/">
			<Image src="/bloglogo.svg" alt="logo" width={150} height={150} />
		</Link>
	);
}
