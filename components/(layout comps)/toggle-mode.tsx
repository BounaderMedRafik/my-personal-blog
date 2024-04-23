"use client";
import { useTheme } from "next-themes";
import React from "react";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
const ToggleMode = () => {
  const { setTheme } = useTheme();

  return (
    <div>
      <TooltipProvider delayDuration={10}>
        <Tooltip>
          <TooltipTrigger>
            <div className="hidden dark:flex">
              <Button
                onClick={() => setTheme("light")}
                size={"icon"}
                variant={"link"}
              >
                <Sun size={12} />
              </Button>
            </div>
            <div className="flex dark:hidden">
              <Button
                onClick={() => setTheme("dark")}
                size={"icon"}
                variant={"link"}
              >
                <Moon size={12} />
              </Button>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <div className="hidden dark:flex">Light Mode</div>
            <div className="flex dark:hidden">Dark Mode</div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default ToggleMode;
