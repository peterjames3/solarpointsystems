// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { LuCheckCircle } from "react-icons/lu";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Inverter from "../../assets/must2-pv1800..webp";
import monocrystalline from "../../assets/410w-mono-Jinko-Tiger..webp";
import polycrystalline from "../../assets/335w-poly-panle-Yingii..webp";
import LED from "../../assets/30LED..webp";
import Product1 from "../../assets/Lifetime _ Built-in BMS..webp";
import Roomn from "../../assets/amerisolar-280w..webp";
import MoreProductsButton from "../MoreProductsButton";

import "aos/dist/aos.css";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper/modules";
import { Sun, Sparkles, Coins, ThermometerSun, Clock } from "lucide-react";

const ComparisonFeature = ({ icon, title, mono, poly }) => (
  <div className="grid grid-cols-3 items-center gap-4 border-b border-gray-100 py-4">
    <div className="flex items-center gap-2">
      {icon}
      <span className="font-medium">{title}</span>
    </div>
    <div className="text-center">{mono}</div>
    <div className="text-center">{poly}</div>
  </div>
);
function ProductsSlider() {
  return (
    <div className="bg-cardBg">
      <section className="mx-auto mt-0 flex max-w-[1000px] flex-col items-center space-y-3">
        <h3 className="pt-9 text-center font-poppins text-3xl font-bold text-black">
          Products
        </h3>
        <hr className="w-[10rem] rounded border-b-[3px] border-textColor" />
        <h4 className="text-center font-poppins text-4xl font-medium">
          SolarPointSystems EA – Powering Kenya with High-Performance Solar
          Panels & Accessories
        </h4>
      </section>
      <section
        data-aos="zoom-in"
        data-aos-delay="70"
        className="min-h-[28rem] py-10"
      >
        <Swiper
          style={{
            "--swiper-navigation-color": "",
            "--swiper-pagination-color": "",
          }}
          speed={600}
          parallax={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Parallax, Pagination, Navigation]}
          className="mySwiper wrapper"
        >
          <div
            slot="container-start"
            className="bg-cardBg"
            data-swiper-parallax="-23%"
          ></div>

          <SwiperSlide>
            <section className="max-w-8xl mx-auto mt-2 flex flex-col-reverse gap-0 px-2 xs:flex-col-reverse ss:flex-col-reverse ss:gap-2 ss:px-16 sm:flex-row md:flex-row md:gap-3">
              <div className="w-full space-y-6 px-4 md:w-1/2">
                <div
                  className="title py-4 font-poppins text-5xl font-bold text-black"
                  data-swiper-parallax="-300"
                >
                  <h3 className="font-Poppins text-4xl font-bold md:text-5xl">
                    Monocrystalline Solar Panel
                  </h3>
                </div>
                <div
                  className="subtitle font-poppins font-semibold text-black"
                  data-swiper-parallax="-200"
                ></div>
                <div
                  className="space-y-2 font-Rubik font-medium"
                  data-swiper-parallax="-100"
                >
                  <p>
                    These high-efficiency panels are perfect for both
                    residential and commercial use, offering the best return on
                    investment due to their superior energy output and
                    longevity.
                    <br />
                  </p>
                  <h5 className="text-xl font-semibold uppercase text-gray-900">
                    Key Features of Monocrystalline Solar Panels:
                  </h5>
                  <ul>
                    <li className="flex items-center">
                      <LuCheckCircle className="mr-3 text-green-500" /> High
                      efficiency for optimal energy generation
                    </li>
                    <li className="flex items-center">
                      <LuCheckCircle className="mr-3 text-green-500" />{" "}
                      Durability and long lifespan, ideal for Kenyan climate
                    </li>
                    <li className="flex items-center">
                      <LuCheckCircle className="mr-3 text-green-500" /> Low
                      maintenance and high performance in all seasons
                    </li>
                    <li className="flex items-center">
                      <LuCheckCircle className="mr-3 text-green-500" /> Perfect
                      for reducing energy bills and promoting sustainability
                    </li>
                  </ul>
                </div>
                <MoreProductsButton />
              </div>

              <div className="w-full md:w-1/2">
                <img
                  src={monocrystalline}
                  alt="Monocrystalline Solar Panel"
                  loading="lazy"
                  className="object-fit h-[30rem] w-[100%] rounded-md"
                />
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section className="max-w-8xl mx-auto mt-2 flex flex-col-reverse gap-0 px-2 xs:flex-col-reverse ss:flex-col-reverse ss:gap-2 ss:px-16 sm:flex-row md:flex-row md:gap-3">
              <div className="w-full space-y-6 px-4 md:w-1/2">
                <div
                  className="title py-4 font-poppins text-5xl font-bold text-black"
                  data-swiper-parallax="-300"
                >
                  <h3 className="font-Poppins text-4xl font-bold md:text-5xl">
                    Polycrystalline Solar Panel
                  </h3>
                </div>
                <div
                  className="subtitle font-poppins font-semibold text-black"
                  data-swiper-parallax="-200"
                ></div>
                <div
                  className="space-y-2 font-Rubik font-medium"
                  data-swiper-parallax="-100"
                >
                  <p>
                    Polycrystalline panels offer a reliable and cost-effective
                    solution for both residential and commercial energy needs in
                    Kenya.These panels provide excellent performance at a
                    competitive price point.
                    <br />
                  </p>
                  <h5 className="text-xl font-semibold uppercase text-gray-900">
                    Key Features of Polycrystalline Solar Panels:
                  </h5>
                  <ul>
                    <li className="flex items-center">
                      <LuCheckCircle className="mr-3 text-green-500" /> High
                      efficiency at an affordable price, ideal for Kenya’s
                      climate
                    </li>
                    <li className="flex items-center">
                      <LuCheckCircle className="mr-3 text-green-500" /> Long
                      lifespan, providing reliable performance for years
                    </li>
                    <li className="flex items-center">
                      <LuCheckCircle className="mr-3 text-green-500" /> Low
                      maintenance requirements for hassle-free use
                    </li>
                    <li className="flex items-center">
                      <LuCheckCircle className="mr-3 text-green-500" /> Great
                      value for money, helping reduce electricity bills.
                    </li>
                  </ul>
                </div>
                <MoreProductsButton />
              </div>

              <div className="w-full md:w-1/2">
                <img
                  src={polycrystalline}
                  alt="Polycrystalline Solar Panel"
                  loading="lazy"
                  className="object-fit h-[30rem] w-[100%] rounded-md"
                />
              </div>
            </section>
          </SwiperSlide>

          <SwiperSlide>
            <section className="max-w-8xl mx-auto mt-2 flex flex-col-reverse gap-0 px-2 xs:flex-col-reverse ss:flex-col-reverse ss:gap-2 ss:px-16 sm:flex-row md:flex-row md:gap-3">
              <div className="w-full space-y-6 px-4 md:w-1/2">
                <div
                  className="title py-4 font-poppins text-5xl font-bold text-black"
                  data-swiper-parallax="-300"
                >
                  <h3 className="font-Poppins text-4xl font-bold md:text-5xl">
                    High-Power LEDs
                  </h3>
                </div>
                <div
                  className="subtitle font-poppins font-semibold text-black"
                  data-swiper-parallax="-200"
                ></div>
                <div
                  className="space-y-2 font-Rubik font-medium"
                  data-swiper-parallax="-100"
                >
                  <p>
                    High-power LEDs are designed to emit a greater amount of
                    light, making them ideal for applications requiring high
                    brightness. These LEDs are commonly used in street lights,
                    high-bay lighting, automotive headlights, and more.
                    <br />
                  </p>
                  <h5 className="text-xl font-semibold uppercase text-gray-900">
                    Key Features of High-Power LEDs:
                  </h5>
                  <ul>
                    <li className="flex items-center">
                      <LuCheckCircle className="mr-3 text-green-500" /> High
                      brightness for optimal lighting performance
                    </li>
                    <li className="flex items-center">
                      <LuCheckCircle className="mr-3 text-green-500" /> Long
                      lifespan, reducing the need for frequent replacements
                    </li>
                    <li className="flex items-center">
                      <LuCheckCircle className="mr-3 text-green-500" />{" "}
                      Energy-efficient, reducing power consumption
                    </li>
                    <li className="flex items-center">
                      <LuCheckCircle className="mr-3 text-green-500" /> Requires
                      heat sinks for effective cooling
                    </li>
                  </ul>
                </div>
                <MoreProductsButton />
              </div>
              <div className="w-full md:w-1/2">
                <img
                  src={LED}
                  alt="High-Power LED"
                  loading="lazy"
                  className="object-fit h-[30rem] w-[100%] rounded-md"
                />
              </div>
            </section>
          </SwiperSlide>

          <SwiperSlide>
            <section className="max-w-8xl mx-auto mt-2 flex flex-col-reverse gap-0 px-2 xs:flex-col-reverse ss:flex-col-reverse ss:gap-2 ss:px-16 sm:flex-row md:flex-row md:gap-3">
              <div className="w-full space-y-6 px-4 md:w-1/2">
                <div
                  className="title py-4 font-poppins text-5xl font-bold text-black"
                  data-swiper-parallax="-300"
                >
                  <h3 className="font-Poppins text-4xl font-bold md:text-5xl">
                    Inverters
                  </h3>
                </div>
                <div
                  className="subtitle font-poppins font-semibold text-black"
                  data-swiper-parallax="-200"
                ></div>
                <div
                  className="space-y-2 font-Rubik font-medium"
                  data-swiper-parallax="-100"
                >
                  <p>
                    Inverters are essential components in solar power systems,
                    converting DC (Direct Current) energy generated by solar
                    panels into AC (Alternating Current) electricity used by
                    most home appliances.
                    <br />
                  </p>
                  <h5 className="text-xl font-semibold uppercase text-gray-900">
                    Types of Inverters:
                  </h5>
                  <ul>
                    <li className="flex items-center">
                      <LuCheckCircle className="mr-3 text-green-500" /> String
                      Inverters – Ideal for residential and small commercial
                      solar systems
                    </li>
                    <li className="flex items-center">
                      <LuCheckCircle className="mr-3 text-green-500" />{" "}
                      Microinverters – Best for optimizing energy output for
                      each individual solar panel
                    </li>
                    <li className="flex items-center">
                      <LuCheckCircle className="mr-3 text-green-500" /> Hybrid
                      Inverters – Combine solar energy with battery storage for
                      uninterrupted power supply
                    </li>
                  </ul>
                </div>
                <MoreProductsButton />
              </div>

              <div className="w-full md:w-1/2">
                <img
                  src={Inverter}
                  alt="Inverters"
                  className="h-[30rem] w-[100%] rounded-md bg-cover bg-center"
                />
              </div>
            </section>
          </SwiperSlide>

          <SwiperSlide>
            <section className="max-w-8xl mx-auto mt-2 flex flex-col-reverse gap-0 px-2 xs:flex-col-reverse ss:flex-col-reverse ss:gap-2 ss:px-16 sm:flex-row md:flex-row md:gap-3">
              <div className="w-full space-y-6 px-4 md:w-1/2">
                <div
                  className="title py-4 font-poppins text-5xl font-bold text-black"
                  data-swiper-parallax="-300"
                >
                  <h3 className="font-Poppins text-4xl font-bold md:text-5xl">
                    Lithium Batteries
                  </h3>
                </div>
                <div
                  className="subtitle font-poppins font-semibold text-black"
                  data-swiper-parallax="-200"
                ></div>
                <div
                  className="space-y-2 font-Rubik font-medium"
                  data-swiper-parallax="-100"
                >
                  <p>
                    Lithium batteries are widely used in a variety of
                    applications, including renewable energy storage. Known for
                    their high energy density, long lifespan, and lightweight
                    design.
                    <br />
                  </p>
                  <h5 className="text-xl font-semibold uppercase text-gray-900">
                    Types of Lithium Batteries:
                  </h5>
                  <ul>
                    <li className="flex items-center">
                      <LuCheckCircle className="mr-3 text-green-500" />{" "}
                      Lithium-ion (Li-ion) – Common in portable electronics and
                      electric vehicles
                    </li>
                    <li className="flex items-center">
                      <LuCheckCircle className="mr-3 text-green-500" /> Lithium
                      Polymer (LiPo) – Lightweight and flexible, often used in
                      drones and small devices
                    </li>
                    <li className="flex items-center">
                      <LuCheckCircle className="mr-3 text-green-500" /> Lithium
                      Iron Phosphate (LiFePO₄) – Known for safety and longevity,
                      often used in solar energy storage
                    </li>
                  </ul>
                </div>
                <MoreProductsButton />
              </div>

              <div className="w-full md:w-1/2">
                <img
                  src={Product1}
                  alt="Lithium Batteries"
                  className="h-[30rem] w-[100%] rounded-md bg-cover bg-center"
                />
              </div>
            </section>
          </SwiperSlide>
        </Swiper>
      </section>

      <section className="mx-auto mt-0 max-w-[1440px] rounded-2xl p-8 shadow-sm">
        <h3 className="mb-8 text-center text-2xl font-bold">
          Monocrystalline vs Polycrystalline
        </h3>
        <div className="mb-8 grid grid-cols-3 gap-4">
          <div className="text-center">
            <span className="font-medium text-gray-600">Features</span>
          </div>
          <div className="text-center">
            <div className="rounded-lg bg-gray-50 p-4">
              <span className="font-semibold">Monocrystalline</span>
            </div>
          </div>
          <div className="text-center">
            <div className="rounded-lg bg-gray-50 p-4">
              <span className="font-semibold">Polycrystalline</span>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <ComparisonFeature
            icon={<div className="h-5 w-5 text-blue-500" />}
            title="Efficiency"
            mono="15-22%"
            poly="13-17%"
          />
          <ComparisonFeature
            icon={<Coins className="h-5 w-5 text-yellow-500" />}
            title="Cost"
            mono="Higher"
            poly="Lower"
          />
          <ComparisonFeature
            icon={<ThermometerSun className="h-5 w-5 text-red-500" />}
            title="Temperature Tolerance"
            mono="Better"
            poly="Good"
          />
          <ComparisonFeature
            icon={<Clock className="h-5 w-5 text-green-500" />}
            title="Lifespan"
            mono="25-30 years"
            poly="20-25 years"
          />
          <ComparisonFeature
            icon={<Sparkles className="h-5 w-5 text-purple-500" />}
            title="Appearance"
            mono="Deep Black"
            poly="Blue Hue"
          />
          <ComparisonFeature
            icon={<Sun className="h-5 w-5 text-orange-500" />}
            title="Space Efficiency"
            mono="Higher"
            poly="Lower"
          />
        </div>
      </section>
    </div>
  );
}

export default ProductsSlider;
