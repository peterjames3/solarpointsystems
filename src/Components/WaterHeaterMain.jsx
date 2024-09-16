import { TbSquareCheckFilled } from "react-icons/tb";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import IsometricDiagram from "../assets/Camper-Van..webp";
import Principle from "../assets/Principle..webp";
import waterHeater from "../assets/water-heater..webp";

function WaterHeaterMain() {
  return (
    <section className="h-auto w-full">
      <div className="w-full">
        {/* Warm Water Section */}
        <div className="wrapper flex min-h-[32rem] flex-col gap-8 rounded-lg p-10 shadow-lg lg:flex-row-reverse lg:px-7">
          {/* Image Section */}
          <div className="relative w-full overflow-hidden rounded-lg bg-gradient-to-r from-slate-800 to-gray-500 lg:w-1/2">
            <img
              src={waterHeater}
              alt="Water Heater"
              loading="lazy"
              className="h-full w-full object-cover mix-blend-overlay"
            />
            <div className="absolute left-2 top-2 space-y-5 px-2 text-white">
              <nav className="pt-3 text-4xl text-white">
                <VscWorkspaceTrusted />
              </nav>
              <p className="font-Poppins">
                Trusted <br /> Service
              </p>
            </div>
          </div>

          {/* Text Section */}
          <div className=" w-full space-y-4 px-2 py-2 lg:w-1/2 lg:px-3">
            <h3 className="pt-2 text-3xl font-bold text-black font-poppins">
              Warm water on demand, every day of the year, without the burden of
              a large electric bill?
            </h3>
            <p className="font-Rubik text-xl text-gray-900">
              In the niche arena of merging solar energy technology with water
              heating solutions, we are leaders. Our proficiency encompasses
              small-scale residential projects to large-scale commercial
              installations. Whether it’s a stand-alone system or integrated
              with batteries for enhanced efficiency, solar water heaters can
              provide significant ongoing savings in energy costs. This is true
              for settings anywhere, from remote rural homes to bustling urban
              enterprises.
              <br />
              <span className="text-2xl font-medium font-Rubik">Advantages:</span>
            </p>
            <div className="mt-4 flex flex-col space-y-2">
              <div className="flex items-center">
                <span className="px-2 text-brandC">
                  <TbSquareCheckFilled aria-label="Feature checked" />
                </span>
                <span className="text-black">Minimal Maintenance Required</span>
              </div>
              <div className="flex items-center">
                <span className="px-2 text-brandC">
                  <TbSquareCheckFilled aria-label="Feature checked" />
                </span>
                <span>No Complex Wiring or Installation</span>
              </div>
              <div className="flex items-center">
                <span className="px-2 text-brandC">
                  <TbSquareCheckFilled aria-label="Feature checked" />
                </span>
                <span>Significantly Lowers Energy Expenses</span>
              </div>
              <div className="flex items-center">
                <span className="px-2 text-brandC">
                  <TbSquareCheckFilled aria-label="Feature checked" />
                </span>
                <span>Easy and Straightforward Installation</span>
              </div>
              <div className="flex items-center">
                <span className="px-2 text-brandC">
                  <TbSquareCheckFilled aria-label="Feature checked" />
                </span>
                <span>Hassle Free Install</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-auto mx-auto my-4 max-w-[1400px] px-5 ss:overflow-y-scroll md:overflow-auto">
        <div className="flex flex-col items-center space-y-3 font-poppins">
          <h3 className="font-Inter text-center text-3xl font-semibold text-black">
            {" "}
            Water Heater
          </h3>
          <hr className="flex w-[7rem] items-center border-b-2 border-blue-700" />
          <h5 className="text-center text-4xl font-bold text-black">
            Working Principle
          </h5>
        </div>
        <div className="font-Inter mt-10 grid grid-cols-1 grid-rows-4 gap-0 font-Rubik ss:grid-cols-2 ss:grid-rows-2">
          <div className="h-auto w-full md:h-[35rem]">
            <img
              src={IsometricDiagram}
              alt="isometric diagram"
              loading="lazy"
              className="object-fit h-full w-full mix-blend-overlay"
            />
          </div>
          <div className="h-[35rem] space-x-2 space-y-3 py-5 text-xl">
            <p>
              A typical water heater system operates by converting energy into
              heat and transferring that heat to water. It&apos;s done either
              through direct means in tankless systems or indirectly via a
              heating element in storage water heaters.
            </p>
            <p>There are two main types of water heaters:</p>
            <h6 className="font-medium">
              {" "}
              1). Tankless Water Heaters (On-Demand)
            </h6>
            <p>
              Tankless water heaters directly heat water without the use of a
              storage tank. When a hot water tap is turned on, cold water
              travels through a pipe into the unit, and either a gas burner or
              an electric element heats the water. This process ensures a
              constant supply of hot water, offering a more energy-efficient
              solution as the system heats water only when it&apos;s needed.
            </p>
          </div>
          <div className="h-[35rem] space-x-2 space-y-3 py-5 text-xl">
            <h6 className="font-medium"> 2). Storage Water Heaters</h6>
            <p>
              These water heaters involve heating water and storing it in a tank
              for later use. The heating element heats the water from the bottom
              of the tank, and the hot water rises to the top, ready to be
              distributed through the home&apos;s hot water lines. Although less
              efficient than tankless models, due to energy losses from standing
              water, they can provide a large volume of hot water that&apos;s
              readily available.
            </p>
            <h6 className="font-medium"> 3). Pipes</h6>
            <p>
              Pipes will transport water from the original source to wherever it
              needs to go; a purification system, a holding tank, etc.
            </p>

            <h6 className="font-medium"> 4) Water tank</h6>
            <p>
              The water pumping system will often include a water tank to store
              water that may be used when sunshine isn&apos;t available.
            </p>
            <h6 className="font-medium"> 5). Pump controllers</h6>
            <p>
              The controllers regulate the water pump and allow it to be turned
              on and off. They can increase the life of the water pump by
              protecting it from electrical irregularities or motor damage if it
              keeps running when a water source runs dry. Controllers also
              maximize water delivery.
            </p>
          </div>
          <div className="md:h-[40rem]">
            <img
              src={Principle}
              alt="working principle img"
              loading="lazy"
              className="object-fit hidden h-full w-full ss:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WaterHeaterMain;
