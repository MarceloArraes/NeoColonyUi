"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import CursorBlinker from "./CursorBlinker";
import { useEffect, useRef } from "react";
import useSound from "use-sound";

interface TextAnimProps {
  // children?: string | ReactNode;
  text: string;
  className?: string;
  delay?: number;
  // showBlink?: boolean;
}

export default function TextAnim({
  text,
  className,
  delay = 0,
}: // showBlink = false,
TextAnimProps) {
  const [play] = useSound("/sounds/singleTypewrite-trimmed.mp3", {
    volume: 0.5,
  });
  const baseText = text;
  const count = useMotionValue(0);
  const playedNumbers = useRef(new Set()).current;
  // if (!children) return;
  useEffect(() => {
    const controls = animate(count, baseText.length, {
      type: "tween",
      duration: baseText.length / 10,
      ease: "easeInOut",
      delay: delay,

      onUpdate: (latest) => {
        const currentIndex = Math.floor(latest) % baseText.length;

        if (!playedNumbers.has(currentIndex)) {
          play();
          playedNumbers.add(currentIndex);
        }
      },
    });
    return controls.stop;
  }, [baseText.length, count, delay, play, playedNumbers]);

  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest)
  );

  return (
    <span className="text-green-50">
      <motion.span className={`${className}`}>{displayText}</motion.span>
      <CursorBlinker />
    </span>
  );
}
