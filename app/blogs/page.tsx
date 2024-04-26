import { ImageFollowingPointer } from "@/components/(providers)/ImageFollowingPointer";
import { blogsData } from "@/data/blogs-data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AllBlogspage() {
  return (
    <div className="mt-10">
      <div className="text-5xl font-bold">Blogs</div>
      <div className="mt-2 font-light opacity-80">
        Enhance your knowledge in front-end development by exploring various
        blogs and gaining valuable information.
      </div>
      <div className="mt-5">
        {blogsData.map((item, index) => (
          <div key={index}>
            <BlogTemp title={item.title} link={item.blogid} img={item.image} />
          </div>
        ))}
      </div>
    </div>
  );
}

const BlogTemp = ({
  title,
  link,
  img,
}: {
  title: string;
  link: number;
  img: string;
}) => {
  return (
    <Link href={`/blogs/${link}`}>
      <ImageFollowingPointer src={img}>
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
      </ImageFollowingPointer>
    </Link>
  );
};
