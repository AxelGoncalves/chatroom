import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chatroom",
  description: "Send your messages",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="h-full w-full" lang="en">
      <body className={`${inter.className} bg-blue-50 h-full w-full`}>
        {children}
      </body>
    </html>
  );
}
