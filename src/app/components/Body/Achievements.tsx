export default function Achievements() {
  return (
    <div className="bg-[#F5F7FA] overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-10 mx-auto p-7 md:px-[140px] md:py-[20px] ">
      <div className="relative right-0 space-x-2 flex flex-col justify-center ">
        <h2 className="text-3xl md:w-max w-[100%] md:text-[2.5rem] text-[#4D4D4D] font-semibold">
          Helping a local
        </h2>
        <h2 className="text-3xl w-max md:text-[2.5rem] text-[#4CAF4F] font-semibold font-inter">
          business reinvent itself
        </h2>
        <p className="text-lg relative top-3 md:text-[1rem] text-[#717171] font-light font-inter max-w-xl">
          We reached here with our hard work and dedication
        </p>
      </div>


      {/* TODO : this div is static for now, make sure to remake it dynamic */}
      <div className="flex flex-col justify-start gap-10 p-10 md:p-20 md:grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center justify-center flex-row-reverse gap-3">
          <div className="flex flex-col">
            <h2 className="text-3xl md:text-[2rem] text-[#4D4D4D] font-bold">
              2,245,341
            </h2>
            <p className="text-lg md:text-[1rem] text-[#717171]">
              Members
            </p>
          </div>
          <img src="achivements-icons/Member.svg" alt="" className=" h-[2.2rem] " />
        </div>
        <div className="flex items-center justify-center flex-row-reverse gap-3">
          <div className="flex flex-col">
            <h2 className="text-3xl md:text-[2rem] text-[#4D4D4D] font-bold">
              46,328
            </h2>
            <p className="text-lg md:text-[1rem] text-[#717171]">
              Clubs
            </p>
          </div>
          <img src="achivements-icons/Clubs.svg" alt="" className="h-[2.6rem]" />
        </div>
        <div className="flex items-center justify-center flex-row-reverse gap-3">
          <div className="flex flex-col">
            <h2 className="text-3xl md:text-[2rem] text-[#4D4D4D] font-bold">
              828,867
            </h2>
            <p className="text-lg md:text-[1rem] text-[#717171]">
              Event Bookings
            </p>
          </div>
          <img src="achivements-icons/Interaction.svg" alt="" className=" h-[2.2rem] " />
        </div>
        <div className="flex items-center justify-center flex-row-reverse gap-3">
          <div className="flex flex-col">
            <h2 className="text-3xl md:text-[2rem] text-[#4D4D4D] font-bold">
              1,926,436
            </h2>
            <p className="text-lg md:text-[1rem] text-[#717171]">
              Payments
            </p>
          </div>
          <img src="achivements-icons/Payment.svg" alt="" className=" h-[2.2rem] " />
        </div>

      </div>

    </div>
  );
};
