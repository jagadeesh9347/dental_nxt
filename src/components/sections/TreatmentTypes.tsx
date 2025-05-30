
import { Button } from '@/components/ui/button';

const TreatmentTypes = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Types of Root Canal Treatments
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            In a root canal, the dentist removes infected pulp, cleans the tooth, and fills it with special material.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Root Canal Treatment */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-orange-100 to-orange-200 p-8 flex items-center justify-center">
              <div className="w-32 h-32 bg-orange-200 rounded-full flex items-center justify-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full"></div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Root Canal Treatment
              </h3>
              <p className="text-gray-600 mb-4">
                Ideal for infected or damaged tooth
              </p>
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Types of RCT</h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Root Canal Treatment</li>
                  <li>• Split RCT</li>
                  <li>• Split RCT with rubber dam</li>
                  <li>• Split RCT with laser</li>
                </ul>
              </div>
              <div className="mb-4">
                <span className="text-orange-500 font-semibold">Starting Price</span>
                <div className="text-2xl font-bold text-gray-800">₹ 19,999</div>
              </div>
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                Get Free Consultation
              </Button>
            </div>
          </div>

          {/* Re-Root Canal Treatment */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 p-8 flex items-center justify-center">
              <div className="w-32 h-32 bg-blue-200 rounded-full flex items-center justify-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full"></div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Re-Root Canal Treatment
              </h3>
              <p className="text-gray-600 mb-4">
                Ideal issues that persist or recur after an initial root canal treatment
              </p>
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Types of RCT</h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Re-RCT with rubber dam</li>
                  <li>• Re-RCT laser specialist</li>
                  <li>• e-RCT with retrieval of old RCT filling</li>
                </ul>
              </div>
              <div className="mb-4">
                <span className="text-orange-500 font-semibold">Starting Price</span>
                <div className="text-2xl font-bold text-gray-800">₹ 19,999</div>
              </div>
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                Get Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentTypes;
