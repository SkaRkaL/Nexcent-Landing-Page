export default function Unlock() {

  return (
    <div className="bg-[#fbfcfd] overflow-hidden w-[100vw]">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-7xl mx-auto p-7 md:p-12">

        <img
          src="rafiki.svg"
          alt="Unlock"
          className="w-full max-w-[450px]"
        />

        <div className="flex flex-col justify-center space-y-6">
          <div className="relative mb-[12px] md:mb-[12px]">
            <h2 className="text-3xl md:w-max w-[100%] md:text-[2.3rem] text-[#4D4D4D] leading-tight font-semibold">
              Unlock the Power of Your Community
            </h2>
            <p className="text-3xl w-max md:text-[2.3rem] text-[#4CAF4F] font-semibold font-inter leading-tight">
              Join Us Today
            </p>
          </div>
          <p className="text-lg relative md:text-[1rem] text-[#717171] font-light font-inter max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
          </p>

          <button className="relative right-0 bg-[#4CAF4F] md:w-35 px-3 py-3.5 cursor-pointer hover:bg-[#388E3C] rounded text-lg font-inter text-white flex items-center justify-center">
            Get Started
          </button>

        </div>

      </div>

    </div>
  );

};
