import { Link } from "react-router-dom";
import SolarDesign from "../../assets/PanelsWork_..webp";
import airConditioner from "../../assets/AirconditionerIntro.webp";
import solarMaintance from "../../assets/solarmaintance.jpg";
import waterHeater from "../../assets/water-heater..webp";
import powerBackup from "../../assets/solarPowerbackup.jpg";
import WaterPump from "../../assets/Working-Pump..webp";
import "aos/dist/aos.css";
import OurSolutionCard from "./OurSolutionCard";
import { Sun, Droplets, Flame, Battery, Wind, Wrench } from "lucide-react";
function OurSolutions() {
  const Solutions = [
    {
      title: "Solar Installation",
      description:
        "Professional installation of high-efficiency solar panels for homes and businesses",
      icon: Sun,
      imageUrl:
        "https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?ixlib=rb-4.0.3",
      Link: "/solarinstallation",
    },
    {
      title: "Solar Water Pump",
      description:
        "Efficient water pumping solutions powered by solar energy for agriculture and domestic use",
      icon: Droplets,
      imageUrl: WaterPump,
      Link: "/solarwaterpump",
    },
    {
      title: "Solar Water Heater",
      description:
        "Eco-friendly water heating systems utilizing solar thermal technology",
      icon: Flame,
      imageUrl: waterHeater,
      Link: "/solarwaterheaters",
    },
    {
      title: "Power Backup",
      description:
        "Reliable solar power backup solutions with advanced battery storage systems",
      icon: Battery,
      imageUrl: powerBackup,
      Link: "/powerbackup",
    },
    {
      title: "Solar Air Conditioner",
      description:
        "Energy-efficient cooling solutions powered by solar technology",
      icon: Wind,
      imageUrl: airConditioner,
      Link: "/solarairconditioner",
    },
    {
      title: "Maintenance Services",
      description:
        "Comprehensive maintenance and support for all solar installations",
      icon: Wrench,
      imageUrl: solarMaintance,
      Link: "/solarhybrid",
    },
  ];
  return (
    <section className="mx-auto my-16 flex w-full flex-col space-y-5 px-2 md:px-3">
      <div className="mx-auto max-w-[1040px] space-y-3 text-center font-poppins">
        <h3 className="text-3xl font-bold">Our Solar Power Solutions</h3>
        <hr className="mx-auto w-[12rem] rounded-md border-2 border-textColor" />
        <h4 className="text-2xl font-medium">
          Discover our comprehensive range of solar solutions designed to meet
          your energy needs while promoting sustainability
        </h4>
      </div>
      <div className="wrapper grid grid-cols-1 grid-rows-3 gap-0 sm:grid-cols-3 sm:grid-rows-1 sm:gap-3 md:gap-8">
        <div className="bg grid grid-cols-1 gap-6">
          {Solutions.slice(0, 3).map((solution, index) => (
            <OurSolutionCard
              key={index}
              title={solution.title}
              description={solution.description}
              icon={solution.icon}
              imageUrl={solution.imageUrl}
              link={solution.Link}
            />
          ))}
        </div>

        <div className="w-full overflow-hidden rounded-lg">
          <img
            src={SolarDesign}
            alt="Solar System"
            className="h-full max-h-[45rem] w-full object-fill object-center sm:max-h-[50rem]"
            loading="lazy"
          />
        </div>

        <div className="grid grid-cols-1 gap-6">
          {Solutions.slice(3, 6).map((solution, index) => (
            <OurSolutionCard
              key={index}
              title={solution.title}
              description={solution.description}
              icon={solution.icon}
              imageUrl={solution.imageUrl}
              link={solution.Link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurSolutions;
