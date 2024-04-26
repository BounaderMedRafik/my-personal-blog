import { ArrowBigRight } from "lucide-react";
import React, { FC } from "react";

interface MDXmainTitleProps {
  title: string;
}

const MDXmainTitle: FC<MDXmainTitleProps> = ({ title }) => {
  return (
    <div className="text-5xl mb-10 mt-5 hover:text-primary cursor-default transition-all transition-alls font-bold flex items-center gap-2">
      <div>
        <span className="mr-2">✳</span>
        {title}
      </div>
    </div>
  );
};

export default MDXmainTitle;
