import SolarDesign from "../assets/PanelsWork_..webp";
import solarSVG from "../assets/solar-panel..webp";
import solarEnergy from "../assets/solar-energy..webp";
import waterHeater from "../assets/s_waterheater..webp";
import Powergeneration from "../assets/power-generation..webp";
import Bulb from "../assets/bulb..webp";
import Pump from "../assets/pump..webp";
import "aos/dist/aos.css";

function OurSolutions() {
  return (
    <section className="mx-auto my-4 flex w-full flex-col space-y-5 px-2 md:px-3">
      <div className="w-full space-y-3 text-center font-poppins">
        <h3 className="text-3xl font-bold">Our Solutions</h3>
        <hr className="mx-auto w-[12rem] rounded-md border-2 border-textColor" />
        <h4 className="text-4xl font-medium">
          Invest in your future with our solutions.
        </h4>
      </div>
      <div className="wrapper grid grid-cols-1 grid-rows-3 gap-0 sm:grid-cols-3 sm:grid-rows-1 sm:gap-3 md:gap-8">
        <div className="flex h-full w-full flex-col items-center space-y-10 py-5 ss:space-y-3 md:space-y-12">
          <div
            data-aos="zoom-in"
            data-aos-delay="1000"
            className="card flex w-full transform cursor-pointer justify-around gap-2 duration-300 ease-in-out hover:scale-105 hover:bg-cardBg hover:shadow-md hover:shadow-black"
          >
            <div className="w-[30%]">
              <img
                src={solarSVG}
                alt="solar img"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="card__content w-[70%]">
              <h4 className="card_title">Solar Offgrid Power</h4>
              <p className="card_description">
                This system powers premises using only sunlight and stored
                battery energy, ensuring utility grid independence.
              </p>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="1100"
            className="card_1 flex transform cursor-pointer justify-around gap-2 duration-300 ease-in-out hover:scale-105 hover:bg-cardBg hover:shadow-md hover:shadow-black"
          >
            <div className="w-[30%]">
              <img
                src={solarEnergy}
                alt="solar img"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="card__content w-[70%]">
              <h4 className="card_title">Solar Hybrid</h4>
              <p className="card_description">
                A Solar Hybrid system merges on-grid and off-grid benefits,
                ideal for areas with grid access but frequent power outages.
              </p>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="1200"
            className="card_2 flex transform cursor-pointer justify-around gap-2 duration-300 ease-in-out hover:scale-105 hover:bg-cardBg hover:shadow-md hover:shadow-black"
          >
            <div className="w-[30%]">
              <img
                src={Powergeneration}
                alt="solar img"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="card__content w-[70%]">
              <h4 className="card_title">Solar Grid Tie</h4>
              <p className="card_description">
                Grid-tie systems feed electricity from your panels to the grid,
                and you&apos;re compensated by Kenya Power for the generated
                power.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full overflow-hidden rounded-lg">
          <img
            src={SolarDesign}
            alt="Solar System"
            className="h-full max-h-[45rem] w-full object-fill object-center sm:max-h-[50rem]"
            loading="lazy"
          />
        </div>
        <div className="flex h-full w-full flex-col items-center space-y-10 py-5 ss:space-y-3 md:space-y-12">
          <div
            data-aos="zoom-in"
            data-aos-delay="1000"
            className="card_3 flex transform cursor-pointer justify-around gap-2 duration-300 ease-in-out hover:scale-105 hover:bg-cardBg hover:shadow-md hover:shadow-black"
          >
            <div className="w-[30%]">
              <img
                src={waterHeater}
                alt="solar img"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="card__content w-[70%]">
              <h4 className="card_title">Solar Water Heaters</h4>
              <p className="card_description">
                Solar Water Heaters cut annual hot water costs by 70% and are
                supplied and installed in Kenya.
              </p>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="1100"
            className="card_4 flex transform cursor-pointer justify-around gap-2 duration-300 ease-in-out hover:scale-105 hover:bg-cardBg hover:shadow-md hover:shadow-black"
          >
            <div className="w-[30%]">
              <img
                src={Bulb}
                alt="solar img"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="card__content w-[70%]">
              <h4 className="card_title"> Solar Water Pumps </h4>
              <p className="card_description">
                The ideal solution for water supply and pumping in remote Kenyan
                areas aims to ensure water availability everywhere.
              </p>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="1200"
            className="card_5 flex transform cursor-pointer justify-around gap-2 duration-300 ease-in-out hover:scale-105 hover:bg-cardBg hover:shadow-md hover:shadow-black"
          >
            <div className="w-[30%]">
              <img
                src={Pump}
                alt="solar img"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="card__content w-[70%]">
              <h4 className="card_title"> Solar Lights</h4>
              <p className="card_description">
                Solar lights are eco-friendly, easy to install, and provide
                significant illumination; we supply Solar LED Lights in Kenya.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurSolutions;
