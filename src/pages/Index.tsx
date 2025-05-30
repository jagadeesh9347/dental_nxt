
import Hero from '@/components/sections/Hero';
import TreatmentTypes from '@/components/sections/TreatmentTypes';
import WhyChoose from '@/components/sections/WhyChoose';
import Testimonials from '@/components/sections/Testimonials';
import Reviews from '@/components/sections/Reviews';
import FAQ from '@/components/sections/FAQ';
import Footer from '@/components/sections/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <TreatmentTypes />
      <WhyChoose />
      <Testimonials />
      <Reviews />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
