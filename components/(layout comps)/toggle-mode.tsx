"use client";
import { useTheme } from "next-themes";
import React from "react";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";

const ToggleMode = () => {
  const { setTheme } = useTheme();

  return (
    <div>
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
        <Button onClick={() => setTheme("dark")} size={"icon"} variant={"link"}>
          <Moon size={12} />
        </Button>
      </div>
    </div>
  );
};

export default ToggleMode;
