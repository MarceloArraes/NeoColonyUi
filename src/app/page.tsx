"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  const goToAlert = (href: string) => {
    window.location.href = href;
  };
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Image
        src="/load.png"
        alt="Load Dark Colony"
        className="dark:invert h-full w-full"
        width={800}
        height={24}
        priority
        onClick={() => goToAlert("/menu")}
      />

      {/* <Button variant={"default"}>RED LANDING</Button> */}
      <Button
        className="absolute bottom-20"
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
