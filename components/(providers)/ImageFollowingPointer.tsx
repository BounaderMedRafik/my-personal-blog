// Core component that receives mouse positions and renders pointer and content

"use client";
import React, { useEffect, useState } from "react";

import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowUpLeft } from "lucide-react";

export const ImageFollowingPointer = ({
  children,
  className,
  src,
}: {
  children: React.ReactNode;
  className?: string;
  src?: string;
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ref = React.useRef<HTMLDivElement>(null);
  const [rect, setRect] = useState<DOMRect | null>(null);
  const [isInside, setIsInside] = useState<boolean>(false); // Add this line

  useEffect(() => {
    if (ref.current) {
      setRect(ref.current.getBoundingClientRect());
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (rect) {
      const scrollX = window.scrollX;
      const scrollY = window.scrollY;
      x.set(e.clientX - rect.left + scrollX);
      y.set(e.clientY - rect.top + scrollY);
    }
  };
  const handleMouseLeave = () => {
    setIsInside(false);
  };

  const handleMouseEnter = () => {
    setIsInside(true);
  };
  return (
    <div
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      style={{
        cursor: "none",
      }}
      ref={ref}
      className={cn("relative", className)}
    >
      <AnimatePresence>
        {isInside && <FollowPointer x={x} y={y} src={src} />}
      </AnimatePresence>
      {children}
    </div>
  );
};

export const FollowPointer = ({
  x,
  y,
  src,
}: {
  x: any;
  y: any;
  src?: string;
}) => {
  return (
    <motion.div
      className=" absolute z-50"
      style={{
        top: y,
        left: x,
        pointerEvents: "none",
      }}
      initial={{}}
      animate={{}}
      exit={{}}
    >
      <motion.div
        initial={{
          scale: 0.5,
          opacity: 1,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        exit={{
          scale: 0.5,
          opacity: 0,
        }}
        className={"min-w-max "}
      >
        <div className="relative">
          <img
            className="w-20 h-20 dark:invert absolute -left-10  -top-10"
            src="/pointinghand.svg"
            alt="macosCursor"
          />
          <img
            className="w-[300px] border-foreground/50  border h-[200px] rounded-md  object-cover"
            src={src}
            alt="picture"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};
