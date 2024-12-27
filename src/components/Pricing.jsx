import React from "react";
import { pricingOptions } from "../constants";
import { CheckCircle2 } from "lucide-react";
const Pricing = () => {
  return (
    <div className="px-[3%] py-16 max-md:py-5">
      <h1 className="text-6xl text-center">Pricing</h1>
      <div className="pricing-cards mt-6 flex gap-6 max-md:flex-col">
        {pricingOptions.map((ele) => (
          <div className="cards flex-1 border border-gray-400 p-7 rounded-md">
            <h4 className="text-2xl mb-4">
              {ele.title}
              {ele.title == "Pro" && (
                <span className="bg-gradient-to-tr from-themeColor to-themeColor2 bg-clip-text text-transparent text-base">
                  {" "}
                  (Most Popular)
                </span>
              )}
            </h4>
            <h1 className="text-5xl mb-6">
              {ele.price}
              <span className="text-base text-gray-400">/Month</span>
            </h1>
            <ul className="flex flex-col gap-6 pb-16">
              {ele.features.map((items) => (
                <li className="flex items-center gap-2 text-xl">
                  <CheckCircle2 />
                  {items}
                </li>
              ))}
            </ul>
            <button className="w-full border border-themeColor p-4 rounded-md hover:bg-themeColor transition-all">
              Subscribe
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
