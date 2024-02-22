import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Chakra_Petch } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const chakra = Chakra_Petch({ weight: "400", subsets: ["latin"] });
const kodo = localFont({
  src: "../fonts/Kode_Mono/KodeMono-VariableFont_wght.ttf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dark Colony UI",
  description: "Created by Marcelo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        /* className={chakra.className} */ className={`${kodo.className} bg-white cursor-darkCursor`}
      >
        {children}
      </body>
    </html>
  );
}
