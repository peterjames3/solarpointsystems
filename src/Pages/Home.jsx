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
import JsonLd from "../Components/JsonLd";

function Home() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // JSON-LD Schema for the Homepage
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "SolarPointSystemsE.A",
    url: "https://solarpointsystemsea.co.ke/",
    logo: "https://solarpointsystemsea.co.ke/assets/Spm.svg",
    description:
      "Expert solar energy solutions provider in Kenya, specializing in solar panel installation, off-grid and on-grid solar systems, solar water heating, backup power solutions, and long-term solar maintenance services for homes and businesses.",
    telephone: "+254 703704062 ",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Solar Street",
      addressLocality: "Nairobi",
      addressRegion: "Kenya",
      postalCode: "00100",
      addressCountry: "KE",
    },
    sameAs: [
      "https://www.instagram.com/solarpoint_systems_e.a?igsh=MXc5bTN0Mnk1a3g5dw==",
      "https://web.facebook.com/profile.php?id=61557063135392",
      "https://x.com/Solarsystems_1",
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
    image: "https://solarpointsystemsea.co.ke/assets/hero-2.webp",
  };

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
      {/* Inject JSON-LD Schema */}
      <JsonLd schema={businessSchema} />

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
