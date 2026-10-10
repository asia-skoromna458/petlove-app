import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PetLove",
  description:
    "Find your new best friend. Adopt a pet from a shelter or buy one from trusted owners on PetLove.",
  icons: "/icon/favicon.svg",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable}`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
