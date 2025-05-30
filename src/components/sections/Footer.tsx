
const Footer = () => {
  return (
    <footer className="bg-amber-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-orange-400">clove:)</h2>
            <span className="text-sm">DENTAL</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-8 text-center md:text-right">
            <a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Terms of service</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Accessibility</a>
          </div>
        </div>

        <hr className="border-orange-300/30 my-8" />

        <div className="text-center text-sm text-orange-200">
          <p>All Rights Reserved - 2024, Clove Dental (a brand name of M/s. Sstar Dental Centre Private Limited). Managed By Unbound</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
