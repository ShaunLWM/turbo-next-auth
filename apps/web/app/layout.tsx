import { Geist, Geist_Mono } from "next/font/google";

import "@workspace/ui/globals.css";
import { Providers } from "@/components/providers";
import { ReactScan } from "@/components/react-scan";
import type { Metadata } from "next";

const fontSans = Geist({
	subsets: ["latin"],
	variable: "--font-sans",
});

const fontMono = Geist_Mono({
	subsets: ["latin"],
	variable: "--font-mono",
});

export const metadata: Metadata = {
	title: "",
	description: "",
	keywords: [],
	authors: [],
	creator: "",
	publisher: "",
	formatDetection: {
		email: false,
		telephone: false,
	},
	metadataBase: new URL(""),
	alternates: {
		canonical: "",
	},
	openGraph: {
		title: "",
		description: "",
		url: "",
		siteName: "",
		images: [
			{
				url: "",
				width: 0,
				height: 0,
				alt: "",
			},
		],
		locale: "",
		type: "website",
	},
	twitter: {
		card: "app",
		title: "",
		description: "",
		images: [],
	},
	robots: {
		index: false,
		follow: false,
		googleBot: {
			index: false,
			follow: false,
			"max-image-preview": "large",
			"max-video-preview": -1,
			"max-snippet": -1,
		},
	},
	category: "",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<ReactScan />
			<body
				className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased `}
			>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
