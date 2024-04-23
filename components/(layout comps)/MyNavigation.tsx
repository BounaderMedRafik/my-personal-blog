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
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ToggleMode from "./toggle-mode";

const socials = [
  {
    social: "Github",
    link: "github.com",
    icon: <GithubIcon size={15} />,
    bg: "#6e5494",
  },
  {
    social: "Youtube",
    link: "yotube.com",
    icon: <YoutubeIcon size={15} />,
    bg: "#FF0000",
  },
];

const links = [
  {
    name: "Blog",
    linkto: "/blog",
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
    <div className="fixed p-1 bg-background/50 backdrop-blur-md border-foreground/50 border-[1px] rounded-full shadow-2xl shadow-foreground/30   bottom-10 right-1/2 translate-x-1/2">
      <div className="flex items-center">
        <div className="flex items-center gap-0.5">
          {links.map((item, index) => (
            <div key={index}>
              <Link href={item.linkto}>
                <Button size={"icon"} variant={"default"}>
                  {item.icon}
                </Button>
              </Link>
            </div>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant={"link"} size={"icon"}>
                <EllipsisVertical size={15} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mb-1">
              <div className="flex items-center gap-0.5">
                {socials.map((item, index) => (
                  <div key={index}>
                    <Button
                      className="hover:opacity-75 transition-all"
                      style={{ backgroundColor: item.bg }}
                      variant={"default"}
                      size={"icon"}
                    >
                      {item.icon}
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
