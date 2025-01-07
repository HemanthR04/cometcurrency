import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "CometCurrency",
  description: "Shop,Share,Earn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-gradient-light dark:bg-gradient min-h-screen relative flex flex-col bg-black text-white px-2 py-4">{children}</body>
    </html>
  );
}
