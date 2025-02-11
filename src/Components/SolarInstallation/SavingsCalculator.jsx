import React, { useState } from "react";
import QuotationModal from "../QuotationModal";
import { Calculator, Sun, Zap, ArrowRight, Info } from "lucide-react";

const SavingsCalculator = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [monthlyBill, setMonthlyBill] = useState("");
  const [dailySunHours, setDailySunHours] = useState("6"); // Default for Kenya
  const [results, setResults] = useState(null);

  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

  const calculateSavings = () => {
    const bill = parseFloat(monthlyBill);
    const sunHours = parseFloat(dailySunHours);

    if (bill && sunHours) {
      const monthlySavings = bill * 0.75; // Assuming 75% savings
      const systemSize = (bill * 12) / (sunHours * 365 * 0.15); // Rough estimation

      setResults({
        monthlySavings,
        annualSavings: monthlySavings * 12,
        twentyYearSavings: monthlySavings * 12 * 20,
        systemSize: Math.round(systemSize),
        co2Reduction: systemSize * 1.5 * 12, // Rough CO2 reduction calculation
      });
    }
  };

  return (
    <section className="bg-white py-16">
      <div className="wrapper mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">
              Solar Savings Calculator
            </h2>
            <p className="text-gray-600">
              See how much you could save by switching to solar power. Enter
              your average monthly electricity bill to get started.
            </p>
          </div>
          <div className="mb-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-xl bg-[#ecf4f0] p-6">
              <h3 className="mb-6 flex items-center gap-2 text-xl font-semibold">
                <Calculator className="h-5 w-5 text-green-700" />
                Calculate Your Savings
              </h3>
              <div className="space-y-6">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Monthly Electricity Bill (KSh)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={monthlyBill}
                      onChange={(e) => setMonthlyBill(e.target.value)}
                      className="w-full rounded-lg border border-gray-200 py-2 pl-10 pr-4 focus:border-transparent focus:ring-2 focus:ring-green-500"
                      placeholder="Enter amount"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Daily Sun Hours
                  </label>
                  <div className="relative">
                    <Sun className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                    <select
                      value={dailySunHours}
                      onChange={(e) => setDailySunHours(e.target.value)}
                      className="w-full rounded-lg border border-gray-200 py-2 pl-10 pr-4 focus:border-transparent focus:ring-2 focus:ring-green-500"
                    >
                      <option value="5">5 hours (Coastal)</option>
                      <option value="6">6 hours (Most of Kenya)</option>
                      <option value="7">7 hours (High altitude)</option>
                    </select>
                  </div>
                </div>
                <button
                  onClick={calculateSavings}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-green-700 px-6 py-3 text-white transition-colors hover:bg-green-800"
                >
                  Calculate Savings
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="rounded-xl bg-gray-50 p-6">
              <h3 className="mb-6 flex items-center gap-2 text-xl font-semibold">
                <Zap className="h-5 w-5 text-green-700" />
                Your Potential Savings
              </h3>
              {results ? (
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-lg bg-white p-4">
                      <div className="mb-1 text-sm text-gray-600">
                        Monthly Savings
                      </div>
                      <div className="text-2xl font-bold text-green-700">
                        KSh {results.monthlySavings.toLocaleString()}
                      </div>
                    </div>
                    <div className="rounded-lg bg-white p-4">
                      <div className="mb-1 text-sm text-gray-600">
                        Annual Savings
                      </div>
                      <div className="text-2xl font-bold text-green-700">
                        KSh {results.annualSavings.toLocaleString()}
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg bg-white p-4">
                    <div className="mb-1 text-sm text-gray-600">
                      20-Year Savings
                    </div>
                    <div className="text-3xl font-bold text-green-700">
                      KSh {results.twentyYearSavings.toLocaleString()}
                    </div>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="mb-3 flex items-start gap-2">
                      <Sun className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-500" />
                      <div>
                        <div className="font-medium">
                          Recommended System Size
                        </div>
                        <div className="text-gray-600">
                          {results.systemSize} kW
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Info className="mt-1 h-5 w-5 flex-shrink-0 text-blue-500" />
                      <div>
                        <div className="font-medium">CO2 Reduction</div>
                        <div className="text-gray-600">
                          {results.co2Reduction.toFixed(1)} tonnes per year
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="py-8 text-center text-gray-500">
                  Enter your monthly bill to see potential savings
                </div>
              )}
            </div>
          </div>
          <div className="text-center">
            <p className="mb-6 text-gray-600">
              Want a detailed analysis and customized quote for your property?
            </p>
            <button
              type="button"
              onClick={handleOpen}
              className="inline-flex items-center gap-2 rounded-lg bg-green-700 px-8 py-3 text-white transition-colors hover:bg-green-800"
            >
              Get Detailed Quote
              <ArrowRight className="size-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Render the modal when isOpen is true */}
      <div className="h-1">
        {isOpen && <QuotationModal isOpen={isOpen} onClose={handleClose} />}
      </div>
    </section>
  );
};

export default SavingsCalculator;
