import { CheckCircle, Calendar, Settings } from "lucide-react";
const InstallationProcess = () => {
  return (
    <section className="bg-[#ecf4f0] py-4">
      <div className="wrapper mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">
          Our Installation Process
        </h2>
        <div className="grid gap-8 md:grid-cols-4">
          {[
            {
              step: 1,
              icon: <Calendar className="h-6 w-6 text-green-700" />,
              title: "Site Assessment",
              description: "We evaluate your property and energy needs",
            },
            {
              step: 2,
              icon: <Settings className="h-6 w-6 text-green-700" />,
              title: "Custom Design",
              description: "Design a system tailored to your requirements",
            },
            {
              step: 3,
              icon: <div className="h-6 w-6 text-green-700" />,
              title: "Installation",
              description: "Professional installation by certified experts",
            },
            {
              step: 4,
              icon: <CheckCircle className="h-6 w-6 text-green-700" />,
              title: "Final Inspection",
              description: "Quality checks and system activation",
            },
          ].map((item, index) => (
            <div key={index} className="relative rounded-xl bg-white p-6">
              <div className="absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-green-700 font-bold text-white">
                {item.step}
              </div>
              <div className="mb-4 mt-2">{item.icon}</div>
              <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default InstallationProcess;
