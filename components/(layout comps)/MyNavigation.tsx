import React from "react";
import MyLogo from "../(brand)/MyLogo";
import { GithubIcon, YoutubeIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Button } from "../ui/button";
import Search from "./Search";

const socials = [
  {
    social: "Github",
    link: "github.com",
    icon: <GithubIcon size={15} />,
  },
  {
    social: "Youtube",
    link: "yotube.com",
    icon: <YoutubeIcon size={15} />,
  },
];

const MyNavigation = () => {
  return (
    <div className="flex border border-black/10  fixed z-10 bg-gray-500/10 backdrop-blur-md shadow-xl shadow-black/5  rounded-none md:rounded-lg  top-5 w-full max-w-6xl left-1/2 -translate-x-1/2 bg-red-50 px-5 py-2 items-center justify-between">
      <div>
        <MyLogo />
      </div>
      <div>
        {" "}
        <Search />{" "}
      </div>
      <div className="flex items-center">
        {socials.map((index) => (
          <div key={index.social}>
            <TooltipProvider delayDuration={50}>
              <Tooltip>
                <TooltipTrigger>
                  <a href={index.link}>
                    <Button size={"icon"} variant={"link"}>
                      {index.icon}
                    </Button>
                  </a>
                </TooltipTrigger>
                <TooltipContent>{index.social}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyNavigation;
