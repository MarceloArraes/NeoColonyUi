"use client";
import React, { ReactNode } from "react";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

interface ScrollBoxProps {
  children?: ReactNode;
  className?: string;
}

export const ScrollBox = ({ children, className }: ScrollBoxProps) => {
  return (
    <ScrollArea className={`${className} h-56`}>
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
