import Image from "next/image";
import React from "react";

type Props = {};

const FooterSection = (props: Props) => {
  return (
    <footer id="footer" className="bg-veryDarkBlackBlue rounded-tr-[75px] py-16">
      <div className="grid grid-cols-1 max-w-screen-xl mx-auto md:grid-cols-4">
        <div>
          <Image
            src="/images/logo.svg"
            width={75}
            height={75}
            alt="logo-footer"
            className="mx-auto mb-10"
          />
        </div>
        <div className="text-white px-10 mb-10 flex text-left justify-center flex-col items-center">
          <h4 className="text-base font-semibold mb-4">Product</h4>
          <ul className="text-sm font-light">
            <li>Overview</li>
            <li>Pricing</li>
            <li>Marketplace</li>
            <li>Features</li>
            <li>Integrations</li>
          </ul>
        </div>
        <div className="text-white px-10 mb-10 flex text-left justify-center flex-col items-center">
          <h4 className="text-base font-semibold mb-4">Company</h4>
          <ul className="text-sm font-light">
            <li>About</li>
            <li>Team</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="text-white px-10 mb-10 flex text-left justify-center flex-col items-center">
          <h4 className="text-base font-semibold mb-4">Connect</h4>
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
