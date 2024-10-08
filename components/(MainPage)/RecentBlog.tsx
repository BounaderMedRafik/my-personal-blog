import React from "react";
import Link from "next/link";
import { blogsData } from "@/data/blogs-data";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
const RecentBlog = () => {
  const blogs = blogsData.slice(-4);
  return (
    <div className="mb-96 mt-10">
      <div>
        <div className="text-xl font-semibold flex items-center justify-between">
          Recent Blogs
          <div>
            <a href="/blogs">
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
        <>
          <div className="mt-2 grid md:grid-cols-2 grid-cols-1 ">
            {blogs.map((item, index) => (
              <div key={index}>
                <Blog
                  title={item.title}
                  desc={item.desc}
                  image={item.image}
                  link={`/blogs/${item.blogid}`}
                />
              </div>
            ))}
          </div>
        </>
      </div>
    </div>
  );
};

interface BlogProps {
  title: String;
  desc: String;
  image: any;
  link: string;
}

const Blog: React.FC<BlogProps> = ({ title, desc, image, link }) => {
  return (
    <div>
      <div className="p-0.5 border-transparent border-2 hover:border-foreground/20 rounded-md transition-all ">
        <Link href={link}>
          <div className="p-1 bg-background overflow-hidden hover:opacity-90 transition-all group">
            <div className=" rounded-md overflow-hidden">
              <img
                className="w-full group-hover:scale-105 transition-all h-52 object-cover"
                src={image}
                alt={"picture"}
              />
            </div>
            <div className="mt-4 group-hover:pl-2 transition-all text-2xl font-semibold">
              {title}
            </div>
            <div className="mt-2 text-sm  line-clamp-2 opacity-75 pl-2 ">
              {desc}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default RecentBlog;
