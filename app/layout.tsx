import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
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
	title: "Junly's Portfolio",
	description: "A Nintendo Wii U inspired portfolio website for Junly.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={monogram.variable}>
			<body
				className="font-sans text-[21px] md:text-[22px] antialiased overflow-hidden bg-[#e6f3ff]"
				suppressHydrationWarning
			>
				<Analytics />
				{children}
			</body>
		</html>
	);
}
