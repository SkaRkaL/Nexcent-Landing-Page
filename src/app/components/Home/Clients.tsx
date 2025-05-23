"use client"

import { Marquee } from "@/components/magicui/marquee";
import { useRouter } from 'next/navigation';


const clientsWebSites = [
  { webSiteLogo: "Logos/Logo-0.svg", webSitePath: "/Logo-0", id: 0, webSiteName: "Logo-0" },
  { webSiteLogo: "Logos/Logo-1.svg", webSitePath: "/Logo-1", id: 1, webSiteName: "Logo-1" },
  { webSiteLogo: "Logos/Logo-2.svg", webSitePath: "/Logo-2", id: 2, webSiteName: "Logo-2" },
  { webSiteLogo: "Logos/Logo-3.svg", webSitePath: "/Logo-3", id: 3, webSiteName: "Logo-3" },
  { webSiteLogo: "Logos/Logo-4.svg", webSitePath: "/Logo-4", id: 4, webSiteName: "Logo-4" },
  { webSiteLogo: "Logos/Logo-5.svg", webSitePath: "/Logo-5", id: 5, webSiteName: "Logo-5" },
  { webSiteLogo: "Logos/Logo-6.svg", webSitePath: "/Logo-6", id: 6, webSiteName: "Logo-6" },
];


export default function Clients() {

  const router = useRouter();

  const goToWebSite = (path: string) => {

    router.push(path);

  };

  return (
    <div className="pt-8 w-[100vw] flex flex-col items-center overflow-hidden">
      <div className="flex items-center flex-col justify-center p-3">
        <h1 className="text-4xl w-max md:text-[3rem] text-[#4D4D4D] font-semibold">Our Clients</h1>
        <p className="text-[#717171] text-[1.2rem]">We have been working with some Fortune 500+ clients</p>
      </div>
      <div className="relative flex items-center justify-center w-[80%]">
        <div className="absolute h-full w-[90px] right-0 z-10 bg-gradient-to-l from-white to-transparent" />
        <Marquee className="h-22 w-full flex justify-evenly items-center mt-7 p-4">
          {Array(clientsWebSites.length)
            .fill(0)
            .map((_, i) => (
              <img
                key={i}
                className="size-[5rem] cursor-pointer md:mx-[3rem] mx-[1rem] h-22 md:size-[4rem]"
                src={clientsWebSites[i].webSiteLogo}
                alt={clientsWebSites[i].webSiteName}
                onClick={() => { goToWebSite(clientsWebSites[i].webSitePath) }}
              />
            ))
          }
        </Marquee>
        <div className="absolute h-full w-[90px] left-0 z-10 bg-gradient-to-r from-white to-transparent" />
      </div>
    </div>
  );
};
