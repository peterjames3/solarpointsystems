import { DollarSign, Leaf, Home, ArrowRight, TrendingUp,  } from "lucide-react";

import { useNavigate } from 'react-router-dom';
const Benefits = () => {
  const navigate = useNavigate();
  const navigateToContact = ()=>{
    setTimeout(()=>{
       navigate("/contact")
    }, 1000)
  }
  return (
    <>
      <div className="bg-white rounded-xl p-8 mb-12">
        <h3 className="text-2xl font-bold mb-8 text-center">
          Benefits of Switching to Solar Power in Kenya
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <DollarSign className="w-8 h-8 text-green-700 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-2">Cost Savings</h4>
                <p className="text-gray-600">
                  Significant reduction in electricity bills.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Leaf className="w-8 h-8 text-green-700 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-2">Eco-friendly</h4>
                <p className="text-gray-600">
                  A clean, renewable energy solution that contributes to a
                  greener planet.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Home className="w-8 h-8 text-green-700 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-2">Energy Independence</h4>
                <p className="text-gray-600">
                  Reduced reliance on grid electricity, empowering homeowners
                  with solar energy.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <TrendingUp className="w-8 h-8 text-green-700 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-2">Increased Property Value</h4>
                <p className="text-gray-600">
                  Homes powered by solar energy typically see an increase in
                  market value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> {/* ✅ Closing div added */}
         <div className="bg-white rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">
          Investment Range for Solar Solutions in Kenya
        </h3>
        <p className="text-gray-600 mb-4">
          The cost of transitioning to solar energy in Kenya varies, typically
          ranging from:
        </p>
        <p className="text-3xl font-bold text-green-700 mb-4">
          KSh 185,000 - 999,000
        </p>
        <p className="text-gray-600 mb-8">
          The final price depends on the size of the system and specific
          requirements.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button  type="button" onClick={navigateToContact}className="inline-flex items-center gap-2 bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition-colors">
            Schedule Your Assessment
            <ArrowRight className="size-5" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Benefits;
