import { NextURL } from "next/dist/server/web/next-url";
import Image from "next/image";
import React, { useEffect } from "react";
import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion";

const Moon = () => {
  const x = useMotionValue(0);

  const controls = useAnimation();
  useEffect(() => {
    controls.start({
      // x: 75,
      backgroundPosition: ["0% 50%", "100% 50%"],
      // transition: { duration: 2, repeat: Infinity, ease: "backInOut" },
      transition: { duration: 10, repeat: Infinity, ease: "linear" },
    });
  }, [controls]);

  const backgroundPosition = useTransform(
    x,
    [0, 0],
    ["left center", "right center"]
  );

  return (
    <div className="m-20 h-20 w-20 rounded-full overflow-hidden outline outline-red-50">
      <motion.div
        className="z-20 h-96 w-full outline outline-red-50 bg-[url('https://svs.gsfc.nasa.gov/vis/a000000/a004700/a004720/lroc_color_poles_1k.jpg')]"
        style={{
          // backgroundPosition,
          backgroundSize: "auto 100%",
          boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
          // objectFit: "cover",
          backgroundRepeat: "repeat-x",
        }}
        animate={controls}
      ></motion.div>
    </div>
  );
};

export default Moon;
