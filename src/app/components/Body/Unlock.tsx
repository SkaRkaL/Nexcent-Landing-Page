export default function Unlock() {

  return (
    <div className="overflow-hidden w-[100vw]">

      <div className="grid grid-cols-1 sm:grid-cols-2 max-w-7xl mx-auto p-7 md:p-12">

        <img
          src="rafiki.svg"
          alt="Unlock"
          className="w-full max-w-[350px] md:max-w-[450px] h-auto sm:h-[500px]"
        />

        <div className="flex flex-col justify-center space-y-6 order-2 sm:order-1">
          <div className="relative mb-[12px] md:mb-[12px]">
            <h3 className="text-3xl md:w-[35rem] w-full md:text-[2.3rem] text-[#4D4D4D] leading-tight font-semibold">
              Unlock the Power of Your Community
            </h3>
            <p className="text-3xl w-max md:text-[2.3rem] text-[#4CAF4F] font-semibold font-inter leading-tight">
              Join Us Today
            </p>
          </div>
          <p className="text-lg relative md:text-[1rem] text-[#717171] font-light font-inter max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
          </p>

          <button className="relative right-0 bg-[#4CAF4F] md:w-45 px-3 py-3.5 cursor-pointer hover:bg-[#388E3C] rounded text-lg font-inter text-white flex items-center justify-center">
            Get Started
          </button>

        </div>

      </div>

    </div>
  );

};
