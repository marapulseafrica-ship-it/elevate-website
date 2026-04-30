
import React, { useEffect } from 'react';
import { Download, ShieldCheck } from 'lucide-react';

const TermsOfService: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDownload = () => {
    const element = document.getElementById('tos-document');
    if (element) {
      const opt = {
        margin: [0.5, 0.5],
        filename: 'ElevateAI_Terms_of_Service.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, letterRendering: true },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
      };

      // @ts-ignore
      if (typeof html2pdf !== 'undefined') {
        // @ts-ignore
        html2pdf().set(opt).from(element).save();
      } else {
        window.print();
      }
    }
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      {/* Control Bar (Non-printing) */}
      <div className="max-w-5xl mx-auto mb-8 flex flex-col sm:flex-row justify-between items-center gap-4 border-b border-gray-100 pb-8 no-print">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#0a1a35] rounded-xl flex items-center justify-center text-white">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900 leading-tight">Official Terms of Service</h1>
            <p className="text-sm text-slate-500">Full 17-Page Document Transcription</p>
          </div>
        </div>
        <button 
          onClick={handleDownload}
          className="flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg active:scale-95"
        >
          <Download className="w-4 h-4" /> Download Official PDF
        </button>
      </div>

      {/* The High-Fidelity Document */}
      <div id="tos-document" className="max-w-[8.27in] mx-auto bg-white p-[0.5in] print:p-0 font-serif text-slate-900 text-[10.5pt] leading-normal shadow-sm print:shadow-none">
        
        {/* PAGE 1: COVER PAGE */}
        <div className="min-h-[9.5in] flex flex-col items-center justify-center text-center page-break-after">
          <h1 className="text-[44pt] font-black text-[#0a1a35] mb-4 tracking-tighter uppercase leading-none">TERMS OF SERVICE</h1>
          <p className="text-[18pt] text-blue-600 font-bold italic mb-2">AI Automation, AI agents & Voice Agent Services</p>
          <p className="text-[12pt] text-slate-500 mb-20">Applicable in the Republic of Zambia and the Republic of South Africa</p>
          <div className="w-full border-t border-slate-900 my-12"></div>
          
          <div className="mt-12 flex flex-col items-center">
            {/* Replicating Logo from Screenshot */}
            <div className="flex items-center gap-4">
              <svg viewBox="0 0 80 80" className="w-24 h-24 text-[#0a1a35]" fill="currentColor">
                <rect x="20" y="55" width="8" height="10" rx="1" />
                <rect x="32" y="42" width="8" height="23" rx="1" />
                <rect x="44" y="28" width="8" height="37" rx="1" />
                <path d="M10 60 L55 15 L42 15 L42 10 L65 10 L65 33 L60 33 L60 20 L15 65 Z" />
              </svg>
              <div className="text-left">
                <div className="text-[32pt] font-black leading-none text-[#0a1a35]">ElevateAI</div>
                <div className="text-[10pt] font-bold tracking-[0.3em] uppercase text-[#0a1a35]">SOLUTIONS AGENCY</div>
              </div>
            </div>
          </div>
        </div>

        {/* PAGE 2 & 3: TABLE OF CONTENTS */}
        <div className="min-h-[9.5in] pt-8 page-break-after">
          <h2 className="text-[24pt] font-bold text-[#0a1a35] mb-8">Table of Contents</h2>
          <p className="text-center italic mb-4">Catalog</p>
          <div className="space-y-1 text-[10pt]">
            <div className="flex justify-between items-end border-b border-dotted border-slate-300"><span>Table of Contents</span><span>2</span></div>
            <div className="flex justify-between items-end border-b border-dotted border-slate-300"><span>1. Introduction and Acceptance of Terms</span><span>5</span></div>
            <div className="flex justify-between items-end border-b border-dotted border-slate-300"><span>2. Definitions</span><span>5</span></div>
            <div className="flex justify-between items-end border-b border-dotted border-slate-300"><span>3. Description of Services</span><span>6</span></div>
            <div className="ml-4 flex justify-between items-end border-b border-dotted border-slate-300"><span>3.1 AI Automation Services</span><span>6</span></div>
            <div className="ml-4 flex justify-between items-end border-b border-dotted border-slate-300"><span>3.2 Voice Agent Services</span><span>6</span></div>
            <div className="ml-4 flex justify-between items-end border-b border-dotted border-slate-300"><span>3.3 Service Customisation</span><span>6</span></div>
            <div className="flex justify-between items-end border-b border-dotted border-slate-300"><span>4. Client Obligations</span><span>6</span></div>
            <div className="flex justify-between items-end border-b border-dotted border-slate-300"><span>5. Fees and Payment Terms</span><span>7</span></div>
            <div className="ml-4 flex justify-between items-end border-b border-dotted border-slate-300"><span>5.1 Pricing</span><span>7</span></div>
            <div className="ml-4 flex justify-between items-end border-b border-dotted border-slate-300"><span>5.2 Payment Terms</span><span>7</span></div>
            <div className="ml-4 flex justify-between items-end border-b border-dotted border-slate-300"><span>5.3 Late Payment</span><span>7</span></div>
            <div className="ml-4 flex justify-between items-end border-b border-dotted border-slate-300"><span>5.4 Taxes</span><span>8</span></div>
            <div className="flex justify-between items-end border-b border-dotted border-slate-300"><span>6. Intellectual Property Rights</span><span>8</span></div>
            <div className="ml-4 flex justify-between items-end border-b border-dotted border-slate-300"><span>6.1 Company IP</span><span>8</span></div>
            <div className="ml-4 flex justify-between items-end border-b border-dotted border-slate-300"><span>6.2 Client IP</span><span>8</span></div>
            <div className="ml-4 flex justify-between items-end border-b border-dotted border-slate-300"><span>6.3 Deliverables</span><span>8</span></div>
            <div className="ml-4 flex justify-between items-end border-b border-dotted border-slate-300"><span>6.4 Third-Party Components</span><span>8</span></div>
            <div className="flex justify-between items-end border-b border-dotted border-slate-300"><span>7. Data Protection and Privacy</span><span>8</span></div>
            <div className="ml-4 flex justify-between items-end border-b border-dotted border-slate-300"><span>7.1 Applicable Legislation</span><span>8</span></div>
            <div className="ml-4 flex justify-between items-end border-b border-dotted border-slate-300"><span>7.2 Data Processing</span><span>9</span></div>
            <div className="ml-4 flex justify-between items-end border-b border-dotted border-slate-300"><span>7.3 Voice Data and Recordings</span><span>9</span></div>
            <div className="ml-4 flex justify-between items-end border-b border-dotted border-slate-300"><span>7.4 Cross-Border Data Transfers</span><span>9</span></div>
            <div className="ml-4 flex justify-between items-end border-b border-dotted border-slate-300"><span>7.5 Data Subject Rights</span><span>9</span></div>
            <div className="flex justify-between items-end border-b border-dotted border-slate-300"><span>8. Confidentiality</span><span>9</span></div>
            <div className="flex justify-between items-end border-b border-dotted border-slate-300"><span>9. Warranties and Disclaimers</span><span>10</span></div>
            <div className="ml-4 flex justify-between items-end border-b border-dotted border-slate-300"><span>9.1 Company Warranties</span><span>10</span></div>
            <div className="ml-4 flex justify-between items-end border-b border-dotted border-slate-300"><span>9.2 Disclaimers</span><span>10</span></div>
            <div className="ml-4 flex justify-between items-end border-b border-dotted border-slate-300"><span>9.3 Consumer Protection</span><span>11</span></div>
            <div className="flex justify-between items-end border-b border-dotted border-slate-300"><span>10. Limitation of Liability</span><span>11</span></div>
            <div className="flex justify-between items-end border-b border-dotted border-slate-300"><span>11. Indemnification</span><span>11</span></div>
            <div className="flex justify-between items-end border-b border-dotted border-slate-300"><span>12. Term and Termination</span><span>12</span></div>
            <div className="ml-4 flex justify-between items-end border-b border-dotted border-slate-300"><span>12.1 Term</span><span>12</span></div>
            <div className="ml-4 flex justify-between items-end border-b border-dotted border-slate-300"><span>12.2 Termination for Convenience</span><span>12</span></div>
            <div className="ml-4 flex justify-between items-end border-b border-dotted border-slate-300"><span>12.3 Termination for Cause</span><span>12</span></div>
            <div className="ml-4 flex justify-between items-end border-b border-dotted border-slate-300"><span>12.4 Effects of Termination</span><span>12</span></div>
            <div className="flex justify-between items-end border-b border-dotted border-slate-300"><span>13. AI-Specific Terms and Responsible Use</span><span>12</span></div>
            <div className="ml-4 flex justify-between items-end border-b border-dotted border-slate-300"><span>13.1 AI Transparency</span><span>12</span></div>
            <div className="ml-4 flex justify-between items-end border-b border-dotted border-slate-300"><span>13.2 Voice Agent Disclosure</span><span>13</span></div>
            <div className="ml-4 flex justify-between items-end border-b border-dotted border-slate-300"><span>13.3 Prohibited Uses</span><span>13</span></div>
            <div className="ml-4 flex justify-between items-end border-b border-dotted border-slate-300"><span>13.4 AI Bias and Fairness</span><span>13</span></div>
            <div className="flex justify-between items-end border-b border-dotted border-slate-300"><span>14. Telecommunications and Regulatory Compliance</span><span>13</span></div>
            <div className="ml-4 flex justify-between items-end border-b border-dotted border-slate-300"><span>14.1 Zambia</span><span>14</span></div>
            <div className="ml-4 flex justify-between items-end border-b border-dotted border-slate-300"><span>14.2 South Africa</span><span>14</span></div>
            <div className="flex justify-between items-end border-b border-dotted border-slate-300"><span>15. Service Levels and Support</span><span>14</span></div>
            <div className="flex justify-between items-end border-b border-dotted border-slate-300"><span>16. Force Majeure</span><span>14</span></div>
            <div className="flex justify-between items-end border-b border-dotted border-slate-300"><span>17. Dispute Resolution</span><span>15</span></div>
            <div className="ml-4 flex justify-between items-end border-b border-dotted border-slate-300"><span>17.1 Negotiation</span><span>15</span></div>
            <div className="ml-4 flex justify-between items-end border-b border-dotted border-slate-300"><span>17.2 Mediation</span><span>15</span></div>
            <div className="ml-4 flex justify-between items-end border-b border-dotted border-slate-300"><span>17.3 Arbitration</span><span>15</span></div>
            <div className="ml-4 flex justify-between items-end border-b border-dotted border-slate-300"><span>17.4 Urgent Relief</span><span>15</span></div>
            <div className="flex justify-between items-end border-b border-dotted border-slate-300"><span>18. Governing Law and Jurisdiction</span><span>15</span></div>
            <div className="flex justify-between items-end border-b border-dotted border-slate-300"><span>19. General Provisions</span><span>16</span></div>
            <div className="ml-4 flex justify-between items-end border-b border-dotted border-slate-300"><span>19.1 Entire Agreement</span><span>16</span></div>
            <div className="ml-4 flex justify-between items-end border-b border-dotted border-slate-300"><span>19.2 Amendments</span><span>16</span></div>
            <div className="ml-4 flex justify-between items-end border-b border-dotted border-slate-300"><span>19.3 Severability</span><span>16</span></div>
            <div className="ml-4 flex justify-between items-end border-b border-dotted border-slate-300"><span>19.4 Waiver</span><span>16</span></div>
            <div className="ml-4 flex justify-between items-end border-b border-dotted border-slate-300"><span>19.5 Assignment</span><span>16</span></div>
            <div className="ml-4 flex justify-between items-end border-b border-dotted border-slate-300"><span>19.6 Notices</span><span>16</span></div>
            <div className="ml-4 flex justify-between items-end border-b border-dotted border-slate-300"><span>19.7 Independent Contractor</span><span>17</span></div>
            <div className="ml-4 flex justify-between items-end border-b border-dotted border-slate-300"><span>19.8 No Third-Party Rights</span><span>17</span></div>
            <div className="ml-4 flex justify-between items-end border-b border-dotted border-slate-300"><span>19.9 Language</span><span>17</span></div>
            <div className="flex justify-between items-end border-b border-dotted border-slate-300"><span>20. Contact Information</span><span>17</span></div>
          </div>
        </div>

        {/* PAGE 5: SECTIONS 1 & 2 */}
        <div className="min-h-[9.5in] pt-8 page-break-after">
          <div className="text-right text-slate-400 italic text-[9pt] mb-8 border-b border-slate-100 pb-1">
            Terms of Service | ElevateAI Solutions Agency]
          </div>
          
          <h2 className="text-[18pt] font-bold text-[#0a1a35] mb-6">1. Introduction and Acceptance of Terms</h2>
          <div className="space-y-4 text-justify">
            <p>Welcome to ElevateAI Solutions Agency ("Company", "we", "us", or "our"). These Terms of Service ("Terms") govern your access to and use of our artificial intelligence automation services, voice agent solutions, and related technologies (collectively, the "Services") provided through our website <span className="text-blue-600 underline">www.elevateaisolutionsagency.com</span> (the "Website") and any associated platforms or applications.</p>
            <p>By accessing our Website, engaging our Services, or entering into a service agreement with us, you ("Client", "you", or "your") acknowledge that you have read, understood, and agree to be bound by these Terms, together with our Privacy Policy and any supplementary terms or service-level agreements ("SLAs") that may apply.</p>
            <p>These Terms are governed by and shall be interpreted in accordance with the laws of the Republic of Zambia and the Republic of South Africa, as applicable to the Client's jurisdiction of operation or residence. If you do not agree to these Terms, you must not access or use our Services.</p>
          </div>

          <h2 className="text-[18pt] font-bold text-[#0a1a35] mt-12 mb-6">2. Definitions</h2>
          <div className="space-y-4 text-justify">
            <p>For the purposes of these Terms, the following definitions apply:</p>
            <p><strong>"AI Automation Services"</strong> means the design, development, deployment, and maintenance of artificial intelligence-powered systems, including but not limited to workflow automation, Al agents,chatbots, data processing pipelines, predictive analytics, machine learning models, and robotic process automation (RPA) solutions.</p>
            <p><strong>"Voice Agent Services"</strong> means the creation, configuration, deployment, and management of AI-powered voice agents, including interactive voice response (IVR) systems, conversational AI telephony solutions, voice bots, call centre automation, speech recognition, and natural language processing-enabled voice interfaces.</p>
            <p><strong>"Client Data"</strong> means any data, content, information, or materials provided by the Client to the Company for the purpose of delivering the Services, including personal data, business records, audio recordings, call logs, and customer interaction data.</p>
            <p><strong>"Deliverables"</strong> means the outputs, products, configurations, models, scripts, integrations, reports, and any other work product produced by the Company in the course of delivering the Services.</p>
            <p><strong>"Personal Information" / "Personal Data"</strong> means information relating to an identifiable, living, natural person, and where applicable, an identifiable, existing juristic person, as defined under the Protection of Personal Information Act 4 of 2013 (South Africa) and the Data Protection Act No. 3 of 2021 (Zambia).</p>
            <p><strong>"Third-Party Services"</strong> means any external platforms, APIs, software, or tools used in connection with the Services, including but not limited to cloud hosting providers, telephony providers, AI model providers (e.g., OpenAI, Google, Anthropic), CRM systems, and communication platforms.</p>
          </div>
          <div className="mt-12 text-center text-slate-400 text-[9pt]">Page 5</div>
        </div>

        {/* PAGE 6: SECTIONS 3 & 4 */}
        <div className="min-h-[9.5in] pt-8 page-break-after">
          <div className="text-right text-slate-400 italic text-[9pt] mb-8 border-b border-slate-100 pb-1">
            Terms of Service | ElevateAI Solutions Agency]
          </div>
          
          <h2 className="text-[18pt] font-bold text-[#0a1a35] mb-6">3. Description of Services</h2>
          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">3.1 AI Automation Services</h3>
          <p className="mb-4">We provide bespoke AI automation solutions tailored to your business needs. These may include:</p>
          <ul className="list-disc pl-10 space-y-2 mb-8">
            <li>Workflow automation and process optimisation using AI and machine learning</li>
            <li>Custom chatbot/Al agents development and deployment for customer service, sales, and internal operations</li>
            <li>Data extraction, transformation, and intelligent processing pipelines</li>
            <li>Predictive analytics and business intelligence dashboards</li>
            <li>Integration of AI capabilities into existing business systems (ERP, CRM, etc.)</li>
            <li>Robotic process automation (RPA) for repetitive task elimination</li>
            <li>Custom AI model training and fine-tuning for domain-specific applications</li>
          </ul>

          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">3.2 Voice Agent Services</h3>
          <p className="mb-4">We design, develop, and deploy AI-powered voice agents that may include:</p>
          <ul className="list-disc pl-10 space-y-2 mb-8">
            <li>Conversational AI voice bots for inbound and outbound calls</li>
            <li>Interactive voice response (IVR) system design and implementation</li>
            <li>AI-powered call centre automation and augmentation</li>
            <li>Speech-to-text and text-to-speech integration</li>
            <li>Natural language understanding (NLU) for voice interactions</li>
            <li>Voice analytics and sentiment analysis</li>
            <li>Multi-language voice support, including local languages spoken in Zambia and South Africa</li>
            <li>Integration with telephony systems, SIP trunking, and VoIP platforms</li>
          </ul>

          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">3.3 Service Customisation</h3>
          <p className="mb-8 text-justify">The specific scope, features, timelines, and deliverables for each project shall be set out in a separate Statement of Work ("SOW"), proposal, or service agreement executed between the parties. In the event of any conflict between these Terms and a SOW, the SOW shall prevail to the extent of the inconsistency.</p>

          <h2 className="text-[18pt] font-bold text-[#0a1a35] mb-6">4. Client Obligations</h2>
          <p className="mb-4">The Client agrees to:</p>
          <ol className="list-decimal pl-10 space-y-3 text-justify">
            <li>Provide accurate, complete, and timely information, data, and access required for the delivery of Services.</li>
          </ol>
          <div className="mt-12 text-center text-slate-400 text-[9pt]">Page 6</div>
        </div>

        {/* PAGE 7: SECTIONS 4 & 5 */}
        <div className="min-h-[9.5in] pt-8 page-break-after">
          <div className="text-right text-slate-400 italic text-[9pt] mb-8 border-b border-slate-100 pb-1">
            Terms of Service | ElevateAI Solutions Agency]
          </div>
          <ol className="list-decimal pl-10 space-y-3 text-justify" start={2}>
            <li>Designate a primary point of contact who has the authority to make decisions and provide approvals on behalf of the Client.</li>
            <li>Ensure that all Client Data provided to the Company is lawfully obtained and that the Client has the necessary rights, consents, and authorisations to share such data.</li>
            <li>Comply with all applicable laws and regulations in Zambia and/or South Africa, including data protection legislation, electronic communications laws, and consumer protection requirements.</li>
            <li>Obtain all necessary consents from end-users, customers, or data subjects before their data is processed through the Services, including explicit consent for voice recording where applicable.</li>
            <li>Not use the Services for any unlawful, fraudulent, deceptive, or harmful purpose.</li>
            <li>Ensure that the use of AI voice agents complies with applicable telecommunications regulations, including those administered by the Zambia Information and Communications Technology Authority (ZICTA) and the Independent Communications Authority of South Africa (ICASA).</li>
            <li>Not reverse engineer, decompile, or attempt to extract the source code or underlying algorithms of the Services or Deliverables.</li>
          </ol>

          <h2 className="text-[18pt] font-bold text-[#0a1a35] mt-12 mb-6">5. Fees and Payment Terms</h2>
          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">5.1 Pricing</h3>
          <p className="mb-6 text-justify">Fees for Services shall be as set out in the applicable SOW, proposal, or quotation. Unless otherwise agreed in writing, all fees are quoted exclusive of Value Added Tax (VAT) and any other applicable taxes.</p>

          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">5.2 Payment Terms</h3>
          <p className="mb-4">Unless otherwise specified in the SOW:</p>
          <ul className="list-disc pl-10 space-y-3 mb-6">
            <li><strong>Invoices are payable within fourteen (14) days of the invoice date.</strong></li>
            <li>Payment may be made by electronic funds transfer (EFT), mobile money, or such other method as agreed between the parties.</li>
            <li>All payments shall be made in the currency specified in the invoice (South African Rand (ZAR) or Zambian Kwacha (ZMW), as applicable).</li>
          </ul>

          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">5.3 Late Payment</h3>
          <p className="mb-4">If the Client fails to make payment by the due date, the Company reserves the right to:</p>
          <ul className="list-disc pl-10 space-y-3 mb-6">
            <li>Charge interest on overdue amounts at the rate prescribed by applicable law, or at 2% per month, whichever is lower.</li>
            <li>Suspend or restrict access to the Services until all outstanding amounts are paid in full.</li>
            <li>Terminate the service agreement after providing fourteen (14) days' written notice of the outstanding payment.</li>
          </ul>
          <div className="mt-12 text-center text-slate-400 text-[9pt]">Page 7</div>
        </div>

        {/* PAGE 8: SECTIONS 5, 6 & 7 */}
        <div className="min-h-[9.5in] pt-8 page-break-after">
          <div className="text-right text-slate-400 italic text-[9pt] mb-8 border-b border-slate-100 pb-1">
            Terms of Service | ElevateAI Solutions Agency]
          </div>
          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">5.4 Taxes</h3>
          <p className="mb-8 text-justify">The Client shall be responsible for all applicable taxes, including VAT (currently 15% in South Africa and 16% in Zambia), withholding taxes, and any other levies arising from the use of the Services. The Company will provide valid tax invoices in compliance with the relevant jurisdiction's requirements.</p>

          <h2 className="text-[18pt] font-bold text-[#0a1a35] mb-6">6. Intellectual Property Rights</h2>
          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">6.1 Company IP</h3>
          <p className="mb-6 text-justify">All intellectual property rights in the Company's pre-existing technology, tools, frameworks, methodologies, templates, libraries, and general know-how used in delivering the Services ("Company IP") remain the exclusive property of the Company. Nothing in these Terms shall be construed as transferring ownership of Company IP to the Client.</p>

          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">6.2 Client IP</h3>
          <p className="mb-6 text-justify">All intellectual property rights in the Client Data and any pre-existing materials provided by the Client remain the exclusive property of the Client.</p>

          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">6.3 Deliverables</h3>
          <p className="mb-4">Unless otherwise agreed in a SOW, upon full payment of all applicable fees:</p>
          <ul className="list-disc pl-10 space-y-3 mb-6">
            <li>The Client shall receive a non-exclusive, non-transferable licence to use the Deliverables for the Client's internal business purposes.</li>
            <li>The Company retains the right to use general knowledge, skills, techniques, and experience gained during the engagement, provided that no Client Confidential Information is disclosed.</li>
            <li>Custom-built components specifically created for the Client may be assigned to the Client upon written agreement and full payment, as specified in the relevant SOW.</li>
          </ul>

          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">6.4 Third-Party Components</h3>
          <p className="mb-12 text-justify">The Deliverables may incorporate third-party software, APIs, or open-source components. The Client's use of such components shall be subject to the applicable third-party licence terms. The Company shall disclose all material third-party dependencies upon request.</p>

          <h2 className="text-[18pt] font-bold text-[#0a1a35] mb-6">7. Data Protection and Privacy</h2>
          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">7.1 Applicable Legislation</h3>
          <p className="mb-4">The Company is committed to complying with all applicable data protection laws, including:</p>
          <ul className="list-disc pl-10 space-y-2 mb-6">
            <li>The Protection of Personal Information Act 4 of 2013 (POPIA) of South Africa</li>
            <li>The Data Protection Act No. 3 of 2021 (DPA) of Zambia</li>
          </ul>
          <div className="mt-12 text-center text-slate-400 text-[9pt]">Page 8</div>
        </div>

        {/* PAGE 9: SECTIONS 7 & 8 */}
        <div className="min-h-[9.5in] pt-8 page-break-after">
          <div className="text-right text-slate-400 italic text-[9pt] mb-8 border-b border-slate-100 pb-1">
            Terms of Service | ElevateAI Solutions Agency]
          </div>
          <ul className="list-disc pl-10 space-y-2 mb-8">
            <li>The Electronic Communications and Transactions Act 25 of 2002 (ECTA) of South Africa</li>
            <li>The Electronic Communications and Transactions Act No. 4 of 2021 of Zambia</li>
            <li>Any other applicable regional or international data protection frameworks (e.g., GDPR where applicable to cross-border data transfers)</li>
          </ul>

          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">7.2 Data Processing</h3>
          <p className="mb-4">Where the Company processes Personal Information on behalf of the Client:</p>
          <ol className="list-decimal pl-10 space-y-3 text-justify mb-8">
            <li>The Company acts as an "operator" (under POPIA) or "data processor" (under the DPA) and the Client acts as the "responsible party" or "data controller".</li>
            <li>The Company shall process Personal Information only in accordance with the Client's documented instructions and for the purposes specified in the SOW.</li>
            <li>The Company shall implement appropriate technical and organisational measures to protect Personal Information against unauthorised access, loss, destruction, or damage.</li>
            <li>The Company shall notify the Client without undue delay (and in any event within 72 hours) upon becoming aware of any personal data breach or security compromise.</li>
            <li>Upon termination or expiry of the Services, the Company shall, at the Client's election, return or securely delete all Client Data, unless retention is required by law.</li>
          </ol>

          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">7.3 Voice Data and Recordings</h3>
          <p className="mb-4">Where the Services involve voice agents that record, transcribe, or process voice data:</p>
          <ul className="list-disc pl-10 space-y-3 mb-8">
            <li>The Client must ensure that all callers or users are informed that their calls may be recorded and/or processed by AI, and that appropriate consent is obtained.</li>
            <li>Voice recordings and transcriptions shall be stored securely and retained only for as long as necessary for the stated purpose or as required by law.</li>
            <li>The Company shall not use voice data for any purpose other than the delivery of the Services, unless expressly authorised by the Client in writing.</li>
          </ul>

          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">7.4 Cross-Border Data Transfers</h3>
          <p className="mb-8 text-justify">Where Client Data is transferred across borders (e.g., between Zambia and South Africa, or to third-party cloud providers located outside these jurisdictions), the Company shall ensure that adequate safeguards are in place in accordance with POPIA Section 72 and the Zambian DPA's provisions on international data transfers. These safeguards may include standard contractual clauses, adequacy assessments, or binding corporate rules.</p>

          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">7.5 Data Subject Rights</h3>
          <p className="mb-12 text-justify">The Company shall assist the Client in responding to requests from data subjects exercising their rights under POPIA or the DPA, including the right to access, correction, deletion, and objection to processing of their Personal Information.</p>

          <h2 className="text-[18pt] font-bold text-[#0a1a35] mb-6">8. Confidentiality</h2>
          <div className="mt-12 text-center text-slate-400 text-[9pt]">Page 9</div>
        </div>

        {/* PAGE 10: SECTIONS 8 & 9 */}
        <div className="min-h-[9.5in] pt-8 page-break-after">
          <div className="text-right text-slate-400 italic text-[9pt] mb-8 border-b border-slate-100 pb-1">
            Terms of Service | ElevateAI Solutions Agency]
          </div>
          <p className="mb-6 text-justify">Each party (the "Receiving Party") agrees to keep confidential all non-public information disclosed by the other party (the "Disclosing Party") in connection with the Services ("Confidential Information"). Confidential Information includes, but is not limited to, business strategies, customer lists, technical specifications, pricing information, AI models, training data, and proprietary algorithms.</p>
          <p className="mb-4">The Receiving Party shall:</p>
          <ol className="list-decimal pl-10 space-y-3 text-justify mb-6">
            <li>Use Confidential Information solely for the purpose of performing its obligations under these Terms.</li>
            <li>Not disclose Confidential Information to any third party without the prior written consent of the Disclosing Party, except to employees, contractors, or advisors who need to know and are bound by equivalent confidentiality obligations.</li>
            <li>Take reasonable measures to protect the confidentiality of Confidential Information, no less protective than those used to protect its own confidential information.</li>
          </ol>
          <p className="mb-6 text-justify italic">Confidentiality obligations shall survive the termination of these Terms for a period of five (5) years, except for trade secrets which shall remain confidential indefinitely.</p>
          <p className="mb-12 text-justify">These obligations do not apply to information that: (a) is or becomes publicly available through no fault of the Receiving Party; (b) was already known to the Receiving Party before disclosure; (c) is independently developed without reference to Confidential Information; or (d) is required to be disclosed by law, regulation, or court order, provided that the Receiving Party gives prompt notice to the Disclosing Party.</p>

          <h2 className="text-[18pt] font-bold text-[#0a1a35] mb-6">9. Warranties and Disclaimers</h2>
          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">9.1 Company Warranties</h3>
          <p className="mb-4">The Company warrants that:</p>
          <ul className="list-disc pl-10 space-y-3 mb-6">
            <li>The Services will be performed in a professional and workmanlike manner, consistent with generally accepted industry standards.</li>
            <li>The Company has the necessary skills, expertise, and authorisations to provide the Services.</li>
            <li>The Deliverables will materially conform to the specifications set out in the applicable SOW for a period of thirty (30) days following delivery (the "Warranty Period").</li>
          </ul>

          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">9.2 Disclaimers</h3>
          <p className="mb-4">To the maximum extent permitted by applicable law:</p>
          <ul className="list-disc pl-10 space-y-3 mb-6">
            <li>The Services are provided on an "as is" and "as available" basis with respect to AI outputs, predictions, and recommendations. AI systems are inherently probabilistic, and the Company does not warrant that AI outputs will be error-free, accurate, or fit for any particular purpose.</li>
            <li>The Company does not guarantee specific business outcomes, cost savings, revenue increases, or performance improvements resulting from the use of the Services.</li>
          </ul>
          <div className="mt-12 text-center text-slate-400 text-[9pt]">Page 10</div>
        </div>

        {/* PAGE 11: SECTIONS 9, 10 & 11 */}
        <div className="min-h-[9.5in] pt-8 page-break-after">
          <div className="text-right text-slate-400 italic text-[9pt] mb-8 border-b border-slate-100 pb-1">
            Terms of Service | ElevateAI Solutions Agency]
          </div>
          <ul className="list-disc pl-10 space-y-3 mb-8">
            <li className="text-justify">The Company is not liable for the actions, decisions, or outcomes resulting from the Client's reliance on AI-generated recommendations, voice agent interactions, or automated processes without appropriate human oversight.</li>
            <li className="text-justify">The Company does not warrant uninterrupted availability of voice agents or automation systems and shall not be liable for downtime caused by third-party service providers, telecommunications networks, or force majeure events.</li>
          </ul>

          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">9.3 Consumer Protection</h3>
          <p className="mb-12 text-justify">Nothing in these Terms is intended to limit or exclude any rights that the Client may have under the Consumer Protection Act 68 of 2008 (South Africa) or the Competition and Consumer Protection Act No. 24 of 2010 (Zambia) that cannot be lawfully limited or excluded.</p>

          <h2 className="text-[18pt] font-bold text-[#0a1a35] mb-6">10. Limitation of Liability</h2>
          <ol className="list-decimal pl-10 space-y-4 text-justify mb-12">
            <li>To the maximum extent permitted by applicable law, the Company's total aggregate liability arising out of or in connection with these Terms, whether in contract, delict (tort), negligence, or otherwise, shall not exceed the total fees paid by the Client to the Company during the twelve (12) months immediately preceding the event giving rise to the claim.</li>
            <li>The Company shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, loss of data, loss of business opportunities, business interruption, or reputational harm, even if the Company has been advised of the possibility of such damages.</li>
            <li>The Company shall not be liable for any loss or damage arising from: (a) the Client's failure to maintain adequate backups of Client Data; (b) unauthorised access resulting from the Client's failure to implement recommended security measures; (c) the Client's use of AI outputs without appropriate human review and oversight; or (d) any third-party service failure.</li>
            <li>Nothing in these Terms shall limit liability for death or personal injury caused by negligence, fraud or fraudulent misrepresentation, or any other liability that cannot be lawfully limited or excluded under the laws of Zambia or South Africa.</li>
          </ol>

          <h2 className="text-[18pt] font-bold text-[#0a1a35] mb-6">11. Indemnification</h2>
          <p className="mb-4">The Client agrees to indemnify, defend, and hold harmless the Company, its directors, officers, employees, and agents from and against any claims, damages, losses, liabilities, costs, and expenses (including reasonable legal fees) arising out of or in connection with:</p>
          <ul className="list-disc pl-10 space-y-3 mb-6">
            <li className="text-justify">The Client's breach of these Terms or any applicable law or regulation.</li>
            <li className="text-justify">The Client's use of the Services in a manner not authorised or contemplated by these Terms.</li>
            <li className="text-justify">Any claim by a third party (including end-users or data subjects) arising from the Client's use of the Services, including claims related to the processing of Personal Information.</li>
            <li className="text-justify">The Client's failure to obtain necessary consents for voice recording, data processing, or AI-assisted communications.</li>
          </ul>
          <div className="mt-12 text-center text-slate-400 text-[9pt]">Page 11</div>
        </div>

        {/* PAGE 12: SECTIONS 11, 12 & 13 */}
        <div className="min-h-[9.5in] pt-8 page-break-after">
          <div className="text-right text-slate-400 italic text-[9pt] mb-8 border-b border-slate-100 pb-1">
            Terms of Service | ElevateAI Solutions Agency]
          </div>
          <ul className="list-disc pl-10 space-y-3 mb-12">
            <li className="text-justify">Any content, data, or materials provided by the Client that infringe the intellectual property rights of a third party.</li>
          </ul>

          <h2 className="text-[18pt] font-bold text-[#0a1a35] mb-6">12. Term and Termination</h2>
          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">12.1 Term</h3>
          <p className="mb-8 text-justify">These Terms shall commence on the date the Client first accesses the Website or engages the Services and shall remain in effect until terminated in accordance with this section. Individual service engagements shall be governed by the term specified in the applicable SOW.</p>

          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">12.2 Termination for Convenience</h3>
          <p className="mb-8 text-justify">Either party may terminate these Terms or an individual SOW by providing thirty (30) days' written notice to the other party. The Client shall remain liable for all fees incurred up to the effective date of termination and for any non-cancellable costs committed by the Company.</p>

          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">12.3 Termination for Cause</h3>
          <p className="mb-4">Either party may terminate these Terms immediately upon written notice if the other party:</p>
          <ul className="list-disc pl-10 space-y-3 mb-8">
            <li>Commits a material breach that remains unremedied for fourteen (14) days after written notice specifying the breach.</li>
            <li>Becomes insolvent, enters liquidation, business rescue, judicial management, or any analogous proceeding under Zambian or South African law.</li>
            <li>Is unable to pay its debts as they fall due.</li>
          </ul>

          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">12.4 Effects of Termination</h3>
          <p className="mb-4">Upon termination:</p>
          <ul className="list-disc pl-10 space-y-3 mb-12">
            <li>The Company shall cease providing the Services and the Client's access to any platforms or systems shall be revoked.</li>
            <li>The Client shall pay all outstanding fees for Services rendered up to the date of termination.</li>
            <li>Each party shall return or destroy all Confidential Information of the other party, subject to any legal retention obligations.</li>
            <li>The Company shall, at the Client's request and expense, provide reasonable assistance to transition the Services to another provider.</li>
            <li>Sections relating to intellectual property, confidentiality, limitation of liability, indemnification, and dispute resolution shall survive termination.</li>
          </ul>

          <h2 className="text-[18pt] font-bold text-[#0a1a35] mb-6">13. AI-Specific Terms and Responsible Use</h2>
          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">13.1 AI Transparency</h3>
          <p className="mb-4">The Client acknowledges and agrees that:</p>
          <div className="mt-12 text-center text-slate-400 text-[9pt]">Page 12</div>
        </div>

        {/* PAGE 13: SECTIONS 13 & 14 */}
        <div className="min-h-[9.5in] pt-8 page-break-after">
          <div className="text-right text-slate-400 italic text-[9pt] mb-8 border-b border-slate-100 pb-1">
            Terms of Service | ElevateAI Solutions Agency]
          </div>
          <ul className="list-disc pl-10 space-y-3 mb-8">
            <li className="text-justify">The Services utilise artificial intelligence technologies that are probabilistic in nature and may produce unexpected, inaccurate, or incomplete outputs.</li>
            <li className="text-justify">AI-generated content, recommendations, and voice interactions should be subject to appropriate human oversight and review before being relied upon for critical business decisions.</li>
            <li className="text-justify">The Company will provide reasonable transparency regarding the AI models and technologies used in delivering the Services upon request.</li>
          </ul>

          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">13.2 Voice Agent Disclosure</h3>
          <p className="mb-4">Where voice agents are deployed on behalf of the Client:</p>
          <ul className="list-disc pl-10 space-y-3 mb-8">
            <li>Callers must be informed at the outset of the interaction that they are communicating with an AI-powered system, not a human agent, unless otherwise permitted by applicable law.</li>
            <li>Callers must be given the option to speak with a human agent where reasonably practicable.</li>
            <li>The Client shall ensure that AI voice agents do not engage in deceptive practices, impersonate specific individuals, or make false claims.</li>
          </ul>

          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">13.3 Prohibited Uses</h3>
          <p className="mb-4">The Client shall not use the Services to:</p>
          <ul className="list-disc pl-10 space-y-3 mb-8 text-justify">
            <li>Engage in unlawful discrimination, including decisions based on race, gender, ethnicity, disability, or other protected characteristics under the Constitution of Zambia, the Constitution of South Africa, or the Promotion of Equality and Prevention of Unfair Discrimination Act 4 of 2000 (South Africa).</li>
            <li>Generate spam, unsolicited communications, or conduct telemarketing in violation of applicable laws.</li>
            <li>Engage in surveillance, stalking, or harassment.</li>
            <li>Create deepfakes or manipulated voice/audio content for fraudulent or deceptive purposes.</li>
            <li>Process sensitive personal information (such as health data, biometric data, or children's data) without explicit lawful grounds and appropriate safeguards.</li>
            <li>Circumvent any technical measures, security controls, or usage restrictions on the Services.</li>
          </ul>

          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">13.4 AI Bias and Fairness</h3>
          <p className="mb-12 text-justify">The Company shall use commercially reasonable efforts to identify and mitigate bias in AI models and systems deployed as part of the Services. However, the Company does not warrant that AI systems are entirely free from bias. The Client is responsible for monitoring the outputs of the Services for fairness and compliance with applicable anti-discrimination laws.</p>

          <h2 className="text-[18pt] font-bold text-[#0a1a35] mb-6">14. Telecommunications and Regulatory Compliance</h2>
          <div className="mt-12 text-center text-slate-400 text-[9pt]">Page 13</div>
        </div>

        {/* PAGE 14: SECTIONS 14, 15 & 16 */}
        <div className="min-h-[9.5in] pt-8 page-break-after">
          <div className="text-right text-slate-400 italic text-[9pt] mb-8 border-b border-slate-100 pb-1">
            Terms of Service | ElevateAI Solutions Agency]
          </div>
          
          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">14.1 Zambia</h3>
          <p className="mb-4">Where the Services are provided or used in Zambia, the Client acknowledges that:</p>
          <ul className="list-disc pl-10 space-y-3 mb-8">
            <li className="text-justify">The use of voice agents and automated calling systems may be subject to regulation by the Zambia Information and Communications Technology Authority (ZICTA) under the Information and Communications Technology Act No. 15 of 2009.</li>
            <li className="text-justify">The Client is responsible for obtaining any licences, permits, or approvals required by ZICTA or any other regulatory authority for the use of AI-powered communications.</li>
            <li className="text-justify">Automated voice calls must comply with applicable consumer protection and electronic communications regulations.</li>
          </ul>

          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">14.2 South Africa</h3>
          <p className="mb-4">Where the Services are provided or used in South Africa, the Client acknowledges that:</p>
          <ul className="list-disc pl-10 space-y-3 mb-12">
            <li className="text-justify">The use of voice agents and automated calling systems may be subject to regulation by the Independent Communications Authority of South Africa (ICASA) under the Electronic Communications Act 36 of 2005.</li>
            <li className="text-justify">Automated direct marketing communications must comply with the Consumer Protection Act 68 of 2008, POPIA, and any applicable ICASA regulations.</li>
            <li className="text-justify">The Client must maintain a do-not-contact list and honour opt-out requests in accordance with applicable laws.</li>
          </ul>

          <h2 className="text-[18pt] font-bold text-[#0a1a35] mb-6">15. Service Levels and Support</h2>
          <p className="mb-4 text-justify">Service-level commitments, including uptime guarantees, response times, and support availability, shall be as specified in the applicable SOW or SLA. In the absence of a specific SLA:</p>
          <ul className="list-disc pl-10 space-y-3 mb-12">
            <li className="text-justify">The Company shall use commercially reasonable efforts to maintain the availability of hosted Services.</li>
            <li className="text-justify">The Company shall provide reasonable technical support during business hours (Monday to Friday, 08:00 to 17:00 CAT/SAST, excluding public holidays in Zambia and/or South Africa as applicable).</li>
            <li className="text-justify">Scheduled maintenance windows shall be communicated to the Client with at least forty eight (48) hours' prior notice where practicable.</li>
          </ul>

          <h2 className="text-[18pt] font-bold text-[#0a1a35] mb-6">16. Force Majeure</h2>
          <p className="mb-4 text-justify">Neither party shall be liable for any delay or failure to perform its obligations under these Terms to the extent that such delay or failure is caused by circumstances beyond its reasonable control, including but not limited to natural disasters, acts of government, war, terrorism, pandemics, epidemics, civil unrest, power outages, internet or telecommunications failures, cyberattacks, or actions of third-party service providers (a "Force Majeure Event").</p>
          <p className="mb-4 text-justify">The affected party shall: (a) promptly notify the other party of the Force Majeure Event and its expected duration; (b) use reasonable efforts to mitigate the impact; and (c) resume </p>
          <div className="mt-12 text-center text-slate-400 text-[9pt]">Page 14</div>
        </div>

        {/* PAGE 15: SECTIONS 16, 17 & 18 */}
        <div className="min-h-[9.5in] pt-8 page-break-after">
          <div className="text-right text-slate-400 italic text-[9pt] mb-8 border-b border-slate-100 pb-1">
            Terms of Service | ElevateAI Solutions Agency]
          </div>
          <p className="mb-8 text-justify">performance as soon as reasonably practicable. If a Force Majeure Event continues for more than sixty (60) days, either party may terminate the affected SOW or these Terms upon written notice.</p>

          <h2 className="text-[18pt] font-bold text-[#0a1a35] mb-6">17. Dispute Resolution</h2>
          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">17.1 Negotiation</h3>
          <p className="mb-8 text-justify">In the event of any dispute, controversy, or claim arising out of or relating to these Terms (a "Dispute"), the parties shall first attempt to resolve the Dispute through good faith negotiation between senior representatives of each party for a period of not less than thirty (30) days.</p>

          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">17.2 Mediation</h3>
          <p className="mb-4">If the Dispute is not resolved through negotiation, the parties agree to submit the Dispute to mediation before resorting to arbitration or litigation. Mediation shall be conducted:</p>
          <ul className="list-disc pl-10 space-y-3 mb-8">
            <li className="text-justify">For Zambian Clients: in accordance with the rules of the Zambia Centre for Dispute Resolution or such other recognised mediation body.</li>
            <li className="text-justify">For South African Clients: in accordance with the rules of the Arbitration Foundation of Southern Africa (AFSA) or such other recognised mediation body.</li>
          </ul>

          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">17.3 Arbitration</h3>
          <p className="mb-4">If mediation fails, the Dispute shall be submitted to and finally resolved by arbitration:</p>
          <ul className="list-disc pl-10 space-y-3 mb-8">
            <li className="text-justify">For Zambian Clients: under the Arbitration Act No. 19 of 2000, with the seat of arbitration in Lusaka, Zambia.</li>
            <li className="text-justify">For South African Clients: under the Arbitration Act 42 of 1965, or the International Arbitration Act 15 of 2017 for international disputes, with the seat of arbitration in Johannesburg, South Africa.</li>
          </ul>
          <p className="mb-8 text-justify">The arbitration shall be conducted by a single arbitrator appointed by agreement of the parties or, failing agreement, by the relevant arbitral institution. The language of arbitration shall be English. The arbitrator's award shall be final and binding on the parties.</p>

          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">17.4 Urgent Relief</h3>
          <p className="mb-12 text-justify">Nothing in this section shall prevent either party from seeking urgent interim or injunctive relief from a court of competent jurisdiction where necessary to protect its rights or prevent irreparable harm.</p>

          <h2 className="text-[18pt] font-bold text-[#0a1a35] mb-6">18. Governing Law and Jurisdiction</h2>
          <p className="mb-4">These Terms shall be governed by and construed in accordance with:</p>
          <ul className="list-disc pl-10 space-y-3 mb-6">
            <li className="text-justify">For Clients domiciled or registered in Zambia: the laws of the Republic of Zambia, and the parties submit to the exclusive jurisdiction of the courts of the Republic of Zambia.</li>
          </ul>
          <div className="mt-12 text-center text-slate-400 text-[9pt]">Page 15</div>
        </div>

        {/* PAGE 16: SECTIONS 18 & 19 */}
        <div className="min-h-[9.5in] pt-8 page-break-after">
          <div className="text-right text-slate-400 italic text-[9pt] mb-8 border-b border-slate-100 pb-1">
            Terms of Service | ElevateAI Solutions Agency]
          </div>
          <ul className="list-disc pl-10 space-y-3 mb-12">
            <li className="text-justify">For Clients domiciled or registered in South Africa: the laws of the Republic of South Africa, and the parties submit to the exclusive jurisdiction of the courts of the Republic of South Africa.</li>
            <li className="text-justify">For Clients domiciled or registered in any other jurisdiction: the governing law and jurisdiction shall be as specified in the applicable SOW, or failing such specification, the laws of [Zambia/South Africa] as determined by the Company.</li>
          </ul>

          <h2 className="text-[18pt] font-bold text-[#0a1a35] mb-6">19. General Provisions</h2>
          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">19.1 Entire Agreement</h3>
          <p className="mb-8 text-justify">These Terms, together with any applicable SOW, SLA, Privacy Policy, and other documents expressly incorporated by reference, constitute the entire agreement between the parties regarding the subject matter hereof and supersede all prior agreements, understandings, and representations, whether written or oral.</p>

          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">19.2 Amendments</h3>
          <p className="mb-8 text-justify">The Company reserves the right to amend these Terms at any time by publishing the updated Terms on the Website. Material changes will be communicated to the Client via email or Website notice at least thirty (30) days before they take effect. Continued use of the Services after the effective date of any amendment constitutes acceptance of the revised Terms.</p>

          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">19.3 Severability</h3>
          <p className="mb-8 text-justify">If any provision of these Terms is found to be invalid, illegal, or unenforceable by a court of competent jurisdiction, such provision shall be deemed modified to the minimum extent necessary to make it valid and enforceable, and the remaining provisions shall continue in full force and effect.</p>

          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">19.4 Waiver</h3>
          <p className="mb-8 text-justify">No failure or delay by either party in exercising any right under these Terms shall constitute a waiver of that right. A waiver of any breach shall not constitute a waiver of any subsequent breach.</p>

          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">19.5 Assignment</h3>
          <p className="mb-8 text-justify">The Client may not assign or transfer its rights or obligations under these Terms without the prior written consent of the Company. The Company may assign its rights and obligations to any affiliate or successor in interest without the Client's consent, provided that the assignee assumes all obligations under these Terms.</p>

          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">19.6 Notices</h3>
          <p className="mb-4 text-justify">All notices under these Terms shall be in writing and delivered by email (with confirmation of receipt), registered post, or personal delivery to the addresses specified in the applicable SOW or, failing that, to the most recent contact information on file. Notices shall be deemed received: </p>
          <div className="mt-12 text-center text-slate-400 text-[9pt]">Page 16</div>
        </div>

        {/* PAGE 17: SECTIONS 19 & 20 */}
        <div className="min-h-[9.5in] pt-8">
          <div className="text-right text-slate-400 italic text-[9pt] mb-8 border-b border-slate-100 pb-1">
            Terms of Service | ElevateAI Solutions Agency]
          </div>
          <p className="mb-8 text-justify">(a) upon confirmed delivery if by email; (b) five (5) business days after posting if by registered post; or (c) upon delivery if by personal delivery.</p>

          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">19.7 Independent Contractor</h3>
          <p className="mb-8 text-justify">The relationship between the Company and the Client is that of independent contractor and client. Nothing in these Terms shall be construed as creating an employment, partnership, joint venture, or agency relationship between the parties.</p>

          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">19.8 No Third-Party Rights</h3>
          <p className="mb-8 text-justify">These Terms do not confer any rights on any person or entity other than the parties hereto, except as expressly stated herein.</p>

          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">19.9 Language</h3>
          <p className="mb-12 text-justify">These Terms are drafted in English. In the event of any translation, the English version shall prevail.</p>

          <h2 className="text-[18pt] font-bold text-[#0a1a35] mb-6">20. Contact Information</h2>
          <p className="mb-8 text-justify">For any questions, concerns, or requests relating to these Terms or our Services, please contact us at:</p>

          <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 mb-20">
            <p className="text-[14pt] font-bold text-[#0a1a35] mb-4">ElevateAI Solutions Agency</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[10pt]">
              <div>
                <span className="font-bold block uppercase tracking-tighter text-slate-400 text-[8pt] mb-1">Office Locations</span>
                <p>Zambia, Lusaka</p>
                <p>South Africa, Stellenbosch</p>
              </div>
              <div>
                <span className="font-bold block uppercase tracking-tighter text-slate-400 text-[8pt] mb-1">Email Inquiry</span>
                <p>elevatealsolutionsagency@gmail.com</p>
              </div>
              <div>
                <span className="font-bold block uppercase tracking-tighter text-slate-400 text-[8pt] mb-1">Direct Lines</span>
                <p>+27 0822341307</p>
                <p>+260 966 468 562</p>
              </div>
              <div>
                <span className="font-bold block uppercase tracking-tighter text-slate-400 text-[8pt] mb-1">Web Platform</span>
                <p>www.elevateaisolutionsagency.com</p>
              </div>
            </div>
          </div>

          <div className="mt-24 text-center">
            <div className="w-1/2 border-t border-slate-900 mx-auto mb-4"></div>
            <p className="text-[12pt] font-black tracking-[0.4em] text-[#0a1a35] uppercase">END OF TERMS OF SERVICE</p>
          </div>
          
          <div className="mt-12 text-center text-slate-400 text-[9pt]">Page 17</div>
        </div>

      </div>

      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: white !important; padding: 0 !important; }
          #tos-document { 
            max-width: 100% !important; 
            padding: 0 !important; 
            margin: 0 !important;
            box-shadow: none !important;
          }
        }
        #tos-document {
          font-family: 'Times New Roman', Times, serif;
          line-height: 1.5;
        }
        .page-break-after {
          page-break-after: always;
        }
        .page-break-before {
          page-break-before: always;
        }
      `}</style>
    </div>
  );
};

export default TermsOfService;
