import SolarWaterPurifiers from "../Components/SolarWaterPurifier/ SolarWaterPurifierIntro";
import SolarWaterPurifierHero from "../Components/SolarWaterPurifier/SolarWaterPurifierHero";
import SolarWaterPurifierMain from "../Components/SolarWaterPurifier/SolarWaterPurifierMain";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const SolarWaterPurifier = () => {
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
        <title>Solar Water Purifiers | Solar Point System</title>
        <meta
          name="description"
          content="Explore advanced solar water purifiers designed for efficiency and sustainability. Learn how our solar-powered water filtration systems ensure safe, clean drinking water while reducing energy costs."
        />
        <meta
          property="og:title"
          content="Solar Water Purifiers | Solar Point System"
        />
        <meta
          name="keywords"
          content="solar water purifier, solar powered water filtration, solar energy, water filtration, sustainable water, energy efficiency"
        />
        <link
          rel="canonical"
          href="https://solarpointsystemsea.co.ke/solarwaterpurifier"
        />
        <meta
          property="og:description"
          content="Discover our solar water purifiers, a clean and sustainable way to filter water using solar energy. Perfect for residential, commercial, and industrial settings."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://solarpointsystemsea.co.ke/solarwaterpurifier"
        />
        <meta
          property="og:image"
          content="https://yourdomain.com/images/solar-water-purifier.jpg" 
                 />
      </Helmet>
      <SolarWaterPurifiers />
      <SolarWaterPurifierMain />
      <SolarWaterPurifierHero />
    </motion.section>
  );
};

export default SolarWaterPurifier;
