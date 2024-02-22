"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MouseEvent } from "react";

export default function Home() {
  const goToAlert = (href: string) => {
    window.location.href = href;
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image
        src="/dark-colony_4.png"
        alt="Dark Colony"
        className="dark:invert"
        width={800}
        height={24}
        priority
        onClick={() => goToAlert("/menu")}
      />
      <Button variant={"default"}>RED LANDING</Button>
      <Button
        variant={"darkButton"}
        onClick={() => goToAlert("/alert")}
        name="/alert"
        size={"darkButton"}
      >
        RED LANDING
      </Button>
    </main>
  );
}
