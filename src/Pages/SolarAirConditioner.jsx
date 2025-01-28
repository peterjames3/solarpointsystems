import SolarAirConditionerIntro from "../Components/SolarAirConditioner/SolarAirConditionerIntro";
import SolarAirConditionerHero from "../Components/SolarAirConditioner/ SolarAirConditionerHero";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const SolarAirConditioner = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Helmet>
        <title>Solar Air Conditioners | Solar Point System</title>
        <meta
          name="description"
          content="Explore our range of solar air conditioners, designed to efficiently cool and heat your space using solar energy. Reduce energy costs while helping the environment."
        />
        <link
          rel="canonical"
          href="https://solarpointsystemsea.co.ke/solarairconditioner"
        />
        <meta
          property="og:title"
          content="Solar Air Conditioners | Solar Point System"
        />
        <meta
          property="og:description"
          content="Discover how solar air conditioners can help reduce energy costs while providing reliable cooling and heating. Learn more about our hybrid and off-grid solar air conditioning solutions."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://solarpointsystemsea.co.ke/solarairconditioner"
        />
      </Helmet>
      <SolarAirConditionerIntro />
      <SolarAirConditionerHero />
    </motion.section>
  );
};

export default SolarAirConditioner;
