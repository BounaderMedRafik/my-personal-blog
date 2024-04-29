import React from "react";
import Image from "next/image";
import mypicture from "@/public/bounadermedrafik.jpeg";
import RecentProjects from "./RecentProjects";
import RecentBlog from "./RecentBlog";
const HeroSec = () => {
  return (
    <div className="font-light">
      <div className="flex justify-center">
        <img src="/favic.png" className="w-14 invert dark:invert-0 " />
      </div>
      <div className="w-full">
        <AboutMe />
      </div>
      <div className="w-full">
        <RecentProjects />
      </div>
      <div>
        <RecentBlog />
      </div>
    </div>
  );
};

const AboutMe = () => {
  return (
    <>
      <div className="mt-10 w-full  flex items-center gap-5 ">
        <Image
          width={50}
          height={50}
          className="rounded-full "
          alt="my profile pic"
          src={mypicture}
        />
        <div>
          <div className="text-sm font-semibold">Bounader Med Rafik</div>
          <div className="text-xs">Front-End developper</div>
        </div>
      </div>

      <div className="mt-10">
        <div className="text-xl font-semibold">About Me?</div>
        <div className="mt-2">
          I&apos;m Bounader Med Rafik, a 19-year-old designer and web developer.
          I&apos;ve spent four years working on personal design projects,
          fueling my passion for creativity. In addition, I have two years of
          experience in web development. When I&apos;m not immersed in pixels
          and code, you can find me hiking in nature, finding inspiration in the
          great outdoors. I&apos;m excited to leave my mark in the world of
          design and web development!
        </div>
      </div>

      <div className="mt-10">
        <div className="text-xl font-semibold">What is this?</div>
        <div className="mt-2">
          In this blog post, we not only scratch the surface of these front-end
          concepts but also provide practical tips, tricks, and resources to
          help you master them. Whether you&apos;re a seasoned developer looking
          to expand your skillset or a curious beginner eager to embark on a web
          development journey, this blog post promises to be your ultimate guide
          to front-end magic.
        </div>
      </div>

      <div className="mt-10">
        <ThuggishRuggish />
      </div>
    </>
  );
};

const ThuggishRuggish = () => {
  return (
    <div>
      <div className="block dark:hidden">
        <Image
          className="w-full"
          width={5}
          height={5}
          alt="thuggishRuggishBone"
          src={"/TuggishRuggish.svg"}
        />
      </div>
      <div className="hidden dark:block">
        <Image
          className="w-full"
          width={5}
          height={5}
          alt="thuggishRuggishBone"
          src={"/TuggishRuggishWhite.svg"}
        />
      </div>
    </div>
  );
};

export default HeroSec;
