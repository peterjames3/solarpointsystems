import { Link } from "react-router-dom";
import { useState } from "react";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";
import { ToastContainer } from "react-toastify";
import useToast from "./useToast";
import logo from "../assets/Spm.svg";
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";
const validate = (value) => {
  const errors = {};
  if (!value.email) {
    errors.email = "Email is required";
  } else if (
    !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value.email)
  ) {
    errors.email = "invalid email address";
  }

  return errors;
};
function Footer() {
  const { notifySuccess, notifyError } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validate,
    onSubmit: (values) => {
      setIsSubmitting(true);

      emailjs
        .send(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_CONTACTUS_TEMPLATE_ID,
          values,
          import.meta.env.VITE_PUBLIC_KEY,
        )
        .then(
          (result) => {
            console.log("Success:", result.text); // Add this line
            notifySuccess("Subscription successful:", result.text);
            setIsSubmitting(false);
            formik.resetForm();
          },
          (error) => {
            console.error("Error:", error.text); // Add this line
            notifyError(error.text);
            setIsSubmitting(false);
          },
        );
    },
  });
  return (
    <section className="w-full">
      <div className="bg-slate-800 py-12">
        {/* Newsletter Subscription Section */}
        <div className="mx-auto mt-0 max-w-[1400px] items-center justify-around space-y-10 py-2 sm:flex sm:space-y-0">
          <div>
            <h6 className="text-2xl font-medium text-brandC underline">
              Subscribe to our Newsletter
            </h6>
            <p className="py-2 text-xl text-white">
              Stay updated with our latest news and special offers.
            </p>
          </div>
          <div>
            <form
              onSubmit={formik.handleSubmit}
              className="flex items-center gap-4"
            >
              <div className="w-[70%]">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white"
                  >
                    Email
                  </label>
                  {formik.touched.email && formik.errors.email ? (
                    <p className="text-sm text-red-500">
                      {formik.errors.email}
                    </p>
                  ) : null}
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className="w-full rounded px-2 py-3 text-black lg:w-[100%]"
                />
              </div>
              <div className="mt-6 w-[40%]">
                <button
                  type="submit"
                  className={`w-full cursor-pointer rounded bg-brandC py-3 text-center transition-all delay-300 ${isSubmitting ? "bg-brandD" : "bg-brandC"} font-medium text-white hover:bg-brandD`}
                >
                  {isSubmitting ? "Sending..." : "Subscribe"}
                </button>
              </div>

              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
      <div className="w-full bg-black">
        <div className="mx-auto mt-0 grid max-w-[1400px] grid-cols-1 gap-8 space-y-3 px-9 py-16 text-center text-gray-300 sm:grid-cols-2 sm:text-start lg:grid-cols-3">
          <div className="">
            <Link to="/" className="flex cursor-pointer items-center gap-2">
              <img src={logo} alt="logo" className="size-12" />
              <h3 className="hidden text-3xl font-medium text-brandC md:flex">
                SolarPoint Systems E.A
              </h3>
            </Link>
            <p className="py-4 font-Rubik text-xl">
              At SolarPoint Systems East Africa, we harness the power of the sun
              to bring you clean, renewable energy solutions. Our commitment to
              sustainability drives us to innovate, ensuring that every home and
              business can achieve energy independence.
            </p>
            <div className="my-6 flex justify-between md:w-[75%]">
              <a
                href="https://web.facebook.com/profile.php?id=61557063135392"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookSquare
                  size={30}
                  className="cursor-pointer transition-all delay-300 hover:text-blue-700"
                />
              </a>
              <a
                href="https://www.instagram.com/sola21759?igsh=MXc5bTN0Mnk1a3g5dw=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram
                  size={30}
                  className="cursor-pointer transition-all delay-300 hover:text-pink-600"
                />
              </a>
              <a
                href="https://x.com/Solarsystems_1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitterSquare
                  size={30}
                  className="cursor-pointer transition-all delay-300 hover:text-blue-400"
                />
              </a>
            </div>
          </div>

          <div className="mt-6 flex flex-col-reverse justify-between sm:col-span-2 sm:flex-row">
            <div>
              <h6 className="text-[1.3rem] font-medium text-brandC underline md:text-2xl">
                Solutions
              </h6>
              <ul className="*font-Rubik *:text-[1.1rem] *:md:text-xl">
                <li className="py-2 text-sm">
                  <Link to="/powerbackup" className="hover:underline">
                    Power Backup
                  </Link>
                </li>
                <li className="py-2 text-sm">
                  <Link to="/solutions" className="hover:underline">
                    Solar LEDs
                  </Link>
                </li>
                <li className="py-2 text-sm">
                  <Link to="/solarwaterpump" className="hover:underline">
                    Solar Water Pump
                  </Link>
                </li>
                <li className="py-2 text-sm">
                  <Link to="/solarwaterheaters" className="hover:underline">
                    Solar Water Heaters
                  </Link>
                </li>
                <li className="py-2 text-sm">
                  <Link to="/solarhybrid" className="hover:underline">
                    Solar Hybrid
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="text-[1.3rem] font-medium text-brandC underline md:text-2xl">
                Products
              </h6>
              <ul className="*:text-[1.1rem] *:md:text-xl">
                <li className="py-2 text-sm">
                  <Link to="/products" className="hover:underline">
                    Solar Panels
                  </Link>
                </li>
                <li className="py-2 text-sm">
                  <Link to="/products" className="hover:underline">
                    Inverters
                  </Link>
                </li>
                <li className="py-2 text-sm">
                  <Link to="/products" className="hover:underline">
                    Hybrid Inverters
                  </Link>
                </li>
                <li className="py-2 text-sm">
                  <Link to="/products" className="hover:underline">
                    Lithium Batteries
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="text-[1.3rem] font-medium text-brandC underline md:text-2xl">
                Company
              </h6>
              <ul className="*:text-[1.1rem] *:md:text-xl">
                <li className="py-2 text-sm">
                  <Link to="/about" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li className="py-2 text-sm">
                  <Link to="/blog" className="hover:underline">
                    Blog
                  </Link>
                </li>
                <li className="py-2 text-sm">
                  <Link to="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li className="py-2 text-sm">
                  <Link
                    to="/sitemap.xml"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Sitemap
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="text-[1.3rem] font-medium text-brandC underline md:text-2xl">
                Contact Us
              </h6>
              <ul className="*:text-[1.1rem] *:md:text-xl">
                <li className="py-2 text-sm font-medium">
                  Ruiru. Rowini House, 1st floor. Room 17
                </li>
                <li className="py-2 text-sm">
                  {" "}
                  Email: solarpointsystems1@gmail.com
                </li>
                <li className="py-2 text-sm">Tel: 0712741650 | 0703704062 </li>
                <li className="p-2 text-sm">Location: Nairobi Kenya</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-0 max-w-[1400px]">
          <hr />
        </div>

        <div className="mx-auto mt-3 flex max-w-[1400px] flex-col justify-between space-y-4 py-3 text-center text-sm font-semibold text-white ss:flex-row ss:space-y-0 ss:text-start">
          <p>© 2024 All right reserved by SolarPoint System E.A.</p>
          <p>
            All rights reserved.
            <span className="cursor-pointer text-slate-400">
              Terms & Conditions·Privacy Policy
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
