import { MenuBox } from "@/components/MenuBox";
import { TextBlock } from "@/components/TextBlock";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Menu = () => {
  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-fixed bg-slate-800"
      //   style={{ backgroundImage: 'url("/your-background-image.jpg")' }}
    >
      <div className="bg-black bg-opacity-75 text-white p-4 rounded-lg max-w-2xl w-full m-4">
        <div className="flex flex-row border-2 border-red-600 p-4">
          {/* left side */}
          <div>
            <div className="flex justify-between">
              <MenuBox>
                <Image
                  alt="soldier picture"
                  src={"/Soldier.png"}
                  height={120}
                  width={70}
                />
              </MenuBox>

              <div className="text-xs">CHRYSE BASIN</div>
              <div className="text-xs">LEUT. Rank</div>
            </div>
            <TextBlock>RED LANDING</TextBlock>
            <p className="text-sm mb-4">
              ...DOWNLOADING TRANSMISSION...
              <br />
              Welcome to MARS, COMMANDER.
              <br />
              <br />
              We have just received a distress call from one of our MINING
              COLONIES deep in the CHRYSE BASIN. The message was very broken up,
              but as we understand it, the COLONY is under attack by those damn
              ALIENS!
              <br />
              <br />
              There is no time to lose. We are sending you and a small team of
              TROOPERS to find out what has happened.
            </p>
          </div>
          {/* right side */}
          <div>
            <div className="flex justify-between">
              <div className="text-xs">CHRYSE BASIN</div>
              <div className="text-xs">LEUT. Rank</div>
            </div>
            <TextBlock>RED LANDING</TextBlock>
            <p className="text-sm mb-4">
              ...DOWNLOADING TRANSMISSION...
              <br />
              Welcome to MARS, COMMANDER.
              <br />
              <br />
              We have just received a distress call from one of our MINING
              COLONIES deep in the CHRYSE BASIN. The message was very broken up,
              but as we understand it, the COLONY is under attack by those damn
              ALIENS!
              <br />
              <br />
              There is no time to lose. We are sending you and a small team of
              TROOPERS to find out what has happened.
            </p>
          </div>
        </div>
        <div className="flex justify-end">
          <Button variant={"darkButton"} size={"darkButton"}>
            BACK
          </Button>
          <Button variant={"darkButton"} size={"darkButton"}>
            ENCYCLOPEDIA
          </Button>
          <Button variant={"darkButton"} size={"darkButton"}>
            TO BATTLE
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
