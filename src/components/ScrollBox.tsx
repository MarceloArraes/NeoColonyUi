import React, { ReactNode } from "react";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

interface ScrollBoxProps {
  children?: ReactNode;
  className?: string;
}

export const ScrollBox = ({ children, className }: ScrollBoxProps) => {
  return (
    <ScrollArea className={`${className} h-56`}>
      {/* <div
        className={
          className +
          `bg-black border-[1px] border-stone-400 
        -border-offset-2 justify-center items-center text-center
         border-l-stone-400`
        }
      > */}
      {children}
      {/* </div> */}
    </ScrollArea>
  );
};

export const ScrollBoxExample = ({ children, className }: ScrollBoxProps) => {
  return (
    <ScrollArea className={`${className} h-56 w-24`}>
      <div>
        <p>
          Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
          ipsumLorem ipsumLorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem
          ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum Lorem ipsumLorem
          ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
          ipsum
        </p>
        {children}
      </div>
    </ScrollArea>
  );
};
