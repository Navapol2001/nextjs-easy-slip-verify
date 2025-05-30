import "@ant-design/v5-patch-for-react-19";
import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import { Providers } from "@/app/provider";

const kanit = Kanit({
  subsets: ["thai"],
  variable: "--kanit-font",
  weight: ["300", "400", "700"],
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
      <body className={kanit.variable}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
