import MDXbullet from "@/components/(MDXcomponents)/MDXbullet";
import { MDXcodeBlock } from "@/components/(MDXcomponents)/MDXcodeBlock";
import MDXdescription from "@/components/(MDXcomponents)/MDXdescription";
import MDXlineBreak from "@/components/(MDXcomponents)/MDXlineBreak";

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
];
