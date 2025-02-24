import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import JsonLd from "../JsonLd";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";

function AccordionSection() {
  const solarInstallationFAQSSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does it cost to install a solar system in Kenya?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The cost of installing a solar system in Kenya depends on various factors, including the size of the system, the type of solar panels and batteries, and the installation complexity. A basic solar home system can cost between KSh 50,000 and KSh 150,000, while larger systems for businesses or industrial use can range from KSh 200,000 to KSh 1,000,000 or more.",
        },
      },
      {
        "@type": "Question",
        name: "Can I completely go off-grid with solar power?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, you can go completely off-grid by installing a solar system with battery storage. However, the feasibility depends on your energy consumption, available roof space for panels, and budget. Many people opt for hybrid systems that combine solar with grid power for backup.",
        },
      },
      {
        "@type": "Question",
        name: "How many solar panels do I need?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The number of panels you need depends on your monthly electricity consumption, the sunlight hours in your area, and the wattage of the panels. A professional installer can help assess your energy needs and recommend the right system size.",
        },
      },
      {
        "@type": "Question",
        name: "Can I add or scale my system later?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes you can add solar panels and batteries to your system but you require to have that in mind when procuring the original equipment.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use solar power to run heavy appliances like fridges, ACs, and water pumps?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, you can use the above appliances as long as the sizing of the system was factored in during the design. However, for hot water heating, we recommend a solar thermal hot water system for water heating.",
        },
      },
    ],
  };
  return (
    <section className="mx-auto my-4 h-auto max-w-5xl">
      <JsonLd schema={solarInstallationFAQSSchema} />
      <h3 className="py-6 text-center text-3xl font-semibold">
        Frequently Asked Questions (FAQs) About Solar Installation
      </h3>
      <Accordion className="w-full">
        <AccordionItem>
          <AccordionItemHeading className="text-2xl font-semibold">
            <AccordionItemButton>
              How much does it cost to install a solar system in Kenya?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p className="text-xl">
              The cost of installing a solar system in Kenya depends on various
              factors, including the size of the system, the type of solar
              panels and batteries, and the installation complexity. A basic
              solar home system can cost between KSh 50,000 and KSh 150,000,
              while larger systems for businesses or industrial use can range
              from KSh 200,000 to KSh 1,000,000 or more.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading className="text-2xl font-bold">
            <AccordionItemButton>
              Can I completely go off-grid with solar power?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p className="text-xl">
              Yes, you can go completely off-grid by installing a solar system
              with battery storage. However, the feasibility depends on your
              energy consumption, available roof space for panels, and budget.
              Many people opt for hybrid systems that combine solar with grid
              power for backup.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading className="text-2xl font-bold">
            <AccordionItemButton>
              How many solar panels do I need?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p className="text-xl">
              The number of panels you need depends on your monthly electricity
              consumption, the sunlight hours in your area, and the wattage of
              the panels. A professional installer can help assess your energy
              needs and recommend the right system size.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading className="text-2xl font-bold">
            <AccordionItemButton>
              Can I add or scale my system later?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p className="text-xl">
              Yes you can add solar panels and batteries to your system but you
              require to have that in mind when procuring the original
              equipment.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading className="text-2xl font-bold">
            <AccordionItemButton>
              Can I use solar power to run heavy appliances like fridges, ACs,
              and water pumps?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p className="text-xl">
              Yes, you can use the above appliances as long as the sizing of the
              system was factored in during the design. However, for hot water
              heating, we recommend a solar thermal hot water system for water
              heating.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading className="text-2xl font-bold">
            <AccordionItemButton>
              Do solar panels work during cloudy or rainy days?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p className="text-xl">
              Yes, solar panels can still generate electricity on cloudy or
              rainy days, but at a reduced efficiency (typically 10% - 25% of
              peak capacity). Battery storage can help maintain a steady power
              supply during low sunlight periods.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </section>
  );
}

export default AccordionSection;
