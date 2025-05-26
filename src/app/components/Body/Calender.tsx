
import React from "react";
import Image from "next/image";

export default function Calender() {

  return (
    <div className="bg-[#fbfcfd] overflow-hidden w-[100vw]">

      <div className="grid grid-cols-1 sm:grid-cols-2 md:gap-[13rem] max-w-6xl mx-auto p-7 md:px-10">

        <div className="flex flex-col justify-center space-y-6 w-[100%]">
          <div className="relative md:mb-[12px]">
            <h3 className="text-3xl md:w-[35rem] text-justify w-full md:text-[2.3rem] text-[#4D4D4D] leading-tight font-semibold">
              How to design your site footer like we did
            </h3>
          </div>
          <p className="text-[0.9rem] relative text-justify md:text-[1rem] md:w-[32rem] text-[#717171] font-inter w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
          </p>

          <button className="relative right-0 bg-[#4CAF4F] md:w-45 px-1 py-1.5 md:px-3 md:py-3.5 cursor-pointer hover:bg-[#388E3C] rounded text-lg font-inter text-white flex items-center justify-center">
            Learn More
          </button>
        </div>

        <div className="flex items-center justify-center order-1 sm:order-2">
          <Image
            src="pana.svg"
            alt="Unlock"
            className="w-full max-w-[350px] md:max-w-[470px] h-auto sm:h-[500px]"
            width={470}
            height={500}
            priority
          />
        </div>

      </div>

    </div>
  );

};
