import { HiOutlineLightBulb } from "react-icons/hi";
import { FaCheckDouble } from "react-icons/fa";
import OrderNow from "../Components/OrderNow";
import { GiSilverBullet } from "react-icons/gi";
import { AiOutlineGold } from "react-icons/ai";
import { TbSolarElectricity } from "react-icons/tb";

function SolarSystem() {
  const systems = [
    {
      name: "Starter Solar Home System - 240W",
      price: "Ksh 134,000",
      features: ["10 Lights", "TV and Radio", "1 Phone Charging", "Wifi-Modem"],
    },
    {
      name: "Silver Home Solar System - 1kW",
      price: "Ksh 219,000",
      features: [
        "25 Lights",
        "TV and Hifi",
        "Fridge",
        "Wifi-Modem & Phone Charging",
      ],
    },
    {
      name: "Gold Solar Home System - 1.8kW",
      price: "Ksh 283,000",
      features: [
        "30 Lights",
        "TV and Home Theatre",
        "Phone Charging, Iron Box",
        "Fridge and Microwave",
      ],
    },
    {
      name: "Platinum Solar Home System - 3.6kW",
      price: "Ksh 334,000",
      features: [
        "40 Lights",
        "TV and Home Theatre",
        "Phone Charging, Iron Box",
        "Washing Machine, Fridge and Microwave",
      ],
    },
  ];

  return (
    <section className="wrapper flex flex-col px-2">
      <div className="mb-7 space-y-2 py-4 text-center font-poppins text-slate-900">
        <h3 className="text-3xl font-bold">Solar Home Systems</h3>
        <hr className="mx-auto w-[12rem] rounded-md border-2 border-textColor" />
        <h4 className="text-4xl font-medium">A System For Every Need</h4>
      </div>
      <div className="grid w-full grid-cols-1 gap-8 px-10 ss:px-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {systems.map((system, index) => (
          <div
            key={index}
            className="flex h-[53rem] transform flex-col overflow-hidden rounded-md shadow-xl shadow-black duration-300 hover:scale-105"
          >
            <div className="h-[20%] text-center">
              <h5 className="solar-heading bg-brandD py-3 font-poppins text-[2rem] font-medium leading-[3.5rem]">
                {system.name} {system.price}
              </h5>
            </div>
            <div className="h-[70%]flex-grow flex h-full flex-col items-center justify-center space-y-10">
              <span className="pt-10 text-7xl text-yellow-900 sm:pt-16">
                {/* Use relevant icons for each system */}
                {index === 0 && <HiOutlineLightBulb />}
                {index === 1 && <GiSilverBullet />}
                {index === 2 && <AiOutlineGold />}
                {index === 3 && <TbSolarElectricity />}
              </span>
              <ul className="space-y-4 text-xl text-slate-700">
                {system.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <FaCheckDouble className="text-brandC" /> {feature}
                  </li>
                ))}
              </ul>
              <OrderNow
                name={system.name}
                price={system.price}
                features={system.features}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SolarSystem;
