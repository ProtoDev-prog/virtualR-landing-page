import React from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
const Hero = () => {
  return (
    <div className="py-3 px-[3%] flex flex-col justify-center items-center">
      <h1 className="text-[90px] text-center mt-16 mb-8 tracking-wide leading-[96px] max-md:text-6xl">
        VirtualR build tools{" "}
        <span className="bg-gradient-to-tr from-themeColor to-themeColor2 bg-clip-text text-transparent">
          for developers
        </span>
      </h1>
      <p className="max-w-[65%] text-center text-lg text-gray-400 max-md:max-w-[100%]">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>
      <div className="btns flex items-center gap-6 mt-10">
        <button className="btn bg-gradient-to-tr from-themeColor to-themeColor2">
          Start For Free
        </button>
        <button className="btn border border-white">Documentation</button>
      </div>
      <div className="video-section flex gap-4 px-[6%] mt-10 max-md:px-[3%] max-md:flex-col">
        <video
          src={video1}
          autoPlay
          muted
          loop
          className="w-1/2 border border-themeColor rounded-md max-md:w-full"
        ></video>
        <video
          src={video2}
          autoPlay
          muted
          loop
          className="w-1/2 order-themeColor rounded-md max-md:w-full"
        ></video>
      </div>
    </div>
  );
};

export default Hero;
