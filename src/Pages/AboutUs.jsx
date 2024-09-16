import AboutUsHero from "../Components/AboutUsHero";
import OurCoreService from "../Components/OurCoreService";
import Mission from "../Components/Mission";
import CompletedProject from "../Components/CompletedProject";
import "aos/dist/aos.css";
import OurAchievements from "../Components/OurAchievements";
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
        <link rel="canonical" href="https://kimgym.netlify.app/about-us" />
        {/* Open Graph tags */}
        <meta property="og:title" content="Solar Point Systems | About Us" />
        <meta
          property="og:description"
          content="Discover the story behind solarPointsystems, our core services, our mission, completed projects, and our achievements."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kimgym.netlify.app/about-us" />
        <meta
          property="og:image"
          content="https://kimgym.netlify.app/images/about-us-hero.jpg"
        />{" "}
        {/* Replace with the correct image URL */}
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Solar Point Systems | About Us" />
        <meta
          name="twitter:description"
          content="Discover the story behind solarPointsystems, our core services, our mission, completed projects, and our achievements."
        />
        <meta
          name="twitter:image"
          content="https://kimgym.netlify.app/images/about-us-hero.jpg"
        />{" "}
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
