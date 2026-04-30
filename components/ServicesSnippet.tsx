
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Workflow, Bot, Search, Code } from 'lucide-react';

const services = [
  {
    icon: <Workflow className="w-12 h-12" />,
    title: "Workflow Automation",
    description: "Streamline repetitive tasks and eliminate manual errors with intelligent workflow engines that integrate your favorite tools.",
    longDesc: "From HR onboarding to financial reporting, our automation engines connect disparate systems to ensure seamless data flow and zero manual bottlenecks."
  },
  {
    icon: <Bot className="w-12 h-12" />,
    title: "AI Agents Automations",
    description: "Deploy autonomous AI agents that handle customer queries, schedule appointments, and manage data entry 24/7.",
    longDesc: "Our agents leverage the latest LLMs to understand natural language and execute complex instructions within your existing business infrastructure."
  },
  {
    icon: <Search className="w-12 h-12" />,
    title: "Consultations & Audits",
    description: "Get a strategic roadmap for AI integration. We audit your current processes to identify the highest ROI automation opportunities.",
    longDesc: "We don't just build; we strategize. Our audits help you understand where AI will have the most significant impact on your bottom line."
  },
  {
    icon: <Code className="w-12 h-12" />,
    title: "Custom AI Solutions",
    description: "End-to-end bespoke AI software engineering tailored to solve your most complex industry-specific challenges.",
    longDesc: "Whether it's computer vision for real estate or predictive analytics for healthcare, we build the models that give you a competitive advantage."
  }
];

interface ServicesSnippetProps {
  onViewAll: () => void;
}

const ServicesSnippet: React.FC<ServicesSnippetProps> = ({ onViewAll }) => {
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % services.length);
  const prev = () => setActive((prev) => (prev - 1 + services.length) % services.length);

  return (
    <section id="services-snippet" className="py-32 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">Capabilities</h2>
          <h3 className="text-4xl font-bold text-slate-900">Services Overview</h3>
        </div>

        {/* Slideshow Container */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-2xl border border-gray-100 flex flex-col md:flex-row items-center gap-12 transition-all duration-500">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center shrink-0">
              {services[active].icon}
            </div>
            <div className="flex-1 text-center md:text-left">
              <h4 className="text-3xl font-bold text-slate-900 mb-6">{services[active].title}</h4>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                {services[active].description}
              </p>
              <div className="p-4 bg-blue-50/50 rounded-xl border border-blue-100 text-sm text-slate-500 italic">
                {services[active].longDesc}
              </div>
              <button 
                onClick={onViewAll}
                className="mt-8 text-blue-600 font-bold hover:underline inline-flex items-center gap-2"
              >
                Read more just underneath the slide show
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12">
            <button onClick={prev} className="p-4 bg-white rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition-all">
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12">
            <button onClick={next} className="p-4 bg-white rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition-all">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          
          {/* Dots */}
          <div className="flex justify-center gap-3 mt-12">
            {services.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setActive(i)}
                className={`w-3 h-3 rounded-full transition-all ${active === i ? 'bg-blue-600 w-8' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSnippet;
