import React from "react";
import { features } from "../constants";
const Features = () => {
  return (
    <div className="py-16 px-[6%]">
      <h4 className="text-center text-base text-themeColor w-fit mx-auto bg-[#222] py-1 px-2 rounded-[25px]">
        Features
      </h4>
      <h1 className="text-7xl mt-8 text-center max-md:text-4xl">
        Easily build{" "}
        <span className="bg-gradient-to-tr from-themeColor to-themeColor2 text-transparent bg-clip-text">
          your code
        </span>
      </h1>
      <div className="grid grid-cols-3 mt-12 gap-10 max-md:grid-cols-1">
        {features.map((ele) => (
          <div className=" flex items-start gap-3">
            <i className="h-[50px] w-[50px] text-center leading-10 rounded-full text-6xl bg-green-500 p-1">
              {ele.icon}
            </i>
            <div className="content">
              <h3 className="text-xl">{ele.text}</h3>
              <p className="mt-5 text-gray-400">{ele.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
