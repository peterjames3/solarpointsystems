import { useState } from "react";
import Airportimg from "../assets/solarInstallation.webp";
import "aos/dist/aos.css";
import QuotationModal from "./QuotationModal";

function Industryweserve() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

  return (
    <section className="w-full">
      <div className="flex w-full flex-col items-center space-y-3 pb-4 font-poppins">
        <h3 className="font-Poppins pt-9 text-center text-3xl font-bold text-black">
          Switch Today
        </h3>
        <hr className="w-[10rem] rounded border-b-[3px] border-blue-700" />
        <h4 className="text-center text-4xl font-medium">
          {" "}
          Switch to solar in four easy steps
        </h4>
      </div>

      <section className="w-full bg-cardBg">
        <div className="mx-auto flex min-h-8 max-w-[1700px] flex-col-reverse gap-0 py-7 sm:px-10 md:flex-row md:gap-2">
          <div className="row flex w-full items-center justify-center gap-2 md:w-[70%]">
            <div
              data-aos="fade-up"
              data-aos-delay="1200"
              data-aos-offset="50"
              className="flex h-full w-1/2 flex-col items-center bg-gray-200 py-7"
            >
              <ul className="text-brabdC grid list-none grid-cols-1 items-baseline justify-center space-y-2 divide-y-2 divide-gray-500 font-poppins text-brandD font-semibold">
                <li className="">01. Get In Touch</li>
                <li className="py-3 ">
                  02. Consultance
                </li>
                <li className="py-3 ">
                  03. Design and Installation
                </li>
                <li className="py-3">
                  0.4 Solar On
                </li>
                <li className="py-3 ">
                  05. Management
                </li>
              </ul>
            </div>
            <div className="w-1/2 space-y-2 p-2 md:space-y-4 md:py-7">
              <h3 className="font-Roboto font-semibold text-gray-500">01</h3>
              <h4 className="font-mediun font-poppins font-semibold text-brandC md:text-3xl">
                Solar Power at everywhere!
              </h4>
              <p className="font-Rubik md:text-[1.1rem]">
                {" "}
                01. Few minutes on the phone with one of our experienced solar
                energy consultant is all it takes for begin.{" "}
              </p>
              <p className="font-Rubik md:text-[1.1rem]">
                02. We&apos;ll design a custome solar energy system that fits
                your electricity needs.
              </p>
              <p className="font-Rubik md:text-[1.1rem]">
                03. Turn on your new solar energy system then sit back and watch
                the saving add up!
              </p>
              <p className="md:text-[1.1rem]">
                04. We even monitor the systems remotely and take up full
                maintenance for best performance.
              </p>
              <button
                onClick={handleOpen}
                aria-label='Get a Quote'
                type="button" 
                className="btn font-semibold transition-all delay-300 hover:text-white focus:ring-1 focus:ring-brandC"
              >
                Get Quote
              </button>
              <div className="h-1">
                <QuotationModal isOpen={isOpen} onClose={handleClose} />
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="1200"
            data-aos-offset="50"
            className="flex-grow-1 relative w-full bg-gradient-to-r from-slate-800 to-gray-500 md:w-[49%]"
          >
            <img
              src={Airportimg}
              alt="solar at airport"
              loading="lazy"
              className="h-full w-full bg-cover mix-blend-overlay"
            />
            <div className="absolute top-[40%] w-full divide-y-2 divide-slate-300 bg-transparent px-3 md:top-[60%]">
              <nav className="mb-2 flex flex-row items-center justify-between text-white">
                <h3 className="font-poppins text-xl font-semibold">
                  Installition in Process
                </h3>
                <h4 className="text-3xl font-thin">01</h4>
              </nav>
              <div className="flex flex-row items-center justify-between px-2 font-Rubik">
                <nav className="w-1/2">
                  <h4 className=" font-thin text-white">investors</h4>
                  <p className="font-semibold text-white">
                    15 x Fronius Eco 27kW
                  </p>
                </nav>
                <nav className="w-1/2">
                  <h4 className=" font-thin text-white">Panels</h4>
                  <p className="font-semibold text-white">
                    1330 x 355W Solar Panels
                  </p>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Industryweserve;
