
import React from "react";
import Image from "next/image";

export default function Unlock() {

  return (
    <div className="overflow-hidden w-[100vw]">

      <div className="grid grid-cols-1 sm:grid-cols-2 max-w-7xl mx-auto p-7 md:p-10">

        <div className="flex items-center justify-center ">
          <Image
            width={470}
            height={500}
            src="rafiki.svg"
            alt="Unlock"
            className="w-full max-w-[350px] md:max-w-[470px] h-auto sm:h-[500px]"
          />
        </div>

        <div className="flex flex-col justify-center space-y-6 order-2 sm:order-1">
          <div className="relative mb-[12px] md:mb-[12px]">
            <h3 className="text-3xl md:w-[35rem] md:text-left text-center w-full md:text-[2.3rem] text-[#4D4D4D] font-semibold">
              Unlock the Power of Your Community
            </h3>
            <p className="text-3xl  md:text-[2.3rem] md:text-left text-center text-[#4CAF4F] font-semibold font-inter leading-tight">
              Join Us Today
            </p>
          </div>
          <p className="text-[0.9rem] text-justify relative md:text-[1rem] text-[#717171] font-inter max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
          </p>

        </div>

      </div>

    </div>
  );

};
