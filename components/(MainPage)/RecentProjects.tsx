"use client";
import { ArrowRight, ArrowUpRight, Link2 } from "lucide-react";
import Link from "next/link";
import { FollowerPointerCard } from "../(providers)/FollowingPointer";
import { BlogFollowerPointerCard } from "../(providers)/BlogFollowingPointer";
import { Button } from "../ui/button";

const recentProj = [
  {
    name: "Tailwind Scoll Effect",
    linkTo: "/tailwind-scroll-effect",
  },
  {
    name: "Next Js Image optimization",
    linkTo: "/next-image-optimization",
  },
];

const RecentProjects = () => {
  return (
    <div className="mt-10 ">
      <div className="text-xl font-semibold flex items-center justify-between">
        <div>Recent Projects</div>
      </div>
      <div className="mt-2">
        {recentProj.map((item, index) => (
          <div key={index}>
            <FollowerPointerCard
              title={
                <>
                  <div className="items-center gap-2 hidden lg:flex">
                    <div>bounaderblog.com{item.linkTo}</div>
                    <div>
                      <Link2 size={10} />
                    </div>
                  </div>
                </>
              }
            >
              <ProjectTemp name={item.name} link={item.linkTo} />
            </FollowerPointerCard>
          </div>
        ))}
      </div>
    </div>
  );
};

interface ProjectTempProps {
  name: String;
  link: any;
}

const ProjectTemp: React.FC<ProjectTempProps> = ({ name, link }) => {
  return (
    <div>
      <Link href={link}>
        <div className="w-full flex justify-between  group items-center hover:px-5 transition-all border-foreground/50 border-b bg-background  p-2">
          <div>{name}</div>
          <div className="bg-foreground text-xs   transition-all w-1 opacity-0  group-hover:opacity-100 group-hover:w-24 h-[1px]"></div>

          <div>
            <ArrowUpRight
              className="opacity-0 group-hover:opacity-100 transition-all"
              size={15}
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RecentProjects;
