import React, { useState } from "react";
import {
  ShoppingCart,
  Heart,
  Filter,
  ChevronDown,
  ChevronUp,
  Check,
} from "lucide-react";
import Lorentz from "../../assets/lorentzwaterpump..webp";
import Grundfos from "../../assets/Grundfos.jpeg";
import sunpower from "../../assets/sds-d-128-320x320.jpg";
import hybrid from "../../assets/hybrid-water-pump.webp";
import { Helmet } from "react-helmet-async";
const ProductsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [expandedProduct, setExpandedProduct] = useState("");
  //(useState < number) | (null > null);
  const categories = [
    {
      id: "all",
      name: "All Products",
    },
    {
      id: "submersible",
      name: "Submersible Pumps",
    },
    {
      id: "surface",
      name: "Surface Pumps",
    },
    {
      id: "dc",
      name: "DC Pumps",
    },
    {
      id: "hybrid",
      name: "Hybrid Pumps",
    },
  ];

  const products = [
    {
      id: 1,
      name: "LorentzPS2-150 C-SJ5-8",
      category: "submersible",
      image: Lorentz,
      price: 75000,
      description: "Submersible solar pump for deep wells and boreholes",
      specifications: [
        "Max. Head: 50m",
        "Max. Flow Rate: 2.0 m³/hour",
        "Solar Input: 300W",
        'For 4" wells and deeper',
      ],
      features: [
        "Built-in MPPT controller",
        "Dry run protection",
        "Maintenance-free design",
        "Stainless steel construction",
      ],
      brand: "Lorentz",
      availability: "InStock",
    },
    {
      id: 2,
      name: "Grundfos SQFlex 2.5-2",
      category: "surface",
      image: Grundfos,
      price: 120000,
      description: "Surface mounted solar pump for irrigation and water supply",
      specifications: [
        "Max. Head: 30m",
        "Max. Flow Rate: 4.5 m³/hour",
        "Solar Input: 500W",
        "Self-priming capability",
      ],
      features: [
        "Hybrid power capability",
        "Smart monitoring system",
        "Weather-resistant housing",
        "Easy installation",
      ],
      brand: "Grundfos",
      availability: "InStock",
    },
    {
      id: 3,
      name: "SunPumps SDS D-128",
      category: "dc",
      image: sunpower,
      price: 45000,
      description: "Direct current pump for small-scale irrigation",
      specifications: [
        "Max. Head: 20m",
        "Max. Flow Rate: 1.5 m³/hour",
        "Solar Input: 200W",
        "Compact design",
      ],
      features: [
        "No battery required",
        "Low maintenance",
        "Portable system",
        "Ideal for small farms",
      ],
      brand: "SunPumps",
      availability: "LimitedAvailability",
    },
    {
      id: 4,
      name: "Hybrid Pro HP-2200",
      category: "hybrid",
      image: hybrid,
      price: 150000,
      description: "Advanced hybrid solar pump system with grid backup",
      specifications: [
        "Max. Head: 70m",
        "Max. Flow Rate: 5.0 m³/hour",
        "Solar Input: 800W",
        "Dual power source",
      ],
      features: [
        "Automatic power switching",
        "Smart grid integration",
        "Remote monitoring",
        "Professional installation",
      ],
      brand: "Hybrid Pro",
      availability: "PreOrder",
    },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const generateProductSchema = (product) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: product.image,
    description: product.description,
    brand: product.brand,
    priceCurrency: "Ksh",
    price: product.price,
    availability: product.availability,
    offers: {
      "@type": "Offer",
      priceCurrency: "Ksh",
      price: product.price,
      itemCondition: "http://schema.org/NewCondition",
      availability: `https://schema.org/${product.availability}`,
      seller: {
        "@type": "Organization",
        name: product.brand,
      },
    },
  });
  return (
    <section className="w-full bg-[#ecf4f0] py-16">
      {/* Inject Schema Markup */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(generateProductSchema)}
        </script>
      </Helmet>
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Featured Solar Water Pumps
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Browse our selection of high-quality solar water pumps. All products
            come with installation support and warranty coverage.
          </p>
        </div>
        {/* Categories */}
        <div className="mb-8 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`rounded-full px-4 py-2 transition-all duration-300 ${selectedCategory === category.id ? "bg-green-600 text-white" : "bg-white text-gray-700 hover:bg-green-50"}`}
            >
              {category.name}
            </button>
          ))}
        </div>
        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-fit h-full w-full"
                />
                <button className="absolute right-4 top-4 rounded-full bg-white p-2 transition-colors duration-300 hover:bg-gray-100">
                  <Heart className="size-5 text-gray-600" />
                </button>
              </div>
              <div className="p-6">
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-gray-900">
                      {product.name}
                    </h3>
                    <p className="text-gray-600">{product.description}</p>
                  </div>
                  <div className="text-xl font-bold text-green-600">
                    KES {product.price.toLocaleString()}
                  </div>
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() =>
                    setExpandedProduct(expandedProduct === index ? null : index)
                  }
                >
                  <div className="mb-2 flex items-center gap-2 font-semibold text-green-600">
                    View Details
                    {expandedProduct === index ? (
                      <ChevronUp className="size-4" />
                    ) : (
                      <ChevronDown className="size-4" />
                    )}
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${expandedProduct === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    <div className="space-y-4 pt-4">
                      <div>
                        <h4 className="mb-2 font-semibold text-gray-900">
                          Specifications:
                        </h4>
                        <ul className="space-y-2">
                          {product.specifications.map((spec, idx) => (
                            <li
                              key={idx}
                              className="flex items-center text-gray-600"
                            >
                              <Check className="mr-2 size-4 text-green-600" />
                              {spec}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="mb-2 font-semibold text-gray-900">
                          Features:
                        </h4>
                        <ul className="space-y-2">
                          {product.features.map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-center text-gray-600"
                            >
                              <Check className="mr-2 size-4 text-green-600" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="mt-6 flex gap-4">
                  <button className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-white transition-colors duration-300 hover:bg-green-700">
                    <ShoppingCart className="size-5" />
                    Order Now
                  </button>
                  <button className="flex-1 rounded-lg border-2 border-green-600 px-4 py-2 text-green-600 transition-colors duration-300 hover:bg-green-50">
                    Request Quote
                  </button>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProductsSection;
