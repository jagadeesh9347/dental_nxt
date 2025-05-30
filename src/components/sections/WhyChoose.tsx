
const WhyChoose = () => {
  const features = [
    "DORI - A.I. enabled Dental chair",
    "10x Safety and 4 steps sterilization process",
    "Experienced and Certified implantologist",
    "Updated with world class equipments",
    "Regular audits for safety protocols"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Choose Clove Dental
          </h2>
          <p className="text-lg text-gray-600">
            Clove Dental is India's Leading dental care brand with 600+ clinic nationwide
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Features List */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4 group">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-orange-600 transition-colors">
                  <span className="text-white text-lg font-bold">+</span>
                </div>
                <p className="text-lg text-gray-700 group-hover:text-gray-900 transition-colors">
                  {feature}
                </p>
              </div>
            ))}
          </div>

          {/* Image Placeholder */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-orange-100 rounded-2xl p-8">
              <div className="w-full h-full bg-white rounded-xl shadow-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">👥</span>
                  </div>
                  <p className="text-gray-600">Happy Dental Team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
