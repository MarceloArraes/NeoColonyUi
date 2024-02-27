"use client";

import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import { cn } from "../../lib/utils";
// import { MenuBox } from "../MenuBox";

// window.scrollTo(0,document.body.scrollHeight);

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => {
  const viewportRef = React.useRef(null);

  React.useEffect(() => {
    const scrollArea = viewportRef.current;
    if (!scrollArea) return;

    const observer = new MutationObserver(() => {
      scrollArea.scrollTop = scrollArea.scrollHeight;
    });

    observer.observe(scrollArea, {
      childList: true, // Observe direct children additions or removals
      subtree: true, // Observe all descendants
      attributes: false,
      characterData: true, // Observe text changes
    });

    return () => observer.disconnect(); // Cleanup observer on component unmount
  }, []); // Empty dependency array ensure
  return (
    <ScrollAreaPrimitive.Root
      ref={ref}
      type="always"
      className={cn("relative", className)}
      id="scrollAreaId"
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        ref={viewportRef}
        className="h-full w-full rounded-[inherit]"
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      {/* <div className="outline outline-2 outline-purple-500 h-10" /> */}
      <ScrollBar className="h-[80%] self-center" />
      <ScrollAreaPrimitive.Corner>
        <div className="relative h-4 w-4 border border-red-600">XXX</div>
      </ScrollAreaPrimitive.Corner>
    </ScrollAreaPrimitive.Root>
  );
});
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = "vertical", ...props }, ref) => (
  <div>
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      ref={ref}
      orientation={orientation}
      className={cn(
        "flex touch-none select-none transition-colors bg-black",
        orientation === "vertical" &&
          "h-full w-4 border-2 p-[1px] pt-[2px] border-red-600",
        orientation === "horizontal" && "h-2.5 flex-col border-t p-[3px]",
        className
      )}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 bg-red-600 " />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  </div>
));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

export { ScrollArea, ScrollBar };
