import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Header from "../Components/Navbar";
import Hero from "../Components/Hero";
import WhyUs from "../Components/WhyUs";
import Aboutsec from "../Components/Aboutsec";
import Blogsec from "../Components/Blogsec";
import ProductsSlider from "../Components/ProductsSlider";
import Projects from "../Components/Projects";
import Testimonials from "../Components/Testimonial";
import Industryweserve from "../Components/Industryweserve";
import SolarSystem from "../Components/SolarSystem";
import OurSolutions from "../Components/OurSolutions";
import Whychoosesolar from "../Components/Whychoosesolar";

function Home() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Helmet>
        <title>SolarPointSystems - Your Reliable Energy Partner</title>
        <meta
          name="description"
          content="Explore our comprehensive solar power solutions tailored to meet your energy needs. Learn why choosing solar is a smart decision and discover the advantages we offer."
        />
        <link rel="canonical" href="https://solarpointsystemsea.co.ke/" />
        {/* Open Graph tags */}
        <meta
          property="og:title"
          content="SolarPoint - Your Reliable Energy Partner"
        />
        <meta
          property="og:description"
          content="Explore our comprehensive solar power solutions tailored to meet your energy needs. Learn why choosing solar is a smart decision and discover the advantages we offer."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://solarpointsystemsea.co.ke/" />
      </Helmet>
      <Header title="Solar Power Solutions" />
      <Hero />
      <Whychoosesolar />
      <WhyUs />
      <Aboutsec />
      <ProductsSlider />
      <OurSolutions />
      <Projects />
      <SolarSystem />
      <Industryweserve />
      <Testimonials />
      <Blogsec />
    </motion.div>
  );
}

export default Home;
