/* eslint-disable */
import type { Metadata } from "next";
import "../globals.css";
import Navbar from "@/components/navbar";



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
      <head>
      <link href="https://api.fontshare.com/v2/css?f[]=general-sans@200,201,300,301,400,401,500,501,600,601,700,701&display=swap" rel="stylesheet"></link>
      </head>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>      <body className="antialiased bg-gradient-light dark:bg-gradient min-h-screen relative flex flex-col bg-black text-white px-2 py-4 font-sans">
      <Navbar/>
        {children}</body>
    </html>
  );
}
