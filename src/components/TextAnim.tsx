"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import CursorBlinker from "./CursorBlinker";
import { useEffect, useRef } from "react";
import useSound from "use-sound";

export default function TextAnim() {
  const [play] = useSound("/sounds/singleTypewrite-trimmed.mp3", {
    volume: 0.5,
  });
  const baseText = "Dear Hiring Manager, " as string;
  const count = useMotionValue(0);
  const playedNumbers = useRef(new Set()).current;

  useEffect(() => {
    const controls = animate(count, baseText.length, {
      type: "tween", // Not really needed because adding a duration will force "tween"
      duration: 2,
      ease: "easeInOut",

      onUpdate: (latest) => {
        const currentIndex = Math.floor(latest) % baseText.length;

        // Check if play has already been called for this index
        if (!playedNumbers.has(currentIndex)) {
          play();
          // Mark this index as played
          playedNumbers.add(currentIndex);
        }
      },
      //   onPlay() {
      //     play();
      //   },
      //   onPlay: () => play(),
    });
    // play();
    return controls.stop;
  }, [count, play]);

  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest)
  );

  return (
    <span className="">
      <motion.span>{displayText}</motion.span>
      <CursorBlinker />
    </span>
  );
}
