import Image from "next/image";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <div className=" w-full">
      <NavBar />
      <main className="overflow-scroll ">
        <div className="bg-[#F5F7FA] overflow-hidden w-[100vw]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 max-w-7xl mx-auto p-7 md:p-12">
            <div className="flex flex-col justify-center space-y-6">
              <div className="relative right-0 space-x-2">
                <h2 className="text-4xl w-max md:text-[4rem] text-[#4D4D4D] font-semibold">
                  Lessons and insights
                </h2>
                <p className="text-4xl w-max md:text-[4rem] text-[#4CAF4F] font-semibold font-inter leading-tight">
                  from 8 years
                </p>
              </div>
              <p className="text-lg relative right-0 md:text-[1rem] text-gray-600 font-light font-inter max-w-xl">
                Where to grow your business as a photographer: site or social media?
              </p>git
              <button className="relative right-0 bg-[#4CAF4F] w-35 px-3 py-3.5 cursor-pointer hover:bg-[#388E3C] rounded text-lg font-inter text-white flex items-center justify-center">
                Register
              </button>
            </div>
            <div className="flex justify-center">
              <img
                src="/Illustration.svg"
                alt="Business Illustration"
                className="w-full max-w-[450px]"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
