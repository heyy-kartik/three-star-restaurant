import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "3 Star Restaurant - Fine Dining Experience",
  description:
    "Experience exceptional cuisine with our carefully curated menu and outstanding service",
  icons: {
    icon: "/logo3-star.jpg", // /icon.png is the public path to your file
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
