import { HiOutlineLightBulb } from "react-icons/hi";
import { FaCheckDouble } from "react-icons/fa6";
import OrderNow from "../Components/OrderNow";
import { GiSilverBullet } from "react-icons/gi";
import { AiOutlineGold } from "react-icons/ai";
import { TbSolarElectricity } from "react-icons/tb";
import { backupSystems } from "../backupSystems";

function BackupPlans() {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1000"
      className="wrapper flex flex-col px-2"
    >
      <div className="space-y-2 py-4 text-center font-poppins text-slate-900">
        <h3 className="text-3xl font-medium">Backup Systems</h3>
        <hr className="mx-auto w-[12rem] rounded-md border-2 border-blue-700" />
        <h4 className="text-4xl font-semibold">A System For Every Need</h4>
      </div>

      <div className="wrapper max-auto mt-1 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {backupSystems.map((system, index) => (
          <div
            key={index}
            className="flex h-[55rem] transform flex-col overflow-hidden rounded-md shadow-xl shadow-black duration-300 hover:scale-105 ss:h-[56rem] ss:w-full sm:h-[55rem] sm:w-[15rem] md:h-[55rem] md:w-[19.9rem]"
          >
            <nav className="h-[20rem] bg-brandD text-center">
              <h5 className="px-2 font-poppins text-5xl font-medium leading-tight text-white ss:px-5 ss:py-10 sm:px-3 sm:py-9">
                {system.name}{" "}
                <span className="font-semibold">{system.price}</span>
              </h5>
            </nav>
            <nav className="flex h-full flex-col items-center justify-center space-y-10">
              <span className="text-8xl text-orange-900">
                {index === 0 && <HiOutlineLightBulb />}
                {index === 1 && <GiSilverBullet />}
                {index === 2 && <AiOutlineGold />}
                {index === 3 && <TbSolarElectricity />}
              </span>
              <ul className="flex flex-col items-start space-x-12 space-y-7 text-xl text-slate-700">
                {system.features.map((feature, i) => (
                  <li key={i} className="flex flex-row items-center gap-5">
                    <span className="text-brandC">
                      <FaCheckDouble />
                    </span>{" "}
                    {feature}
                  </li>
                ))}
              </ul>
              <OrderNow
                name={system.name}
                price={system.price}
                features={system.features}
              />
            </nav>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BackupPlans;
