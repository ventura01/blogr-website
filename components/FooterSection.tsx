import Image from "next/image";
import React from "react";

type Props = {};

const FooterSection = (props: Props) => {
  return (
    <footer
      id="footer"
      className="rounded-tr-[75px] bg-veryDarkBlackBlue py-16"
    >
      <div className="mx-auto grid max-w-screen-xl grid-cols-1 md:grid-cols-4">
        <div>
          <Image
            src="/images/logo.svg"
            width={75}
            height={75}
            alt="logo-footer"
            className="mx-auto mb-10"
          />
        </div>
        <div className="mb-10 flex flex-col items-center justify-center px-10 text-left text-white">
          <h4 className="mb-4 text-base font-semibold">Product</h4>
          <ul className="text-sm font-light">
            <li>Overview</li>
            <li>Pricing</li>
            <li>Marketplace</li>
            <li>Features</li>
            <li>Integrations</li>
          </ul>
        </div>
        <div className="mb-10 flex flex-col items-center justify-center px-10 text-left text-white">
          <h4 className="mb-4 text-base font-semibold">Company</h4>
          <ul className="text-sm font-light">
            <li>About</li>
            <li>Team</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="mb-10 flex flex-col items-center justify-center px-10 text-left text-white">
          <h4 className="mb-4 text-base font-semibold">Connect</h4>
          <ul className="text-sm font-light">
            <li>Contact</li>
            <li>Newsletter</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
