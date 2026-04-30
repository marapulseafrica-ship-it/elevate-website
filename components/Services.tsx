
import React, { useEffect } from 'react';
import { 
  Workflow, Bot, Search, ShoppingCart, BarChart, 
  GraduationCap, Landmark, HeartPulse, Building2, Users, Headset,
  CheckCircle, ArrowRight, Store
} from 'lucide-react';

interface ServicesProps {
  onBook?: () => void;
}

const ServiceSection = ({ icon: Icon, title, description, items }: { icon: any, title: string, description: string, items?: string[] }) => (
  <div className="p-10 bg-white border border-gray-100 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all mb-8 group">
    <div className="flex flex-col md:flex-row gap-8">
      <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
        <Icon className="w-8 h-8" />
      </div>
      <div>
        <h4 className="text-2xl font-bold text-slate-900 mb-4">{title}</h4>
        <p className="text-lg text-slate-600 leading-relaxed mb-6">{description}</p>
        {items && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {items.map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-slate-500">
                <CheckCircle className="w-4 h-4 text-blue-500" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  </div>
);

const IndustryCard = ({ icon: Icon, title, content }: { icon: any, title: string, content: any }) => (
  <div className="bg-white border border-gray-100 rounded-[2rem] p-8 shadow-sm hover:border-blue-200 transition-all flex flex-col h-full">
    <div className="flex items-center gap-4 mb-6">
      <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
        <Icon className="w-6 h-6" />
      </div>
      <h4 className="text-xl font-bold text-slate-900">{title}</h4>
    </div>
    <div className="space-y-4 flex-grow">
      <div>
        <span className="text-xs font-bold text-blue-600 uppercase tracking-tighter">What it does</span>
        <p className="text-sm text-slate-600">{content.what}</p>
      </div>
      <div>
        <span className="text-xs font-bold text-blue-600 uppercase tracking-tighter">Who it helps</span>
        <p className="text-sm text-slate-600">{content.who}</p>
      </div>
      <div>
        <span className="text-xs font-bold text-blue-600 uppercase tracking-tighter">Key Benefits</span>
        <ul className="text-sm text-slate-600 space-y-1 mt-1">
          {content.benefits.map((b: string, i: number) => <li key={i}>• {b}</li>)}
        </ul>
      </div>
    </div>
  </div>
);

const Services: React.FC<ServicesProps> = ({ onBook }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-gray-50 pt-16 pb-32 animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ⭐ SERVICES OVERVIEW HEADER */}
        <div className="text-center mb-24">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-50 text-blue-600 text-sm font-bold uppercase tracking-widest">
            Detailed Capabilities
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight">
            Our Core <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
            At ElevateAI Solutions, we provide a complete suite of automation and AI services designed to modernize business operations and achieve world-class efficiency.
          </p>
        </div>

        {/* TOP LEVEL SERVICES */}
        <div className="mb-32">
          <ServiceSection 
            icon={Workflow} 
            title="1. Workflow Automation" 
            description="We help businesses eliminate repetitive tasks and create smooth, reliable processes that run automatically in the background. This service focuses on improving speed, reducing errors, and connecting different parts of your business into one seamless system."
          />
          <ServiceSection 
            icon={Bot} 
            title="2. AI Agent Automations" 
            description="AI Agents act like smart digital assistants that help both your team and your customers. They can communicate, respond, guide, and complete tasks 24/7 without any human intervention."
          />
          <ServiceSection 
            icon={Search} 
            title="3. Consultations" 
            description="We help businesses understand what to automate and how it will benefit them. It’s a strategic session that gives clarity, direction, and expert guidance before any project begins."
          />
          <ServiceSection 
            icon={ShoppingCart} 
            title="4. B2C Customer Automation" 
            description="Automates direct customer interactions, sales processes, and service delivery to create faster responses and smoother customer journeys."
            items={["Retail & E-commerce", "Hotels & Restaurants", "Salons & Clinics", "Service Providers"]}
          />
          <ServiceSection 
            icon={BarChart} 
            title="5. Automation Audits" 
            description="Evaluates your current operations and identifies opportunities where automation can improve efficiency, reduce costs, and eliminate manual work."
            items={["Clear Strategy", "Smarter Investments", "Productivity Roadmap", "Risk Mitigation"]}
          />
        </div>

        {/* ⭐ AI AUTOMATIONS BY INDUSTRY */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">AI Automations by Industry</h3>
            <p className="text-slate-500">Some of the industries we cover:</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <IndustryCard icon={GraduationCap} title="Education" content={{
              what: "Modernises school operations by digitising administrative processes and communication.",
              who: "Schools, academies, colleges, and training institutions.",
              benefits: ["Organised academic management", "Faster admin processes", "Stronger parent communication"]
            }} />
            <IndustryCard icon={Landmark} title="Finance" content={{
              what: "Streamlines financial workflows and creates structured, automated finance systems.",
              who: "SMEs, accountants, finance departments, and cooperatives.",
              benefits: ["Accurate financial processes", "Strong cashflow control", "Reduced manual errors"]
            }} />
            <IndustryCard icon={HeartPulse} title="Healthcare" content={{
              what: "Improves patient management and efficiency through intelligent scheduling.",
              who: "Hospitals, clinics, labs, pharmacies, and private practices.",
              benefits: ["Improved patient satisfaction", "Reduced missed appointments", "Efficient clinic operations"]
            }} />
            <IndustryCard icon={Building2} title="Real Estate" content={{
              what: "Automates property management and sales processes to improve client engagement.",
              who: "Agencies, property managers, landlords, and developers.",
              benefits: ["Faster lead response times", "Better client management", "Increased closing rates"]
            }} />
            <IndustryCard icon={Users} title="HR & Workforce" content={{
              what: "Enhances workforce operations through digital onboarding and internal workflows.",
              who: "HR teams, operations managers, and recruiting departments.",
              benefits: ["Faster HR workflows", "Organised employee processes", "Reduced paperwork"]
            }} />
            <IndustryCard icon={Headset} title="Customer Support" content={{
              what: "Delivers fast, reliable, AI-powered service with automated routing and communication.",
              who: "Support teams, service providers, and high-inquiry businesses.",
              benefits: ["Faster customer responses", "Higher customer satisfaction", "24/7 support flows"]
            }} />
            <IndustryCard icon={Store} title="B2C Businesses" content={{
              what: "Automates direct customer interactions, sales processes, and service delivery.",
              who: "Retail, restaurants, hotels, gyms, salons, clinics, and e-commerce stores.",
              benefits: ["Increased sales conversions", "Higher customer retention", "Consistent communication"]
            }} />
          </div>
        </div>

        {/* FINAL CTA BOX */}
        <div className="bg-[#0a1a35] rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600 opacity-20 blur-[100px] -ml-32 -mt-32"></div>
          <h3 className="text-3xl font-bold mb-6 relative z-10">Want to know more?</h3>
          <p className="text-blue-100/70 text-lg mb-10 max-w-2xl mx-auto relative z-10">
            Book a consultation and we’ll design a solution tailored specifically to your business goals.
          </p>
          <button 
            onClick={onBook}
            className="px-12 py-5 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold transition-all shadow-xl flex items-center gap-3 mx-auto relative z-10"
          >
            Book a Consultation
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default Services;
