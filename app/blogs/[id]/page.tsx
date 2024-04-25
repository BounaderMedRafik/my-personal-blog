import NotFoundPage from "@/app/not-found";
import { blogsData } from "@/data/blogs-data";

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
        <div>blog name : {blog.title}</div>
        <div>blog desc: {blog.desc}</div>
        <div>blog idk : {blog.blogid}</div>
      </div>
    );
  }
}
