
const Testimonials = () => {
  const testimonials = [
    { name: "Shubham", location: "Indore", treatment: "Aligners" },
    { name: "Shubpreet", location: "Indore", treatment: "RCT" },
    { name: "Anita", location: "Banglore", treatment: "Laser Treatment" },
    { name: "Aarti", location: "Indore", treatment: "Dentures" },
    { name: "Aditya", location: "Indore", treatment: "Implant" },
    { name: "Nikita", location: "Indore", treatment: "General" }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-lg text-gray-600">
            Real smiles, real stories. Here's what our patients love about their CLOVE Dental experience!
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-4 shadow-sm text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-200 to-orange-400 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </span>
              </div>
              <h4 className="font-semibold text-gray-800 text-sm">{testimonial.name}</h4>
              <p className="text-xs text-gray-500">{testimonial.location}</p>
              <span className="inline-block mt-2 px-2 py-1 bg-orange-100 text-orange-600 text-xs rounded-full">
                {testimonial.treatment}
              </span>
            </div>
          ))}
        </div>

        {/* Appointment Form */}
        <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-6">
            Book an Appointment With Clove Dentist in Delhi
          </h3>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <input 
              type="text" 
              placeholder="Name" 
              className="p-3 border border-gray-300 rounded-lg"
            />
            <input 
              type="tel" 
              placeholder="Phone" 
              className="p-3 border border-gray-300 rounded-lg"
            />
            <div className="flex gap-2">
              <input 
                type="text" 
                placeholder="Captcha" 
                className="flex-1 p-3 border border-gray-300 rounded-lg"
              />
              <div className="bg-amber-900 text-white px-4 py-3 rounded-lg font-mono">
                1514
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-500 mb-4 text-center">
            I agree to CLOVE Dental's Terms and Privacy Policy and consent to contact via phone, email, or SMS.
          </p>
          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg text-lg font-semibold transition-colors">
            Book Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
