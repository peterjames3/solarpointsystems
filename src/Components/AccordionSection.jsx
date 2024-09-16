import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

function AccordionSection() {
  return (
    <section className="max-w-5xl my-4 mx-auto h-auto">
        <h3 className=" font-semibold text-4xl text-center py-6">Frequently asked questions on solar panel</h3>
       <Accordion className="w-full">
            <AccordionItem>
                <AccordionItemHeading className="text-2xl font-bold font-poppins ">
                    <AccordionItemButton>
                        What is the payback period of a solar system?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className="text-xl font-Rubik ">
                    The payback period depends on many factor wether you have a battery back up and the type, how often you use the system , the type of equipment you purchased but typically 3-4 years for domestic systems.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading className="text-2xl font-bold font-poppins ">
                    <AccordionItemButton>
                        How long will my solar panel last?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className="text-xl font-Rubik">
                    Solar panels have a lifespan of 25 to 40 years and should be able to pay back the cost of the system and run for decades longer giving you free energy from the Sun.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading className="text-2xl font-bold font-poppins ">
                    <AccordionItemButton>
                    What happens to my solar system when It rains? will it still generate power?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className="text-xl font-Rubik">
                    Solar pv systems require light not heat to generate electricity however, the ammount is reduced due to reduced radiation that is why you require a battery back up and days of autonomy factored in the system to cover for that so you will still have electricity.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading className="text-2xl font-bold font-poppins ">
                    <AccordionItemButton>
                    Can I add or scale my system later?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className="text-xl font-Rubik">
                    Yes you can add solar panels and batteries to your system but you require to have that in mind when procuring the original equipment.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading className="text-2xl font-bold font-poppins ">
                    <AccordionItemButton>
                    Can I use a fridge, microwave, blender or iron box with my system?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className="text-xl font-Rubik">
                    Yes, you can use the above appliances as long as the sizing of the system was factored in during the design. However, for hot water heating, we recommend a solar thermal hot water system for water heating. 
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    </section>
  )
}

export default AccordionSection
