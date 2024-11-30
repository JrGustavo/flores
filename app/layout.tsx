import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const stratosSans = localFont({
  src: "./fonts/stratosweb-medium-TRIAL-BF63c604b499503.woff",
  variable: "--font-stratos-sans",
  weight: "100 900",
});

const stratosweb = localFont({
  src: "./fonts/stratosweb-blackitalic.woff",
  variable: "--font-stratos-mono",
  weight: "100 900",
});
export const metadata: Metadata = {
  title: "Petal Flores",
  description: "Compra flores y plantas frescas directamente desde el campo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${stratosweb.variable} ${stratosSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
