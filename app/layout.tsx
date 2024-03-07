import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/_base.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pokechec",
  description: "A place where you find all informations about Pokemon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
