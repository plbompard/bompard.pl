import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PL Bompard",
  description: "Personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
