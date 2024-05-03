import React from "react";
import {
  Code,
  EllipsisVertical,
  GithubIcon,
  Glasses,
  YoutubeIcon,
} from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ToggleMode from "./toggle-mode";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const socials = [
  {
    social: "Github",
    link: "https://github.com/BounaderMedRafik",
    icon: <GithubIcon size={12} />,
  },
  {
    social: "Youtube",
    link: "https://www.youtube.com/channel/UCj_nkiWsd2mACSBsI8pny4g",
    icon: <YoutubeIcon size={12} />,
  },
];

const links = [
  {
    name: "Blog",
    linkto: "/blogs",
    icon: <Glasses size={12} />,
  },
  {
    name: "Frontend",
    linkto: "/frontend",
    icon: <Code size={12} />,
  },
];

const MyNavigation = () => {
  return (
    <div className="fixed p-1 bg-background backdrop-blur-md border-foreground/50 border-[1px] rounded-full shadow-2xl shadow-foreground/30 z-50   bottom-10 right-1/2 translate-x-1/2">
      <div className="flex items-center">
        <div className="flex items-center gap-0.5">
          {links.map((item, index) => (
            <div key={index}>
              <a href={item.linkto}>
                <TooltipProvider delayDuration={10}>
                  <Tooltip>
                    <TooltipTrigger>
                      <Button size={"icon"} variant={"default"}>
                        {item.icon}
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent className="mb-1">
                      {item.name}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </a>
            </div>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger className="hover:rotate-90 transition-all">
              <Button variant={"link"} size={"icon"}>
                <EllipsisVertical size={15} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mb-1">
              <div className="flex items-center gap-0.5">
                {socials.map((item, index) => (
                  <div key={index}>
                    <Button asChild variant={"default"} size={"icon"}>
                      <a href={item.link} target="_blank">
                        {item.icon}
                      </a>
                    </Button>
                  </div>
                ))}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div>
          <ToggleMode />
        </div>
      </div>
    </div>
  );
};

export default MyNavigation;
