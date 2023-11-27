import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Coming Soon",
  description: "Dalam pengembangan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <body className="px-20">{children}</body>;
}
