import type { Metadata } from "next";
import { carlgine, inter, publicSans } from "@/assets/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mukesh Kannan",
  description: "Software Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${publicSans.variable} ${carlgine.variable}`}>
        {children}
      </body>
    </html>
  );
}
