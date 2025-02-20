import { TbSquareCheckFilled } from "react-icons/tb";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import WorkingPump from "../../assets/Working-Pump..webp";
import IsometricDiagram from "../../assets/diagram-isometric..webp";
import WorkingPrinciple from "../../assets/Beysolar-SolarWaterPump..webp";
import "aos/dist/aos.css";

function WaterPumpmain() {
  return (
    <section className="my-5 h-auto overflow-y-scroll py-20">
      <div className="wrapper sx:flex-col flex flex-col rounded-lg bg-white px-5 py-3 shadow-lg ss:flex-row md:flex-row md:gap-5 md:px-7">
        <div
         
          className="relative h-[32rem] w-full overflow-hidden rounded-md bg-gradient-to-r from-slate-800 to-gray-500 ss:h-auto md:h-[32rem] md:w-[50%]"
        >
          <img
            src={WorkingPump}
            alt="man working"
            loading="lazy"
            className="object-fit h-full w-full mix-blend-overlay"
          />
          <div className="absolute left-[0%] top-[2%] min-h-6 space-y-5 px-2 text-white">
            <nav className="pt-3 text-4xl text-white">
              <VscWorkspaceTrusted />
            </nav>
            <p className="font-Poppins">
              Trusted <br></br>Service
            </p>
          </div>
        </div>
        <div
        
          className="font-Poppins animate-puls w-full px-2 py-2 ss:space-y-2 md:w-[50%] md:space-y-4 md:px-3"
        >
          <h2 className="pt-2 font-poppins text-3xl font-bold text-black">
            Solar Water Pumping
          </h2>

          <p className="font-Rubik text-xl">
            In the specialized field of integrating solar energy with water
            pumping, we stand at the forefront. Our expertise spans from
            handling modest residential tasks to managing extensive commercial
            ventures. Whether implemented as a standalone solution or paired
            with batteries or a meticulously designed water pumping system,
            solar power can generate substantial continuous cost savings for
            both residential and commercial settings, regardless of being in
            rural or urban environments.<br></br>
            <span className="text-2xl font-medium">Benefits :</span>
          </p>
          <div className="flex flex-col space-y-2 text-start font-medium">
            <div className="flex flex-row items-center">
              <span className="px-2 text-brandC">
                <TbSquareCheckFilled aria-label="Feature checked" />
              </span>
              <span className="text-black">No Fuel Requirements</span>
            </div>
            <div className="flex flex-row items-center">
              <span className="px-2 text-brandC">
                <TbSquareCheckFilled aria-label="Feature checked" />
              </span>
              <span>No need of maintenance</span>
            </div>
            <div className="flex flex-row items-center">
              <span className="px-2 text-brandC">
                <TbSquareCheckFilled aria-label="Feature checked" />
              </span>
              <span>No need of wiring, trenching and cabling</span>
            </div>
            <div className="flex flex-row items-center">
              <span className="px-2 text-brandC">
                <TbSquareCheckFilled aria-label="Feature checked" />
              </span>
              <span>Low Recurrent Cost</span>
            </div>
            <div className="flex flex-row items-center">
              <span className="px-2 text-brandC">
                <TbSquareCheckFilled aria-label="Feature checked" />
              </span>
              <span>Hassle Free Install.</span>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper px-5">
        <div className="flex flex-col items-center space-y-3 font-poppins">
          <h3 className="font-Inter text-center text-3xl font-semibold text-black">
            {" "}
            How A solar Water Pumping Systems works?
          </h3>
          <hr className="flex w-[7rem] items-center border-b-2 border-blue-700" />
          <h5 className="text-center text-4xl font-bold text-black">
            Working Principle
          </h5>
        </div>
        <div className="font-Inter mt-10 grid grid-cols-1 grid-rows-4 gap-0 ss:grid-cols-2 ss:grid-rows-2">
          <div
         
            className="h-auto w-full md:h-[35rem]"
          >
            <img
              src={IsometricDiagram}
              alt="isometric diagram"
              loading="lazy"
              className="object-fit h-full w-full mix-blend-overlay"
            />
          </div>
          <div
           
            className="h-[35rem] space-x-2 space-y-3 py-5 font-Rubik text-xl"
          >
            <p>
              Solar water pumping systems function by transforming sunlight into
              electrical energy, which then powers a water pump. This process
              involves solar panels that capture solar energy, converting it
              into direct current (DC) electricity. This DC electricity is the
              power source for the motor that drives the water out from its
              source. Should the pump motor require alternating current (AC)
              instead of DC, an inverter is utilized for the conversion.
            </p>
            <p>The components of a solar water pumping system include:</p>
            <h6 className="font-medium"> 1). Solar Panels</h6>
            <p>
              Solar panels convert sunlight into electrical power through a
              three-step process. Within these panels, solar cells capture
              sunlight and transform it into DC electricity. An inverter is then
              used to change this DC into AC (alternating current) electricity,
              which powers the water pump.
            </p>
          </div>
          <div
          
            className="h-[35rem] space-x-2 space-y-3 py-5 text-xl"
          >
            <h6 className="font-medium"> 2). Water pump motor</h6>
            <p>
              The water pump motor takes water from the available water source,
              including from underground or another water source, that can be
              used for irrigation, household, or other purposes.
            </p>
            <h6 className="font-medium"> 3). Pipes</h6>
            <p>
              Pipes will transport water from the original source to wherever it
              needs to go; a purification system, a holding tank, etc.
            </p>

            <h6 className="font-medium"> 4) Water tank</h6>
            <p>
              The water pumping system will often include a water tank to store
              water that may be used when sunshine isn’t available.
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
          <div
           
            className="md:h-[40rem]"
          >
            <img
              src={WorkingPrinciple}
              alt="working principle img"
              loading="lazy"
              className="object-fit h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WaterPumpmain;
