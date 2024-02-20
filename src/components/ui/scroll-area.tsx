"use client";

import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import { cn } from "../../lib/utils";
import { MenuBox } from "../MenuBox";

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    type="always"
    className={cn("relative", className)}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit] ">
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar /* className="h-[80%] self-center my-5" *//>
    <ScrollAreaPrimitive.Corner>
      <div className="relative h-4 w-4 border border-red-600"></div>
    </ScrollAreaPrimitive.Corner>
  </ScrollAreaPrimitive.Root>
));
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = "vertical", ...props }, ref) => (
  <div>
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    // forceMount
    className={cn(
      "flex touch-none select-none transition-colors bg-black",
      orientation === "vertical" &&
        "h-full w-4 border-2 p-[2px] border-red-600",
      orientation === "horizontal" &&
        "h-2.5 flex-col border-t p-[3px]",
      className
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 bg-red-600 bg-black" />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
  </div>
));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

export { ScrollArea, ScrollBar };
