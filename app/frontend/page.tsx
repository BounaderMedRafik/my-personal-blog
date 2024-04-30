"use client";
import React, { useState } from "react";
import { FrontData } from "@/data/frontend-data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
const categories = ["All", "Tailwindcss", "Framer Motion"];

const FrontEndpage = () => {
  const [category, setCategory] = useState("All");
  return (
    <div className="mt-10">
      <div className="text-5xl font-bold">Frontend projects</div>
      <div className="mt-2 font-light opacity-80">
        gain exprience and knowledge by navigating in this high qualified
        projects.
      </div>
      <div>
        <div className="my-2">
          <div className="flex items-center gap-0.5">
            {categories.map((item, index) => (
              <div key={index}>
                <Button
                  onClick={() => setCategory(item)}
                  className={cn(
                    "hover:invert transition-all",
                    category == item ? "invert" : null
                  )}
                  variant={"outline"}
                  size={"sm"}
                >
                  {item}
                </Button>
              </div>
            ))}
          </div>
        </div>{" "}
      </div>
      <div className="">
        {FrontData.map((item, index) =>
          category == item.category || category == "All" ? (
            <div key={index}>
              <FrontTemp title={item.name} link={item.frontid} />
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

const FrontTemp = ({ title, link }: { title: string; link: number }) => {
  return (
    <Link href={`/frontend/${link}`}>
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
    </Link>
  );
};

export default FrontEndpage;
