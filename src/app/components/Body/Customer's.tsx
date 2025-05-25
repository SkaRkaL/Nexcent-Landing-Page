

const clientsWebSites = [
  { webSiteLogo: "Logos/Logo-0.svg", webSitePath: "/Logo-0", id: 0, webSiteName: "Logo-0" },
  { webSiteLogo: "Logos/Logo-1.svg", webSitePath: "/Logo-1", id: 1, webSiteName: "Logo-1" },
  { webSiteLogo: "Logos/Logo-2.svg", webSitePath: "/Logo-2", id: 2, webSiteName: "Logo-2" },
  { webSiteLogo: "Logos/Logo-4.svg", webSitePath: "/Logo-4", id: 4, webSiteName: "Logo-4" },
  { webSiteLogo: "Logos/Logo-5.svg", webSitePath: "/Logo-5", id: 5, webSiteName: "Logo-5" },
];


export default function Customer() {
  return (
    <div className="bg-[#f0f4f7] w-[100vw] md:px-[150px] md:py-[25px] p-[28px] md:gap-20 gap-6 flex items-center justify-center md:flex-row flex-col">
      <div className="md:w-[19rem] md:h-[19rem] w-[14rem] h-[14rem] rounded shadow-2xs bg-[url('/Tesla_Logo.jpg')] bg-no-repeat bg-center bg-cover aspect-square" />

      <div className="flex flex-col items-center justify-evenly gap-4 md:h-auto text-[#717171]">
        <div className="flex flex-col justify-evenly gap-3">
          <p className="text-lg md:text-[1rem] font-inter md:w-[700px]">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
          <div className="flex flex-col justify-between">
            <h4 className="text-2xl font-semibold text-[#4CAF4F]">Tim Smith</h4>
            <p className="font-light text-[16px]">Maecenas dignissim justo eget nulla rutrum molestie.</p>
          </div>
        </div>

        <div className="flex flex-col relative right-3 md:flex-row w-full justify-evenly md:gap-6 ">
          <div className="flex justify-evenly gap-3">
            {Array(clientsWebSites.length)
              .fill(0)
              .map((_, i) => (
                <img
                  key={i}
                  className="h-[3rem] md:mx-[0.7rem] mx-[0.1rem] md:h-[3.5rem] "
                  src={clientsWebSites[i].webSiteLogo}
                  alt={clientsWebSites[i].webSiteName}
                />
              ))
            }
          </div>

          <div className="flex items-center gap-3 md:justify-between justify-center cursor-pointer hover:text-[#4CAF4F]">
            <h4 className="text-[#4CAF4F] font-bold">Meet all customers</h4>
            <img src="Right.svg" alt="right-arrow" className="h-3" />
          </div>
        </div>

      </div>
    </div>
  );
};
