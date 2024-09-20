import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../style.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import products from "../ProductsOnOfferData";

const ProductsOnOffer = () => {
  return (
    <section className="h-full">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 6500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper text-black"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="w-full bg-white p-4 shadow-lg ss:flex ss:flex-row-reverse">
              <div className="sm:w-[60%]">
                {" "}
                <img
                  src={product.image}
                  alt={product.imageAlt}
                  loading="lazy"
                  className="mb-4 h-[30rem] w-full rounded object-fill"
                />
              </div>
              <div className="flex flex-col justify-center sm:w-[40%]">
                <h3 className="mb-2 font-poppins text-xl font-bold">
                  {product.name}
                </h3>
                <ul className="mb-4 list-disc pl-4 text-left font-Rubik">
                  {product.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p className="font-Rubik text-lg font-semibold text-brandC">
                  {product.price}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ProductsOnOffer;
