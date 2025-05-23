

export default function Community() {
  return (
    <div className="pt-8 w-[100vw]">
      <div className="flex items-center flex-col justify-center p-3">
        <h1 className="text-2xl md:text-[3rem] text-[#4D4D4D] md:text-center text-left md:w-[45%] leading-tight font-semibold">Manage your entire community in a single system</h1>
        <p className="text-[#717171] text-[1.2rem] leading-[3rem]">Who is Nextcent suitable for?</p>
      </div>

      <div className="flex  items-center h-[12.256rem] justify-evenly w-full bg-[#fa3afa] flex-wrap">
        <div className="w-[13rem] h-[12.256rem] bg-red-300 flex justify-center items-center flex-col">
          <img src="Icons/Icon-1.svg" alt="" />
          <h3>Membership Organisations</h3>
          <p>Our membership management software provides full automation of membership renewals and payments</p>
        </div>
        <div className="w-[13rem] h-[12.256rem] bg-blue-300 flex justify-center items-center flex-col">
          <img src="Icons/Icon-2.svg" alt="" />
          <h3>Membership Organisations</h3>
          <p>Our membership management software provides full automation of membership renewals and payments</p>
        </div>
        <div className="w-[13rem] h-[12.256rem] bg-amber-300 flex justify-center items-center flex-col">"
          <img src="Icons/Icon-3.svg" alt="" />
          <h3>Membership Organisations</h3>
          <p>Our membership management software provides full automation of membership renewals and payments</p>
        </div>
      </div>

    </div>
  );
};
