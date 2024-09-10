import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "./_components/navBar";
import Footer from "./_components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ZAMARKA'S PORTFOLIO", 
  description:
    "",
  keywords:
    "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
