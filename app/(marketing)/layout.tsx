import type { Metadata } from "next";

import "@/src/styles/globals.css";



export const metadata: Metadata = {
  title: "Buildora",
  description: "Visual website builder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}