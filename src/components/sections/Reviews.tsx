
const Reviews = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            Google Reviews
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6 items-center">
            {/* Google Rating */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4">
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-red-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">G</span>
                </div>
              </div>
              <div className="flex justify-center mb-2">
                <span className="text-yellow-400 text-2xl">★</span>
                <span className="text-2xl font-bold ml-2">4.9</span>
              </div>
              <p className="text-orange-500 font-semibold">(1.6 Lakh +)</p>
              <p className="text-sm text-gray-600">Verified Google Ratings</p>
            </div>

            {/* Review Cards */}
            {[1, 2, 3].map((review) => (
              <div key={review} className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-orange-200 rounded-full flex items-center justify-center">
                    <span className="text-orange-600 font-bold">N</span>
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-red-500 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">G</span>
                  </div>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Neha Singh</h4>
                <div className="flex text-yellow-400 mb-3">
                  {[1, 2, 3, 4].map((star) => (
                    <span key={star}>★</span>
                  ))}
                </div>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Find Us Section */}
        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-4">
            Find Us Across India
          </h3>
          <p className="text-gray-600 text-center mb-12 max-w-4xl mx-auto">
            With over 500 clinics across India, you're never too far from a Clove Dental clinic. Choose your preferred city to book an appointment.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* City Cards */}
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-200 rounded-lg flex items-center justify-center">
                  <span className="text-orange-600 font-bold">🏢</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Delhi/NCR</h4>
                  <p className="text-sm text-gray-600">190 Clinics</p>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-200 rounded-lg flex items-center justify-center">
                  <span className="text-orange-600 font-bold">🏢</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Mumbai</h4>
                  <p className="text-sm text-gray-600">40 Clinics</p>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-200 rounded-lg flex items-center justify-center">
                  <span className="text-orange-600 font-bold">🏢</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Pune</h4>
                  <p className="text-sm text-gray-600">76 Clinics</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-200 rounded-lg flex items-center justify-center">
                  <span className="text-orange-600 font-bold">🏢</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Banglore</h4>
                  <p className="text-sm text-gray-600">110 Clinics</p>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-200 rounded-lg flex items-center justify-center">
                  <span className="text-orange-600 font-bold">🏢</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Chennai</h4>
                  <p className="text-sm text-gray-600">59 Clinics</p>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-200 rounded-lg flex items-center justify-center">
                  <span className="text-orange-600 font-bold">🏢</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Ahmedabad</h4>
                  <p className="text-sm text-gray-600">27 Clinics</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-200 rounded-lg flex items-center justify-center">
                  <span className="text-orange-600 font-bold">🏢</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Hyderabad</h4>
                  <p className="text-sm text-gray-600">76 Clinics</p>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-200 rounded-lg flex items-center justify-center">
                  <span className="text-orange-600 font-bold">🏢</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Punjab</h4>
                  <p className="text-sm text-gray-600">27 Clinics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
