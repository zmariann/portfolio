import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "./_components/navBar";
import Footer from "./_components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MARIANN ZÁSZLÓS PORTFOLIO",
  description:
    "THIS IS A JUNIOR FULL-STACK DEVELOPER'S WEBSITE WHO'S OBSESSED WITH ART & TAKING PHOTOS",
  keywords:
    "TYPESCRIPT REACT NEXT.JS CSS TAILWIND EXPRESS.JS MYSQL GIT HTML NODE.JS PHOTOSHOP LIGTHROOM PREMIER",
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
        <Footer />
      </body>
    </html>
  );
}
