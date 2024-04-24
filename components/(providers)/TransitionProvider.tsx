"use client";
import React from "react";
import { AnimatePresence, calcLength, motion, Spring } from "framer-motion";
import { Code, Loader, LoaderCircle } from "lucide-react";
import Image from "next/image";
const TransitionProvider = ({ children }: any) => {
  const transitionSpringPhysics: Spring = {
    type: "spring",
    mass: 0.2,
    stiffness: 80,
    damping: 10,
  };

  return (
    <div>
      <AnimatePresence mode="wait">
        <motion.div>
          <motion.div
            style={{
              position: "fixed",
              width: "100vw",
              zIndex: 1000,
              bottom: 0,
            }}
            className="bg-red-500"
            transition={transitionSpringPhysics}
            animate={{ height: "0vh" }}
            exit={{ height: "100vh" }}
          />

          <motion.div
            style={{
              position: "fixed",
              width: "100vw",
              height: "100vh",
              zIndex: 1000,
              top: 0,
            }}
            className=" bg-background flex items-center justify-center"
            transition={transitionSpringPhysics}
            initial={{ height: "100vh" }}
            animate={{ height: "0vh", transition: { delay: 1 }, opacity: 0 }}
          >
            <div>
              <LoaderCircle className="animate-spin duration-1000" />
            </div>
          </motion.div>

          <div>{children}</div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TransitionProvider;
