"use client";
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import { Chakra_Petch } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import useSound from "use-sound";
import { useEffect } from "react";
// import { createContext, useContext, useState } from "react";

// const inter = Inter({ subsets: ["latin"] });
// const chakra = Chakra_Petch({ weight: "400", subsets: ["latin"] });
const kodo = localFont({
  src: "../fonts/Kode_Mono/KodeMono-VariableFont_wght.ttf",
  display: "swap",
});

// const BacksoundContext = createContext();

// where to put this metadata??
// export const metadata: Metadata = {
//   title: "Dark Colony UI",
//   description: "Created by Marcelo",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [play] = useSound("/sounds/hum.mp3", { volume: 0.5, loop: true });

  useEffect(() => {
    play();
  }, [play]);

  return (
    <html lang="en" className="cursor-darkCursor">
      <body
        className={`${kodo.className} bg-[#121214] bg-stripes bg-cover bg-no-repeat`}
      >
        {children}
      </body>
    </html>
  );
}
