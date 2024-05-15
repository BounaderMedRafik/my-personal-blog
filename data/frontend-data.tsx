import MDXbullet from "@/components/(MDXcomponents)/MDXbullet";
import { MDXcodeBlock } from "@/components/(MDXcomponents)/MDXcodeBlock";
import MDXdescription from "@/components/(MDXcomponents)/MDXdescription";
import MDXlineBreak from "@/components/(MDXcomponents)/MDXlineBreak";
import MDXonelineCode from "@/components/(MDXcomponents)/MDXonelineCode";

/*  boiler plate
 
  {
  frontid: ,
  category :'Tailwindcss / Framer Motion',
  date: "",
  difficulty: "Easy / Medium / Hard" ,
  name: "",
  desc: "",
  videoURL: "",
  content: "",
  }


  
*/

export const FrontData = [
  {
    frontid: 0,
    date: "4/28/2024",
    category: "Tailwindcss",
    difficulty: "Easy",
    name: "Basic tooltip using Tailwindcss",
    desc: "A tooltip is a graphical user interface (GUI) element that provides additional information or guidance when interacting with an element in a user interface. When you hover over or tap on an element, a small text box or overlay appears, displaying relevant information about that element Tooltips are commonly used in various  contexts",
    videoURL: "/videos/01.mp4",
    content: (
      <>
        <div>
          <div>
            <MDXbullet
              heading="Tech Stack Used"
              data={["Tailwindcss", "HTML"]}
            />
          </div>
          <div>
            <MDXdescription heading="Code Provided" />
            <div className="mt-5">
              <MDXcodeBlock
                lang="jsx"
                code={`<div id="wrapper" class="flex h-screen w-full items-center justify-center bg-slate-50">
  <div class="group relative">
    <div class="absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 rounded-md border border-black/20 bg-slate-50 px-3 py-1 font-bold opacity-0 shadow-md transition-all group-hover:-translate-y-14 group-hover:opacity-100">Tooltip</div>
    <button class="relative z-10 rounded-md bg-red-500 px-4 py-2 text-slate-50 shadow-md transition-all hover:opacity-80">hover me</button>
  </div>
</div>
`}
              />
            </div>
            <MDXlineBreak />
          </div>
          <div className="mt-7">
            <MDXdescription heading="group utility">
              The <span className="text-primary">group</span> utility in
              Tailwind CSS allows you to style a child element based on the
              hover, focus, or other states of a parent element. This is
              particularly useful when you want to achieve effects that would
              typically require JavaScript or complex CSS selectors
            </MDXdescription>
          </div>
          <div className="mt-7">
            <MDXdescription heading="how to use group utility">
              To use the <span className="text-primary">group</span> utility,
              you need to define a "group" context using the .group class. This
              class doesn't apply any styles by itself but sets the stage for
              its children to respond to its states
            </MDXdescription>
          </div>
          <div className="mt-7">
            <MDXdescription heading="example">
              <div className="mt-7">
                <MDXcodeBlock
                  code={`<div class="group">
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Button
  </button>
  <p class="text-red-500 group-hover:text-green-500">
    This text will change color when the button is hovered over.
  </p>
</div>
`}
                  lang="tsx"
                />
              </div>
              <div className="mt-7">
                <MDXdescription>
                  In the example above, the {`<p>`} element will change its text
                  color to green when the button is hovered over, thanks to the
                  group-hover:text-green-500 class
                </MDXdescription>
              </div>
            </MDXdescription>
          </div>
        </div>
      </>
    ),
  },
  {
    frontid: 1,
    category: "Framer Motion",
    date: "4/30/2024",
    difficulty: "Medium",
    name: "Tabs Hover Animation",
    desc: "Utilizing Framer Motion, create dynamic hover animations for tabs that can be seamlessly implemented in various scenarios, such as button navigation or header links.",
    videoURL: "/videos/02.mp4",
    content: (
      <>
        <div>
          <MDXdescription heading="Initialize next14 project">
            <div className="mt-10">
              Easily initialize a next14 project with the following command:
              <div className="mt-3">
                <MDXonelineCode code="npx create-next-app@latest my-app" />
              </div>
            </div>
            <div className="mt-10">
              Now initialize a Framer Motion in your project with the following
              command:
              <div className="mt-3">
                <MDXonelineCode code="npm i framer-motion" />
              </div>
            </div>
          </MDXdescription>
        </div>

        <MDXlineBreak />
        <div className="mt-10">
          <MDXdescription heading="Create a button component">
            now we can create a button component that will be used in our
            animation.
            <div className="mt-3">
              <MDXcodeBlock
                code={`
const HoverAnimationTabs = ({ tabs }: { tabs: string[] }) => {
  
  return (
    <div className="flex items-center gap-2">
      {tabs.map((item, index) => (
        <div
          key={index}
          className="group relative px-3 py-1  cursor-pointer transition-all  text-sm "
        >
          <div className="relative z-10">{item}</div>

          {hovered === item && (
            <div
              className="absolute bg-slate-800 inset-0 rounded-md"
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default HoverAnimationTabs;`}
                lang="tsx"
              />
            </div>
          </MDXdescription>

          <div className="mt-10">
            <MDXdescription heading="Apply the Framer Motion">
              now we can use the Framer Motion library to create a simple hover
              animation for a button.
              <div className="mt-3">
                <MDXcodeBlock
                  lang="tsx"
                  code={`"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";

const HoverAnimationTabs = ({ tabs }: { tabs: string[] }) => {
  const [hovered, setHovered] = useState(tabs[0]);
  return (
    <div className="flex items-center gap-2">
      {tabs.map((item, index) => (
        <motion.div
          onHoverStart={() => setHovered(item)}
          key={index}
          className="group relative px-3 py-1  cursor-pointer transition-all  text-sm "
        >
          <div className="relative z-10">{item}</div>

          {hovered === item && (
            <motion.div
              layoutId="nav-item"
              className="absolute bg-slate-800 inset-0 rounded-md"
            ></motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default HoverAnimationTabs;`}
                />
              </div>
            </MDXdescription>
          </div>
        </div>
        <div className="mt-10">
          <MDXdescription heading="Usage of the component">
            we can use the component in our page as follows
            <div className="mt-3">
              <MDXcodeBlock
                lang="tsx"
                code={`import HoverAnimationTabs from "./components/HoverAnimationTabs";

const tabs = ["About", "Contacts", "Blogs"];

export default function Home() {
  return (
    <main className="h-screen w-full flex justify-center items-center bg-slate-950 text-slate-50 ">
      <HoverAnimationTabs tabs={tabs} />
    </main>
  );
}`}
              />
            </div>
          </MDXdescription>
        </div>
      </>
    ),
  },
  {
    frontid: 2,
    category: "Tailwindcss",
    date: "5/10/2024",
    difficulty: "Medium",
    name: "Discord shop Card Hover animation",
    desc: "Discover a new way to interact with the Discord Shop Card, featuring a captivating hover animation that brings the card to life. As you hover over the card, watch as it responds to your movements, creating a dynamic and engaging visual experience. This interactive feature adds a touch of excitement to your shopping experience, making it more enjoyable and memorable. Try it out now and see the Discord Shop Card in a whole new light!",
    videoURL: "/videos/03.webm",
    content: (
      <>
        <div>
          <MDXbullet heading="Tech Stack" data={["TailwindCSS", "HTML"]} />
        </div>
        <div>
          <MDXcodeBlock
            code={`<div id="page-container" class="flex h-screen w-full items-center justify-center bg-indigo-100">
  <div class="group h-full max-h-96 w-full max-w-72 overflow-hidden rounded-2xl shadow-lg duration-500 hover:-translate-y-3 hover:shadow-xl hover:shadow-black/60">
    <div class="h-[60%] w-full">
      <img class="h-full w-full object-cover object-center" src="https://media0.giphy.com/media/2zUn8hAwJwG4abiS0p/giphy.gif?cid=6c09b95234x5mzwama9j5a4o1xu1lqgg7pa53nh1dumfnhrx&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="" />
    </div>
    <div class="relative flex h-[40%] w-full flex-col items-start justify-between bg-gray-800 p-5 pb-8">
      <div class="text-3xl font-black text-slate-50">MeowCat</div>
      <div class="flex items-baseline gap-1">
        <div class="text-xl font-bold text-slate-50 transition-all duration-300 group-hover:opacity-0">$6.99</div>
        <div class="text-xs text-slate-50 opacity-75 transition-all duration-300 group-hover:opacity-0">$4.20 with <span class="font-bold italic">kisses</span></div>
      </div>
      <div class="pointer-events-none absolute -bottom-10 left-1/2 grid w-full -translate-x-1/2 grid-cols-5 gap-1 p-5 opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:bottom-0 group-hover:opacity-100">
        <button class="col-span-4 w-full rounded-lg bg-indigo-500 p-2 font-bold text-slate-50 transition-all hover:bg-indigo-400">Buy it now $6.99</button>
        <button class="col-span-1 flex w-full items-center justify-center rounded-lg bg-indigo-500 p-2 font-bold text-slate-50 transition-all hover:bg-indigo-400">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gift">
            <rect x="3" y="8" width="18" height="4" rx="1" />
            <path d="M12 8v13" />
            <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
            <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>
`}
            lang="tsx"
          />
        </div>
      </>
    ),
  },
];
