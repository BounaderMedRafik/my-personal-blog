import React from "react";
import Image from "next/image";
const MyLogo = () => {
  return (
    <a href="/" className="group opacity-50 hover:opacity-100 transition-all">
      <div className="w-full">
        <div className="text-xs opacity-0 group-hover:opacity-100 transition-all">
          click to access Menu
        </div>
        <Image
          className="w-full dark:invert mt-2"
          width={1}
          height={"1"}
          src={"/BOUNADER-MOHAMED-RAFIK.svg"}
          alt="Bounader med rafik"
        />
      </div>
    </a>
  );
};

export default MyLogo;
