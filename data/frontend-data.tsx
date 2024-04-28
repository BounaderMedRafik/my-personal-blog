import MDXbullet from "@/components/(MDXcomponents)/MDXbullet";
import { MDXcodeBlock } from "@/components/(MDXcomponents)/MDXcodeBlock";

export const FrontData = [
  {
    frontid: 0,
    name: "Hover animation using tailwind",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio nemo velit exercitationem ullam aperiam consequuntur.",
    videoURL:
      "https://videos.pexels.com/video-files/2278095/2278095-hd_1920_1080_30fps.mp4",
    content: (
      <div>
        <div></div>
        <div>
          <MDXcodeBlock
            lang="jsx"
            code={`yes yes
            `}
          />
        </div>
        <div>
          <MDXbullet
            data={["Tailwind", "Framer motion", "Next Js"]}
            heading="My Tech Stack"
          />
        </div>
      </div>
    ),
  },
];
