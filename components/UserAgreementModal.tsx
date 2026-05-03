
import React, { useState, useEffect } from 'react';
import { ShieldCheck, CheckCircle, XCircle, ExternalLink } from 'lucide-react';

const UserAgreementModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasAgreed = localStorage.getItem('elevate_ai_user_agreement_accepted');
    if (!hasAgreed) {
      setIsOpen(true);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('elevate_ai_user_agreement_accepted', 'true');
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  const handleDecline = () => {
    // Redirect away if they don't accept
    window.location.href = 'https://www.google.com';
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md">
      <div className="bg-white w-full max-w-4xl rounded-[2.5rem] shadow-2xl flex flex-col max-h-[90vh] overflow-hidden border border-white/20">
        
        {/* Header */}
        <div className="p-8 border-b border-gray-100 bg-[#0a1a35] text-white flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center">
            <ShieldCheck className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">User Agreement</h2>
            <p className="text-blue-200/70 text-sm">Please review and accept our terms to continue</p>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-8 md:p-12 text-slate-600 leading-relaxed space-y-8 scrollbar-thin scrollbar-thumb-gray-200">
          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">1. Introduction and Acceptance of Terms</h3>
            <p>Welcome to ElevateAl solutions Agency (“we,” “our,” or “the Company”). This User Agreement (“Agreement”) governs your access to and use of our AI automation and voice agent services, including our website, applications, APIs, and any related platforms (collectively, the “Services”).</p>
            <p className="mt-4">By accessing or using our Services, creating an account, or clicking “I Agree” or similar confirmation, you acknowledge that you have read, understood, and agree to be bound by this Agreement, our Privacy Policy, our AI Automation and Voice Agents Policy (POL-001), and any additional terms referenced herein.</p>
            <div className="mt-4 p-4 bg-amber-50 border-l-4 border-amber-400 text-amber-900 text-sm font-medium">
              Important: If you do not agree to these terms, you must not access or use our Services. Continued use of the Services following the posting of changes to this Agreement constitutes your acceptance of those changes.
            </div>
            <p className="mt-4 italic">This Agreement is effective as of May 2024 and applies to all users of our Services in the Republic of Zambia and the Republic of South Africa.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">2. Definitions</h3>
            <ul className="space-y-3 list-disc pl-5">
              <li><strong>“User,” “you,” or “your”</strong> refers to any individual or entity that accesses or uses the Services.</li>
              <li><strong>“Client”</strong> refers to any individual or entity that has entered into a service agreement or subscription.</li>
              <li><strong>“End User”</strong> refers to any individual who interacts with, or is contacted by, an AI voice agent.</li>
              <li><strong>“Services”</strong> refers to all AI automation, voice agent, chatbot, and related technology.</li>
              <li><strong>“Personal Information”</strong> has the meaning ascribed to it under the Data Protection Act (Zambia) and POPIA (South Africa).</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">3. Eligibility</h3>
            <p>To use our Services, you must be at least 18 years of age, have the legal capacity to enter into a binding agreement, and not be prohibited from using the Services under any applicable law in Zambia or South Africa.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">4. Account Registration and Security</h3>
            <p>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. Notify the Company immediately of any unauthorized use.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">5. Description of Services</h3>
            <p>The Company provides AI-powered automation and voice agent services, including inbound/outbound telephone interactions, automated calling, IVR systems, and workflow automation.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">6. AI Disclosure and Transparency</h3>
            <div className="bg-blue-50 p-6 rounded-2xl space-y-4">
              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
                <p>Our voice agents and chatbots are AI-powered systems, not human beings.</p>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
                <p>AI systems may occasionally generate responses that contain errors or limitations.</p>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
                <p>AI voice agents will identify themselves as artificial intelligence systems at the start of every interaction.</p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">7. User Obligations and Acceptable Use</h3>
            <p>You shall comply with all laws and regulations, respect the privacy of end users, and not use the services for unsolicited communications, spam, harassment, or to generate deceptive content.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">8. Consent and Data Processing</h3>
            <p>By using the Services, you consent to the collection, processing, and use of your personal information as described in our policies. Clients are responsible for obtaining necessary consents from their end users.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">9. Privacy and Data Protection</h3>
            <p>Collection, use, and storage of personal information is governed by our Privacy Policy and AI Automation Policy, adhering to POPIA and Zambia DPA standards.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">12. Disclaimers and Limitation of Liability</h3>
            <p>THE SERVICES ARE PROVIDED “AS IS” WITHOUT WARRANTIES. The Company's liability is limited to the maximum extent permitted by law in Zambia and South Africa.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">15. Governing Law and Dispute Resolution</h3>
            <p>This Agreement is governed by the laws of Zambia for Zambian users and South Africa for South African users. Disputes shall first be attempted to be resolved via good-faith negotiation, then mediation or binding arbitration.</p>
          </section>

          <section className="pb-8 border-t border-gray-100 pt-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">18. Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm bg-gray-50 p-6 rounded-2xl">
              <div>
                <span className="font-bold block">Company Name</span>
                ElevateAI Solutions Limited
              </div>
              <div>
                <span className="font-bold block">Email</span>
                elevatealsolutionsagency@gmail.com
              </div>
              <div>
                <span className="font-bold block">Information Officer (SA)</span>
                Kica Benedict, kicaben5@gmail.com
              </div>
              <div>
                <span className="font-bold block">Data Protection Contact (ZM)</span>
                Daniel Kimara, kimaradaniel9@gmail.com
              </div>
            </div>
          </section>
        </div>

        {/* Sticky Footer Actions */}
        <div className="p-8 border-t border-gray-100 bg-gray-50 flex flex-col sm:flex-row gap-4 justify-between items-center">
          <div className="text-xs text-slate-400 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4" />
            Your data is protected under POPIA & DPA
          </div>
          <div className="flex gap-4 w-full sm:w-auto">
            <button 
              onClick={handleDecline}
              className="flex-1 sm:flex-none px-8 py-3 bg-white border border-gray-200 text-slate-600 font-bold rounded-xl hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            >
              <XCircle className="w-4 h-4" /> Decline
            </button>
            <button 
              onClick={handleAccept}
              className="flex-1 sm:flex-none px-10 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 active:scale-95 flex items-center justify-center gap-2"
            >
              <CheckCircle className="w-4 h-4" /> Accept & Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAgreementModal;
