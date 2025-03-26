import type { Metadata } from "next";
import { poppins_400 } from "./fonts";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

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
        className={poppins_400.className}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
