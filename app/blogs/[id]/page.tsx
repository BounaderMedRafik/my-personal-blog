"use client";
import NotFoundPage from "@/app/not-found";
import MDXdescription from "@/components/(MDXcomponents)/MDXdescription";
import MDXimage from "@/components/(MDXcomponents)/MDXimage";
import MDXmainTitle from "@/components/(MDXcomponents)/MDXmainTitle";
import { Button } from "@/components/ui/button";
import { blogsData } from "@/data/blogs-data";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Repeat2 } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function BlogPage({
  params,
}: {
  params: {
    id: number;
  };
}) {
  const id = params.id;
  const blog = blogsData[id];
  if (!blog) {
    return <NotFoundPage />;
  } else {
    return (
      <div>
        <div>
          <BlogNavigation linkID={blog.blogid} />
        </div>
        <div>
          <ShareButtonLink link={blog.blogid} />
        </div>
        <div>
          <div>
            <MDXimage src={blog.image} alt={blog.title} />
          </div>
        </div>
        <div className="">
          <MDXmainTitle title={blog.title} />
        </div>

        <div>
          <MDXdescription heading="About">{blog.desc}</MDXdescription>{" "}
        </div>

        <div>{blog.content}</div>
      </div>
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

        {linkAfter > blogsData.length - 1 ? null : (
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
  const textToCopy = `http://localhost:3000/blogs/${link}`;

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
            {copySuccess ? "copied" : "copy"}
          </Button>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
