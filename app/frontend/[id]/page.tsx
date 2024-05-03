"use client";
import React, { useState } from "react";
import { FrontData } from "@/data/frontend-data";
import NotFoundPage from "@/app/not-found";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Repeat2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import MDXmainTitle from "@/components/(MDXcomponents)/MDXmainTitle";
import MDXdescription from "@/components/(MDXcomponents)/MDXdescription";
export default function FrontEndpage({
  params,
}: {
  params: {
    id: number;
  };
}) {
  const id = params.id;
  const front = FrontData[id];

  if (!front) {
    return <NotFoundPage />;
  } else {
    return (
      <>
        <div>
          <div>
            <BlogNavigation linkID={front.frontid} />
          </div>
          <div className="mt-5">
            <MyBrandStuff date={front.date} difficulty={front.difficulty} />
          </div>
          <div>
            <ShareButtonLink link={front.frontid} />
          </div>
          <div className="mt-5 text-6xl text-start font-semibold">
            <MDXmainTitle title={front.name} />
          </div>
          <div className="mt-2 opacity-75">
            <MDXdescription heading={front.name}>{front.desc}</MDXdescription>
          </div>
          <div className="mt-5  overflow-hidden rounded-md opacity-80 transition-all shadow border-foreground/20 border">
            <video className="" autoPlay muted loop src={front.videoURL} />
          </div>
          <div className="mt-7">{front.content}</div>
        </div>
      </>
    );
  }
}

const BlogNavigation = ({ linkID }: { linkID: number }) => {
  const linkBefor = linkID - 1;
  const linkAfter = linkID + 1;
  return (
    <div>
      <div
        className={cn(
          "flex items-center justify-between my-3",
          linkBefor < 0 ? "justify-end" : null
        )}
      >
        {linkBefor < 0 ? null : (
          <Button variant={"link"}>
            <Link href={`/frontend/${linkBefor}`}>
              <div className="flex items-center gap-2">
                <div>
                  <ChevronLeft size={10} />
                </div>
                <div>Previous</div>
              </div>
            </Link>
          </Button>
        )}

        {linkAfter > FrontData.length - 1 ? null : (
          <Button variant={"link"}>
            <Link href={`/blogs/${linkAfter}`}>
              <div className="flex items-center gap-2">
                <div>Next</div>
                <div>
                  <ChevronRight size={10} />
                </div>
              </div>
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
};

const ShareButtonLink = ({ link }: { link: number }) => {
  const [copySuccess, setCopySuccess] = useState(false);
  const textToCopy = `http://localhost:3000/frontend/${link}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopySuccess(true);
    } catch (error) {
      console.error("Failed to copy text: ", error);
    }
  };

  return (
    <div className="my-3 flex justify-center items-center">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant={"outline"} size={"sm"}>
            <div className="flex items-center gap-2">
              <div>Share Blog</div>
              <div>
                <Repeat2 size={15} />
              </div>
            </div>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <Button onClick={handleCopy} size={"sm"} variant={"link"}>
            {copySuccess ? "link copied" : "copy link"}
          </Button>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

const MyBrandStuff = ({
  date,
  difficulty,
}: {
  date: string;
  difficulty: string;
}) => {
  return (
    <div className="mt-5">
      <div className="flex items-center gap-2">
        <img src="/bounadermedrafik.jpeg" className="w-14 h-14 rounded-full" />
        <div>
          <div>Bounader Med Rafik</div>
          <div className="text-sm opacity-80 flex items-center gap-3">
            {date} •{" "}
            <div className="flex items-center gap-2">
              <div
                className={cn(
                  "h-3 w-3 rounded-full",
                  difficulty == "Easy"
                    ? "bg-green-500"
                    : difficulty == "Medium"
                    ? "bg-blue-500"
                    : difficulty == "Hard"
                    ? "bg-red-500"
                    : null
                )}
              ></div>
              {difficulty}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
