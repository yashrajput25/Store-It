import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100"],
  variable: "--font-poppins"
})

export const metadata: Metadata = {
  title: "Store it",
  description: "Store it- the only storage solution you need",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
    >
      <body className={`${poppins.variable} font-poppins`}>
        {children}
      </body>
    </html>
  );
}
