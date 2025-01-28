import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Header from "../Components/Navbar";
import Hero from "../Components/Home /Hero";
import WhyUs from "../Components/Home /WhyUs";
import Aboutsec from "../Components/Home /Aboutsec";
import Blogsec from "../Components/Home /Blogsec";
import ProductsSlider from "../Components/Home /ProductsSlider";
import Projects from "../Components/Home /Projects";
import Testimonials from "../Components/Home /Testimonial";
import Industryweserve from "../Components/Home /Industryweserve";
import SolarSystem from "../Components/Home /SolarSystem";
import OurSolutions from "../Components/Home /OurSolutions";
import Whychoosesolar from "../Components/Home /Whychoosesolar";

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
        <title>
          SolarPoint Systems - Your Reliable solar energy solution expert
        </title>
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
