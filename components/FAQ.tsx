
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string | string[];
}

const faqData: FAQItem[] = [
  {
    question: "How long does a workflow take?",
    answer: "Most standard workflows take 1–3 weeks depending on complexity. Industry-level or multi-department workflows take 4–8 weeks, and enterprise automations may take 2–6 months depending on scope, data sources, and number of integrations."
  },
  {
    question: "What happens if I need changes?",
    answer: "We include revision cycles in every project. After delivery, you can request adjustments, improvements, or additions. For larger changes, we’ll provide a small update quote or include them in your support & maintenance plan."
  },
  {
    question: "Do you offer training?",
    answer: [
      "Yes — every project includes:",
      "• Team onboarding sessions",
      "• Walkthrough videos",
      "• Documentation",
      "• Ongoing support (depending on your plan)",
      "Your staff will know exactly how to use all delivered systems."
    ].join('\n')
  },
  {
    question: "What platforms can you integrate with?",
    answer: "We can integrate with most modern platforms, including CRMs, ERPs, HR systems, accounting tools, WhatsApp, SMS gateways, school systems, hospital software, real estate platforms, and custom databases. If your platform supports APIs, Webhooks, Data exports, or Cloud services, we can integrate it."
  },
  {
    question: "What is included in hosting?",
    answer: [
      "Hosting includes:",
      "• Secure cloud storage for automation workflows",
      "• Workflow uptime monitoring",
      "• Scheduled backups",
      "• Performance optimization",
      "• Access to your client portal (Dashboards, Billing, Reports)",
      "• 24/7 workflow performance tracking",
      "Hosting and maintenance ensure your automations run smoothly every day."
    ].join('\n')
  },
  {
    question: "What is your cancellation policy?",
    answer: "You can cancel any monthly support plan at any time. Project-based work (one-time builds) cannot be refunded once development begins, but support subscriptions can be cancelled without penalties."
  },
  {
    question: "Do I need technical knowledge to work with you?",
    answer: "No — we handle everything from strategy to implementation. Your team only needs to understand the workflows after training, not the code behind them."
  },
  {
    question: "Can you build custom solutions for my industry?",
    answer: "Yes. We specialize in custom automations and can design systems for Education, Healthcare, Real Estate, Finance, HR, Customer Support, or any niche with repetitive tasks."
  },
  {
    question: "Do you provide after-launch support?",
    answer: [
      "Yes. We offer:",
      "• Monthly maintenance plans",
      "• Priority support",
      "• System upgrades and monitoring",
      "• AI agent supervision",
      "• Workflow optimization",
      "Your systems stay up-to-date and efficient."
    ].join('\n')
  },
  {
    question: "Will automations replace my staff?",
    answer: "No. Automations support your staff by handling repetitive work. Your team becomes faster and more efficient and can focus on higher-value tasks."
  },
  {
    question: "How do you ensure data privacy and security?",
    answer: [
      "We follow strict standards for:",
      "• Data protection",
      "• Access controls",
      "• Secure cloud environments",
      "• Internal compliance",
      "• Confidentiality",
      "Your business information remains protected at all times."
    ].join('\n')
  },
  {
    question: "Can you integrate AI agents with WhatsApp?",
    answer: "Yes. WhatsApp is one of our most requested channels for AI agents. Agents can answer questions, book appointments, send reminders, and handle customer support."
  },
  {
    question: "What industries do you specialise in?",
    answer: "We currently support Education, Finance, Healthcare, Real Estate, HR & Workforce, Customer Support, and various SMEs and service-based businesses."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-gray-50/50 relative overflow-hidden">
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/20 blur-[100px] rounded-full -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/20 blur-[100px] rounded-full -ml-48 -mb-48"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-50 text-blue-600 text-sm font-bold uppercase tracking-widest">
            ⭐ FAQ
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Below are answers to the most common questions clients ask before starting their AI automation or AI agent project with ElevateAI Solutions.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={index}
              className={`bg-white border transition-all duration-300 rounded-2xl overflow-hidden ${
                openIndex === index ? 'border-blue-200 shadow-md ring-1 ring-blue-50' : 'border-gray-100 shadow-sm hover:border-gray-200'
              }`}
            >
              <button 
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                    openIndex === index ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600'
                  }`}>
                    <HelpCircle className="w-4 h-4" />
                  </div>
                  <span className={`font-bold text-base md:text-lg transition-colors ${
                    openIndex === index ? 'text-blue-700' : 'text-slate-800'
                  }`}>
                    {index + 1}. {item.question}
                  </span>
                </div>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-600 shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                )}
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 pt-0 ml-12 border-t border-gray-50 mt-2">
                  <p className="text-slate-600 leading-relaxed whitespace-pre-line text-sm md:text-base pt-4">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA in FAQ */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 mb-6">Still have questions?</p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-white border-2 border-slate-900 text-slate-900 font-bold rounded-xl hover:bg-slate-900 hover:text-white transition-all shadow-sm"
          >
            Ask Us Directly
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
