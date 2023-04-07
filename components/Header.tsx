import React from "react";
import NavBar from "./NavBar";
import ActionBtn from "./ActionBtn";
import { ubuntu, overpass } from "@/data";
import Image from "next/image";

type Props = {};

const Header = (props: Props) => {
  return (
    <header
      id="header"
      className="bg-gradient-to-tl mb-20 from-veryLightRed overflow-hidden to-lightRed rounded-bl-[75px] "
    >
     <div className="relative w-full h-full bg-cover">
      <Image
        src="/images/bg-pattern-intro-desktop.svg"
        alt="bg-image"
        width={1450}
        height={1450}
        className="absolute object-cover object-center top-32 -left-24 md:-left-56 md:-top-72 mix-blend-luminosity opacity-40"
      />
      <div className="container mx-auto z-50 max-w-screen-xl relative">
        <NavBar />
        <h1
          className={`${overpass.className} md:text-6xl text-2xl md:mb-14 mb-5 mt-16 text-center font-bold text-white`}
        >
          A modern publishig platform
        </h1>
        <p
          className={`${overpass.className} hyphens-auto text-xs md:text-base text-center mb-8 md:mb-14 font-light text-white`}
        >
          Grow your audince and build your online brand
        </p>
        <div className="flex gap-x-3 md:gap-x-6 md:pb-32 pb-32 justify-center">
          <ActionBtn
            text="Start for Free"
            className="px-4 py-1 bg-transparent text-sm md:text-base hover:bg-veryLightRed outline outline-1 outline-white text-white rounded-full active:bg-white active:text-lightRed"
          />
          <ActionBtn
            text="Learn More"
            className="px-4 py-1 bg-transparent text-sm md:text-base hover:bg-veryLightRed outline outline-1 outline-white text-white rounded-full active:bg-white active:text-lightRed"
          />
        </div>
      </div>
      </div>
    </header>
  );
};

export default Header;
