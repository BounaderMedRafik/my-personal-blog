"use client";
import { ArrowRight, ArrowUpRight, Link2 } from "lucide-react";
import Link from "next/link";
import { FrontData } from "@/data/frontend-data";
import { Button } from "../ui/button";

const RecentProjects = () => {
  return (
    <div className="mt-10 ">
      <div className="text-xl font-semibold flex items-center justify-between">
        Recent Blogs
        <div>
          <a href="/frontend">
            <Button size={"sm"} variant={"link"}>
              <div className="flex items-center gap-2">
                Check All
                <div>
                  <ArrowRight size={10} />
                </div>
              </div>
            </Button>
          </a>
        </div>
      </div>
      <div className="mt-2">
        {FrontData.map((item, index) => (
          <div key={index}>
            <ProjectTemp
              name={item.name}
              link={`http://localhost:3000/frontend/${item.frontid}`}
            />
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
