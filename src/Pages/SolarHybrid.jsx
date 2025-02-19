import HybridHero from "../Components/SolarHybrid/HybridHero";
import Hybridmain from "../Components/SolarHybrid/Hybridmain";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

function SolarHybrid() {
  return (
    <motion.section
      className="h-auto w-full bg-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Helmet>
        <title>Solar Hybrid Solutions | Solar Point System</title>
        <meta
          name="description"
          content="Explore our advanced solar hybrid solutions for a seamless integration of renewable energy. Optimize your energy usage with Solar Point System."
        />
        <meta
          name="keywords"
          content="Solar Hybrid, Renewable Energy, Hybrid Solutions, Solar Energy, Energy Efficiency, Sustainable Power"
        />
        <link
          rel="canonical"
          href="https://solarpointsystemsea.co.ke/solarhybrid"
        />
        <meta
          property="og:title"
          content="Solar Hybrid Solutions | Solar Point System"
        />
        <meta
          property="og:description"
          content="Discover innovative solar hybrid solutions by Solar Point System, integrating renewable energy for optimal efficiency and sustainability."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://solarpointsystemsea.co.ke/solarhybrid"
        />
      </Helmet>
      <HybridHero />
      <Hybridmain />
    </motion.section>
  );
}

export default SolarHybrid;
