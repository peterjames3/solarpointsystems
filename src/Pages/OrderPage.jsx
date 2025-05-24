import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";

function OrderPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, price, features } = location.state || {}; // Extract system data from location state

  useEffect(() => {
    // Scroll to top when the location changes (when navigating to this page)
    window.scrollTo(0, 1);
  }, [location.pathname]); // Listen for the path change

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="wrapper flex flex-col items-center space-y-8 px-4 py-12 pt-[8rem]"
    >
      <h2 className="font-poppins text-4xl font-bold text-gray-900">
        Order Your Solar System
      </h2>

      {/* Go Back Button */}
      <button
        onClick={() => navigate(-1)} 
        className="mb-6 rounded-md bg-gray-200 px-4 py-2 font-medium text-gray-800 transition-all hover:bg-gray-300"
      >
        Go Back
      </button>

      <div className="w-full max-w-3xl rounded-lg bg-white p-6 shadow-lg">
        <h3 className="mb-4 text-2xl font-bold">{name}</h3>
        <p className="mb-6 text-xl text-gray-700">Price: {price}</p>
        <h4 className="mb-4 text-xl font-semibold">Features</h4>
        <ul className="list-disc space-y-2 pl-5 font-Rubik text-gray-600">
          {features &&
            features.map((feature, index) => <li key={index}>{feature}</li>)}
        </ul>
        {/*Payment procedure */}
        <div className="mt-2 space-y-2 text-left">
          <h3 className="font-poppins text-xl font-bold">Steps for Payment:</h3>
          <ul className="ml-4 list-decimal space-y-1 font-Rubik">
            <li>Open Mpesa app and select lipa na Mpesa.</li>
            <li>
              Select &apos;Pay bill, Enter Business Number use &apos;:522533.
            </li>
            <li>Select &apos;Enter Account Number&apos;:7642435.</li>

            <li>Press &apos;OK&apos;.</li>
            <li>Call us on 0703704062 to confirm your delivery location.</li>
          </ul>
        </div>

        {/* Order Form */}
        {/*  <form className="mt-8 space-y-4">
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              className="mt-1 w-full rounded-md border border-gray-300 p-3 shadow-sm focus:border-brandC focus:ring-brandC"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Shipping Address
            </label>
            <input
              type="text"
              className="mt-1 w-full rounded-md border border-gray-300 p-3 shadow-sm focus:border-brandC focus:ring-brandC"
              placeholder="Enter your shipping address"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              className="mt-1 w-full rounded-md border border-gray-300 p-3 shadow-sm focus:border-brandC focus:ring-brandC"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Payment Method
            </label>
            <select className="mt-1 w-full rounded-md border border-gray-300 p-3 shadow-sm focus:border-brandC focus:ring-brandC">
              <option>Credit Card</option>
              <option>Bank Transfer</option>
              <option>Mobile Payment</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-brandC py-3 font-semibold text-white shadow hover:bg-brandD"
          >
            Place Order
          </button>
        </form> */}
      </div>
    </motion.section>
  );
}

export default OrderPage;
