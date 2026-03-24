import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { NuqsAdapter } from "nuqs/adapters/next";
import localFont from "next/font/local";
import "./globals.css";

const clarity = localFont({
	src: "../public/fonts/clarity/clarity.ttf",
	weight: "400",
	style: "normal",
	variable: "--font-varela",
	display: "swap",
	fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
	adjustFontFallback: false,
});

export const metadata: Metadata = {
	title: "Chunli's Portfolio",
	description: "A Nintendo Wii U inspired portfolio website for Chunli.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={clarity.variable}>
			<body
				className="font-sans text-[21px] md:text-[22px] antialiased overflow-hidden bg-[#e6f3ff]"
				suppressHydrationWarning
			>
				<Analytics />
				<NuqsAdapter>{children}</NuqsAdapter>
			</body>
		</html>
	);
}
