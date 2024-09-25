import WaterHeaterHero from "../Components/WaterHeaterHero";
import WaterHeaterMain from "../Components/WaterHeaterMain";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

function SolarWaterHeaters() {
  return (
    <motion.section
      className="h-auto w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Helmet>
        <title>Solar Water Heaters | Solar Point System</title>
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
      <WaterHeaterHero />
      <WaterHeaterMain />
    </motion.section>
  );
}

export default SolarWaterHeaters;
