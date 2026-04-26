import type { Metadata } from "next";
import Header from "./components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "CatalogHub - Dynamic Multi-Category Catalog",
  description: "Browse and explore products across multiple categories",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#0f0f0f] text-[#fafafa] antialiased">
        <Header />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
