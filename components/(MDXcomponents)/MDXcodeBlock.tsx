import React from "react";
import { Prism } from "@mantine/prism";
import duotoneDark from "prism-react-renderer/themes/duotoneDark";
import duotoneLight from "prism-react-renderer/themes/duotoneLight";

export const MDXcodeBlock = ({ code }: { code: string }) => {
  return (
    <div>
      <div className="bg-[#2a2734] p-1 rounded-full w-fit flex gap-0.5">
        <div className="h-3 w-3 bg-primary rounded-full "></div>
        <div className="h-3 w-3 bg-secondary rounded-full "></div>
        <div className="h-3 w-3 bg-secondary rounded-full "></div>
      </div>
      <div className="border shadow-lg border-slate-50/20  transition-all cursor-default">
        <Prism
          getPrismTheme={(_theme, colorScheme) =>
            colorScheme === "dark" ? duotoneDark : duotoneLight
          }
          colorScheme="dark"
          withLineNumbers
          language="tsx"
        >
          {code}
        </Prism>
      </div>
    </div>
  );
};
