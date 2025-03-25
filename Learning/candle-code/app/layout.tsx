import type { Metadata } from "next";
import { poppins_300 } from "./fonts";
import "./globals.css";
import Navigation from "../components/Navigation";

export const metadata: Metadata = {
  title: "Mock E-Commerce Site",
  description: "A mock e-commerce site for learning purposes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={poppins_300.className}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
