import React, { FC } from "react";

interface MDXimageProps {
  src: string;
  alt: string;
}
const MDXimage: FC<MDXimageProps> = ({ src, alt }) => {
  return (
    <div className="overflow-hidden rounded-md border border-foreground/50 hover:border-foreground/80 transition-all">
      <img
        className="w-full h-52 rounded-md transition-all object-cover hover:scale-105"
        src={src}
        alt={alt}
      />
    </div>
  );
};

export default MDXimage;
