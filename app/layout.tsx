import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const stratosSans = localFont({
  src: "./fonts/stratosweb-medium-TRIAL-BF63c604b499503.woff",
  variable: "--font-stratos-sans",
  weight: "100 900",
});

const stratosweb = localFont({
  src: "./fonts/stratosweb-semibold-TRIAL-BF63c604b516433.woff",
  variable: "--font-stratos-mono",
  weight: "100 900",
});
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
