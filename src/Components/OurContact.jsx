import { FaMapMarkedAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";

function OurContact() {
  return (
    <section className="mx-auto my-20 max-w-6xl space-y-5 rounded-sm p-10 shadow-md shadow-black">
      <h4 className="font-Inter mb-10 text-center text-3xl font-semibold">
        Head Office
      </h4>
      <div className="flex flex-col justify-between gap-6 text-center md:flex-row md:gap-10 md:text-left">
        {/* Office Address */}
        <div className="flex-1 space-y-4 rounded-lg bg-white p-6 shadow">
          <nav className="mx-auto text-4xl text-brandD md:mx-0">
            <FaMapMarkedAlt />
          </nav>
          <div>
            <h5 className="text-xl font-semibold">Visit Our Office</h5>
            <p>Ruiru. Rowini House, 1st floor. Room 17</p>
          </div>
        </div>

        {/* Phone Number */}
        <div className="flex-1 space-y-4 rounded-lg bg-white p-6 shadow">
          <nav className="mx-auto text-4xl text-brandD md:mx-0">
            <FaPhone />
          </nav>
          <div>
            <h5 className="text-xl font-semibold">Call Us</h5>
            <p>+254 703704062</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex-1 space-y-4 rounded-lg bg-white p-6 shadow">
          <nav className="mx-auto text-4xl text-brandD md:mx-0">
            <MdMarkEmailRead />
          </nav>
          <div>
            <h5 className="text-xl font-semibold">Email Us</h5>
            <p>solarpointsystems1@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurContact;
