"use client";
import { MenuBox } from "@/components/MenuBox";
import { TextBlock } from "@/components/TextBlock";
import { Button } from "@/components/ui/button";
import { ScrollBox } from "@/components/ScrollBox";
import Image from "next/image";
import React, { useEffect } from "react";
import useSound from "use-sound";
import { ChevronUp } from "lucide-react";
// import enteringPage from "../../../public/sounds/enteringPage.mp3";
// import enteringPage from "sounds/enteringPage.mp3";
import TextAnim from "@/components/TextAnim";

const Menu = () => {
  const [play] = useSound("/sounds/enteringPage.mp3", { volume: 0.5 });
  useEffect(() => {
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
                    priority
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
                      <div className="text-xs flex justify-center">
                        <MenuBox className="flex flex-row">
                          Rank
                          <ChevronUp color="#19aabe" strokeWidth={1.25} />
                        </MenuBox>
                      </div>
                    </MenuBox>
                    <MenuBox>asd</MenuBox>
                    <MenuBox>asd</MenuBox>
                  </div>
                </div>
                <TextBlock>RED LANDING</TextBlock>

                <ScrollBox className="w-96 h-60 text-left p-3 pr-5">
                  <span className="text-sm mb-4 text-green-50 ">
                    <TextAnim
                      text="...DOWNLOADING TRANSMISSION..."
                      className="text-blue-600"
                    />
                    <br />
                    <br />
                    <TextAnim text="Welcome to" delay={3} />
                    <TextAnim
                      text=" MARS, COMMANDER."
                      className="text-yellow-500"
                      delay={4}
                    />
                    <br />
                    <br />
                    <TextAnim
                      text="We have just received a distress call from one of our "
                      delay={5}
                    />
                    <TextAnim
                      text="MINING COLONIES "
                      delay={11}
                      className="text-yellow-500"
                    />
                    <TextAnim text="deep in the " delay={12} />
                    <TextAnim
                      text="CHRYSE BASIN"
                      delay={13}
                      className="text-yellow-500"
                    />
                    <TextAnim
                      text=". The
                      message was very broken up, but as we understand it, the "
                      delay={14}
                    />
                    <TextAnim
                      text="COLONY "
                      delay={19}
                      className="text-yellow-500"
                    />
                    <TextAnim
                      text="is under attack by those damn "
                      delay={20}
                    />
                    <TextAnim
                      text="ALIENS!"
                      delay={22}
                      className="text-yellow-500"
                    />
                    <br />
                    <br />
                    <TextAnim
                      text="There is no time to lose. We are sending you and a small
                      team of "
                      delay={23}
                    />
                    <TextAnim
                      text="TROOPERS "
                      delay={28}
                      className="text-yellow-500"
                    />
                    <TextAnim
                      text="to
                      find out what has happened."
                      delay={29}
                    />
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
