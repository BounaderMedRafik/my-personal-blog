// Core component that receives mouse positions and renders pointer and content

"use client";
import React, { useEffect, useState } from "react";

import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowUpLeft } from "lucide-react";

export const BlogFollowerPointerCard = ({
  children,
  className,
  title,
}: {
  children: React.ReactNode;
  className?: string;
  title?: string | React.ReactNode;
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
        {isInside && <FollowPointer x={x} y={y} title={title} />}
      </AnimatePresence>
      {children}
    </div>
  );
};

export const FollowPointer = ({
  x,
  y,
  title,
}: {
  x: any;
  y: any;
  title?: string | React.ReactNode;
}) => {
  return (
    <motion.div
      className="h-4 w-4 rounded-full absolute z-50"
      style={{
        top: y,
        left: x,
        pointerEvents: "none",
      }}
      initial={{
        rotate: 180,
        scale: 0.5,
      }}
      animate={{
        rotate: 0,
        scale: 1,
      }}
      exit={{
        rotate: 180,
        scale: 0.5,
      }}
    >
      <motion.div
        initial={{
          scale: 0.5,
          rotate: 180,
          opacity: 1,
        }}
        animate={{
          scale: 1,
          rotate: 0,
        }}
        exit={{
          scale: 0.5,
          rotate: 180,
        }}
        className={
          "p-10 md:block  hidden border-slate-50 text-slate-50 border-2  -mt-7 bg-accent/20 shadow-foreground/10 shadow-xl  backdrop-blur-sm   whitespace-nowrap min-w-max text-xs rounded-full"
        }
      >
        <ArrowUpLeft />
      </motion.div>
    </motion.div>
  );
};
