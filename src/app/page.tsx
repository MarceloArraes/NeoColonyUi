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
      <Button variant={"default"}>DARK COLONY</Button>
      <Button variant={"destructive"}>DARK COLONY</Button>
      <Button variant={"outline"}>DARK COLONY</Button>
      <Button variant={"secondary"}>DARK COLONY</Button>
      <Button variant={"darkButton"} size={"darkButton"}>
        DARK COLONY
      </Button>
    </main>
  );
}
