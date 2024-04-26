import { Star } from "lucide-react";
import React, { FC } from "react";

interface MDXdescriptionProps {
  children?: React.ReactNode;
  heading?: string;
}

const MDXdescription: FC<MDXdescriptionProps> = ({ children, heading }) => {
  return (
    <div className="my-2 ">
      <div className="text-xl drop-shadow-md font-semibold flex items-center gap-1">
        {heading ? <span className="mr-2 text-primary">♪</span> : null}
        {heading}
      </div>
      <div className="ml-10 mt-2">{children}</div>
    </div>
  );
};

export default MDXdescription;
