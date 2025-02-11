import React from "react";
import { Phone, Mail, MessageSquare } from "lucide-react";
const CTA = () => {
  return (
    <section className="bg-brandC py-16 text-white">
      <div className="wrapper mx-auto px-4 text-center">
        <h2 className="mb-6 text-3xl font-bold">Ready to Switch to Solar?</h2>
        <p className="mx-auto mb-8 max-w-2xl text-xl">
          Contact us today for a free consultation and quote. Start your journey
          towards energy independence.
        </p>
        <address className="flex flex-wrap justify-center gap-4">
          <button className="flex items-center gap-2 rounded-lg bg-white px-8 py-3 text-green-700 transition-colors hover:bg-gray-100">
            <Phone className="size-5" />
            <a href="tel:+254 703704062">+254 703704062</a>{" "}
          </button>
          <button className="flex items-center gap-2 rounded-lg border-2 border-white bg-transparent px-8 py-3 text-white transition-colors hover:bg-white/10">
            <Mail className="size-5" />
            <a href="mailto:solarpointsystems1@gmail.com">
              solarpointsystems1@gmail.com
            </a>
            
          </button>
        </address>
      </div>
    </section>
  );
};

export default CTA;
