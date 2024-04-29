"use client";
import React from "react";
import { FrontData } from "@/data/frontend-data";
import Link from "next/link";
import { VideoFollowingPointer } from "@/components/(providers)/VideoFollowingPointer";
import { ArrowRight } from "lucide-react";
const page = () => {
  return (
    <div className="mt-10">
      <div className="text-5xl font-bold">Frontend projects</div>
      <div className="mt-2 font-light opacity-80">
        gain exprience and knowledge by navigating in this high qualified
        projects.
      </div>
      <div className="mt-5">
        {FrontData.map((item, index) => (
          <div key={index}>
            <FrontTemp
              title={item.name}
              link={item.frontid}
              video={item.videoURL}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const FrontTemp = ({
  title,
  link,
  video,
}: {
  title: string;
  link: number;
  video: string;
}) => {
  return (
    <Link href={`/frontend/${link}`}>
      <VideoFollowingPointer src={video}>
        <div className="border-b border-b-foreground/50 group hover:invert transition-all">
          <div className="w-full flex items-center justify-between group-hover:px-10 transition-all px-2 py-4 bg-background">
            <div>{title}</div>
            <div>
              <ArrowRight
                className="opacity-0 group-hover:opacity-100 transition-all"
                size={15}
              />
            </div>
          </div>
        </div>
      </VideoFollowingPointer>
    </Link>
  );
};

export default page;
