import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { NuqsAdapter } from "nuqs/adapters/next";
import localFont from "next/font/local";
import "./globals.css";

const monogram = localFont({
	src: [
		{
			path: "../public/fonts/monogram/ttf/monogram.ttf",
			weight: "400",
			style: "normal",
		},
		{
			path: "../public/fonts/monogram/ttf/monogram-extended.ttf",
			weight: "400",
			style: "normal",
		},
		{
			path: "../public/fonts/monogram/ttf/monogram-extended-italic.ttf",
			weight: "400",
			style: "italic",
		},
	],
	variable: "--font-varela",
	display: "swap",
	fallback: ["monospace"],
	adjustFontFallback: false,
	declarations: [
		{
			prop: "size-adjust",
			value: "150%",
		},
	],
});

export const metadata: Metadata = {
	title: "Chunli",
	description:
		"A Wii U-inspired personal console for Chunli's game design, game art, prototypes, and research work.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={monogram.variable}>
			<body
				className="overflow-hidden bg-[#d4f0f7] font-sans text-[21px] antialiased md:text-[22px]"
				suppressHydrationWarning
			>
				<Analytics />
				<NuqsAdapter>{children}</NuqsAdapter>
			</body>
		</html>
	);
}
