const TechnicalSpecification = () => {
  return (
    <section className="bg-white py-16">
      <div className="wrapper mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">
          Technical Specifications
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="mb-4 text-xl font-semibold">
              Solar Panel Specifications
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-gray-50 p-4">
                <div className="font-semibold">Efficiency Rating</div>
                <div className="text-gray-600">Up to 22%</div>
              </div>
              <div className="rounded-lg bg-gray-50 p-4">
                <div className="font-semibold">Power Output</div>
                <div className="text-gray-600">350W - 450W</div>
              </div>
              <div className="rounded-lg bg-gray-50 p-4">
                <div className="font-semibold">Warranty</div>
                <div className="text-gray-600">25 Years</div>
              </div>
              <div className="rounded-lg bg-gray-50 p-4">
                <div className="font-semibold">Type</div>
                <div className="text-gray-600">Monocrystalline</div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="mb-4 text-xl font-semibold">
              Inverter Specifications
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-gray-50 p-4">
                <div className="font-semibold">Efficiency</div>
                <div className="text-gray-600">98%</div>
              </div>
              <div className="rounded-lg bg-gray-50 p-4">
                <div className="font-semibold">Warranty</div>
                <div className="text-gray-600">10 Years</div>
              </div>
              <div className="rounded-lg bg-gray-50 p-4">
                <div className="font-semibold">Monitoring</div>
                <div className="text-gray-600">Smart System</div>
              </div>
              <div className="rounded-lg bg-gray-50 p-4">
                <div className="font-semibold">Type</div>
                <div className="text-gray-600">String Inverter</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TechnicalSpecification;
