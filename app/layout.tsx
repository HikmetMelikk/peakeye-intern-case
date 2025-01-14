import { ClarityAnalytics } from "@/components/BlogClarity";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/NavigationBar/NavBar";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "PeakEye Blog Website",
	description: "PeakEye Internship Case Project",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange>
					<ClarityAnalytics />
					<Toaster position="top-center" reverseOrder={false} />
					<Navbar />
					<main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
						{children}
					</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
