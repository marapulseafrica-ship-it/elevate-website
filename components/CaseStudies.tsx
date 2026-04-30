
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonial = ({ text, author, role }: { text: string, author: string, role: string }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-blue-200 transition-colors">
    <div className="flex text-yellow-400 mb-4">
      {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
    </div>
    <Quote className="w-8 h-8 text-blue-100 mb-4" />
    <p className="text-slate-600 italic mb-6 leading-relaxed">"{text}"</p>
    <div>
      <div className="font-bold text-slate-900">{author}</div>
      <div className="text-sm text-slate-500">{role}</div>
    </div>
  </div>
);

const CaseStudies: React.FC = () => {
  return (
    <section id="case-studies" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">Success Stories</h2>
          <h3 className="text-4xl font-bold text-slate-900">Case Studies & Reviews</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Testimonial 
            text="ElevateAI transformed our real estate operation. Their custom lead processing agents saved our team 20 hours a week."
            author="Chidi Okoro"
            role="Director, Lekki Properties"
          />
          <Testimonial 
            text="The workflow automation for our fintech platform was flawless. They understood our security needs perfectly."
            author="Sarah Mbeki"
            role="CTO, NexaPay"
          />
          <Testimonial 
            text="Fastest turnaround I've seen in any tech partnership. Our patient scheduling AI was live in just 3 weeks."
            author="Dr. Kwame Mensah"
            role="Admin Head, City Health"
          />
        </div>

        <div className="text-center">
          <button className="px-10 py-4 border-2 border-[#0a1a35] text-[#0a1a35] rounded-xl font-bold hover:bg-[#0a1a35] hover:text-white transition-all">
            View All Testimonials
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
