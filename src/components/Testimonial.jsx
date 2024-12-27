import React from "react";
import { testimonials } from "../constants";
const Testimonial = () => {
  return (
    <div className="px-[6%] pb-10">
      <h1 className="text-6xl text-center py-16 max-md:text-3xl">
        What people are saying
      </h1>
      <div className="testimonial grid grid-cols-3 items-start gap-5 max-md:grid-cols-1">
        {testimonials.map((ele) => (
          <div className="card border border-gray-400 p-4 rounded-md">
            <p className="mb-6 text-gray-400">{ele.text}</p>
            <div className="details flex items-center gap-3">
              <img src={ele.image} alt="" width={50} className="rounded-full" />
              <div className="text">
                <h4>{ele.user}</h4>
                <p className="italic text-gray-400">{ele.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
