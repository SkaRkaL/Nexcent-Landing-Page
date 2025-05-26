
export default function Achievements() {

  const data = {
    members: "2,245,341",
    eventBookings: "828,867",
    clubs: "46,328",
    payments: "9,999,999"
  };

  const achievements = [
    {
      title: "Members",
      value: data.members,
      icon: "achivements-icons/Member.svg",
      iconSize: "h-[2rem] md:h-[2.2rem]"
    },
    {
      title: "Event Bookings",
      value: data.eventBookings,
      icon: "achivements-icons/Interaction.svg",
      iconSize: "h-[2rem] md:h-[2.8rem]"
    },
    {
      title: "Clubs",
      value: data.clubs,
      icon: "achivements-icons/Clubs.svg",
      iconSize: "h-[2rem] md:h-[2.7rem]"
    },
    {
      title: "Payments",
      value: data.payments,
      icon: "achivements-icons/Payment.svg",
      iconSize: "h-[2rem] md:h-[2.2rem]"
    }
  ];

  return (
    <div className="bg-[#F5F7FA] overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-10 mx-auto p-7 md:px-[140px] md:py-[70px] ">
      <div className="relative right-0 space-x-2 flex flex-col justify-center items-center md:items-start">
        <h2 className="text-3xl md:text-[2.5rem] text-[#4D4D4D] font-semibold">
          Helping a local
        </h2>
        <h2 className="text-3xl md:text-[2.5rem] text-[#4CAF4F] text-center md:text-nowrap font-semibold font-inter">
          business reinvent itself
        </h2>
        <p className="text-lg relative top-3 md:text-[1rem] text-[#717171] font-light font-inter max-w-xl">
          We reached here with our hard work and dedication
        </p>
      </div>

      <div className="flex flex-col gap-7 sm:p-6 sm:grid sm:grid-cols-2 sm:gap-15 items-center">
        {Array(2)
          .fill(0)
          .map((_, i) => (
            <div className="flex flex-col items-start gap-7" key={i}>
              {achievements.slice(i * 2, i * 2 + 2).map((achievement, index) => (
                <div className="flex items-center justify-evenly flex-row-reverse gap-3" key={index}>
                  <div className="flex flex-col">
                    <h2 className="text-[24px] md:text-[2rem] text-[#4D4D4D] font-bold">
                      {achievement.value}
                    </h2>
                    <p className="text-lg md:text-[1rem] text-[#717171]">
                      {achievement.title}
                    </p>
                  </div>
                  <div className={`w-[60px] flex justify-center ${achievement.iconSize}`}>
                    <img src={achievement.icon} alt={achievement.title} className={achievement.iconSize} />
                  </div>
                </div>
              ))}
            </div>
          ))
        }
      </div>

    </div>
  );
};
