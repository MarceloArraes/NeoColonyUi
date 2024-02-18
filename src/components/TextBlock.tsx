import React, { ReactNode } from "react";

interface TextBlockProps {
  children: ReactNode;
}

export const TextBlock = ({ children }: TextBlockProps) => {
  return (
    <div className="bg-stone-600">
      <div
        className="text-[#5fec52] font-bold rounded-md
       bg-black outline outline-[1px] outline-stone-400 
       -outline-offset-2 justify-center items-center text-center
        border-l-stone-400 leading-8 text-xl"
      >
        {children}
      </div>
    </div>
  );
};
