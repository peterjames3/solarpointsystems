import {
  Shield,
  Clock,
  Award,
} from "lucide-react";

const WhyInstallationService = () => {
  return (
    <>
      {/* Why Choose Us Section */}
      <section className=" wrapper py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Our Solar Installation Service
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="size-8 text-green-700" />,
                title: "Certified Experts",
                description:
                  "Our team consists of certified solar installation professionals with years of experience.",
              },
              {
                icon: <Award className="size-8 text-green-700" />,
                title: "Quality Guarantee",
                description:
                  "We use only high-quality, certified solar equipment with extensive warranties.",
              },
              {
                icon: <Clock className="size-8 text-green-700" />,
                title: "Timely Service",
                description:
                  "Complete installation within 1-3 days with minimal disruption to your routine.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl border border-gray-100"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyInstallationService;
