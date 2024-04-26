"use client";
import { Check, Copy } from "lucide-react";
import React, { FC, useState } from "react";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
interface MDXonelineCodeProps {
  code: string;
}

const MDXonelineCode: FC<MDXonelineCodeProps> = ({ code }) => {
  const [copySuccess, setCopySuccess] = useState(false);
  const textToCopy = code;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopySuccess(true);
    } catch (error) {
      console.error("Failed to copy text: ", error);
    }
  };

  return (
    <div className="px-5  group pb-5 shadow-lg pt-2 relative bg-background text-foreground  rounded-md border border-foreground/40 ">
      <div className="flex mb-3 justify-between items-center border-b border-b-foreground/10 ">
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-full bg-foreground group-hover:bg-primary transition-all"></div>
          <div className="w-3 h-3 rounded-full bg-foreground group-hover:bg-primary transition-all"></div>
          <div className="w-3 h-3 rounded-full bg-destructive group-hover:bg-foreground transition-all"></div>
        </div>
        <div>
          <TooltipProvider delayDuration={10}>
            <Tooltip>
              <TooltipTrigger>
                <Button onClick={handleCopy} size={"icon"} variant={"link"}>
                  {copySuccess ? <Check size={10} /> : <Copy size={10} />}
                </Button>
              </TooltipTrigger>
              <TooltipContent>{copySuccess ? "Copied" : "Copy"}</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      <ScrollArea className="px-10 font-mono font-black pb-5  text-xl overflow-hidden">
        <span className="text-primary font-black mr-2 group-hover:mr-5 transition-all">{`~>`}</span>
        <span className="opacity-80 truncate text-foreground">{code}</span>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default MDXonelineCode;
