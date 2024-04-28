import MDXbullet from "@/components/(MDXcomponents)/MDXbullet";
import { MDXcodeBlock } from "@/components/(MDXcomponents)/MDXcodeBlock";
import MDXdescription from "@/components/(MDXcomponents)/MDXdescription";

/*  boiler plate
 
  {
  frontid: ,
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
    difficulty: "Easy",
    name: "Basic tooltip using Tailwindcss",
    desc: "A tooltip is a graphical user interface (GUI) element that provides additional information or guidance when interacting with an element in a user interface. When you hover over or tap on an element, a small text box or overlay appears, displaying relevant information about that element Tooltips are commonly used in various  contexts",
    videoURL:
      "https://pouch.jumpshare.com/preview/hCX7V7LluYQd9uRRU3D4M0oZa1Bm5zYg9TDWTAVVF_-7jrvWlaq2P5r0lD3PMQvnkiFTjwxzHdPmSjH81zAjA45n5e8HJMkl4MdioxVqk00RNglW2VLeKJ_z-DoQbdiedUDaRbOtYMCZt-20ei7Bim6yjbN-I2pg_cnoHs_AmgI.mp4",
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
          </div>
        </div>
      </>
    ),
  },
];
