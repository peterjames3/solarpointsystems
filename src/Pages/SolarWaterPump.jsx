import { Helmet } from 'react-helmet-async'
import WaterPumpHero from "../Components/WaterPumpHero"
import WaterPumpmain from "../Components/WaterPumpmain"
import lorentzwaterpump from "../assets/lorentzwaterpump..webp"
import groundfos from "../assets/grundfoswaterpump..webp"
import roomnypumpwaterpump from "../assets/roomnypumpwaterpump..webp"
import roomnypumpwaterpump1 from "../assets/roomnypumpwaterpump1..webp"
import { motion } from "framer-motion"
function SolarWaterPump() {
  return (
    <motion.section
      className="h-auto w-full bg-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Helmet>
        <title>Solar Water Pump | Solar Point System</title>
        <meta
          name="description"
          content="Discover our wide range of solar water pumps, featuring submersible and surface designs. Choose from a variety of water pump models that cater to your specific needs."
        />
        <meta
          property="og:title"
          content="solar water pumps | solarPointsystems"
        />
        <meta property="og:type" content="website" />
   
        <link
          rel="canonical"
          href="https://solarpointsystemsea.co.ke/solarwaterpump"
        />
      </Helmet>
      <WaterPumpHero />
      <WaterPumpmain />
      <section className="w-full py-7 ss:mt-[10rem] sm:mt-[5rem]">
        <div className="flex w-full flex-col items-center space-y-3 pb-4 font-poppins">
          <h3 className="font-Poppins pt-9 text-center text-3xl font-semibold text-black">
            Types of Solar Pump
          </h3>
          <hr className="w-[10rem] rounded border-b-[3px] border-blue-700" />
          <h4 className="text-center text-4xl font-bold">
            We deal in various solar pumps both submersible and surface pumps
          </h4>
        </div>
        <div className="w-full bg-cardBg px-5 py-5">
          <div className="wrapper grid grid-cols-1 gap-10 ss:grid-cols-2 md:grid-cols-4">
            <div className="rounded-sm shadow-md shadow-black sm:min-h-[30rem]">
              <div className="flex h-[50%] w-full items-center justify-center">
                <img
                  src={groundfos}
                  loading="lazy"
                  alt="grundfos img"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="h-[60%] w-full space-y-2 pt-10">
                <h5 className="text-center font-poppins text-2xl font-medium uppercase text-textColor">
                  Grundfos solar water pump
                </h5>
                <nav className="w-full px-2 font-Rubik">
                  <p className="text-xl">. Flow rate, Q: max. 90 m3/h</p>
                  <p className="text-xl">
                    . Maximum Flow rate of 2,750 litres/hr
                  </p>
                  <p className="text-xl">. Height, H: Max. 120m</p>
                  <p className="text-xl">. Voltage: 30-300 VDC</p>
                </nav>
              </div>
            </div>
            <div className="rounded-sm shadow-md shadow-black">
              <div className="flex h-[50%] w-full items-center justify-center overflow-hidden">
                <img
                  src={lorentzwaterpump}
                  loading="lazy"
                  alt="lorentzwaterpump img"
                  className="object-fit h-full w-full bg-center"
                />
              </div>
              <div className="h-[60%] w-full space-y-2 pt-10">
                <h5 className="text-center font-poppins text-2xl font-medium uppercase text-textColor">
                  LORENTZ SOLAR PUMPS{" "}
                </h5>
                <nav className="w-full px-2 pt-7 font-Rubik">
                  <p className="text-xl">. Flow rate, Q: max. 90 m3/h</p>
                  <p className="text-xl">
                    . Maximum Flow rate of 2,750 litres/hr
                  </p>
                  <p className="text-xl">. Height, H: Max. 120m</p>
                  <p className="text-xl">. Voltage: 30-300 VDC</p>
                </nav>
              </div>
            </div>
            <div className="overflow-y-auto rounded-sm shadow-md shadow-black">
              <div className="h-[50%] w-full overflow-hidden">
                <img
                  src={roomnypumpwaterpump}
                  loading="lazy"
                  alt="roomnypumpwaterpump img"
                  className="object-fit h-full w-full bg-center"
                />
              </div>
              <div className="h-[60%] w-full space-y-2 pt-10">
                <h5 className="text-center font-poppins text-2xl font-medium uppercase text-textColor">
                  PEDROLO WATER PUMP
                </h5>
                <nav className="w-full px-2 pt-7 font-Rubik">
                  <p className="text-xl">. Maximum head is 65M/215 feet </p>
                  <p className="text-xl">
                    . Maximum Flow rate of 3,000 litres/hr{" "}
                  </p>
                  <p className="text-xl">
                    . Optimised irrigation solution for upto 3 acre farm
                  </p>
                  <p className="text-xl">
                    . Includes: Submersible pump,50M electric cable,
                    ontroller,310W solar panel,50M HDPE pipe and fittings
                  </p>
                </nav>
              </div>
            </div>
            <div className="overflow-y-auto rounded-sm shadow-md shadow-black">
              <div className="h-[50%] w-full overflow-hidden">
                <img
                  src={roomnypumpwaterpump1}
                  loading="lazy"
                  alt="roomnypumpwaterpump1 img"
                  className="object-fit h-full w-full bg-center"
                />
              </div>
              <div className="h-[60%] w-full space-y-2 pt-10">
                <h5 className="text-center font-poppins text-2xl font-medium uppercase text-textColor">
                  ROOMNY SOLAR WATER PUMP1
                </h5>
                <nav className="w-full px-2 font-Rubik">
                  <p className="text-xl">. Maximum head is 30M/100 feet </p>
                  <p className="text-xl">
                    . Maximum Flow rate of 1,100 liters/hr{" "}
                  </p>
                  <p className="text-xl">
                    . Optimised irrigation solution for upto 3 acre farm
                  </p>
                  <p className="text-xl">
                    . Includes: Submersible pump,50M electric cable,
                    controller,2 X 310W solar panel,50M HDPE pipe and fitting
                  </p>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.section>
  );
  
}

export default SolarWaterPump
