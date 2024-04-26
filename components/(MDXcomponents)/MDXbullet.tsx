import React from "react";

const MDXbullet = ({
  heading,
  data,
  bulletless,
}: {
  heading: string;
  data: React.ReactNode[];
  bulletless?: boolean;
}) => {
  return (
    <div className="pl-10 my-10">
      <div className="font-semibold text-lg">+ {heading}</div>
      <div className="mt-3">
        {data.map((item, index) => (
          <div className="group px-5 cursor-default my-5" key={index}>
            <span className="mr-2 group-hover:mr-3 group-hover:text-primary transition-all">
              {bulletless ? null : "•"}
            </span>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MDXbullet;
