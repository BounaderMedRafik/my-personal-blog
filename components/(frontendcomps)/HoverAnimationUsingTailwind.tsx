import React from "react";

const HoverAnimationUsingTailwind = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <button className="group rounded-lg border border-white bg-orange-500 px-8 py-2 text-xl text-slate-50 shadow-lg">
        <div>
          <div className="relative flex items-center gap-2">
            <div className="transition-all group-hover:mr-7">Hover Me</div>
            <div className="absolute right-0 opacity-0 transition-all group-hover:opacity-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-arrow-right"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default HoverAnimationUsingTailwind;
