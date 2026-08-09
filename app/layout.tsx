import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TITT: Thunder in the Territories",
  description:
    "A 1983 pro wrestling territory strategy game about booking cards, building heat, and battling rival promotions.",
  openGraph: {
    title: "TITT: Thunder in the Territories",
    description:
      "Book your territory, build heat, and fight for wrestling dominance across a 28 week season.",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "TITT: Thunder in the Territories",
    description:
      "Book your territory, build heat, and fight for wrestling dominance across a 28 week season.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bungee&family=Lexend:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
