

export default function Community() {
  return (
    <div className="pt-8 w-[100vw]">
      <div className="flex items-center flex-col justify-center p-3">
        <h1 className="text-[1.6rem] md:text-[3rem] text-[#4D4D4D] text-center md:text-center md:w-[45%] leading-tight font-semibold">
          Manage your entire community in a single system
        </h1>
        <p className="text-[#717171] text-[1.2rem] leading-[3rem]">Who is Nextcent suitable for?</p>
      </div>

      <div className="flex items-center justify-evenly w-full md:h-auto md:gap-0 gap-4 flex-wrap">

        <div className="w-[20rem] h-[20rem] rounded flex text-center justify-evenly flex-col p-[20px] shadow-[0px_1px_12px_-4px_rgba(0,0,0,0.1)]">
          <div className="flex flex-col items-center gap-2">
            <img src="Icons/Icon-3.svg" alt="" className="h-14 relative bottom-2" />
            <h3 className="text-3xl md:text-[2.3rem] text-[#4D4D4D] font-bold">Membership Organisations</h3>
          </div>
          <div>
            <p className="text-[#717171] text-center">Our membership management software provides full automation of membership renewals and payments</p>
          </div>
        </div>

        <div className="w-[20rem] h-[20rem] rounded flex text-center justify-evenly flex-col p-[20px] shadow-[0px_1px_12px_-4px_rgba(0,0,0,0.1)]">
          <div className="flex flex-col items-center gap-2">
            <img src="Icons/Icon-1.svg" alt="" className="h-14 relative bottom-2" />
            <h3 className="text-3xl md:text-[2.3rem] text-[#4D4D4D] font-bold">National Associations</h3>
          </div>
          <div>
            <p className="text-[#717171] text-center">Our membership management software provides full automation of membership renewals and payments</p>
          </div>
        </div>

        <div className="w-[20rem] h-[20rem] rounded flex text-center justify-evenly flex-col p-[20px] shadow-[0px_1px_12px_-4px_rgba(0,0,0,0.1)]">
          <div className="flex flex-col items-center gap-2">
            <img src="Icons/Icon-2.svg" alt="" className="h-14 relative bottom-2" />
            <h3 className="text-3xl md:text-[2.3rem] w-[15rem] md:w-auto text-[#4D4D4D] font-bold">Clubs And Groups</h3>
          </div>
          <div>
            <p className="text-[#717171] text-center">Our membership management software provides full automation of membership renewals and payments</p>
          </div>
        </div>

      </div>

    </div>
  );
};
