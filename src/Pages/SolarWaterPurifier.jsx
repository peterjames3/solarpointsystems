import SolarWaterPurifiers from "../Components/ SolarWaterPurifierIntro";
import SolarWaterPurifierHero from "../Components/SolarWaterPurifierHero";
import SolarWaterPurifierMain from "../Components/SolarWaterPurifierMain";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const SolarWaterPurifier = () => {
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
          property="og:description"
          content="Discover our solar water purifiers, a clean and sustainable way to filter water using solar energy. Perfect for residential, commercial, and industrial settings."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://yourdomain.com/solarwaterpurifiers" // replace with your actual URL
        />
        <meta
          property="og:image"
          content="https://yourdomain.com/images/solar-water-purifier.jpg" // replace with a relevant image URL
        />
      </Helmet>
      <SolarWaterPurifiers />
      <SolarWaterPurifierMain />
      <SolarWaterPurifierHero />
    </motion.section>
  );
};

export default SolarWaterPurifier;
