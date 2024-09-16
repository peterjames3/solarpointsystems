import waterheater1 from "./assets/waterheater1.webp"
import waterheater2 from "./assets/waterheater2.webp"
import repair1 from './assets/repair1.webp'
import repair2 from './assets/repair2.webp'
import solarInstallation1 from './assets/solar-installation1.webp'
import solarInstallation2 from './assets/solar-installation2.webp'
import solarization1 from './assets/solarization1.webp'
import solarization2 from './assets/solarization2.webp'
import Unesco from "./assets/unesco.webp";
import unesco2 from "./assets/unesco2.webp";

export default [
    {
        id: 1,
        title: "World Vision Kenya – Chesangich: Borehole Solarization Project",
        image: solarization1,
        content: "In 2023, Solarpoint System E.A. implemented a borehole solarization water pumping system at Chesangich, World Vision Kenya. This project used 15 solar panels and a 7.5 kW HANTI inverter to provide sustainable water access to the local community.",
        client: "World Vision Kenya",
        year: 2023,
        otherImage1: solarization2,
        otherImage2: solarInstallation1,
        type: 'Borehole Solarization',
        imageAlt: "Borehole solarization water pumping system with solar panels",
        otherImage1Alt: "Additional view of the solarization system",
        otherImage2Alt: "Solar panel installation at the project site"
    },
    {
        id: 2,
        title: "Solar Water Heater Installation for Homeowners in Nairobi",
        image: waterheater1,
        content: "In 2023, Solarpoint Systems E.A. installed solar water heaters for homeowners in Nairobi, providing a cost-effective and reliable solution for hot water amid rising electricity bills.",
        client: "Homeowners in Nairobi",
        year: 2023,
        otherImage1: waterheater2,
        otherImage2: waterheater1,
        type: 'Water Heater Installation',
        imageAlt: "Solar water heater installation for residential use",
        otherImage1Alt: "Additional view of the solar water heater",
        otherImage2Alt: "Solar water heater setup in Nairobi"
    },
    {
        id: 3,
        title: "Loitoktok Solar Installation: Efficient Irrigation Solution",
        image: solarInstallation2,
        content: "In 2023, we installed a 6KVA solar system in Loitoktok that supports the irrigation of 20 acres of farmland. The system includes a customized solar pump with a 6.175 KWP capacity, delivering 3000 liters per hour for efficient agricultural irrigation.",
        client: "Private Client in Loitoktok",
        year: 2023,
        otherImage1: solarInstallation1,
        otherImage2: solarInstallation2,
        type: 'Solar Installation',
        imageAlt: "6KVA solar system installed for agricultural irrigation",
        otherImage1Alt: "Solar panel setup for irrigation",
        otherImage2Alt: "Detailed view of solar irrigation system"
    },
    {
        id: 4,
        title: "UNESCO Nairobi Office: Off-Grid Solar System Installation",
        image: Unesco,
        content: "In 2023, we supplied and installed a 5KWH off-grid solar system for the UNESCO offices in Nairobi, providing power for air conditioners, lighting, and office equipment. This project highlights our expertise in large-scale solar installations for institutional clients.",
        client: "UNESCO",
        year: 2023,
        otherImage1: Unesco,
        otherImage2: unesco2,
        type: 'Solar Installation',
        imageAlt: "5KWH off-grid solar system installed at UNESCO Nairobi",
        otherImage1Alt: "Alternative view of the UNESCO solar system",
        otherImage2Alt: "Additional perspective of solar installation at UNESCO"
    },
    {
        id: 5,
        title: "Repair and Upgrade of Solar Backup Systems for Enhanced Efficiency",
        image: repair2,
        content: "In 2023, we provided repair and upgrading services for solar backup systems, ensuring they meet current power demands and extend autonomy. This service is vital for optimizing solar investments and maintaining system efficiency.",
        client: "Various Customers",
        year: 2023,
        otherImage1: repair1,
        otherImage2: repair2,
        type: 'Solar Repair and Upgrade',
        imageAlt: "Repair and upgrading of solar backup systems",
        otherImage1Alt: "Another view of solar system repair work",
        otherImage2Alt: "Close-up of upgraded solar backup system"
    },
];
