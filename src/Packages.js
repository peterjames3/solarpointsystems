// packages.js
import { HiOutlineLightBulb } from "react-icons/hi";
import { GiSilverBullet } from "react-icons/gi";
import { TbSolarElectricity } from "react-icons/tb";
import { AiOutlineGold } from "react-icons/ai";

const packages = [
  {
    name: "320W Small System",
    price: "Ksh 130,000",
    icon: HiOutlineLightBulb,
    features: [
      "4 x 460 Watts solar panels",
      "3kW high efficient hybrid inverter",
      "9600whs battery backup",
      "Runs TV, fridge, microwave, iron box, etc.",
      "Off-grid but can use grid as a backup"
    ]
  },
  {
    name: "1KVA Medium System",
    price: "Ksh 180,000",
    icon: GiSilverBullet,
    features: [
      "6 x 160 Watts solar panels",
      "1kW high hybrid inverter",
      "4800whs battery backup",
      "Runs TV, fridge, music system, phone charging",
      "Can use grid as a backup"
    ]
  },
  {
    name: "3KVA Standard System",
    price: "Ksh 340,000",
    icon: TbSolarElectricity,
    features: [
      "4 x 460 Watts solar panels",
      "3kW high efficient hybrid inverter",
      "9600whs battery backup",
      "Runs TV, fridge, microwave, etc.",
      "Off-grid but can use grid as a backup"
    ]
  },
  {
    name: "4KVA Large System",
    price: "Ksh 440,000",
    icon: AiOutlineGold,
    features: [
      "8 x 460 Watts solar panels",
      "5kW high efficient hybrid inverter",
      "9600whs battery backup",
      "Runs TV, fridge, washing machine, microwave, iron box, etc.",
      "Off-grid but can use grid as a backup"
    ]
  }
];

export default packages;
