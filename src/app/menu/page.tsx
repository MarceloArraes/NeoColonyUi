"use client";
import { MenuBox } from "@/components/MenuBox";
import { TextBlock } from "@/components/TextBlock";
import { Button } from "@/components/ui/button";
import { ScrollBox } from "@/components/ScrollBox";
import Image from "next/image";
import React, { useEffect } from "react";
import useSound from "use-sound";
// import enteringPage from "../../../public/sounds/enteringPage.mp3";
import enteringPage from "sounds/enteringPage.mp3";
import TextAnim from "@/components/TextAnim";

const Menu = () => {
  const [play] = useSound("/sounds/enteringPage.mp3", { volume: 0.5 });
  useEffect(() => {
    // maybe take out this use effect..
    play();
  }, [play]);

  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-fixed bg-slate-800"
      //   style={{ backgroundImage: 'url("/your-background-image.jpg")' }}
    >
      <MenuBox>
        <div className="bg-black bg-opacity-75 text-white p-4 rounded-lg max-w-2xl w-full m-4">
          <MenuBox>
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
                    // onClick={}
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
                      height={160}
                      width={110}
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
                  <span className="text-sm mb-4 text-green-50 text-left p-2 pr-5">
                    <span className="text-blue-600">
                      ...DOWNLOADING TRANSMISSION...
                      <TextAnim />
                    </span>
                    <br />
                    <br />
                    <span className="text-yellow-500">
                      Welcome to MARS, COMMANDER.
                    </span>
                    <br />
                    <br />
                    We have just received a distress call from one of our{" "}
                    <span className="text-yellow-500">
                      MINING COLONIES
                    </span>{" "}
                    deep in the{" "}
                    <span className="text-yellow-500">CHRYSE BASIN</span>. The
                    message was very broken up, but as we understand it, the{" "}
                    <span className="text-yellow-500">COLONY</span> is under
                    attack by those damn
                    <span className="text-yellow-500"> ALIENS!</span>
                    <br />
                    <br />
                    There is no time to lose. We are sending you and a small
                    team of <span className="text-yellow-500">TROOPERS</span> to
                    find out what has happened.
                  </span>
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
          </MenuBox>
        </div>
      </MenuBox>
    </div>
  );
};

export default Menu;
