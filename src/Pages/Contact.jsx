import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import ContactHero from "../Components/ContactHero";
import OurContact from "../Components/OurContact";
import ContactForm from "../Components/ContactForm";
import { motion } from "framer-motion";
import AccordionSection from "../Components/AccordionSection";
import { useLocation } from "react-router-dom";

function Contact() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <motion.section
      className="w-full bg-gray-100"
      intial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Helmet>
        <title>SolarPoint Systems | Contact Us</title>
        <meta
          name="description"
          content="Get in touch with solarPointsystem. Find contact details, our location on the map, and read our FAQ section for more information."
        />
        <link
          rel="canonical"
          href="https://solarpointsystemsea.co.ke/contact"
        />
      </Helmet>
      <ContactHero />
      <OurContact />
      <ContactForm />
      <AccordionSection />
    </motion.section>
  );
}

export default Contact;
