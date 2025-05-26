
import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="bg-[#F5F7FA] overflow-hidden w-[100vw]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 max-w-[73rem] mx-auto p-7 md:p-12">
        <div className="flex flex-col justify-center space-y-6">
          <div className="relative right-0 space-x-2">
            <h2 className="text-4xl md:w-max w-[100%] md:text-[4rem] text-[#4D4D4D] font-semibold">
              Lessons and insights
            </h2>
            <h2 className="text-3xl w-max md:text-[4rem] text-[#4CAF4F] font-semibold font-inter leading-tight">
              from 8 years
            </h2>
          </div>
          <p className="text-[0.9rem] relative right-0 md:text-[1rem] text-[#717171] font-light font-inter max-w-xl">
            Where to grow your business as a photographer: site or social media?
          </p>
          <button className="relative right-0 bg-[#4CAF4F] w-35 px-1 py-1.5 md:px-3 md:py-3.5 cursor-pointer hover:bg-[#388E3C] rounded text-lg font-inter text-white flex items-center justify-center">
            Register
          </button>
        </div>
        <div className="flex justify-center">
          <Image
            width={450}
            height={450}
            src="/Illustration.svg"
            alt="Business Illustration"
            className="w-full max-w-[450px]"
          />
        </div>
      </div>
    </div>
  );
};
