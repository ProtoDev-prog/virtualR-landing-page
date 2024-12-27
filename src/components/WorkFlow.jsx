import React from "react";
import code from "../assets/code.jpg";
import { checklistItems } from "../constants";
import { CheckCircle2 } from "lucide-react";
const WorkFlow = () => {
  return (
    <div className="px-[6%] py-16">
      <h1 className="text-center text-6xl max-md:text-3xl">
        Accelerate your{" "}
        <span className="bg-gradient-to-tr from-themeColor to-themeColor2 text-transparent bg-clip-text">
          coding workflow
        </span>
      </h1>
      <div className="flex w-full mt-14 gap-8 max-md:flex-col">
        <img src={code} alt="" className="w-1/2 max-md:w-full" />
        <div className="details-container mt-4">
          {checklistItems.map((ele) => (
            <div className="flex gap-2 ">
              <div className="icon h-10 w-10 p-2 bg-black rounded-full text-green-400">
                <CheckCircle2 />
              </div>
              <div className="details mb-10">
                <h1 className="text-2xl max-md:text-xl">{ele.title}</h1>
                <p className="text-lg mt-4 text-gray-400 max-md:text-base">
                  {ele.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;
