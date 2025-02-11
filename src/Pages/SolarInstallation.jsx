import { useEffect } from "react";
import WaterHeaterHero from "../Components/SolarWaterHeaters/WaterHeaterHero";

import WhyInstallationService from "../Components/SolarInstallation/WhyInstallationService";
import ServicesOfferings from "../Components/SolarInstallation/ServicesOfferings";
import { motion } from "framer-motion";
import InstallationHero from "../Components/SolarInstallation/InstallationHero";
import InstallationProcess from "../Components/SolarInstallation/InstallationProcess";
import DevicesAndGadgets from "../Components/SolarInstallation/DevicesAndGadgets";
import TechnicalSpecification from "../Components/SolarInstallation/TechnicalSpecification";
import Testimonials from "../Components/SolarInstallation/Testimonials";
import SavingsCalculator from "../Components/SolarInstallation/SavingsCalculator";
import CTA from "../Components/SolarInstallation/CTA";
import AccordionSection from "../Components/SolarInstallation/AccorionSection";
import { Helmet } from "react-helmet-async";

function SolarInstallation() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <motion.section
      className="h-auto w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Helmet>
        <title>Solar installation services | Solar Point System</title>
        <meta
          name="description"
          content="Discover our range of solar water heaters designed for efficiency and reliability. Explore solutions that meet all your water heating needs with solar energy."
        />
        <link
          rel="canonical"
          href="https://solarpointsystemsea.co.ke/solarwaterheaters"
        />
        <meta
          property="og:title"
          content="Solar Water Heaters | Solar Point System"
        />
        <meta
          property="og:description"
          content="Efficient and reliable solar water heaters for all your hot water needs. Learn more about our products and how they can save you energy and money."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://solarpointsystemsea.co.ke/solarwaterheaters"
        />
      </Helmet>
      <InstallationHero />
      <WhyInstallationService />
      <ServicesOfferings />
      <InstallationProcess />
      <DevicesAndGadgets />
      <TechnicalSpecification />
      <Testimonials />
      <SavingsCalculator />
      <AccordionSection />
      <CTA />
    </motion.section>
  );
}

export default SolarInstallation;
