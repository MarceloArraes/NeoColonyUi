import React, { ReactNode } from "react";

interface MenuBoxProps {
  children: ReactNode;
  className?: string;
}

export const MenuBox = ({ children, className }: MenuBoxProps) => {
  return (
    <div className="bg-stone-600">
      <div
        className={
          className +
          `bg-black border-[1px] border-stone-400 
        -border-offset-2 justify-center items-center text-center
         border-l-stone-400`
        }
      >
        {children}
      </div>
    </div>
  );
};
