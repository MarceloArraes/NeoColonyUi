"use client";
import React, { useEffect, useRef } from "react";
import { MenuBox } from "./MenuBox";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import TextAnim from "./TextAnim";

interface BablingTextProps {
  text?: string | null;
  numberOfCharacters?: number;
  sizeOfString?: number;
  lines?: number;
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
const BablingText = ({
  sizeOfString = 5,
  lines,
  text = null,
}: BablingTextProps) => {
  const splitText1 = text?.slice(0, text.length / 2);
  const splitText2 = text?.slice(text.length / 2);

  const bablingText1 = splitText1 ?? makeRandomText(sizeOfString);
  const bablingText2 = splitText2 ?? makeRandomText(sizeOfString);

  return (
    <MenuBox className="text-green-400 flex flex-wrap">
      <motion.span
        initial={{ opacity: 1 }}
        animate={{ opacity: 0.5 }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="min-h-[1em] w-auto break-words"
        style={{ fontSize: "8px", lineHeight: "9px" }}
      >
        {bablingText1}
      </motion.span>
      <motion.span
        initial={{ opacity: 1 }}
        animate={{ opacity: 0.5 }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="min-h-[1em] w-auto break-words"
        style={{ fontSize: "8px", lineHeight: "9px" }}
      >
        {bablingText2}
      </motion.span>
    </MenuBox>
  );
};

export default BablingText;
