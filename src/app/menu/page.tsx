import { MenuBox } from "@/components/MenuBox";
import { TextBlock } from "@/components/TextBlock";
import { Button } from "@/components/ui/button";
import { ScrollBox } from "@/components/ScrollBox";
import Image from "next/image";
import React from "react";

const Menu = () => {
  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-fixed bg-slate-800"
      //   style={{ backgroundImage: 'url("/your-background-image.jpg")' }}
    >
      <MenuBox>
        <div className="bg-black bg-opacity-75 text-white p-4 rounded-lg max-w-2xl w-full m-4">
          <div className="flex flex-row columns-2 ">
            {/* left side */}
            <div className="flex-auto">
              <MenuBox>
                <Image
                  src={"/wireframeGlobe1.png"}
                  alt="wireframe globe"
                  width={1200}
                  height={1200}
                  className="aspect-square"
                />
              </MenuBox>
              <div className="flex flex-row columns-2 w-full">
                <div>
                  <MenuBox>
                    <Image
                      alt="Mars"
                      src={"/mars1.jpg"}
                      width={70}
                      height={70}
                      className="aspect-square"
                    />
                  </MenuBox>
                  <MenuBox>
                    <Image
                      alt="Mars"
                      src={"/mars1.jpg"}
                      width={70}
                      height={70}
                      className="aspect-square"
                    />
                  </MenuBox>
                </div>
                <div className="flex flex-1 flex-col">
                  <MenuBox>as</MenuBox>
                  <MenuBox>ds</MenuBox>
                  <MenuBox>asss</MenuBox>
                </div>
              </div>
            </div>

            {/* right side */}
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
                <div className="flex flex-col w-full">
                  <MenuBox>
                    <div className="text-xs">LEUT. CHRYSE BASIN</div>
                  </MenuBox>
                  <MenuBox>
                    <div className="text-xs"> Rank</div>
                  </MenuBox>
                  <MenuBox>asd</MenuBox>
                  <MenuBox>asd</MenuBox>
                </div>
              </div>
              <TextBlock>RED LANDING</TextBlock>
              <ScrollBox className="max-h-56">
                <p className="text-sm mb-4 text-[#5fec52]">
                  <p className="text-blue-400">
                    ...DOWNLOADING TRANSMISSION...
                  </p>
                  <br />
                  Welcome to MARS, COMMANDER.
                  <br />
                  <br />
                  We have just received a distress call from one of our MINING
                  COLONIES deep in the CHRYSE BASIN. The message was very broken
                  up, but as we understand it, the COLONY is under attack by
                  those damn ALIENS!
                  <br />
                  <br />
                  There is no time to lose. We are sending you and a small team
                  of TROOPERS to find out what has happened.
                </p>
              </ScrollBox>
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
        </div>
      </MenuBox>
    </div>
  );
};

export default Menu;
