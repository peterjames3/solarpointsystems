import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import WaterPumpHero from "../Components/SolarWaterPump/WaterPumpHero";
import WaterPumpmain from "../Components/SolarWaterPump/WaterPumpmain";
import UseCasesSection from "../Components/SolarWaterPump/UseCasesSection";
import SolarWaterPumps from "../Components/SolarWaterPump/SolarWaterPumps";
import SolutionsSection from "../Components/SolarWaterPump/SolutionsSection";
import ProductsSection from "../Components/SolarWaterPump/ProductsSection";
import lorentzwaterpump from "../assets/lorentzwaterpump..webp";
import groundfos from "../assets/grundfoswaterpump..webp";
import roomnypumpwaterpump from "../assets/roomnypumpwaterpump..webp";
import roomnypumpwaterpump1 from "../assets/roomnypumpwaterpump1..webp";
import JsonLd from "../Components/JsonLd";
import { motion } from "framer-motion";
function SolarWaterPumpsSolutions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // JSON-LD Schema for Solar Water Pump Page
  const solarWaterPumpSchema = {
    "@context": "https://schema.org",
    "@type": ["Product", "Service"],
    name: "Solar Water Pump & Installation Services",
    description:
      "Efficient and eco-friendly solar-powered water pumps for agricultural, residential, and commercial use. We also provide professional installation and maintenance services to ensure optimal performance.",
    brand: {
      "@type": "Brand",
      name: "SolarPointSystemsE.A",
      logo: "https://solarpointsystemsea.co.ke/assets/Spm.svg",
      url: "https://solarpointsystemsea.co.ke/solarwaterpump",
    },
    image: "https://solarpointsystemsea.co.ke/assets/pump..webp",
    sku: "SWP-001",
    offers: {
      "@type": "Offer",
      priceCurrency: "KES",
      price: "Request a Quote",
      availability: "https://schema.org/InStock",
      //url: "https://solarpointsystemsea.co.ke/solar-water-pump",
      seller: {
        "@type": "Organization",
        name: "SolarPointSystemsE.A",
        url: "https://solarpointsystemsea.co.ke/",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+254 703704062",
          contactType: "sales",
          email: "solarpointsystems1@gmail.com",
        },
      },
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Pump Type",
        value: "Submersible/Surface",
      },
      {
        "@type": "PropertyValue",
        name: "Max Flow Rate",
        value: "10,000 liters/hour",
      },
      {
        "@type": "PropertyValue",
        name: "Max Head",
        value: "100 meters",
      },
      {
        "@type": "PropertyValue",
        name: "Solar Panel Efficiency",
        value: "Up to 22%",
      },
      {
        "@type": "PropertyValue",
        name: "Warranty",
        value: "5 Years",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Our Solar Water Pump Services",
      itemListElement: [
        {
          "@type": "Service",
          name: "Solar Water Pump Installation",
          description:
            "Professional installation of solar water pumps for agricultural, residential, and commercial use.",
          provider: {
            "@type": "Organization",
            name: "SolarPointSystemsE.A",
          },
        },
        {
          "@type": "Service",
          name: "Solar Water Pump Maintenance",
          description:
            "Regular maintenance and repair services to ensure your solar water pump operates efficiently.",
          provider: {
            "@type": "Organization",
            name: "SolarPointSystemsE.A",
          },
        },
      ],
    },
  };
  return (
    <motion.section
      className="h-auto w-full bg-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Helmet>
        <title>Solar Water Pump | Solar Point System</title>
        <meta
          name="description"
          content="Discover our wide range of solar water pumps, featuring submersible and surface designs. Choose from a variety of water pump models that cater to your specific needs."
        />
        <meta
          property="og:title"
          content="solar water pumps | solarPointsystems"
        />
        <meta property="og:type" content="website" />

        <link
          rel="canonical"
          href="https://solarpointsystemsea.co.ke/solarwaterpump"
        />
      </Helmet>
      {/* Inject JSON-LD Schema */}
      <JsonLd schema={solarWaterPumpSchema} />
      <WaterPumpHero />
      <SolarWaterPumps />
      <WaterPumpmain />
      <SolutionsSection />
      <ProductsSection />
      <UseCasesSection />
      
    </motion.section>
  );
}

export default SolarWaterPumpsSolutions;
