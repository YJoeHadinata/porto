import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  description:
    "Ini adalah website pribadi yang saya buat dengan menggunakan nextjs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="px-20">
        {children}
        <Footer />
      </body>
    </html>
  );
}
