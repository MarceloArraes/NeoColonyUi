import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image
        src="/dark-colony_4.png"
        alt="Dark Colony"
        className="dark:invert"
        width={800}
        height={24}
        priority
      />
      <Button variant={"default"}>RED LANDING</Button>
      <Button variant={"destructive"}>RED LANDING</Button>
      <Button variant={"outline"}>RED LANDING</Button>
      <Button variant={"secondary"}>RED LANDING</Button>
      <Button variant={"darkButton"} size={"darkButton"}>
        RED LANDING
      </Button>
    </main>
  );
}
