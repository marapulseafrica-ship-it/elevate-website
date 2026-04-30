
import React from 'react';

interface CTAProps {
  onGetStarted: () => void;
}

const CTA: React.FC<CTAProps> = ({ onGetStarted }) => {
  return (
    <section id="cta" className="bg-[#0a1a35] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center md:text-left">
            Ready to Elevate Your Business?
          </h2>
          <button 
            onClick={onGetStarted}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold transition-all shadow-xl text-lg whitespace-nowrap"
          >
            Book a Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
