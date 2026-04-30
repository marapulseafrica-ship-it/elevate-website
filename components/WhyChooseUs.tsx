
import React from 'react';
import { Zap, Target, BarChart3, ShieldCheck, Headphones } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="p-8 bg-white border border-gray-100 rounded-2xl hover:shadow-xl transition-all duration-300 group">
    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
      <Icon className="w-6 h-6" />
    </div>
    <h4 className="text-xl font-bold text-slate-900 mb-3">{title}</h4>
    <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
  </div>
);

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">Competitive Edge</h2>
          <h3 className="text-4xl font-bold text-slate-900">Why Choose Us</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <FeatureCard 
            icon={Zap} 
            title="Fast Turnaround" 
            description="We deliver automation systems quickly, with efficient development cycles and smooth deployment." 
          />
          <FeatureCard 
            icon={Target} 
            title="Custom-Built" 
            description="Every workflow and AI agent is designed specifically for your operations. No templates." 
          />
          <FeatureCard 
            icon={BarChart3} 
            title="Affordable & Scalable" 
            description="Our solutions grow with your business. Start small and scale up as your operations expand." 
          />
          <FeatureCard 
            icon={ShieldCheck} 
            title="Secure Hosting" 
            description="Your automations run on secure, monitored infrastructure with backups and encryption." 
          />
          <FeatureCard 
            icon={Headphones} 
            title="Dedicated Support" 
            description="Ongoing maintenance, optimization, and expert guidance to ensure peak performance." 
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
