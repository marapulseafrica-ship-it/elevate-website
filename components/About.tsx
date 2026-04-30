
import React, { useEffect } from 'react';
import { 
  Target, Eye, Lightbulb, Layers, ShieldCheck, Eye as EyeIcon, 
  TrendingUp, Clock, Zap, Link, DollarSign, MessageSquare, 
  AlertCircle, UserX, Search, Map, Code, CheckCircle, Users, BarChart 
} from 'lucide-react';

const ValueCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
    <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4">
      <Icon className="w-5 h-5" />
    </div>
    <h4 className="font-bold text-slate-900 mb-2">{title}</h4>
    <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
  </div>
);

const ProblemCard = ({ icon: Icon, text }: { icon: any, text: string }) => (
  <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
    <Icon className="w-5 h-5 text-blue-600 shrink-0" />
    <span className="text-slate-700 font-medium text-sm">{text}</span>
  </div>
);

const Step = ({ number, title, description }: { number: string, title: string, description: string }) => (
  <div className="relative pl-12 pb-12 last:pb-0 group">
    <div className="absolute left-0 top-0 w-8 h-8 bg-[#0a1a35] text-white rounded-full flex items-center justify-center font-bold text-sm z-10 group-hover:bg-blue-600 transition-colors">
      {number}
    </div>
    <div className="absolute left-[15px] top-8 bottom-0 w-[2px] bg-gray-100 group-last:hidden"></div>
    <h4 className="text-lg font-bold text-slate-900 mb-2">{title}</h4>
    <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
  </div>
);

const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="about" className="py-24 bg-white overflow-hidden animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ⭐ ABOUT US */}
        <div className="mb-32">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-50 text-blue-600 text-sm font-bold uppercase tracking-widest">
            Detailed Profile
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
                Modernizing global operations with <span className="text-blue-600">Intelligent AI</span>.
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                ElevateAI Solutions is an AI automation partner dedicated to helping businesses around the world modernize operations, eliminate inefficiencies, and accelerate digital transformation.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                We design intelligent workflows, powerful AI agents, and long-term automation systems that simplify how organisations work — so teams can focus on growth, not repetitive tasks. Our multidisciplinary team blends strategy, automation engineering, UX, and industry knowledge to deliver tailored AI solutions across multiple sectors.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600/5 rounded-3xl -rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop" 
                alt="Our Global Team" 
                className="relative rounded-3xl shadow-xl z-10 w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>

        {/* ⭐ MISSION & VISION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          <div className="p-10 bg-[#0a1a35] rounded-[2.5rem] text-white">
            <Target className="w-12 h-12 text-blue-400 mb-6" />
            <h3 className="text-2xl font-bold mb-4 italic">Our Mission</h3>
            <p className="text-blue-100/70 leading-relaxed">
              To help businesses operate smarter and faster by building intelligent, scalable automation systems powered by AI.
            </p>
          </div>
          <div className="p-10 bg-blue-600 rounded-[2.5rem] text-white">
            <Eye className="w-12 h-12 text-white mb-6" />
            <h3 className="text-2xl font-bold mb-4 italic">Our Vision</h3>
            <p className="text-white/80 leading-relaxed">
              To become a global leader in AI-driven automation, empowering organisations of all sizes to unlock efficiency, reduce manual work, and transform how they deliver value.
            </p>
          </div>
        </div>

        {/* ⭐ VALUES */}
        <div className="mb-32">
          <h3 className="text-3xl font-bold text-center text-slate-900 mb-16">Our Core Values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <ValueCard 
              icon={Lightbulb} 
              title="Innovation" 
              description="We embrace new technologies and push boundaries to design powerful systems." 
            />
            <ValueCard 
              icon={Layers} 
              title="Simplicity" 
              description="Complex problems deserve intuitive solutions. We build for ease of use and scale." 
            />
            <ValueCard 
              icon={ShieldCheck} 
              title="Reliability" 
              description="Every workflow we build must be stable, consistent, and trustworthy 24/7." 
            />
            <ValueCard 
              icon={EyeIcon} 
              title="Transparency" 
              description="Clear communication, honest expectations, and ethical AI use are our core." 
            />
            <ValueCard 
              icon={TrendingUp} 
              title="Impact" 
              description="We focus on measurable improvements — time saved and productivity increased." 
            />
          </div>
        </div>

        {/* ⭐ OUR STORY */}
        <div className="bg-gray-50 rounded-[3rem] p-12 md:p-20 mb-32 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200/20 blur-3xl -mr-32 -mt-32"></div>
          <div className="relative z-10 max-w-3xl">
            <h3 className="text-3xl font-bold text-slate-900 mb-8">Our Story</h3>
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>
                ElevateAI Solutions began with a simple belief: Every business deserves access to modern automation — not just large corporations. We saw how companies around the world, from schools to hospitals to real estate firms, were losing countless hours to repetitive administrative tasks.
              </p>
              <p>
                Manual work slowed down growth, reduced staff productivity, and limited customer experience. So we built an AI automation agency designed for the future:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>One that uses smart workflows instead of more employees.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>One that replaces repetitive tasks with AI-powered systems.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>One that helps businesses scale without increasing operational load.</span>
                </li>
              </ul>
              <p className="font-medium text-slate-900">
                Today, ElevateAI Solutions provides automation services across multiple industries and continues to expand globally — building intelligent systems that make companies more efficient, more competitive, and more future-ready.
              </p>
            </div>
          </div>
        </div>

        {/* ⭐ THE PROBLEM WE SOLVE */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">The Problem We Solve</h3>
            <p className="text-slate-500">Most businesses struggle with friction that reduces revenue and growth.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <ProblemCard icon={Clock} text="Repetitive manual work" />
            <ProblemCard icon={Zap} text="Slow internal processes" />
            <ProblemCard icon={Link} text="Disconnected systems" />
            <ProblemCard icon={DollarSign} text="High operational costs" />
            <ProblemCard icon={MessageSquare} text="Delayed communication" />
            <ProblemCard icon={AlertCircle} text="Human error" />
            <ProblemCard icon={UserX} text="Inefficient service" />
            <ProblemCard icon={TrendingUp} text="Growth Stagnation" />
          </div>
        </div>

        {/* ⭐ OUR APPROACH */}
        <div>
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Our Approach</h3>
            <p className="text-slate-500">Simple, structured, and results-driven methodology.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-2">
              <Step 
                number="1" 
                title="Understand Your Business" 
                description="We begin with consultations and process analysis to understand your challenges, goals, and workflow structure." 
              />
              <Step 
                number="2" 
                title="Map Out Opportunities" 
                description="We identify which tasks can be automated and where AI will deliver the greatest impact." 
              />
              <Step 
                number="3" 
                title="Build Intelligent Systems" 
                description="We design custom workflows, AI agents, and automation pipelines tailored specifically to your operations." 
              />
            </div>
            <div className="space-y-2">
              <Step 
                number="4" 
                title="Test & Deploy" 
                description="We rigorously test every system to ensure reliability, accuracy, and seamless integration with your existing tools." 
              />
              <Step 
                number="5" 
                title="Train Your Team" 
                description="We onboard your staff with clear documentation, training sessions, and dedicated support." 
              />
              <Step 
                number="6" 
                title="Support & Scale" 
                description="We continue to maintain, optimise, and expand your automation systems as your business grows." 
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
