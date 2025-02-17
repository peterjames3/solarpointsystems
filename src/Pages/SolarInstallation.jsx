import { useEffect } from "react";
import WaterHeaterHero from "../Components/SolarWaterHeaters/WaterHeaterHero";
import JsonLd from "../Components/JsonLd";
import WhyInstallationService from "../Components/SolarInstallation/WhyInstallationService";
import ServicesOfferings from "../Components/SolarInstallation/ServicesOfferings";
import { motion } from "framer-motion";
import InstallationHero from "../Components/SolarInstallation/InstallationHero";
import InstallationProcess from "../Components/SolarInstallation/InstallationProcess";
import DevicesAndGadgets from "../Components/SolarInstallation/DevicesAndGadgets";
import TechnicalSpecification from "../Components/SolarInstallation/TechnicalSpecification";
import Testimonials from "../Components/SolarInstallation/Testimonials";
import SavingsCalculator from "../Components/SolarInstallation/SavingsCalculator";
import CTA from "../Components/SolarInstallation/CTA";
import { MaintenanceServices } from "../Components/SolarInstallation/MaintenanceService";
import AccordionSection from "../Components/SolarInstallation/AccorionSection";
import { Helmet } from "react-helmet-async";

function SolarInstallation() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // JSON-LD Schema for Solar Installation and Maintenance Page
  const solarInstallationSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Solar Installation & Maintenance Services in Kenya",
    provider: {
      "@type": "LocalBusiness",
      name: "SolarPointSystemsE.A",
      url: "https://solarpointsystemsea.co.ke/",
      logo: "https://solarpointsystemsea.co.ke/assets/Spm.svg",
      description:
        "Expert solar energy solutions provider offering professional and affordable solar installation and maintenance services in Kenya. We specialize in solar panel installation, battery storage, system upgrades, and ongoing maintenance for homes, businesses, NGOs, and government institutions.",
      telephone: "+254 703704062",
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
    },
    serviceType: "Solar Installation & Maintenance",
    areaServed: {
      "@type": "Country",
      name: "Kenya",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "KES",
      price: "Request a Quote",
      url: "https://solarpointsystemsea.co.ke/solar-installation-maintenance",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Our Service Offerings",
      itemListElement: [
        {
          "@type": "Service",
          name: "Residential Solar Installation",
          description:
            "Custom solar solutions for homes, including design, installation, and smart monitoring.",
          serviceType: "Solar Installation",
          provider: {
            "@type": "LocalBusiness",
            name: "SolarPointSystemsE.A",
          },
        },
        {
          "@type": "Service",
          name: "Commercial Solar Solutions",
          description:
            "Large-scale solar systems for businesses with ROI optimization and energy consumption analysis.",
          serviceType: "Solar Installation",
          provider: {
            "@type": "LocalBusiness",
            name: "SolarPointSystemsE.A",
          },
        },
        {
          "@type": "Service",
          name: "Solar Battery Storage",
          description:
            "Advanced energy storage solutions for continuous power supply and backup power management.",
          serviceType: "Energy Storage",
          provider: {
            "@type": "LocalBusiness",
            name: "SolarPointSystemsE.A",
          },
        },
        {
          "@type": "Service",
          name: "Solar Maintenance & Support",
          description:
            "Regular maintenance, inspections, and system performance optimization to maximize efficiency.",
          serviceType: "Solar Maintenance",
          provider: {
            "@type": "LocalBusiness",
            name: "SolarPointSystemsE.A",
          },
        },
      ],
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Solar Panel Efficiency",
        value: "Up to 22%",
      },
      {
        "@type": "PropertyValue",
        name: "Inverter Efficiency",
        value: "98%",
      },
      {
        "@type": "PropertyValue",
        name: "Warranty for Solar Panels",
        value: "25 Years",
      },
      {
        "@type": "PropertyValue",
        name: "Warranty for Inverters",
        value: "10 Years",
      },
    ],
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Mary Mwende",
        },
        reviewBody:
          "The installation was quick and professional. We're seeing significant savings on our energy bills.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Martin A",
        },
        reviewBody:
          "Excellent service from start to finish. The team was knowledgeable and efficient.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "James Chege",
        },
        reviewBody:
          "Great investment for our properties. The installation team was professional and thorough.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
      },
    ],
  };

  return (
    <motion.section
      className="h-auto w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Helmet>
        <title>Solar installation services | Solar Point System</title>
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
      {/* Inject JSON-LD Schema */}
      <JsonLd schema={solarInstallationSchema} />
      <InstallationHero />
      <WhyInstallationService />
      <ServicesOfferings />
      <InstallationProcess />
      <DevicesAndGadgets />
      <MaintenanceServices />
      <TechnicalSpecification />
      <Testimonials />
      <SavingsCalculator />
      <AccordionSection />
      <CTA />
    </motion.section>
  );
}

export default SolarInstallation;
