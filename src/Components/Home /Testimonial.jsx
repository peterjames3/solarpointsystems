import { useEffect, useRef, useState } from "react";
import "keen-slider/keen-slider.min.css";
import KeenSlider from "keen-slider";

const Testimonial = () => {
  const sliderRef = useRef(null);
  const [sliderInstance, setSliderInstance] = useState(null);
  const previousRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      const slider = new KeenSlider(sliderRef.current, {
        loop: true,
        slides: {
          origin: "center",
          perView: 1.25,
          spacing: 16,
        },
        breakpoints: {
          "(min-width: 1024px)": {
            slides: {
              origin: "auto",
              perView: 2.5,
              spacing: 32,
            },
          },
        },
      });

      // Store the KeenSlider instance in state to use it in event handlers
      setSliderInstance(slider);

      return () => {
        slider.destroy();
      };
    }
  }, []);

  return (
    <section>
      <div className="wrapper px-4 py-12 sm:px-6 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
        <div className=" w-full items-end justify-between sm:flex sm:pe-6 lg:pe-8">
          <h2 className="max-w-xl font-poppins text-4xl font-bold text-black">
            Read trusted reviews from our customers
          </h2>
          <div className="mt-8 flex gap-4 lg:mt-0">
            <button
              aria-label="Previous slide"
              ref={previousRef}

              onClick={() =>{
                 console.log("Prev button clicked");
               sliderInstance?.prev()}}
              className="cursor-pointer rounded-full border border-brandD p-3 text-brandC transition hover:bg-brandD hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 rtl:rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              aria-label="Next slide"
              ref={nextRef}
              onClick={() => sliderInstance?.next()}
              className="cursor-pointer rounded-full border border-brandD p-3 text-brandC transition hover:bg-brandD hover:text-white"
            >
              <svg
                className="size-5 rtl:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 5l7 7-7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-[1400px] lg:col-span-2 lg:mx-0">
          <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide">
              <blockquote className="font-Lato flex h-full flex-col justify-between rounded-md bg-brandD p-6 shadow-sm sm:p-8 lg:p-12">
                <div>
                  <div className="flex gap-0.5 text-green-500">
                    {/* SVG stars omitted for brevity */}
                  </div>
                  <div className="mt-4">
                    <h3 className="font-Lato text-2xl font-bold text-white sm:text-2xl">
                      &apos;Best Decision Ever &apos;
                    </h3>
                    <p className="font-Lato mt-4 text-xl text-dimWhite">
                      I want to express my gratitude for the quick, efficient,
                      and friendly service I received. From the initial quote to
                      the final installation, everything was handled
                      professionally and smoothly. Working with your team has
                      been a truly satisfying experience. Your commitment to
                      excellence and genuine passion for renewable energy shine
                      through. The journey has been inspiring, and I am thrilled
                      with the outcome.!&apos;
                    </p>
                  </div>
                </div>
                <footer className="font-Lato mt-8 text-xl text-brandC">
                  &mdash; Jane Muthoni
                </footer>
              </blockquote>
            </div>
            <div className="keen-slider__slide">
              <blockquote className="flex h-full flex-col justify-between rounded-md bg-brandD p-6 shadow-sm sm:p-8 lg:p-12">
                <div>
                  <div className="flex gap-0.5 text-green-500">
                    {/* SVG stars omitted for brevity */}
                  </div>
                  <div className="font-Lato mt-4">
                    <h3 className="text-2xl font-bold text-white sm:text-2xl">
                      &apos;Best customer service&apos;.
                    </h3>
                    <p className="mt-4 text-xl text-dimWhite">
                      Your team has exceeded my expectations in every way. The
                      speed and efficiency of the solar panel installation were
                      remarkable, and the customer service was top-notch.
                      Everyone was knowledgeable and helpful, making the entire
                      process stress-free. I am delighted with the quality of
                      the products and the positive impact on my energy bills.
                      This experience has been nothing short of excellent.
                    </p>
                  </div>
                </div>
                <footer className="font-Lato mt-8 text-xl text-brandC">
                  &mdash; Mary Mwende
                </footer>
              </blockquote>
            </div>
            <div className="keen-slider__slide">
              <blockquote className="flex h-full flex-col justify-between rounded-md bg-brandD p-6 shadow-sm sm:p-8 lg:p-12">
                <div>
                  <div className="flex gap-0.5 text-green-500">
                    {/* SVG stars omitted for brevity */}
                  </div>
                  <div className="font-Lato mt-4">
                    <h3 className="text-xl font-bold text-white sm:text-2xl">
                      &apos; Wonderful Team&apos;.
                    </h3>
                    <p className="mt-4 text-xl text-dimWhite">
                      I highly commend your team for their exceptional service.
                      The entire process, from consultation to installation, was
                      handled with utmost care and expertise. The staff&apos;s
                      professionalism and dedication to customer satisfaction
                      were apparent throughout. I am thrilled with the solar
                      system&apos;s performance and the reduction in my energy
                      costs. Thank you for a wonderful experience.
                    </p>
                  </div>
                </div>
                <footer className="font-Lato mt-8 text-xl text-brandC">
                  &mdash; Michael Chege
                </footer>
              </blockquote>
            </div>
            <div className="keen-slider__slide">
              <blockquote className="flex h-full flex-col justify-between rounded-md bg-brandD p-6 shadow-sm sm:p-8 lg:p-12">
                <div>
                  <div className="flex gap-0.5 text-green-500">
                    {/* SVG stars omitted for brevity */}
                  </div>
                  <div className="font-Lato mt-4">
                    <h3 className="text-2xl font-bold text-white sm:text-2xl">
                      &apos;Amazing Community&apos;
                    </h3>
                    <p className="mt-4 text-xl text-dimWhite">
                      Thank you for the outstanding service and high-quality
                      solar products. Your team was friendly, efficient, and
                      highly knowledgeable, making the whole experience pleasant
                      and easy. I appreciate the thorough explanations and
                      support provided throughout the process. The results have
                      been impressive, and I am very satisfied with my decision
                      to go solar.
                    </p>
                  </div>
                </div>
                <footer className="font-Lato mt-8 text-xl text-brandC">
                  &mdash; Hanzo munene
                </footer>
              </blockquote>
            </div>
            {/* Add more slides as needed */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
