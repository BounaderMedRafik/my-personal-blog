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
import { MDXcodeBlock } from "@/components/(MDXcomponents)/MDXcodeBlock";
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
          <div>
            <ShareButtonLink link={front.frontid} />
          </div>
          <div>{front.name}</div>
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
            <Link href={`/blogs/${linkBefor}`}>
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
