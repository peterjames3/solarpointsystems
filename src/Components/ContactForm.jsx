import { useState } from "react";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";
import { FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
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

  if (!value.message) {
    errors.message = "Message is required";
  }
  return errors;
};

function ContactForm() {
  const { notifySuccess, notifyError } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
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
    <section
      /* data-aos="fade-up"
      data-aos-duration="3000" */
      className="wrapper grid grid-cols-1 py-20 sm:grid-cols-2"
    >
      <div className="h-[25rem] space-y-7 sm:h-auto">
        <nav className="relative flex h-full w-full flex-col items-center bg-brandD pt-3 text-center text-black">
          <h5 className="pt-8 text-5xl font-semibold text-black">
            Get in Touch
          </h5>
          <div className="absolute top-[30%] flex flex-col space-y-5 px-2 md:space-y-10">
            <h4 className="font-Inter text-3xl font-semibold text-white">
              Sub office
            </h4>
            <div className="flex gap-2">
              <nav className="text-2xl font-semibold text-white">
                {" "}
                <FaMapMarkedAlt />
              </nav>
              <nav className="text-white">Visit us to Our Office</nav>
            </div>
            <div className="flex gap-2">
              <nav className="text-2xl font-semibold text-white">
                <FaPhone />
              </nav>
              <nav className="text-white">Call us for any inquaries</nav>
            </div>
            <div className="flex gap-2">
              <nav className="text-2xl font-semibold text-white">
                <MdMarkEmailRead />
              </nav>
              <nav className="text-white">solarpointsystems1@gmail.com</nav>
            </div>
          </div>
        </nav>
      </div>
      <div className="bg-[#111827] py-24">
        <h4 className="py-3 text-center text-3xl font-semibold text-white transition-all delay-300 hover:underline">
          Contact Us
        </h4>
        <form
          onSubmit={formik.handleSubmit}
          className="mx-auto max-w-md space-y-5 p-1"
        >
          <div>
            <div className="flex justify-between">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white"
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
                className="block text-sm font-medium text-white"
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

          {/* Message Field */}

          <div>
            <div className="flex justify-between">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-white"
              >
                Message
              </label>
              {formik.touched.message && formik.errors.message ? (
                <p className="text-sm text-red-500">{formik.errors.message}</p>
              ) : null}
            </div>

            <textarea
              id="message"
              name="message"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-brandC focus:ring-brandC"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            value="Send"
            className={`w-full cursor-pointer rounded-md bg-brandC p-4 text-xl font-semibold text-white transition-all delay-300 ${isSubmitting ? "bg-brandD" : "bg-brandC"} hover:bg-brandD`}
          >
            {isSubmitting ? "Sending..." : "Send"}
          </button>
          <ToastContainer />
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
