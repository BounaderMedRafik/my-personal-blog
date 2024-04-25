import React from "react";
import Link from "next/link";
import { BlogFollowerPointerCard } from "../(providers)/BlogFollowingPointer";
import { ArrowUpRight } from "lucide-react";
const blogs = [
  {
    title: "Tailwind is great",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde voluptate ipsa cupiditate error culpa ea.",
    image:
      "https://simbyone.com/content/images/2023/04/Tailwind_covertailwind_cover.png",
  },
  {
    title: "shadcn/uiun forbidden",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde voluptate ipsa cupiditate error culpa ea.Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde voluptate ipsa cupiditate error culpa ea.Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde voluptate ipsa cupiditate error culpa ea.Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde voluptate ipsa cupiditate error culpa ea.",
    image: "https://reffect.co.jp/assets/shadcn-ui.png",
  },
  {
    title: "Tailwind is great",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde voluptate ipsa cupiditate error culpa ea.",
    image:
      "https://simbyone.com/content/images/2023/04/Tailwind_covertailwind_cover.png",
  },
  {
    title: "shadcn/uiun forbidden",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde voluptate ipsa cupiditate error culpa ea.Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde voluptate ipsa cupiditate error culpa ea.Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde voluptate ipsa cupiditate error culpa ea.Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde voluptate ipsa cupiditate error culpa ea.",
    image: "https://reffect.co.jp/assets/shadcn-ui.png",
  },
];

const RecentBlog = () => {
  return (
    <div className="mb-96 mt-10">
      <div>
        <div className="text-xl font-semibold">Recent Blogs</div>
        <BlogFollowerPointerCard>
          <div className="mt-2 grid md:grid-cols-2 grid-cols-1 ">
            {blogs.map((item, index) => (
              <div key={index}>
                <Blog title={item.title} desc={item.desc} image={item.image} />
              </div>
            ))}
          </div>
        </BlogFollowerPointerCard>
      </div>
    </div>
  );
};

interface BlogProps {
  title: String;
  desc: String;
  image: any;
}

const Blog: React.FC<BlogProps> = ({ title, desc, image }) => {
  return (
    <div>
      <div className="p-0.5 border-transparent border-2 hover:border-foreground/20 rounded-md transition-all ">
        <Link href="/" className="cursor-none">
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
