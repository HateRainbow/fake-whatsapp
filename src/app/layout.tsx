import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fake WhatsApp",
  description: "Fake WhatsApp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
