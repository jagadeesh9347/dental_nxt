
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

const Hero = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    captcha: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-r from-blue-50 to-white">
      {/* Header */}
      <header className="flex justify-between items-center p-4 md:p-6">
        <div className="flex items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-orange-500">clove:)</h1>
          <span className="text-sm text-gray-600 ml-2">DENTAL</span>
        </div>
        <div className="flex gap-4">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full">
            Book Appointment
          </Button>
          <Button variant="outline" className="border-gray-300 text-gray-700 px-4 py-2 rounded-full">
            985-6589-510
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Painless Root Canal Treatment in Delhi
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Expert RCT. Zero Pain. Right Here in Delhi.
              </p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full text-lg">
                Book Appointment
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-orange-500">600+</div>
                <div className="text-sm text-gray-600">Clinics</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-orange-500">1300+</div>
                <div className="text-sm text-gray-600">Dentists</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-orange-500">30 L+</div>
                <div className="text-sm text-gray-600">Happy Patients</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-orange-500">35K+</div>
                <div className="text-sm text-gray-600">Ortho Cases</div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Get Expert Dental Guidance in Delhi
            </h3>
            <p className="text-gray-600 mb-6">
              Book your free consultation today and take the first step towards healthy, beautiful teeth.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
              <Input
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
              <div className="flex gap-2">
                <Input
                  placeholder="Captcha"
                  value={formData.captcha}
                  onChange={(e) => setFormData({...formData, captcha: e.target.value})}
                  className="flex-1 p-3 border border-gray-300 rounded-lg"
                />
                <div className="bg-amber-900 text-white px-4 py-3 rounded-lg font-mono">
                  1514
                </div>
              </div>
              <p className="text-xs text-gray-500">
                I agree to CLOVE Dental's Terms and Privacy Policy and consent to contact via phone, email, or SMS.
              </p>
              <Button 
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg text-lg font-semibold"
              >
                Book a Free Consultation
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
