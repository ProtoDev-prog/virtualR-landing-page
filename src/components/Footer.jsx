import React from "react";
import { resourcesLinks, communityLinks, platformLinks } from "../constants";
const Footer = () => {
  return (
    <div className="px-[3%]">
      <div className="border-t border-gray-400 py-6 flex gap-3 max-md:flex-col">
        <div className="resource flex flex-col w-full gap-2 max-md:text-center max-md:mb-5">
          <h4 className="font-bold mb-2">Resources</h4>
          {resourcesLinks.map((ele) => (
            <a href={ele.href}>{ele.text}</a>
          ))}
        </div>
        <div className="resource flex flex-col w-full gap-2 max-md:text-center max-md:mb-5">
          <h4 className="font-bold mb-2">Platform</h4>
          {platformLinks.map((ele) => (
            <a href={ele.href}>{ele.text}</a>
          ))}
        </div>
        <div className="resource flex flex-col w-full gap-2 max-md:text-center max-md:mb-5">
          <h4 className="font-bold mb-2">Community</h4>
          {communityLinks.map((ele) => (
            <a href={ele.href}>{ele.text}</a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
