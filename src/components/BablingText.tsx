"use client";
import React, { useEffect, useRef } from "react";
import { MenuBox } from "./MenuBox";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import TextAnim from "./TextAnim";

interface BablingTextProps {
  text: string;
  numberOfCharacters: number;
  sizeOfString: number;
  lines: number;
}

function makeRandomText(length: number) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result +=
      characters.charAt(Math.floor(Math.random() * charactersLength)) +
      `${counter % 4 === 0 ? " " : ""}`;
    counter += 1;
  }
  return result;
}

// maybe use a random to get random characters
// thing in a cartel of animated things to do with the string like in the original darkcolony
// Have a possible counter with some randoness
//
const BablingText = ({ sizeOfString = 5, lines, text }: BablingTextProps) => {
  const bablingText = useRef(makeRandomText(sizeOfString));
  const bablingText2 = useRef(makeRandomText(sizeOfString));
  // const count = useMotionValue(0);
  //   const playedNumbers = useRef(new Set()).current;

  // create random array of characters or numbers
  // present the text content in two rows
  // paint it green with opacity

  // useEffect(() => {
  //   const controls = animate(count, bablingText.current.length, {
  //     type: "tween",
  //     duration: bablingText.current.length / 10,
  //     ease: "easeInOut",

  //     //   delay: delay,
  //   });
  //   return controls.stop;
  // }, [bablingText.current.length, count]);

  // const rounded = useTransform(count, (latest) => Math.round(latest));
  // const displayText = useTransform(rounded, (latest) =>
  //   bablingText.current.slice(0, latest)
  // );

  return (
    <MenuBox className="text-green-400 h-5 w-14">
      {/* <TextAnim
        className="-mb-1 p:0"
        style={{ fontSize: "8px", lineHeight: "9px" }}
        text={bablingText.current}
      ></TextAnim>
      <TextAnim
        className="-mb-1"
        style={{ fontSize: "8px" }}
        text={bablingText2.current}
      ></TextAnim> */}
      <span
        style={{ fontSize: "8px", lineHeight: "9px", marginBottom: "-2px" }}
        className="block"
      >
        ASSf51{" "}
      </span>
      <span style={{ fontSize: "8px", lineHeight: "9px" }} className="block">
        P06554A
      </span>
      {/* <motion.span>{text}</motion.span> */}
    </MenuBox>
  );
};

export default BablingText;
