
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HomeIntroProps {
  onLearnMore: () => void;
}

const HomeIntro: React.FC<HomeIntroProps> = ({ onLearnMore }) => {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden relative border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 relative">
            <div className="absolute -left-12 -top-12 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop" 
              alt="Intelligent Systems" 
              className="relative z-10 rounded-[2rem] shadow-2xl w-full aspect-[4/3] object-cover"
            />
          </div>
          <div className="lg:col-span-7">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">About ElevateAI</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Designing smart workflows that <br />
              <span className="text-blue-600">transform daily operations</span>.
            </h3>
            <div className="space-y-4 text-slate-600 text-lg leading-relaxed mb-8">
              <p>
                ElevateAI Solutions helps businesses modernize their operations with intelligent AI agents and automation systems. We design smart workflows that reduce manual work, streamline communication, and improve efficiency across education, finance, healthcare, real estate, HR, and customer support.
              </p>
              <p>
                Our mission is to help organisations work smarter, faster, and more effectively by building scalable, long-term automation solutions. With a strategic and engineering-focused team, we deliver reliable systems that support sustainable business growth.
              </p>
            </div>
            <button 
              onClick={onLearnMore}
              className="flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all group"
            >
              Learn more about our mission and approach
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeIntro;
