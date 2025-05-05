import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left: Branding */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold text-amber-900">Platea</h2>
          <p className="text-sm text-gray-500">Bites. Booked</p>
        </div>

        

        {/* Right: Copyright */}
        <div className="text-sm text-gray-400 text-center md:text-right">
          &copy; {new Date().getFullYear()} Platea. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
