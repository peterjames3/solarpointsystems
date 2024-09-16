"use client";
import { useState } from "react";
import PropTypes from "prop-types";
import { Drawer } from "flowbite-react";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";
import { ToastContainer } from "react-toastify";
import useToast from "./useToast";

const validate = (value) => {
  const errors = {};

  if (!value.name) {
    errors.name = "Name is required";
  } else if (!/^[a-zA-Z\s]+$/.test(value.name)) {
    errors.name = "Name should only contain letters and spaces";
  }

  if (!value.email) {
    errors.email = "Email is required";
  } else if (
    !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value.email)
  ) {
    errors.email = "invalid email address";
  }

  if (!value.phone_number) {
    errors.phone_number = "Phone number is required";
  } else if (!/^\+?\d{1,15}$/.test(value.phone_number)) {
    errors.phone_number = "Invalid format";
  }
  if (!value.home_town) {
    errors.home_town = "Required";
  }
  if (!value.service_type) {
    errors.service_type = "Required";
  }
  if (!value.load_profile) {
    errors.load_profile = "Required";
  }

  return errors;
};
const QuotationModal = ({ isOpen, onClose }) => {
  const { notifySuccess, notifyError } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone_number: "",
      home_town: "",
      service_type: "",
      load_profile: "",
    },
    validate,
    onSubmit: (values) => {
      setIsSubmitting(true);

      emailjs
        .send(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_QUOTATION_TEMPLATE_ID,
          values,
          import.meta.env.VITE_PUBLIC_KEY,
        )
        .then(
          (result) => {
            notifySuccess(result.text);
            setIsSubmitting(false);
            formik.resetForm();
          },
          (error) => {
            notifyError(error.text);
            setIsSubmitting(false);
          },
        );
    },
  });

  return (
    <>
      <div className="flex min-h-[50vh] items-center justify-center"></div>
      <Drawer
        open={isOpen}
        onClose={onClose}
        position="right"
        backdrop={true}
        className="w-[80%] bg-cardBg sm:w-[50%] md:w-1/3"
      >
        <Drawer.Header title="Quotation" />
        <Drawer.Items className="mt-1">
          <div className="mx-auto mt-1 max-w-md">
            <h3 className="mb-2 font-poppins text-2xl font-semibold text-gray-800">
              Request a Quotation
            </h3>
            <p className="mb-4 font-Rubik text-gray-600">
              Please fill out the form below and our team will get back to you
              within 1 business day. You can also contact us to arrange a site
              survey anywhere in the country by calling: +254 703704062.
            </p>
          </div>
          <form
            onSubmit={formik.handleSubmit}
            className="mx-auto max-w-md space-y-4 rounded-lg p-6 shadow-lg"
          >
            {/* Name Field */}
            <div>
              <div className="flex justify-between">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                {formik.touched.name && formik.errors.name ? (
                  <p className="text-sm text-red-500">{formik.errors.name}</p>
                ) : null}
              </div>

              <input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-brandC focus:ring-brandC"
              />
            </div>

            {/* Email Field */}
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                {formik.touched.email && formik.errors.email ? (
                  <p className="text-sm text-red-500">{formik.errors.email}</p>
                ) : null}
              </div>

              <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-brandC focus:ring-brandC"
              />
            </div>

            {/* Phone Number Field */}
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="phone_number"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                {formik.touched.phone_number && formik.errors.phone_number ? (
                  <div className="text-sm text-red-500">
                    {formik.errors.phone_number}
                  </div>
                ) : null}
              </div>

              <input
                id="phone_number"
                name="phone_number"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone_number}
                className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-brandC focus:ring-brandC"
              />
            </div>

            {/* Home Town Field */}
            <div>
              <div className="flex justify-between">
                <label
                  htmlFor="home_town"
                  className="block text-sm font-medium text-gray-700"
                >
                  Home Town
                </label>
                {formik.touched.home_town && formik.errors.home_town ? (
                  <div className="text-sm text-red-500">
                    {formik.errors.home_town}
                  </div>
                ) : null}
              </div>

              <input
                id="home_town"
                name="home_town"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.home_town}
                className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-brandC focus:ring-brandC"
              />
            </div>

            {/* Type of Service Field */}
            <div>
              <div className="flex justify-between">
                <label
                  htmlFor="service_type"
                  className="block text-sm font-medium text-gray-700"
                >
                  Type of Service (eg solar repair, solar installation etc)
                </label>
                {formik.touched.service_type && formik.errors.service_type ? (
                  <div className="text-sm text-red-500">
                    {formik.errors.service_type}
                  </div>
                ) : null}
              </div>

              <input
                id="service_type"
                name="service_type"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.service_type}
                className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-brandC focus:ring-brandC"
              />
            </div>

            {/* Message Field */}
            <p>
              Load Profile (this is all the equipment you would like to power
              with solar. Eg Tv, Fridge, security lights..
            </p>
            <div>
              <div className="flex justify-between">
                <label
                  htmlFor="load_profile"
                  className="block text-sm font-medium text-gray-700"
                >
                  Load Profile
                </label>
                {formik.touched.load_profile && formik.errors.load_profile ? (
                  <p className="text-sm text-red-500">
                    {formik.errors.load_profile}
                  </p>
                ) : null}
              </div>

              <textarea
                id="load_profile"
                name="load_profile"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.load_profile}
                className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-brandC focus:ring-brandC"
              />
            </div>

            <button
              disabled={isSubmitting}
              type="submit"
              className={`w-full rounded-md bg-brandC p-3 font-semibold text-white shadow-sm hover:bg-brandD ${isSubmitting ? "bg-brandD" : "bg-brandC"} focus:outline-none focus:ring-2 focus:ring-brandC`}
            >
              {isSubmitting ? "Sending..." : "Get Quote"}
            </button>
          </form>
          <ToastContainer />
        </Drawer.Items>
      </Drawer>
    </>
  );
};

QuotationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default QuotationModal;
