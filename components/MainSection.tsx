import { ubuntu } from "@/data";
import Image from "next/image";
import React from "react";

type Props = {};

const MainSection = (props: Props) => {
  return (
    <main id="main" className="relative">
      <div className={`${ubuntu.className} md:mb-40 container mx-auto max-w-screen-xl`}>
        <h2 className="mb-16 text-center text-2xl font-bold text-veryDarkBlackBlue md:text-3xl">
          Designed for the future
        </h2>
        <div className="mb-40 grid grid-cols-1 md:mb-0 md:grid-cols-2">
          <div className="row-start-2 row-end-3 px-5 py-20 md:row-start-1 md:row-end-2 md:py-36 ">
            <h3 className="mb-4 text-xl font-semibold text-veryDarkBlackBlue">
              Introducing an extensible editor
            </h3>
            <p className="mb-10 text-sm font-light text-veryDarkDesaturatedBlue">
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>
            <h3 className="mb-4 text-xl font-semibold text-veryDarkBlackBlue">
              Robust content management
            </h3>
            <p className="text-sm font-light text-veryDarkDesaturatedBlue">
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you’re in full control.
            </p>
          </div>
          <div className="row-start-1 row-end-2">
            <Image
              src="/images/illustration-editor-desktop.svg"
              alt="img"
              width={600}
              height={600}
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
      {/* ELEMENTO MEDIO */}
      <div className="bottom-[520px] mb-20 grid grid-cols-1 overflow-hidden rounded-bl-[96px] rounded-tr-[96px] bg-veryDarkBlue md:mb-48 md:grid-cols-2">
        <div className="relative h-full w-full bg-cover">
          <Image
            src="/images/bg-pattern-circles.svg"
            alt="phones"
            width={1200}
            height={1200}
            className="absolute -top-20 object-cover object-right mix-blend-screen"
          />
        </div>
        <div>
          <Image
            src="/images/illustration-phones.svg"
            alt="phones"
            width={600}
            height={600}
            className="absolute -mt-48 md:left-[180px] md:top-[850px] object-cover object-center"
          />
        </div>
        <div className="px-8 pb-20 pt-48 md:py-20 md:col-start-2 md:col-end-3 md:pr-96">
          {/* <h3 className="mb-4 hidden text-xl font-semibold text-White md:block">
            Free, open, simple
          </h3>
          <p className="mb-10 hidden text-sm font-light text-white md:block">
            Blogr is a free and open source application backed by a large
            community of helpful developers. It supports features such as code
            syntax highlighting, RSS feeds, social media integration,
            third-party commenting tools, and works seamlessly with Google
            Analytics. The architecture is clean and is relatively easy to
            learn.
          </p> */}
          <h3 className="mb-4 text-xl font-semibold text-White">
            State of the Art Infrastructure
          </h3>
          <p className="text-sm font-light text-white">
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </div>
      </div>
      {/* FIN ELEMENTO MEDIO */}
      <div className={`${ubuntu.className} container mx-auto max-w-screen-xl`}>
        <div className="mb-20 grid grid-cols-1 md:grid-cols-2">
          <div className="row-start-1 row-end-2 mb-10 md:mb-0">
            <Image
              src="/images/illustration-laptop-desktop.svg"
              alt="img"
              width={600}
              height={600}
              className="object-cover object-center"
            />
          </div>
          <div className="px-5 md:py-12 md:pr-36">
            <h3 className="mb-4 text-xl font-semibold text-veryDarkBlackBlue">
              Free, open, simple
            </h3>
            <p className="mb-10 text-sm font-light text-veryDarkDesaturatedBlue">
              Blogr is a free and open source application backed by a large
              community of helpful developers. It supports features such as code
              syntax highlighting, RSS feeds, social media integration,
              third-party commenting tools, and works seamlessly with Google
              Analytics. The architecture is clean and is relatively easy to
              learn.
            </p>
            <h3 className="mb-4 text-xl font-semibold text-veryDarkBlackBlue">
              Powerful tooling
            </h3>
            <p className="text-sm font-light text-veryDarkDesaturatedBlue">
              Batteries included. We built a simple and straightforward CLI tool
              that makes customization and deployment a breeze, but capable of
              producing even the most complicated sites.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainSection;
