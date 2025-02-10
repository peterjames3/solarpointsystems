import SolarPanel from "../../assets/solar-installation2.webp";


import factory from "../../assets/factory.webp";
import Resident from "../../assets/solarization1.webp";
import commercial from "../../assets/solarInstallation.webp";
import { CiCircleCheck } from "react-icons/ci";

import AboutUsButton from "../AboutUsButton";

import "aos/dist/aos.css";

function Aboutus() {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="3000"
      className="wrapper px-2"
    >
      <section className="flex w-full flex-col items-center space-y-3 overflow-hidden pb-4 font-poppins">
        <h3 className="pt-9 text-center font-poppins text-3xl font-bold text-black">
          About Us
        </h3>
        <hr className="w-[10rem] rounded border-b-[3px] border-textColor" />
        <h4 className="text-center text-2xl font-medium">
          {" "}
          Best Solar Power Company in Kenya
        </h4>
      </section>
      <div className="w-full items-start justify-between space-y-10 sm:flex sm:space-y-0">
        <div className="space-y-4 pt-2 font-poppins sm:w-1/2">
          <h3
            className="text-[1.1rem] font-medium text-brandC"
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            Powering Kenya's Sustainable Future
          </h3>
          <h4 className="text-3xl font-semibold">
            Since 2014, we've been at the forefront of Kenya's solar energy
            revolution, bringing reliable and affordable clean energy solutions
            to homes and businesses.
          </h4>
        </div>
        <div className="space-y-2 font-poppins text-xl sm:w-1/2">
          <p>
            SolarPointSystems E.A is committed to helping Kenyans access
            affordable, reliable, and clean energy through solar power
            solutions. Whether you're looking to reduce electricity costs, power
            your business, or go completely off-grid, we've got you covered.
          </p>
          <AboutUsButton />
        </div>
      </div>

      <div className="mx-auto mt-4 grid w-full grid-cols-1 gap-4 font-Rubik sm:grid-cols-2 sm:gap-3 md:flex md:grid-cols-3 lg:flex">
        <div className="relative h-[26.2rem] w-full flex-grow overflow-hidden rounded-md bg-gradient-to-r from-slate-800 to-gray-600 md:h-[26.7rem] md:w-[32%]">
          <img
            src={Resident}
            alt="solar in house holds"
            loading="lazy"
            className="h-full w-full object-cover mix-blend-overlay"
          />

          <div className="transform[-translate-x-1/2] absolute left-[50%] top-[60%] h-full w-full cursor-pointer space-y-5 bg-dimWhite pb-6 pt-3 text-center text-white transition-all duration-500 ease-in-out hover:left-0 hover:top-0 hover:translate-y-0 hover:scale-100">
            {" "}
            <h4 className="font-Rubik text-xl font-semibold text-brandC underline underline-offset-2">
              Residential Solar Solutions
            </h4>
            <p className="font-medium text-black">
              Our Smart Home system ensures that the solar power you produce me
              your need. You can cover an especially large portion of your
              energy needs and gain greater independence, for example from
              rising energy costs.
            </p>
            <div className="flex flex-col px-6 text-start text-brandD">
              <div className="flex flex-row items-center">
                <span className="px-2">
                  <CiCircleCheck aria-label="Feature checked" />
                </span>
                <span>Reduce energy costs</span>
              </div>
              <div className="flex flex-row items-center">
                <span className="px-2">
                  <CiCircleCheck aria-label="Feature checked" />
                </span>
                <span>Increase productivity,</span>
              </div>
              <div className="flex flex-row items-center">
                <span className="px-2">
                  <CiCircleCheck aria-label="Feature checked" />
                </span>
                <span>Contribute to a cleaner environment.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-[26.2rem] w-full flex-grow overflow-hidden rounded-md bg-gradient-to-r from-slate-800 to-gray-600 md:h-[26.7rem] md:w-[32%]">
          <img
            src={commercial}
            alt="man working"
            loading="lazy"
            className="h-full w-full object-cover mix-blend-overlay"
          />

          <div className="transform[-translate-x-1/2] absolute left-[50%] top-[60%] h-full w-full cursor-pointer space-y-5 bg-dimWhite pb-6 pt-3 text-center transition-all duration-500 ease-in-out hover:left-0 hover:top-0 hover:translate-y-0 hover:scale-100">
            {" "}
            <h4 className="font-Rubik text-xl font-semibold text-brandC underline underline-offset-2">
              Commercial & Industrial Solar Solutions
            </h4>
            <p className="font-medium text-black">
              We offer a complete commercial and industrial solar solutions for
              photovoltaic integration & connection, including inverters,
              transformers and switchgear, electrical distribution, monitoring,
              supervision and technical support. This is a full solution for DC
              output to the grid connection point of common coupling.
            </p>
            <div className="flex flex-col px-6 text-start text-brandD">
              <div className="flex flex-row items-center">
                <span className="px-2">
                  <CiCircleCheck aria-label="Feature checked" />
                </span>
                <span>Reduce energy costs</span>
              </div>
              <div className="flex flex-row items-center">
                <span className="px-2">
                  <CiCircleCheck aria-label="Feature checked" />
                </span>
                <span>Increase productivity,</span>
              </div>
              <div className="flex flex-row items-center">
                <span className="px-2">
                  <CiCircleCheck aria-label="Feature checked" />
                </span>
                <span>Contribute to a cleaner environment.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-[26.2rem] w-full flex-grow overflow-hidden rounded-md bg-gradient-to-r from-slate-800 to-gray-700 md:h-[26.7rem] md:w-[32%]">
          <img
            src={factory}
            alt="solar panel in factory setup"
            loading="lazy"
            className="h-full w-full object-cover mix-blend-overlay"
          />
          <div className="transform[-translate-x-1/2] absolute left-[50%] top-[60%] h-full w-full cursor-pointer space-y-5 bg-dimWhite pb-6 pt-3 text-center transition-all duration-500 ease-in-out hover:left-0 hover:top-0 hover:translate-y-0 hover:scale-100">
            <h4 className="font-Rubik text-xl font-semibold text-brandC underline underline-offset-2">
              Operation and Maintenance
            </h4>
            <p className="font-medium text-black">
              We provide services for repairing and upgrading existing solar
              power systems for our customers to ensure the systems meet their
              power demand and increase their days of autonomy. This service is
              crucial for clients looking to optimize their solar investments
            </p>
            <div className="flex flex-col px-6 text-start text-brandD">
              <div className="flex flex-row items-center">
                <span className="px-2">
                  <CiCircleCheck aria-label="Feature checked" />
                </span>
                <span>Reduce energy costs</span>
              </div>
              <div className="flex flex-row items-center">
                <span className="px-2">
                  <CiCircleCheck aria-label="Feature checked" />
                </span>
                <span>Increase productivity,</span>
              </div>
              <div className="flex flex-row items-center">
                <span className="px-2">
                  <CiCircleCheck aria-label="Feature checked" />
                </span>
                <span>Contribute to a cleaner environment.</span>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-[28.7rem] w-full flex-grow overflow-hidden rounded-md bg-gradient-to-r from-slate-800 to-gray-600 md:h-[26.7rem] md:w-[32%]">
          <img
            src={SolarPanel}
            alt="solar panel"
            loading="lazy"
            className="h-full w-full object-cover mix-blend-overlay"
          />
          <div className="transform[-translate-x-1/2] absolute left-[50%] top-[60%] h-full w-full cursor-pointer space-y-5 bg-dimWhite pb-6 pt-3 text-center transition-all duration-500 ease-in-out hover:left-0 hover:top-0 hover:translate-y-0 hover:scale-100">
            <h4 className="font-Rubik text-xl font-semibold text-brandC underline">
              Solar Panels
            </h4>
            <p className="font-medium text-black">
              Solar panels are a cornerstone of renewable energy technology,
              allowing for the direct conversion of sunlight into electricity.
              They play a crucial role in the global shift towards sustainable
              energy sources, offering a clean. fossil fuels. They different
              types including:
            </p>
            <div className="flex flex-col space-y-4 px-6 text-start text-brandD">
              <div className="flex flex-row items-center">
                <span className="px-2">
                  <CiCircleCheck aria-label="Feature checked" />
                </span>
                <span>Monocrystalline Solar Panels</span>
              </div>
              <div className="flex flex-row items-center">
                <span className="px-2">
                  <CiCircleCheck aria-label="Feature checked" />
                </span>
                <span>Polycrystalline Solar Panels</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutus;
