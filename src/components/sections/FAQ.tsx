
import { useState } from 'react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    "Can i choose the dentist on my own for treatment ?",
    "Will i get the same doctor each time i visit the same clinic ?",
    "How you are able to provide less prices than other dental brands ?",
    "What are your dental clinic timings?",
    "How can I book an appointment?", 
    "How frequently should I visit a dentist?"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Anniversary Promotion */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Left Form */}
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Expert Guidance for Healthy Smiles
            </h3>
            <p className="text-gray-600 mb-6 text-sm">
              Book your free consultation today and take the first step towards healthy, beautiful teeth.
            </p>
            <div className="space-y-4">
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full p-3 border border-gray-300 rounded-lg text-sm"
              />
              <input 
                type="tel" 
                placeholder="Mobile Number" 
                className="w-full p-3 border border-gray-300 rounded-lg text-sm"
              />
              <p className="text-xs text-gray-500">
                I agree to CLOVE Dental's Terms and Privacy Policy and consent to contact via phone, email or SMS.
              </p>
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors">
                Book a Free Consultation
              </button>
            </div>
          </div>

          {/* Center Promotion */}
          <div className="bg-gradient-to-r from-orange-400 to-orange-500 p-6 rounded-2xl text-white relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-sm mb-2">Creating Dental Awareness :)</p>
              <h3 className="text-2xl font-bold mb-2">CLOVE DENTAL TURNS 14</h3>
              <p className="text-sm mb-4">Special thanks to our 30 lakh valued customers</p>
              
              <div className="bg-white text-gray-800 p-4 rounded-xl mb-4">
                <p className="text-xs font-semibold mb-1">DENTAL MEMBERSHIP PLAN</p>
                <p className="text-xs mb-2">only at</p>
                <div className="text-3xl font-bold">₹399/-</div>
                <p className="text-xs mt-2">
                  <span className="font-semibold">Dental health is gateway to overall health</span>
                </p>
                <p className="text-xs mt-2">
                  <span className="font-semibold">Member's benefit</span><br/>
                  ₹5,000/-<br/>
                  <span className="text-xs">in dental treatments</span>
                </p>
              </div>
            </div>
            <div className="absolute top-4 right-4 w-24 h-24 bg-white/20 rounded-full"></div>
          </div>

          {/* Right Plan */}
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Dental Health Plan-Anniversary Plan
            </h3>
            <ul className="space-y-3 text-sm text-gray-600 mb-6">
              <li>• ₹1,700 treatment voucher redeemable against any dental procedure.</li>
              <li>• ₹1,000 additional voucher for any treatment (Only one voucher can be used per bill).</li>
              <li>• Unlimited dental consultations and 2D X-rays for an entire year.</li>
            </ul>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-orange-500 font-semibold">Special Offer</span>
              <span className="text-2xl font-bold text-gray-800">₹ 399</span>
              <span className="text-gray-500 line-through">₹ 5100</span>
            </div>
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors">
              Buy Now
            </button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg">
                <button 
                  className="w-full p-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <span className="font-medium text-gray-800">{faq}</span>
                  <span className="text-orange-500 text-xl font-bold">
                    {openFAQ === index ? '−' : '+'}
                  </span>
                </button>
                {openFAQ === index && (
                  <div className="px-4 pb-4">
                    <p className="text-gray-600 text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
