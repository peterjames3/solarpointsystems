import AboutUsHero from "../Components/About/AboutUsHero";
import OurCoreService from "../Components/About/OurCoreService";
import Mission from "../Components/About/Mission";
import CompletedProject from "../Components/About/CompletedProject";
import "aos/dist/aos.css";
import OurAchievements from "../Components/About/OurAchievements";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";


function Aboutus() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <motion.section
      className="mx-auto w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Helmet>
        <title>Solar Point Systems | About Us</title>
        <meta
          name="description"
          content="Discover the story behind solarPointsystems W.A, our core services, our mission, completed projects, and our achievements."
        />
        <link rel="canonical" href="https://solarpointsystemsea.co.ke/about" />
        {/* Open Graph tags */}
        <meta property="og:title" content="Solar Point Systems | About Us" />
        <meta
          property="og:description"
          content="Discover the story behind solarPointsystems, our core services, our mission, completed projects, and our achievements."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://solarpointsystemsea.co.ke/about"
        />
    
        {/* Replace with the correct image URL */}
      </Helmet>
      <AboutUsHero />
      <OurCoreService />
      <Mission />
      <CompletedProject />
      {/*  <Team /> */}
      <OurAchievements />
    </motion.section>
  );
}

export default Aboutus;
