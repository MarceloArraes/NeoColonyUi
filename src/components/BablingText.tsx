"use client";
import React, { useEffect, useRef } from "react";
import { MenuBox } from "./MenuBox";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";

interface BablingTextProps {
  text: string;
}

// maybe use a random to get random characters
// thing in a cartel of animated things to do with the string like in the original darkcolony
// Have a possible counter with some randoness
//
const BablingText = ({ text }: BablingTextProps) => {
  const baseText = text;
  const count = useMotionValue(0);
  //   const playedNumbers = useRef(new Set()).current;

  // create random array of characters or numbers
  // present the text content in two rows
  // paint it green with opacity

  useEffect(() => {
    const controls = animate(count, baseText.length, {
      type: "tween",
      duration: baseText.length / 10,
      ease: "easeInOut",

      //   delay: delay,
    });
    return controls.stop;
  }, [baseText.length, count]);

  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest)
  );

  return (
    <MenuBox>
      <motion.span>{displayText}</motion.span>
    </MenuBox>
  );
};

export default BablingText;
