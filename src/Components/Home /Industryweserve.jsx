import { useState } from "react";
import Airportimg from "../../assets/solarInstallation.webp";
import "aos/dist/aos.css";
import QuotationModal from "../QuotationModal";
import { SolarSolutionCarousel } from "./SolarSolutionCarousel";
import  Benefits  from "./Benefits";

function Industryweserve() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);
  // <button
  //   onClick={handleOpen}
  //   aria-label="Get a Quote"
  //   type="button"
  //   className="btn font-semibold transition-all delay-300 hover:text-white focus:ring-1 focus:ring-brandC"
  // >
  //   Get Quote
  // </button>;

  return (
    <section className="w-full bg-cardBg">
      <header className="flex w-full flex-col items-center space-y-3 pb-4 font-poppins text-center">
        <h3 className="font-Poppins pt-9 text-center text-3xl font-bold text-black">
          Switching to solar power in Kenya
        </h3>
        <hr className="w-[10rem] rounded border-b-[3px] border-blue-700" />
         <p className="text-gray-600 max-w-2xl mx-auto text-center font-medium text-2xl">
          Explore the perfect solar solution for your home and make the switch
          to solar power with our comprehensive guide.
        </p>
      </header>
      <div className="max-w-[1400px] mx-auto py-8">
        <SolarSolutionCarousel />
        <Benefits />
      </div>

    
    </section>
  );
}

export default Industryweserve;
