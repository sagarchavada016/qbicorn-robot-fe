import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

// Load Inter Font
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Load Poppins Font
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Qbicorn Robots Management",
  description: "Qbicorn Robots Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
