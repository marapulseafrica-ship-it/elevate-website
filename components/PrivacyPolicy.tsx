
import React, { useEffect } from 'react';
import { Download, ShieldCheck, CheckSquare, AlertTriangle, FileText } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDownload = () => {
    const element = document.getElementById('policy-document');
    if (element) {
      const opt = {
        margin: [0.5, 0.5],
        filename: 'ElevateAI_Operational_Policy_POL001.pdf',
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
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      {/* Non-printing Control Bar */}
      <div className="max-w-5xl mx-auto mb-8 flex flex-col sm:flex-row justify-between items-center gap-4 border-b border-gray-200 pb-8 no-print">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-[#0a1a35] rounded-2xl flex items-center justify-center text-white shadow-lg">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <div>
            <h1 className="text-2xl font-black text-slate-900 leading-none tracking-tight">Operational Policy Registry</h1>
            <p className="text-sm text-slate-500 mt-1 font-medium italic">Ref: POL-001 | v1.0 | Republic of Zambia & South Africa</p>
          </div>
        </div>
        <button 
          onClick={handleDownload}
          className="flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 active:scale-95"
        >
          <Download className="w-5 h-5" /> Download Full 28-Page Policy
        </button>
      </div>

      {/* The High-Fidelity Document Container */}
      <div id="policy-document" className="max-w-[8.27in] mx-auto bg-white shadow-2xl print:shadow-none min-h-screen text-slate-900 leading-normal text-[10pt] font-serif overflow-hidden border border-slate-100">
        
        {/* PAGE 1: COVER PAGE */}
        <div className="h-[10.5in] flex flex-col items-center justify-center p-16 relative border-b border-slate-100 page-break-after">
          <div className="w-full border-t-[4pt] border-[#b8860b] mb-12"></div>
          
          <div className="text-left w-full">
            <h1 className="text-[44pt] font-black text-[#0a1a35] leading-[0.9] uppercase mb-4 tracking-tighter">AI AUTOMATION & <br/> VOICE AGENTS</h1>
            <h2 className="text-[20pt] font-bold text-[#0a1a35] tracking-tight mb-8">COMPREHENSIVE OPERATIONAL POLICY</h2>
            <p className="text-[12pt] text-slate-500 font-sans mb-32">Governing Jurisdictions: Republic of Zambia & Republic of South Africa</p>
          </div>

          <div className="flex items-center gap-6 mb-32">
            <svg viewBox="0 0 80 80" className="w-24 h-24 text-[#0a1a35]" fill="currentColor">
              <rect x="20" y="55" width="8" height="10" rx="1" />
              <rect x="32" y="42" width="8" height="23" rx="1" />
              <rect x="44" y="28" width="8" height="37" rx="1" />
              <path d="M10 60 L55 15 L42 15 L42 10 L65 10 L65 33 L60 33 L60 20 L15 65 Z" />
            </svg>
            <div className="text-left font-sans">
              <div className="text-[38pt] font-black leading-none text-[#0a1a35]">ElevateAI</div>
              <div className="text-[11pt] font-bold tracking-[0.4em] uppercase text-[#0a1a35] mt-1">SOLUTIONS AGENCY</div>
            </div>
          </div>

          <div className="w-full mt-auto space-y-1.5 text-[9pt] font-sans text-slate-500 bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <p>Document Reference: <strong className="text-slate-900">ElevateAI Solutions Agency-POL-001</strong></p>
            <p>Version: <strong className="text-slate-900">1.0</strong></p>
            <p>Effective Date: <strong className="text-slate-900">17/02.2026</strong></p>
            <p>Classification: <strong className="text-red-700">CONFIDENTIAL</strong></p>
            <p>Approved By: Daniel Kimara, Ben kIca</p>
            <p>Next Review Date: 17/02/2027</p>
          </div>
          <div className="w-full border-b-[4pt] border-[#b8860b] mt-12"></div>
        </div>

        {/* PAGE 2 & 3: TABLE OF CONTENTS */}
        <div className="min-h-[10.5in] p-12 relative page-break-after">
          <div className="flex justify-between items-center text-[8pt] text-slate-400 mb-10 border-b border-slate-100 pb-1 uppercase tracking-widest font-sans">
            <span>ElevateAI Solutions Agency</span>
            <span>Policy | POL-001 | v1.0</span>
          </div>
          
          <h2 className="text-[26pt] font-bold text-[#0a1a35] mb-10 tracking-tight font-sans">TABLE OF CONTENTS</h2>
          <p className="text-center italic mb-6 text-slate-400 text-sm font-sans">Catalog</p>
          
          <div className="space-y-1 text-[9.5pt] font-sans leading-tight">
            {[
              { t: "TABLE OF CONTENTS", p: "2" },
              { t: "1. Introduction and Purpose", p: "5" },
              { t: "  1.1 Objectives", p: "5" },
              { t: "2. Definitions and Interpretation", p: "6" },
              { t: "3. Legal and Regulatory Framework", p: "7" },
              { t: "  3.1 Republic of Zambia", p: "7" },
              { t: "  3.2 Republic of South Africa", p: "7" },
              { t: "4. Scope and Application", p: "8" },
              { t: "  4.1 Persons Covered", p: "8" },
              { t: "  4.2 Systems Covered", p: "8" },
              { t: "  4.3 Geographic Scope", p: "8" },
              { t: "5. Data Protection and Privacy", p: "9" },
              { t: "  5.1 General Principles", p: "9" },
              { t: "  5.2 Zambia-Specific Obligations", p: "9" },
              { t: "    5.2.1 Registration", p: "9" },
              { t: "    5.2.2 Consent", p: "9" },
              { t: "    5.2.3 Data Subject Rights", p: "9" },
              { t: "  5.3 South Africa-Specific Obligations", p: "9" },
              { t: "    5.3.1 Information Officer", p: "9" },
              { t: "    5.3.2 Conditions for Lawful Processing", p: "10" },
              { t: "    5.3.3 Automated Decision-Making (Section 71)", p: "10" },
              { t: "    5.3.4 Consent and Direct Marketing (2025 Amendments)", p: "10" },
              { t: "6. Voice Agent Operations Policy", p: "11" },
              { t: "  6.1 Disclosure and Transparency", p: "11" },
              { t: "  6.2 Consent Management", p: "11" },
              { t: "    6.2.1 Inbound Interactions", p: "11" },
              { t: "    6.2.2 Outbound Interactions", p: "11" },
              { t: "  6.3 Call Recording and Monitoring", p: "12" },
              { t: "  6.4 Voice Biometrics", p: "12" },
              { t: "  6.5 Do-Not-Call and Opt-Out Management", p: "12" },
              { t: "  6.6 Quality Assurance and Human Oversight", p: "13" },
              { t: "7. Responsible AI and Ethics Policy", p: "14" },
              { t: "  7.1 Fairness and Non-Discrimination", p: "14" },
              { t: "  7.2 Transparency and Explainability", p: "14" },
              { t: "  7.3 Human Oversight and Control", p: "14" },
              { t: "  7.4 Accountability", p: "14" },
              { t: "  7.5 Safety and Security", p: "14" },
              { t: "  7.6 Privacy by Design", p: "14" },
              { t: "8. Cross-Border Data Transfers", p: "15" },
              { t: "  8.1 Zambia Requirements", p: "15" },
              { t: "  8.2 South Africa Requirements", p: "15" },
              { t: "  8.3 Data Localisation", p: "15" },
              { t: "  8.4 Transfer Safeguards", p: "15" },
              { t: "9. Information Security", p: "16" },
              { t: "  9.1 Technical Measures", p: "16" },
              { t: "  9.2 Organisational Measures", p: "16" },
              { t: "10. Data Breach Notification", p: "17" },
              { t: "  10.1 Internal Response", p: "17" },
              { t: "  10.2 Notification to Regulators", p: "17" },
              { t: "  10.3 Notification to Data Subjects", p: "17" },
              { t: "  10.4 Record Keeping", p: "17" },
              { t: "11. Data Retention and Deletion", p: "18" },
              { t: "12. Client and Third-Party Obligations", p: "19" },
              { t: "  12.1 Data Processing Agreements", p: "19" },
              { t: "  12.2 Client Responsibility for Consent", p: "19" },
              { t: "  12.3 Sub-Processors", p: "19" },
              { t: "  12.4 Service Level Agreements", p: "19" },
              { t: "13. Marketing and Outbound Communications", p: "20" },
              { t: "  13.1 South Africa", p: "20" },
              { t: "  13.2 Zambia", p: "20" },
              { t: "  13.3 Prohibited Practices", p: "20" },
              { t: "14. AI Content Labelling and Anti-Impersonation", p: "21" },
              { t: "  14.1 Content Labelling", p: "21" },
              { t: "  14.2 Deepfake and Synthetic Voice Prohibition", p: "21" },
              { t: "  14.3 Voice Cloning Safeguards", p: "21" },
              { t: "15. Employee and Contractor Obligations", p: "22" },
              { t: "  15.1 Confidentiality", p: "22" },
              { t: "  15.2 Training", p: "22" },
              { t: "  15.3 Acceptable Use", p: "22" },
              { t: "  15.4 Disciplinary Procedures", p: "22" },
              { t: "16. Complaints and Dispute Resolution", p: "23" },
              { t: "  16.1 Internal Complaints", p: "23" },
              { t: "  16.2 Escalation to Regulators", p: "23" },
              { t: "  16.3 Record Keeping", p: "23" },
              { t: "17. Intellectual Property", p: "24" },
              { t: "18. Governance, Review, and Amendments", p: "25" },
              { t: "  18.1 Policy Ownership", p: "25" },
              { t: "  18.2 Review Schedule", p: "25" },
              { t: "  18.3 Version Control", p: "25" },
              { t: "  18.4 Communication", p: "25" },
              { t: "19. Regulatory Registration Checklists", p: "26" },
              { t: "20. Penalties and Enforcement Summary", p: "27" },
              { t: "21. Approval and Signatures", p: "28" }
            ].map((item, i) => (
              <div key={i} className={`flex justify-between items-end border-b border-dotted border-slate-200 pb-0.5 ${item.t.startsWith('  ') ? (item.t.startsWith('    ') ? 'ml-12 italic text-slate-500' : 'ml-6 text-slate-700') : 'font-bold text-slate-900 uppercase text-[9pt] tracking-tight'}`}>
                <span>{item.t}</span>
                <span className="font-mono text-[8pt] text-slate-400">{item.p}</span>
              </div>
            ))}
          </div>
          <div className="absolute bottom-8 left-12 right-12 flex justify-between items-center text-[8pt] text-slate-300 font-sans border-t border-slate-50 pt-4">
            <span>CONFIDENTIAL</span>
            <span>Page 2</span>
          </div>
        </div>

        {/* PAGE 4: (Reserved as per PDF index) */}
        <div className="min-h-[10.5in] p-16 relative page-break-after flex items-center justify-center italic text-slate-200 uppercase tracking-widest text-4xl">
          [Page 4 intentionally blank]
        </div>

        {/* PAGE 5: 1. INTRODUCTION AND PURPOSE */}
        <div className="min-h-[10.5in] p-16 relative page-break-after">
          <div className="flex justify-between items-center text-[8pt] text-slate-400 mb-12 border-b border-slate-100 pb-1 font-sans">
            <span>ElevateAI Solutions Agency</span>
            <span>Policy | POL-001 | v1.0</span>
          </div>

          <h2 className="text-[20pt] font-bold text-[#0a1a35] mb-8 border-b-2 border-slate-900 pb-1">1. Introduction and Purpose</h2>
          <div className="space-y-6 text-justify leading-relaxed text-[10.5pt]">
            <p>This policy establishes the governance framework, operational standards, and compliance obligations for ElevateAI Solutions Agency (hereinafter referred to as “the Company”) in the provision of artificial intelligence automation services and AI-powered voice agent solutions.</p>
            <p>The Company operates across the Republic of Zambia and the Republic of South Africa. This policy ensures that all operations comply with the applicable laws, regulations, and ethical standards of both jurisdictions, and that the rights and interests of clients, data subjects, and the public are protected.</p>
            <p>This policy is binding on all directors, officers, employees, contractors, sub-processors, and third-party partners who act on behalf of, or in association with, the Company.</p>
            
            <h3 className="text-[15pt] font-bold text-[#0a1a35] mt-10 mb-4">1.1 Objectives</h3>
            <ul className="list-disc pl-10 space-y-4 font-sans text-slate-700 text-[10pt]">
              <li>Ensure full compliance with all data protection, cybersecurity, consumer protection, and telecommunications laws in Zambia and South Africa.</li>
              <li>Establish responsible and ethical standards for the development, deployment, and operation of AI automation and voice agent technologies.</li>
              <li>Protect the privacy, dignity, and rights of all individuals whose personal information is processed by the Company’s systems.</li>
              <li>Define roles, responsibilities, and accountability structures for AI governance within the Company.</li>
              <li>Establish procedures for consent management, data security, breach response, and regulatory engagement.</li>
            </ul>
          </div>
          <div className="absolute bottom-8 left-12 right-12 flex justify-between items-center text-[8pt] text-slate-300 font-sans">
            <span>CONFIDENTIAL</span>
            <span>Page 5</span>
          </div>
        </div>

        {/* PAGE 6: 2. DEFINITIONS AND INTERPRETATION */}
        <div className="min-h-[10.5in] p-16 relative page-break-after">
          <div className="flex justify-between items-center text-[8pt] text-slate-400 mb-12 border-b border-slate-100 pb-1 font-sans">
            <span>ElevateAI Solutions Agency</span>
            <span>Policy | POL-001 | v1.0</span>
          </div>

          <h2 className="text-[20pt] font-bold text-[#0a1a35] mb-8 border-b-2 border-slate-900 pb-1">2. Definitions and Interpretation</h2>
          <p className="mb-8 text-slate-500 font-sans italic">In this policy, unless the context indicates otherwise, the following terms shall have the meanings assigned to them:</p>
          
          <div className="space-y-0 text-[9.5pt] font-sans">
            {[
              { k: "AI System", v: "Any software system that uses machine learning, natural language processing, or other artificial intelligence techniques to automate tasks, generate outputs, or interact with users." },
              { k: "Voice Agent", v: "An AI-powered system that conducts voice-based interactions with individuals via telephone or internet-based voice channels, including outbound calls, inbound call handling, and interactive voice response." },
              { k: "Automated Decision-Making", v: "A decision made by an AI system without meaningful human intervention that produces legal effects or significantly affects a data subject." },
              { k: "Personal Information", v: "Information relating to an identifiable, living natural person, and where applicable in South Africa, an identifiable existing juristic person. Includes names, contact details, voice recordings, voice biometrics, and any identifying data." },
              { k: "Data Subject", v: "A natural person (or juristic person in South Africa) whose personal information is processed." },
              { k: "Data Controller / Responsible Party", v: "The entity that determines the purpose and means of processing. Termed “data controller” under Zambia’s DPA and “responsible party” under South Africa’s POPIA." },
              { k: "Data Processor / Operator", v: "The entity that processes personal information on behalf of the controller. Termed “operator” under POPIA." },
              { k: "Biometric Data", v: "Personal data resulting from specific technical processing relating to physical, physiological, or behavioural characteristics, including voice prints and voice recognition data." },
              { k: "Consent", v: "A freely given, specific, informed, and unambiguous indication of a data subject’s agreement to the processing of their personal information." },
              { k: "Direct Marketing", v: "Any approach to a data subject, by any means, for the purpose of promoting or offering goods or services, or requesting a donation." },
              { k: "DPA", v: "The Data Protection Act No. 3 of 2021 (Zambia)." },
              { k: "POPIA", v: "The Protection of Personal Information Act No. 4 of 2013 (South Africa)." }
            ].map((d, i) => (
              <div key={i} className="grid grid-cols-[1.8in_1fr] border-b border-slate-100 py-3.5 gap-8 items-baseline">
                <span className="font-bold text-[#0a1a35] uppercase text-[8pt] tracking-widest">{d.k}</span>
                <p className="text-slate-700 text-justify leading-snug">{d.v}</p>
              </div>
            ))}
          </div>
          <div className="absolute bottom-8 left-12 right-12 flex justify-between items-center text-[8pt] text-slate-300 font-sans">
            <span>CONFIDENTIAL</span>
            <span>Page 6</span>
          </div>
        </div>

        {/* PAGE 7: 3. LEGAL AND REGULATORY FRAMEWORK */}
        <div className="min-h-[10.5in] p-16 relative page-break-after">
          <div className="flex justify-between items-center text-[8pt] text-slate-400 mb-12 border-b border-slate-100 pb-1 font-sans">
            <span>ElevateAI Solutions Agency</span>
            <span>Policy | POL-001 | v1.0</span>
          </div>

          <h2 className="text-[20pt] font-bold text-[#0a1a35] mb-8 border-b-2 border-slate-900 pb-1 uppercase tracking-tight">3. Legal and Regulatory Framework</h2>
          <p className="mb-10 text-[10pt] text-slate-600 leading-relaxed italic">The Company’s operations are governed by the following laws, regulations, and policy frameworks. In the event of any conflict between this policy and applicable law, the applicable law shall prevail.</p>
          
          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4 uppercase tracking-tighter">3.1 Republic of Zambia</h3>
          <table className="w-full text-left border-collapse mb-12 text-[8.5pt] font-sans">
            <thead>
              <tr className="bg-[#0a1a35] text-white">
                <th className="p-3 border border-slate-800 w-1/3">Legislation</th>
                <th className="p-3 border border-slate-800">Relevance</th>
              </tr>
            </thead>
            <tbody className="text-slate-800">
              <tr className="bg-slate-50">
                <td className="p-3 border border-slate-200 font-bold">Data Protection Act No. 3 of 2021</td>
                <td className="p-3 border border-slate-200">Primary legislation governing personal data. Enforcement commenced March 2025.</td>
              </tr>
              <tr>
                <td className="p-3 border border-slate-200 font-bold">Cyber Security Act & Cyber Crimes Act, 2024</td>
                <td className="p-3 border border-slate-200">Regulates digital security, synthetic media, deepfakes, voice cloning fraud. S.34 mandates affirmative consent for biometric data. S.21 prohibits digital impersonation.</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="p-3 border border-slate-200 font-bold">National AI Strategy (2024–2026)</td>
                <td className="p-3 border border-slate-200">National framework for ethical AI deployment, including a National AI Council.</td>
              </tr>
              <tr>
                <td className="p-3 border border-slate-200 font-bold">Electronic Communications and Transactions Act</td>
                <td className="p-3 border border-slate-200">Governs electronic contracts and automated transactions.</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="p-3 border border-slate-200 font-bold">Information and Communications Technologies Act</td>
                <td className="p-3 border border-slate-200">Establishes ZICTA as principal regulator.</td>
              </tr>
            </tbody>
          </table>

          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4 uppercase tracking-tighter">3.2 Republic of South Africa</h3>
          <table className="w-full text-left border-collapse text-[8.5pt] font-sans">
            <thead>
              <tr className="bg-[#0a1a35] text-white">
                <th className="p-3 border border-slate-800 w-1/3">Legislation</th>
                <th className="p-3 border border-slate-800">Relevance</th>
              </tr>
            </thead>
            <tbody className="text-slate-800">
              <tr className="bg-slate-50">
                <td className="p-3 border border-slate-200 font-bold">POPIA (2013)</td>
                <td className="p-3 border border-slate-200">Primary data protection law. S.71(1) governs automated decision-making. 2025 amendments strengthen consent for direct marketing incl. voice calls.</td>
              </tr>
              <tr>
                <td className="p-3 border border-slate-200 font-bold">Consumer Protection Act No. 68 of 2008</td>
                <td className="p-3 border border-slate-200">Governs fairness/safety of AI-enabled products. S.11 protects against unsolicited marketing.</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="p-3 border border-slate-200 font-bold">ECTA (2002)</td>
                <td className="p-3 border border-slate-200">Recognises contracts concluded by electronic agents incl. chatbots and voice agents.</td>
              </tr>
              <tr>
                <td className="p-3 border border-slate-200 font-bold">Cybercrimes Act (2020)</td>
                <td className="p-3 border border-slate-200">Addresses unauthorised access, data manipulation, and system interference.</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="p-3 border border-slate-200 font-bold">National AI Policy Framework (2024)</td>
                <td className="p-3 border border-slate-200">Non-binding framework emphasising human-centred AI, fairness, transparency, accountability.</td>
              </tr>
              <tr>
                <td className="p-3 border border-slate-200 font-bold">RICA</td>
                <td className="p-3 border border-slate-200">Governs interception and monitoring of communications, incl. call recording.</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="p-3 border border-slate-200 font-bold">National Data and Cloud Policy (2024)</td>
                <td className="p-3 border border-slate-200">Requires certain government data stored within South Africa.</td>
              </tr>
            </tbody>
          </table>
          <div className="absolute bottom-8 left-12 right-12 flex justify-between items-center text-[8pt] text-slate-300 font-sans">
            <span>CONFIDENTIAL</span>
            <span>Page 7</span>
          </div>
        </div>

        {/* PAGE 8: 4. SCOPE AND APPLICATION */}
        <div className="min-h-[10.5in] p-16 relative page-break-after">
          <div className="flex justify-between items-center text-[8pt] text-slate-400 mb-12 border-b border-slate-100 pb-1 font-sans">
            <span>ElevateAI Solutions Agency</span>
            <span>Policy | POL-001 | v1.0</span>
          </div>

          <h2 className="text-[20pt] font-bold text-[#0a1a35] mb-8 border-b-2 border-slate-900 pb-1">4. Scope and Application</h2>
          
          <h3 className="text-[15pt] font-bold text-[#0a1a35] mt-10 mb-4">4.1 Persons Covered</h3>
          <p className="text-justify leading-relaxed mb-10">This policy applies to all directors, officers, employees (permanent and temporary), independent contractors, consultants, sub-processors, and any third party who accesses, processes, or handles personal information or operates AI systems on behalf of the Company.</p>

          <h3 className="text-[15pt] font-bold text-[#0a1a35] mt-10 mb-4">4.2 Systems Covered</h3>
          <p className="text-justify leading-relaxed mb-10">This policy covers all AI automation systems and agents, voice agents, chatbots, interactive voice response (IVR) systems, automated calling systems, voice biometric systems, natural language processing engines, and any related software, databases, or infrastructure operated or managed by the Company.</p>

          <h3 className="text-[15pt] font-bold text-[#0a1a35] mt-10 mb-4">4.3 Geographic Scope</h3>
          <p className="text-justify leading-relaxed mb-10">This policy applies to all operations conducted within, or directed towards individuals located in, the Republic of Zambia and the Republic of South Africa, and to any cross-border data transfers between these jurisdictions and any transfers to third countries.</p>
          
          <div className="absolute bottom-8 left-12 right-12 flex justify-between items-center text-[8pt] text-slate-300 font-sans">
            <span>CONFIDENTIAL</span>
            <span>Page 8</span>
          </div>
        </div>

        {/* PAGE 9: 5. DATA PROTECTION AND PRIVACY */}
        <div className="min-h-[10.5in] p-16 relative page-break-after">
          <div className="flex justify-between items-center text-[8pt] text-slate-400 mb-12 border-b border-slate-100 pb-1 font-sans">
            <span>ElevateAI Solutions Agency</span>
            <span>Policy | POL-001 | v1.0</span>
          </div>

          <h2 className="text-[20pt] font-bold text-[#0a1a35] mb-8 border-b-2 border-slate-900 pb-1">5. Data Protection and Privacy</h2>
          
          <h3 className="text-[15pt] font-bold text-[#0a1a35] mt-10 mb-4">5.1 General Principles</h3>
          <p className="mb-6">The Company shall process personal information in accordance with the following principles, common to both the DPA (Zambia) and POPIA (South Africa):</p>
          <ul className="list-disc pl-10 space-y-4 font-sans text-slate-700 text-[9.5pt]">
            <li><strong>Lawfulness:</strong> All processing must have a valid lawful basis.</li>
            <li><strong>Purpose Limitation:</strong> Personal information shall be collected for a specific, explicitly defined, and lawful purpose and shall not be further processed in a manner incompatible with that purpose.</li>
            <li><strong>Minimisation:</strong> Only personal information that is adequate, relevant, and not excessive in relation to the purpose shall be collected.</li>
            <li><strong>Accuracy:</strong> Personal information must be accurate, complete, and kept up to date.</li>
            <li><strong>Storage Limitation:</strong> Personal information shall not be retained longer than necessary for the purpose for which it was collected.</li>
            <li><strong>Integrity and Confidentiality:</strong> Appropriate technical and organisational measures shall be implemented to protect personal information against unauthorised access, loss, or destruction.</li>
            <li><strong>Accountability:</strong> The Company shall be responsible for, and able to demonstrate, compliance with these principles.</li>
          </ul>

          <h3 className="text-[15pt] font-bold text-[#0a1a35] mt-12 mb-4">5.2 Zambia-Specific Obligations</h3>
          <h4 className="font-bold text-[11pt] mb-2 uppercase">5.2.1 Registration</h4>
          <p className="mb-4">The Company shall register as a data controller and/or data processor with the Data Protection Commission of Zambia before processing any personal data. The Company shall maintain a valid registration certificate at all times.</p>
          <h4 className="font-bold text-[11pt] mb-2 uppercase">5.2.2 Consent</h4>
          <p className="mb-4">Consent is the primary lawful basis under the DPA. Consent must be freely given, in writing, and the data subject must be informed of the right to withdraw. The Company shall maintain demonstrable records of all consent obtained.</p>
          <h4 className="font-bold text-[11pt] mb-2 uppercase">5.2.3 Data Subject Rights</h4>
          <p>The Company shall facilitate the exercise of all rights under the DPA, including the right to access, correction, deletion, objection, withdrawal of consent, and the right to an explanation of how and why data is processed.</p>

          <div className="absolute bottom-8 left-12 right-12 flex justify-between items-center text-[8pt] text-slate-300 font-sans">
            <span>CONFIDENTIAL</span>
            <span>Page 9</span>
          </div>
        </div>

        {/* PAGE 10: 5.3 SOUTH AFRICA-SPECIFIC OBLIGATIONS */}
        <div className="min-h-[10.5in] p-16 relative page-break-after">
          <div className="flex justify-between items-center text-[8pt] text-slate-400 mb-12 border-b border-slate-100 pb-1 font-sans">
            <span>ElevateAI Solutions Agency</span>
            <span>Policy | POL-001 | v1.0</span>
          </div>

          <h3 className="text-[15pt] font-bold text-[#0a1a35] mb-6">5.3 South Africa-Specific Obligations</h3>
          
          <h4 className="font-bold text-[11pt] mb-2 uppercase">5.3.1 Information Officer</h4>
          <p className="mb-8">The Company shall appoint an Information Officer and, where appropriate, a Deputy Information Officer, and register them with the Information Regulator. The Information Officer shall ensure POPIA compliance and serve as the contact point for data subjects and the Regulator.</p>

          <h4 className="font-bold text-[11pt] mb-2 uppercase">5.3.2 Conditions for Lawful Processing</h4>
          <p className="mb-8">The Company shall comply with the eight POPIA conditions: accountability, processing limitation, purpose specification, further processing limitation, information quality, openness, security safeguards, and data subject participation.</p>

          <h4 className="font-bold text-[11pt] mb-2 uppercase">5.3.3 Automated Decision-Making (Section 71)</h4>
          <p className="mb-8 text-justify">Under Section 71(1) of POPIA, a data subject shall not be subject to a decision which results in legal consequences for them, or which affects them to a substantial degree, if that decision is based solely on automated processing. Where the Company’s AI systems make such decisions, the Company shall provide a mechanism for human review upon request and shall inform data subjects of the existence of automated decision-making.</p>

          <h4 className="font-bold text-[11pt] mb-2 uppercase">5.3.4 Consent and Direct Marketing (2025 Amendments)</h4>
          <p className="text-justify">In accordance with the 2025 POPIA amendments, the Company shall obtain explicit, recorded consent before initiating any direct marketing via voice agents or automated calling systems. Opt-out clauses shall not be relied upon as valid consent. Data subjects may object at any time via any accessible channel — telephone, email, SMS, WhatsApp, or in person — free of charge.</p>

          <div className="absolute bottom-8 left-12 right-12 flex justify-between items-center text-[8pt] text-slate-300 font-sans">
            <span>CONFIDENTIAL</span>
            <span>Page 10</span>
          </div>
        </div>

        {/* PAGE 11: 6. VOICE AGENT OPERATIONS POLICY */}
        <div className="min-h-[10.5in] p-16 relative page-break-after">
          <div className="flex justify-between items-center text-[8pt] text-slate-400 mb-12 border-b border-slate-100 pb-1 font-sans">
            <span>ElevateAI Solutions Agency</span>
            <span>Policy | POL-001 | v1.0</span>
          </div>

          <h2 className="text-[20pt] font-bold text-[#0a1a35] mb-8 border-b-2 border-slate-900 pb-1">6. Voice Agent Operations Policy</h2>
          <p className="mb-10 text-slate-500 font-sans italic">This section establishes specific standards and procedures governing the deployment and operation of AI-powered voice agents.</p>
          
          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">6.1 Disclosure and Transparency</h3>
          <p className="text-justify leading-relaxed mb-6">All voice agents shall clearly and unambiguously disclose their artificial nature at the commencement of every interaction. Voice agents shall not impersonate a human being or create the impression that the data subject is speaking with a natural person. The disclosure shall include, at a minimum:</p>
          <ul className="list-disc pl-10 space-y-2 font-sans text-slate-700 text-[10pt] mb-10">
            <li>A clear statement that the caller or respondent is an AI-powered voice agent.</li>
            <li>The name of the Company on whose behalf the voice agent is operating.</li>
            <li>The purpose of the call or interaction.</li>
            <li>Information on how to speak with a human representative, where applicable.</li>
          </ul>

          <div className="space-y-4 mb-10">
            <div className="p-4 bg-green-50 border-l-4 border-green-500 text-green-900 text-sm">
              <strong>Zambia:</strong> Under the Cyber Crimes Act, digital impersonation for unlawful advantage is a criminal offence. AI-generated voice content must be clearly labelled.
            </div>
            <div className="p-4 bg-blue-50 border-l-4 border-blue-500 text-blue-900 text-sm">
              <strong>South Africa:</strong> ECTA recognises contracts concluded by electronic agents, but transparency regarding the automated nature is essential. The AI Policy Framework mandates transparency in all AI systems.
            </div>
          </div>

          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">6.2 Consent Management</h3>
          <h4 className="font-bold mb-2">6.2.1 Inbound Interactions</h4>
          <p className="mb-6">For inbound interactions, the voice agent shall inform the caller that the interaction is AI powered and that data is being processed. Continued engagement after disclosure shall be treated as implied consent, provided the caller is informed of their right to opt out and speak with a human.</p>
          
          <h4 className="font-bold mb-2">6.2.2 Outbound Interactions</h4>
          <div className="space-y-4">
            <div className="p-4 bg-green-50 border border-green-200 text-green-800 text-sm italic">
              <strong>Zambia:</strong> Prior affirmative consent must be obtained before any personal data is processed via the voice agent. For direct marketing, the data subject must have explicitly consented.
            </div>
            <div className="p-4 bg-red-50 border border-red-200 text-red-800 text-sm font-bold">
              <strong>South Africa:</strong> Under POPIA Section 69 and the 2025 amendments, explicit recorded opt-in consent is required before using voice agents for direct marketing. A first call may request consent, but the Company must immediately identify itself and state the purpose. If the data subject objects, no further contact may be made. Violation constitutes a criminal offence with fines up to R10 million.
            </div>
          </div>

          <div className="absolute bottom-8 left-12 right-12 flex justify-between items-center text-[8pt] text-slate-300 font-sans">
            <span>CONFIDENTIAL</span>
            <span>Page 11</span>
          </div>
        </div>

        {/* PAGE 12: 6.3 - 6.5 */}
        <div className="min-h-[10.5in] p-16 relative page-break-after">
          <div className="flex justify-between items-center text-[8pt] text-slate-400 mb-12 border-b border-slate-100 pb-1 font-sans">
            <span>ElevateAI Solutions Agency</span>
            <span>Policy | POL-001 | v1.0</span>
          </div>

          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">6.3 Call Recording and Monitoring</h3>
          <p className="mb-4">Where voice agent interactions are recorded, the Company shall:</p>
          <ol className="list-decimal pl-10 space-y-3 font-sans text-[10pt] mb-8">
            <li>Inform the data subject at the beginning of the interaction that the call is being recorded.</li>
            <li>State the purpose of the recording clearly and concisely.</li>
            <li>Provide the option to decline recording where feasible.</li>
            <li>Store recordings securely with access controls and encryption.</li>
            <li>Retain recordings only for the period specified in the data retention schedule.</li>
            <li>Provide data subjects with access to their recordings upon request.</li>
            <li>Delete or anonymise recordings when the retention period expires.</li>
          </ol>
          <div className="p-4 bg-blue-50 border border-blue-200 text-blue-900 text-sm mb-10">
            <strong>South Africa — RICA Compliance:</strong> At least one party to the communication must consent to recording. The voice agent’s disclosure at call commencement serves as notification, but the data subject must be afforded the opportunity to object.
          </div>

          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">6.4 Voice Biometrics</h3>
          <p className="mb-6">Where the Company utilises voice biometric technologies (voice recognition, authentication, voice prints, or speaker identification):</p>
          <div className="space-y-4 mb-6">
            <div className="p-4 bg-green-50 border-l-4 border-green-500 text-green-800 text-sm">
              <strong>Zambia:</strong> Section 34 of the Cyber Crimes Act requires affirmative consent before utilising biometric data within AI systems. Consent must be specific, informed, and documented.
            </div>
            <div className="p-4 bg-blue-50 border-l-4 border-blue-500 text-blue-800 text-sm">
              <strong>South Africa:</strong> Voice prints constitute special personal information under POPIA Section 26. Processing requires explicit consent or another valid basis under Section 27. A prior impact assessment must be conducted before deploying voice biometric systems.
            </div>
          </div>
          <p className="italic text-slate-500 mb-10">Voice biometric data shall not be used for any purpose other than that for which consent was obtained. Enhanced security measures shall be implemented for all biometric data.</p>

          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">6.5 Do-Not-Call and Opt-Out Management</h3>
          <p className="mb-4">The Company shall maintain a centralised opt-out register, updated in real time and checked before any outbound contact.</p>
          <div className="space-y-4">
            <div className="p-4 bg-slate-50 border border-slate-200 text-slate-900 text-sm">
              <strong>South Africa:</strong> The DMASA Do Not Contact list and any future NCC national registry shall be integrated. Opt-out requests must be processed immediately. Further contact following an opt-out is a criminal offence.
            </div>
            <div className="p-4 bg-slate-50 border border-slate-200 text-slate-900 text-sm">
              <strong>Zambia:</strong> All withdrawals of consent shall be honoured promptly. Auditable records of all opt-out requests and actions taken shall be maintained.
            </div>
          </div>

          <div className="absolute bottom-8 left-12 right-12 flex justify-between items-center text-[8pt] text-slate-300 font-sans">
            <span>CONFIDENTIAL</span>
            <span>Page 12</span>
          </div>
        </div>

        {/* PAGE 13: 6.6 QUALITY ASSURANCE */}
        <div className="min-h-[10.5in] p-16 relative page-break-after">
          <div className="flex justify-between items-center text-[8pt] text-slate-400 mb-12 border-b border-slate-100 pb-1 font-sans">
            <span>ElevateAI Solutions Agency</span>
            <span>Policy | POL-001 | v1.0</span>
          </div>

          <h3 className="text-[15pt] font-bold text-[#0a1a35] mb-6">6.6 Quality Assurance and Human Oversight</h3>
          <p className="text-justify leading-relaxed">The Company shall implement quality assurance processes including regular audits of call quality, AI accuracy, and policy compliance. A human escalation pathway shall be available at all times, and data subjects may request transfer to a human representative at any point during an interaction.</p>

          <div className="absolute bottom-8 left-12 right-12 flex justify-between items-center text-[8pt] text-slate-300 font-sans">
            <span>CONFIDENTIAL</span>
            <span>Page 13</span>
          </div>
        </div>

        {/* PAGE 14: 7. RESPONSIBLE AI AND ETHICS POLICY */}
        <div className="min-h-[10.5in] p-16 relative page-break-after">
          <div className="flex justify-between items-center text-[8pt] text-slate-400 mb-12 border-b border-slate-100 pb-1 font-sans">
            <span>ElevateAI Solutions Agency</span>
            <span>Policy | POL-001 | v1.0</span>
          </div>

          <h2 className="text-[20pt] font-bold text-[#0a1a35] mb-8 border-b-2 border-slate-900 pb-1 uppercase tracking-tight">7. Responsible AI and Ethics Policy</h2>
          <p className="mb-10 text-justify font-sans text-[10pt] leading-relaxed">The Company is committed to responsible AI in alignment with the Zambia National AI Strategy (2024–2026), South Africa’s National AI Policy Framework (2024), and the African Union Continental AI Strategy.</p>
          
          <div className="space-y-8">
            <section>
              <h3 className="text-[12pt] font-bold text-[#0a1a35] mb-3 uppercase tracking-tighter">7.1 Fairness and Non-Discrimination</h3>
              <p className="text-justify">AI systems shall not discriminate based on race, gender, ethnicity, age, disability, religion, sexual orientation, socioeconomic status, or any other protected characteristic. Regular bias audits shall be conducted with corrective action taken where discriminatory outcomes are identified.</p>
            </section>
            <section>
              <h3 className="text-[12pt] font-bold text-[#0a1a35] mb-3 uppercase tracking-tighter">7.2 Transparency and Explainability</h3>
              <p className="text-justify">The Company shall explain, in clear language, how its AI systems make decisions. Documentation shall cover logic, training data sources, model architecture, and decision criteria. Data subjects may request an explanation of any automated decision affecting them.</p>
            </section>
            <section>
              <h3 className="text-[12pt] font-bold text-[#0a1a35] mb-3 uppercase tracking-tighter">7.3 Human Oversight and Control</h3>
              <p className="text-justify">Human-in-the-loop capabilities shall be maintained for all high-stakes decisions. No fully autonomous decision producing legal effects shall be made without the availability of human review. Clear escalation procedures and override mechanisms shall be defined.</p>
            </section>
            <section>
              <h3 className="text-[12pt] font-bold text-[#0a1a35] mb-3 uppercase tracking-tighter">7.4 Accountability</h3>
              <p className="text-justify">A responsible person or team shall be designated for AI governance. Each AI system shall have a designated owner accountable for performance, compliance, and ethical operation. An AI system register shall document all systems, their purposes, inputs, and risk assessments.</p>
            </section>
            <section>
              <h3 className="text-[12pt] font-bold text-[#0a1a35] mb-3 uppercase tracking-tighter">7.5 Safety and Security</h3>
              <p className="text-justify">All AI systems shall undergo regular security testing, vulnerability assessments, and penetration testing. Incident response plans specific to AI failures shall be maintained. Systems posing unacceptable safety risks shall be decommissioned immediately.</p>
            </section>
            <section>
              <h3 className="text-[12pt] font-bold text-[#0a1a35] mb-3 uppercase tracking-tighter">7.6 Privacy by Design</h3>
              <p className="text-justify">Data protection shall be integrated into AI system design from inception. Minimisation, pseudonymisation, and anonymisation shall be applied where appropriate. Data protection impact assessments shall be conducted for all AI systems processing personal information.</p>
            </section>
          </div>

          <div className="absolute bottom-8 left-12 right-12 flex justify-between items-center text-[8pt] text-slate-300 font-sans">
            <span>CONFIDENTIAL</span>
            <span>Page 14</span>
          </div>
        </div>

        {/* PAGE 15: 8. CROSS-BORDER DATA TRANSFERS */}
        <div className="min-h-[10.5in] p-16 relative page-break-after">
          <div className="flex justify-between items-center text-[8pt] text-slate-400 mb-12 border-b border-slate-100 pb-1 font-sans">
            <span>ElevateAI Solutions Agency</span>
            <span>Policy | POL-001 | v1.0</span>
          </div>

          <h2 className="text-[20pt] font-bold text-[#0a1a35] mb-8 border-b-2 border-slate-900 pb-1 uppercase tracking-tight">8. Cross-Border Data Transfers</h2>
          <p className="mb-10 text-justify">As the Company operates in both jurisdictions, personal information may be transferred between countries. All cross-border transfers shall comply with both the DPA and POPIA.</p>
          
          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">8.1 Zambia Requirements</h3>
          <p className="mb-10">Cross-border transfers are permitted where the recipient country provides adequate data protection, the data subject has consented, or the transfer has been authorised by the Data Protection Commissioner.</p>

          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">8.2 South Africa Requirements</h3>
          <p className="mb-10 text-justify">Under POPIA Section 72, personal information may only be transferred to a foreign country if the recipient is subject to adequate protection (by law or binding corporate rules), the data subject consents, the transfer is necessary for contract performance, or the transfer benefits the data subject. Standard contractual clauses are not explicitly provided for under POPIA.</p>

          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">8.3 Data Localisation</h3>
          <p className="mb-10 text-justify">Where processing relates to South African government contracts, the National Data and Cloud Policy (2024) requires data pertaining to national security be stored exclusively within South Africa.</p>

          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">8.4 Transfer Safeguards</h3>
          <ul className="list-disc pl-10 space-y-3 font-sans text-slate-700 text-[10pt]">
            <li>Encryption of data in transit and at rest.</li>
            <li>Documented assessment of the recipient country’s data protection regime.</li>
            <li>Contractual protections binding the recipient to equivalent standards.</li>
            <li>Access controls limiting who may access transferred data.</li>
            <li>Auditable records of all transfers including data, recipient, purpose, and legal basis.</li>
          </ul>

          <div className="absolute bottom-8 left-12 right-12 flex justify-between items-center text-[8pt] text-slate-300 font-sans">
            <span>CONFIDENTIAL</span>
            <span>Page 15</span>
          </div>
        </div>

        {/* PAGE 16: 9. INFORMATION SECURITY */}
        <div className="min-h-[10.5in] p-16 relative page-break-after">
          <div className="flex justify-between items-center text-[8pt] text-slate-400 mb-12 border-b border-slate-100 pb-1 font-sans">
            <span>ElevateAI Solutions Agency</span>
            <span>Policy | POL-001 | v1.0</span>
          </div>

          <h2 className="text-[20pt] font-bold text-[#0a1a35] mb-8 border-b-2 border-slate-900 pb-1 uppercase tracking-tight">9. Information Security</h2>
          <p className="mb-10 text-justify font-sans">The Company shall implement appropriate technical and organisational measures proportionate to the nature, scope, and risks of processing activities.</p>
          
          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">9.1 Technical Measures</h3>
          <ul className="list-disc pl-10 space-y-4 font-sans text-slate-700 text-[10pt] mb-12">
            <li>Encryption of all personal information at rest and in transit using industry-standard protocols.</li>
            <li>Multi-factor authentication for all systems containing personal information.</li>
            <li>Role-based access controls with the principle of least privilege.</li>
            <li>Secure API integrations with authentication, rate limiting, and logging.</li>
            <li>Regular vulnerability scanning and penetration testing.</li>
            <li>Intrusion detection and prevention systems.</li>
            <li>Secure storage and handling of voice recordings, transcripts, and biometric data.</li>
          </ul>

          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">9.2 Organisational Measures</h3>
          <ul className="list-disc pl-10 space-y-4 font-sans text-slate-700 text-[10pt]">
            <li>Mandatory data protection and security training upon onboarding and annually.</li>
            <li>Confidentiality and non-disclosure agreements for all personnel.</li>
            <li>Background checks for personnel with access to sensitive data.</li>
            <li>Documented access logs and regular access rights reviews.</li>
            <li>Clear desk and clear screen policies.</li>
            <li>Incident response plan with defined roles, escalation procedures, and communication protocols.</li>
          </ul>

          <div className="absolute bottom-8 left-12 right-12 flex justify-between items-center text-[8pt] text-slate-300 font-sans">
            <span>CONFIDENTIAL</span>
            <span>Page 16</span>
          </div>
        </div>

        {/* PAGE 17: 10. DATA BREACH NOTIFICATION */}
        <div className="min-h-[10.5in] p-16 relative page-break-after">
          <div className="flex justify-between items-center text-[8pt] text-slate-400 mb-12 border-b border-slate-100 pb-1 font-sans">
            <span>ElevateAI Solutions Agency</span>
            <span>Policy | POL-001 | v1.0</span>
          </div>

          <h2 className="text-[20pt] font-bold text-[#0a1a35] mb-8 border-b-2 border-slate-900 pb-1 uppercase tracking-tight">10. Data Breach Notification</h2>
          
          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">10.1 Internal Response</h3>
          <ol className="list-decimal pl-10 space-y-3 font-sans text-[10pt] mb-10">
            <li>Immediately contain the breach and assess scope, nature, and potential impact.</li>
            <li>Convene the incident response team and document all findings.</li>
            <li>Determine the categories and approximate number of affected data subjects.</li>
            <li>Assess the likely consequences for data subjects.</li>
            <li>Implement remediation measures to prevent recurrence.</li>
          </ol>

          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">10.2 Notification to Regulators</h3>
          <div className="space-y-4 mb-10">
            <div className="p-4 bg-green-50 border border-green-200 text-green-900 text-sm">
              <strong>Zambia:</strong> Notify the Data Protection Commission of any breach compromising personal data, in accordance with DPA procedures.
            </div>
            <div className="p-4 bg-blue-50 border border-blue-200 text-blue-900 text-sm">
              <strong>South Africa:</strong> Under POPIA Section 22, notify the Information Regulator and all affected data subjects as soon as reasonably possible. Include a description of the breach, types of information compromised, measures taken, and recommendations for data subjects.
            </div>
          </div>

          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">10.3 Notification to Data Subjects</h3>
          <p className="text-justify leading-relaxed mb-10">Affected data subjects shall be notified in clear, plain language through the most effective means available. The notification shall advise on protective steps and provide contact details for further information.</p>

          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">10.4 Record Keeping</h3>
          <p className="text-justify leading-relaxed">A register of all data breaches shall be maintained, including those not requiring external notification, together with facts, effects, and remedial actions. This register shall be available for regulatory inspection.</p>

          <div className="absolute bottom-8 left-12 right-12 flex justify-between items-center text-[8pt] text-slate-300 font-sans">
            <span>CONFIDENTIAL</span>
            <span>Page 17</span>
          </div>
        </div>

        {/* PAGE 18: 11. DATA RETENTION AND DELETION */}
        <div className="min-h-[10.5in] p-16 relative page-break-after">
          <div className="flex justify-between items-center text-[8pt] text-slate-400 mb-12 border-b border-slate-100 pb-1 font-sans">
            <span>ElevateAI Solutions Agency</span>
            <span>Policy | POL-001 | v1.0</span>
          </div>

          <h2 className="text-[20pt] font-bold text-[#0a1a35] mb-8 border-b-2 border-slate-900 pb-1">11. Data Retention and Deletion</h2>
          <p className="mb-10 text-justify font-sans text-slate-600 italic">Personal information shall not be retained longer than necessary. The Company maintains the following retention schedule:</p>
          
          <table className="w-full text-left border-collapse text-[8.5pt] font-sans shadow-sm">
            <thead>
              <tr className="bg-[#0a1a35] text-white">
                <th className="p-3 border border-slate-800">Data Category</th>
                <th className="p-3 border border-slate-800">Retention Period</th>
                <th className="p-3 border border-slate-800">Basis</th>
              </tr>
            </thead>
            <tbody className="text-slate-800 leading-snug">
              <tr><td className="p-3 border border-slate-200 font-bold">Voice call recordings</td><td className="p-3 border border-slate-200">12 months from recording</td><td className="p-3 border border-slate-200">Contractual / regulatory</td></tr>
              <tr className="bg-slate-50"><td className="p-3 border border-slate-200 font-bold">Call transcripts</td><td className="p-3 border border-slate-200">12 months from creation</td><td className="p-3 border border-slate-200">Quality assurance</td></tr>
              <tr><td className="p-3 border border-slate-200 font-bold">Voice biometric data</td><td className="p-3 border border-slate-200">Duration of consent; deleted on withdrawal</td><td className="p-3 border border-slate-200">Consent (POPIA S.26 / DPA)</td></tr>
              <tr className="bg-slate-50"><td className="p-3 border border-slate-200 font-bold">Contact details</td><td className="p-3 border border-slate-200">Duration of relationship + 12 months</td><td className="p-3 border border-slate-200">Contractual / legitimate interest</td></tr>
              <tr><td className="p-3 border border-slate-200 font-bold">Consent records</td><td className="p-3 border border-slate-200">12 years from consent or withdrawal</td><td className="p-3 border border-slate-200">Regulatory compliance</td></tr>
              <tr className="bg-slate-50"><td className="p-3 border border-slate-200 font-bold">Opt-out / DNC records</td><td className="p-3 border border-slate-200">Indefinitely</td><td className="p-3 border border-slate-200">POPIA / CPA / DPA compliance</td></tr>
              <tr><td className="p-3 border border-slate-200 font-bold">AI system logs</td><td className="p-3 border border-slate-200">12 months</td><td className="p-3 border border-slate-200">Security / operational</td></tr>
              <tr className="bg-slate-50"><td className="p-3 border border-slate-200 font-bold">Employee records</td><td className="p-3 border border-slate-200">Employment + 5 years</td><td className="p-3 border border-slate-200">Labour law compliance</td></tr>
              <tr><td className="p-3 border border-slate-200 font-bold">Data breach records</td><td className="p-3 border border-slate-200">Minimum 5 years</td><td className="p-3 border border-slate-200">Regulatory compliance</td></tr>
            </tbody>
          </table>
          
          <div className="mt-12 p-8 bg-slate-50 rounded-3xl border border-slate-200 border-dashed">
            <p className="text-[10pt] italic text-slate-500 leading-relaxed text-justify">
              Upon expiry of the retention period, data shall be securely deleted or irreversibly anonymised using methods rendering data unrecoverable. Records of all deletions shall be maintained.
            </p>
          </div>
          <div className="absolute bottom-8 left-12 right-12 flex justify-between items-center text-[8pt] text-slate-300 font-sans">
            <span>CONFIDENTIAL</span>
            <span>Page 18</span>
          </div>
        </div>

        {/* PAGE 19: 12. CLIENT AND THIRD-PARTY OBLIGATIONS */}
        <div className="min-h-[10.5in] p-16 relative page-break-after">
          <div className="flex justify-between items-center text-[8pt] text-slate-400 mb-12 border-b border-slate-100 pb-1 font-sans">
            <span>ElevateAI Solutions Agency</span>
            <span>Policy | POL-001 | v1.0</span>
          </div>

          <h2 className="text-[20pt] font-bold text-[#0a1a35] mb-8 border-b-2 border-slate-900 pb-1 uppercase tracking-tight">12. Client and Third-Party Obligations</h2>
          
          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">12.1 Data Processing Agreements</h3>
          <p className="text-justify leading-relaxed mb-10">A written data processing agreement shall be executed with every client, specifying roles, data categories, purposes, security requirements, sub-processing conditions, breach notification obligations, and data subject rights facilitation.</p>

          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">12.2 Client Responsibility for Consent</h3>
          <p className="text-justify leading-relaxed mb-10">Clients providing contact lists or personal information shall warrant that all necessary consents have been obtained, data was collected lawfully, and the Company is authorised to process it. This warranty shall be included in all client agreements.</p>

          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">12.3 Sub-Processors</h3>
          <p className="text-justify leading-relaxed mb-10">No sub-processor shall be engaged without prior written client authorisation. All sub-processors shall be bound by equivalent obligations. A register of sub-processors shall be maintained and made available upon request.</p>

          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">12.4 Service Level Agreements</h3>
          <p className="text-justify leading-relaxed">SLAs shall specify uptime commitments, data handling standards, compliance responsibilities, incident response timelines, and audit rights.</p>

          <div className="absolute bottom-8 left-12 right-12 flex justify-between items-center text-[8pt] text-slate-300 font-sans">
            <span>CONFIDENTIAL</span>
            <span>Page 19</span>
          </div>
        </div>

        {/* PAGE 20: 13. MARKETING AND OUTBOUND COMMUNICATIONS */}
        <div className="min-h-[10.5in] p-16 relative page-break-after">
          <div className="flex justify-between items-center text-[8pt] text-slate-400 mb-12 border-b border-slate-100 pb-1 font-sans">
            <span>ElevateAI Solutions Agency</span>
            <span>Policy | POL-001 | v1.0</span>
          </div>

          <h2 className="text-[20pt] font-bold text-[#0a1a35] mb-8 border-b-2 border-slate-900 pb-1 uppercase tracking-tight">13. Marketing and Outbound Communications</h2>
          
          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">13.1 South Africa</h3>
          <ul className="list-disc pl-10 space-y-4 font-sans text-slate-700 text-[10pt] mb-12">
            <li>No unsolicited direct marketing via automated calling or voice agents without prior explicit, recorded opt-in consent (POPIA Section 69, as amended 2025).</li>
            <li>First calls to request consent must immediately identify the Company and state the purpose.</li>
            <li>The DMASA Do Not Contact list and any future NCC national registry shall be consulted.</li>
            <li>Auditable records of all consent shall be maintained.</li>
          </ul>

          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">13.2 Zambia</h3>
          <ul className="list-disc pl-10 space-y-4 font-sans text-slate-700 text-[10pt] mb-12">
            <li>Consent must be obtained before processing personal data for marketing.</li>
            <li>Withdrawal of consent must be honoured promptly and without charge.</li>
            <li>Auditable records of all marketing consents and opt-out requests shall be maintained.</li>
          </ul>

          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">13.3 Prohibited Practices</h3>
          <ul className="list-disc pl-10 space-y-4 font-sans text-slate-700 text-[10pt]">
            <li>Contacting any individual who has objected or opted out.</li>
            <li>Using purchased or scraped contact lists without verified, lawful consent.</li>
            <li>Misrepresenting the Company’s identity or the nature of the call.</li>
            <li>Using voice agents to impersonate real individuals.</li>
            <li>Making deceptive or misleading claims during interactions.</li>
          </ul>

          <div className="absolute bottom-8 left-12 right-12 flex justify-between items-center text-[8pt] text-slate-300 font-sans">
            <span>CONFIDENTIAL</span>
            <span>Page 20</span>
          </div>
        </div>

        {/* PAGE 21: 14. AI CONTENT LABELLING */}
        <div className="min-h-[10.5in] p-16 relative page-break-after">
          <div className="flex justify-between items-center text-[8pt] text-slate-400 mb-12 border-b border-slate-100 pb-1 font-sans">
            <span>ElevateAI Solutions Agency</span>
            <span>Policy | POL-001 | v1.0</span>
          </div>

          <h2 className="text-[20pt] font-bold text-[#0a1a35] mb-8 border-b-2 border-slate-900 pb-1 uppercase tracking-tight">14. AI Content Labelling and Anti-Impersonation</h2>
          
          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">14.1 Content Labelling</h3>
          <p className="text-justify leading-relaxed mb-10">All AI-generated content that could reasonably be confused with human-generated content shall be clearly labelled. This applies to voice interactions, written content, and any synthetic media.</p>

          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">14.2 Deepfake and Synthetic Voice Prohibition</h3>
          <p className="text-justify leading-relaxed mb-8">The Company shall not create, distribute, or facilitate deepfake content, synthetic voice recordings of real individuals without explicit consent, or any AI content intended to deceive, defraud, or harm.</p>
          
          <div className="space-y-4 mb-10">
            <div className="p-4 bg-green-50 border border-green-200 text-green-900 text-sm">
              <strong>Zambia:</strong> The Cyber Crimes Act criminalises creation or distribution of deceptive digital content and digital impersonation including voice cloning for unlawful advantage.
            </div>
            <div className="p-4 bg-blue-50 border border-blue-200 text-blue-900 text-sm">
              <strong>South Africa:</strong> The Cybercrimes Act addresses data manipulation and impersonation. Common law fraud and impersonation offences also apply.
            </div>
          </div>

          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">14.3 Voice Cloning Safeguards</h3>
          <p className="text-justify leading-relaxed">Where voice synthesis or cloning is used for legitimate purposes (e.g., branded voice agents), only voices with explicit documented consent shall be used, synthesised voices shall be identified as artificial, and the technology shall never be used for impersonation without consent.</p>

          <div className="absolute bottom-8 left-12 right-12 flex justify-between items-center text-[8pt] text-slate-300 font-sans">
            <span>CONFIDENTIAL</span>
            <span>Page 21</span>
          </div>
        </div>

        {/* PAGE 22: 15. EMPLOYEE AND CONTRACTOR OBLIGATIONS */}
        <div className="min-h-[10.5in] p-16 relative page-break-after">
          <div className="flex justify-between items-center text-[8pt] text-slate-400 mb-12 border-b border-slate-100 pb-1 font-sans">
            <span>ElevateAI Solutions Agency</span>
            <span>Policy | POL-001 | v1.0</span>
          </div>

          <h2 className="text-[20pt] font-bold text-[#0a1a35] mb-8 border-b-2 border-slate-900 pb-1 uppercase tracking-tight">15. Employee and Contractor Obligations</h2>
          
          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">15.1 Confidentiality</h3>
          <p className="text-justify leading-relaxed mb-10">All personnel shall sign confidentiality and non-disclosure agreements before accessing personal information, AI systems, or proprietary technology. Obligations survive termination.</p>

          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">15.2 Training</h3>
          <p className="text-justify leading-relaxed mb-10">Mandatory training on data protection, AI ethics, and this policy shall be completed upon onboarding and at least annually. Training records shall be maintained.</p>

          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">15.3 Acceptable Use</h3>
          <p className="text-justify leading-relaxed mb-10">AI systems, data, and infrastructure shall be used only for authorised business purposes. Personal use, unauthorised access, or use inconsistent with this policy is prohibited.</p>

          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">15.4 Disciplinary Procedures</h3>
          <p className="text-justify leading-relaxed">Violations may result in disciplinary action up to termination, reporting to authorities, and civil or criminal liability.</p>

          <div className="absolute bottom-8 left-12 right-12 flex justify-between items-center text-[8pt] text-slate-300 font-sans">
            <span>CONFIDENTIAL</span>
            <span>Page 22</span>
          </div>
        </div>

        {/* PAGE 23: 16. COMPLAINTS AND DISPUTE RESOLUTION */}
        <div className="min-h-[10.5in] p-16 relative page-break-after">
          <div className="flex justify-between items-center text-[8pt] text-slate-400 mb-12 border-b border-slate-100 pb-1 font-sans">
            <span>ElevateAI Solutions Agency</span>
            <span>Policy | POL-001 | v1.0</span>
          </div>

          <h2 className="text-[20pt] font-bold text-[#0a1a35] mb-8 border-b-2 border-slate-900 pb-1 uppercase tracking-tight">16. Complaints and Dispute Resolution</h2>
          
          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">16.1 Internal Complaints</h3>
          <p className="text-justify leading-relaxed mb-10">Data subjects may raise complaints by contacting the Information Officer / Data Protection Contact at <strong className="text-blue-600 underline">elevatealsolutionsagency@gmail.com</strong>. Complaints shall be acknowledged within 5 business days and substantively responded to within 30 business days.</p>

          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">16.2 Escalation to Regulators</h3>
          <p className="mb-6">Unsatisfied data subjects may escalate to:</p>
          <ul className="list-disc pl-10 space-y-3 font-sans text-[10pt] mb-12">
            <li><strong>Zambia:</strong> Data Protection Commission — <span className="text-blue-600 underline">dataprotection.gov.zm</span></li>
            <li><strong>South Africa:</strong> Information Regulator — <span className="text-blue-600 underline">inforegulator.org.za</span></li>
          </ul>

          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">16.3 Record Keeping</h3>
          <p className="text-justify leading-relaxed">A complaints register shall be maintained, including investigation findings, responses, and corrective actions, and shall be available for regulatory inspection.</p>

          <div className="absolute bottom-8 left-12 right-12 flex justify-between items-center text-[8pt] text-slate-300 font-sans">
            <span>CONFIDENTIAL</span>
            <span>Page 23</span>
          </div>
        </div>

        {/* PAGE 24: 17. INTELLECTUAL PROPERTY */}
        <div className="min-h-[10.5in] p-16 relative page-break-after">
          <div className="flex justify-between items-center text-[8pt] text-slate-400 mb-12 border-b border-slate-100 pb-1 font-sans">
            <span>ElevateAI Solutions Agency</span>
            <span>Policy | POL-001 | v1.0</span>
          </div>

          <h2 className="text-[20pt] font-bold text-[#0a1a35] mb-8 border-b-2 border-slate-900 pb-1 uppercase tracking-tight">17. Intellectual Property</h2>
          <div className="space-y-8 text-justify leading-relaxed">
            <p>All AI models, algorithms, software, voice agent scripts, training data compilations, and proprietary methodologies are the Company’s intellectual property unless otherwise agreed in writing.</p>
            <p>Client data remains client property. The Company shall not use client data to train or improve AI models without explicit written consent documented in the data processing agreement.</p>
            <p>All training data used in AI development shall have been lawfully obtained, and third-party IP rights shall be respected.</p>
          </div>

          <div className="absolute bottom-8 left-12 right-12 flex justify-between items-center text-[8pt] text-slate-300 font-sans">
            <span>CONFIDENTIAL</span>
            <span>Page 24</span>
          </div>
        </div>

        {/* PAGE 25: 18. GOVERNANCE, REVIEW, AND AMENDMENTS */}
        <div className="min-h-[10.5in] p-16 relative page-break-after">
          <div className="flex justify-between items-center text-[8pt] text-slate-400 mb-12 border-b border-slate-100 pb-1 font-sans">
            <span>ElevateAI Solutions Agency</span>
            <span>Policy | POL-001 | v1.0</span>
          </div>

          <h2 className="text-[20pt] font-bold text-[#0a1a35] mb-8 border-b-2 border-slate-900 pb-1 uppercase tracking-tight">18. Governance, Review, and Amendments</h2>
          
          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">18.1 Policy Ownership</h3>
          <p className="text-justify leading-relaxed mb-10">This policy is owned by Chief Compliance Officer / Data Protection Officer and approved by the Board of Directors / Managing Director.</p>

          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">18.2 Review Schedule</h3>
          <p className="text-justify leading-relaxed mb-10">This policy shall be reviewed at least annually, or sooner upon material changes in law or operations. All revisions shall be documented.</p>

          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">18.3 Version Control</h3>
          <table className="w-full text-left border-collapse mb-12 text-[9pt] font-sans">
            <thead>
              <tr className="bg-[#0a1a35] text-white">
                <th className="p-3 border border-slate-800">Version</th>
                <th className="p-3 border border-slate-800">Date</th>
                <th className="p-3 border border-slate-800">Author</th>
                <th className="p-3 border border-slate-800">Changes</th>
              </tr>
            </thead>
            <tbody className="text-slate-800">
              <tr>
                <td className="p-3 border border-slate-200 font-bold">1.0</td>
                <td className="p-3 border border-slate-200">17/02/2026</td>
                <td className="p-3 border border-slate-200">Daniel Kimara</td>
                <td className="p-3 border border-slate-200">Initial policy document</td>
              </tr>
            </tbody>
          </table>

          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4">18.4 Communication</h3>
          <p className="text-justify leading-relaxed">This policy shall be communicated to all employees, contractors, and relevant third parties, and provided to regulators upon request.</p>

          <div className="absolute bottom-8 left-12 right-12 flex justify-between items-center text-[8pt] text-slate-300 font-sans">
            <span>CONFIDENTIAL</span>
            <span>Page 25</span>
          </div>
        </div>

        {/* PAGE 26: 19. REGULATORY REGISTRATION CHECKLISTS */}
        <div className="min-h-[10.5in] p-16 relative page-break-after">
          <div className="flex justify-between items-center text-[8pt] text-slate-400 mb-12 border-b border-slate-100 pb-1 font-sans">
            <span>ElevateAI Solutions Agency</span>
            <span>Policy | POL-001 | v1.0</span>
          </div>

          <h2 className="text-[20pt] font-bold text-[#0a1a35] mb-8 border-b-2 border-slate-900 pb-1 uppercase tracking-tight">19. Regulatory Registration Checklists</h2>
          
          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4 uppercase tracking-tighter">19.1 Zambia Registry</h3>
          <table className="w-full text-left border-collapse mb-10 text-[8pt] font-sans">
            <thead>
              <tr className="bg-[#0a1a35] text-white">
                <th className="p-2 border border-slate-800">Action Required</th>
                <th className="p-2 border border-slate-800">Responsible Party</th>
                <th className="p-2 border border-slate-800">Status</th>
              </tr>
            </thead>
            <tbody className="text-slate-800">
              <tr className="bg-slate-50">
                <td className="p-2 border border-slate-200 font-medium">Register as data controller/processor with the DPC</td>
                <td className="p-2 border border-slate-200">Daniel kimara (Co CEO / ZM Lead)</td>
                <td className="p-2 border border-slate-200 font-bold text-green-700">☑ Complete</td>
              </tr>
              <tr>
                <td className="p-2 border border-slate-200 font-medium">Comply with ZICTA requirements for electronic services</td>
                <td className="p-2 border border-slate-200">Daniel Kimara (Technical lead)</td>
                <td className="p-2 border border-slate-200 font-bold text-green-700">☑ Complete</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="p-2 border border-slate-200 font-medium">Align AI systems with National AI Strategy (2024–2026)</td>
                <td className="p-2 border border-slate-200">Daniel Kimara (AI Architect)</td>
                <td className="p-2 border border-slate-200 font-bold text-green-700">☑ Complete</td>
              </tr>
              <tr>
                <td className="p-2 border border-slate-200 font-medium">Implement affirmative consent for biometric data</td>
                <td className="p-2 border border-slate-200">Daniel Kimara (Compliance Officer)</td>
                <td className="p-2 border border-slate-200 font-bold text-green-700">☑ Complete</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="p-2 border border-slate-200 font-medium">Obtain relevant business licences</td>
                <td className="p-2 border border-slate-200">Daniel Kimara (Managing Director)</td>
                <td className="p-2 border border-slate-200 font-bold text-green-700">☑ Complete</td>
              </tr>
            </tbody>
          </table>

          <h3 className="text-[14pt] font-bold text-[#0a1a35] mb-4 uppercase tracking-tighter">19.2 South Africa Registry</h3>
          <table className="w-full text-left border-collapse text-[8pt] font-sans">
            <thead>
              <tr className="bg-[#0a1a35] text-white">
                <th className="p-2 border border-slate-800">Action Required</th>
                <th className="p-2 border border-slate-800">Responsible Party</th>
                <th className="p-2 border border-slate-800">Status</th>
              </tr>
            </thead>
            <tbody className="text-slate-800">
              <tr className="bg-slate-50">
                <td className="p-2 border border-slate-200 font-medium">Appoint Information Officer and Deputy</td>
                <td className="p-2 border border-slate-200">Kica Benedict (Co CEO / SA Lead)</td>
                <td className="p-2 border border-slate-200 font-bold text-green-700">☑ Complete</td>
              </tr>
              <tr>
                <td className="p-2 border border-slate-200 font-medium">Register Information Officer with Information Regulator</td>
                <td className="p-2 border border-slate-200">Kica Benedict (Information Officer)</td>
                <td className="p-2 border border-slate-200 font-bold text-green-700">☑ Complete</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="p-2 border border-slate-200 font-medium">Ensure full POPIA compliance for all AI and voice systems</td>
                <td className="p-2 border border-slate-200">Kica Benedict (Compliance Lead)</td>
                <td className="p-2 border border-slate-200 font-bold text-green-700">☑ Complete</td>
              </tr>
              <tr>
                <td className="p-2 border border-slate-200 font-medium">Register with ICASA (if providing telecom services)</td>
                <td className="p-2 border border-slate-200">Kica Benedict (Operations Lead)</td>
                <td className="p-2 border border-slate-200 font-bold text-green-700">☑ Complete</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="p-2 border border-slate-200 font-medium">Integrate DMASA Do Not Contact list</td>
                <td className="p-2 border border-slate-200">Kica Benedict (Marketing Lead)</td>
                <td className="p-2 border border-slate-200 font-bold text-green-700">☑ Complete</td>
              </tr>
              <tr>
                <td className="p-2 border border-slate-200 font-medium">Conduct POPIA impact assessment for automated decisions</td>
                <td className="p-2 border border-slate-200">Kica Benedict (Data Privacy Lead)</td>
                <td className="p-2 border border-slate-200 font-bold text-green-700">☑ Complete</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="p-2 border border-slate-200 font-medium">Register with CIPC</td>
                <td className="p-2 border border-slate-200">Kica Benedict (Director)</td>
                <td className="p-2 border border-slate-200 font-bold text-green-700">☑ Complete</td>
              </tr>
            </tbody>
          </table>

          <div className="absolute bottom-8 left-12 right-12 flex justify-between items-center text-[8pt] text-slate-300 font-sans">
            <span>CONFIDENTIAL</span>
            <span>Page 26</span>
          </div>
        </div>

        {/* PAGE 27: 20. PENALTIES AND ENFORCEMENT SUMMARY */}
        <div className="min-h-[10.5in] p-16 relative page-break-after">
          <div className="flex justify-between items-center text-[8pt] text-slate-400 mb-12 border-b border-slate-100 pb-1 font-sans">
            <span>ElevateAI Solutions Agency</span>
            <span>Policy | POL-001 | v1.0</span>
          </div>

          <h2 className="text-[20pt] font-bold text-[#0a1a35] mb-8 border-b-2 border-slate-900 pb-1 uppercase tracking-tight">20. Penalties and Enforcement Summary</h2>
          <p className="mb-8 text-[10.5pt] leading-relaxed text-slate-600 italic">The following table summarises the key statutory penalties. The Company views these as a minimum standard, not a target.</p>
          
          <table className="w-full text-left border-collapse text-[9pt] font-sans">
            <thead>
              <tr className="bg-[#0a1a35] text-white">
                <th className="p-4 border border-slate-800">Jurisdiction</th>
                <th className="p-4 border border-slate-800">Law</th>
                <th className="p-4 border border-slate-800">Key Penalties</th>
              </tr>
            </thead>
            <tbody className="text-slate-800">
              <tr>
                <td className="p-4 border border-slate-200 font-bold">Zambia</td>
                <td className="p-4 border border-slate-200">DPA 2021</td>
                <td className="p-4 border border-slate-200 italic">Fine up to 500,000 penalty units or imprisonment up to 5 years</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="p-4 border border-slate-200 font-bold">Zambia</td>
                <td className="p-4 border border-slate-200">Cyber Crimes Act</td>
                <td className="p-4 border border-slate-200 italic">Graduated sanctions; criminal prosecution for AI voice fraud</td>
              </tr>
              <tr>
                <td className="p-4 border border-slate-200 font-bold">South Africa</td>
                <td className="p-4 border border-slate-200">POPIA</td>
                <td className="p-4 border border-slate-200 italic">Administrative fines up to R10 million; imprisonment up to 10 years</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="p-4 border border-slate-200 font-bold">South Africa</td>
                <td className="p-4 border border-slate-200">CPA</td>
                <td className="p-4 border border-slate-200 italic">Fines and enforcement orders from the NCC</td>
              </tr>
              <tr>
                <td className="p-4 border border-slate-200 font-bold">South Africa</td>
                <td className="p-4 border border-slate-200">Cybercrimes Act</td>
                <td className="p-4 border border-slate-200 italic">Fines and imprisonment for data interference</td>
              </tr>
            </tbody>
          </table>

          <div className="absolute bottom-8 left-12 right-12 flex justify-between items-center text-[8pt] text-slate-300 font-sans">
            <span>CONFIDENTIAL</span>
            <span>Page 27</span>
          </div>
        </div>

        {/* PAGE 28: 21. APPROVAL AND SIGNATURES */}
        <div className="min-h-[10.5in] p-16 flex flex-col justify-center items-center text-center relative border-t-8 border-[#0a1a35]">
          <div className="w-64 border-t-2 border-slate-900 mb-8 opacity-20"></div>
          <p className="text-[20pt] font-black tracking-[0.4em] text-[#0a1a35] uppercase mb-8">— END OF POLICY DOCUMENT —</p>
          
          <div className="max-w-2xl text-[10pt] text-slate-500 space-y-6 italic leading-relaxed text-justify mb-24">
            <p>This document is the exclusive property of ElevateAI Solutions Agency and is classified as <strong className="text-red-600 uppercase font-black tracking-widest text-[11pt]">CONFIDENTIAL</strong>. Any unauthorised reproduction, disclosure, or distribution in any form is strictly prohibited.</p>
          </div>

          <div className="grid grid-cols-2 gap-20 w-full max-w-2xl text-left font-sans">
            <div className="space-y-4">
              <div className="border-b-2 border-slate-900 pb-2 h-16 flex items-end italic text-slate-400">Electronic Signature Applied</div>
              <div>
                <span className="block font-black text-[#0a1a35] uppercase text-[9pt]">Authorized Signature</span>
                <span className="block text-slate-600 text-[10pt]">Daniel Kimara</span>
                <span className="block text-slate-400 text-[8pt] italic">Co-CEO & Zambia Lead</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="border-b-2 border-slate-900 pb-2 h-16 flex items-end italic text-slate-400">Electronic Signature Applied</div>
              <div>
                <span className="block font-black text-[#0a1a35] uppercase text-[9pt]">Authorized Signature</span>
                <span className="block text-slate-600 text-[10pt]">Benedict Kica</span>
                <span className="block text-slate-400 text-[8pt] italic">Co-CEO & SA Info Officer</span>
              </div>
            </div>
          </div>
          
          <div className="mt-32 text-[8pt] font-sans text-slate-200 tracking-[0.5em] uppercase font-black">
            ElevateAI SOLUTIONS AGENCY © 2024-2026
          </div>
          
          <div className="absolute bottom-8 left-12 right-12 flex justify-between items-center text-[8pt] text-slate-300 font-sans">
            <span>CONFIDENTIAL</span>
            <span>Page 28</span>
          </div>
        </div>

      </div>

      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: white !important; padding: 0 !important; }
          #policy-document { 
            max-width: 100% !important; 
            padding: 0 !important; 
            margin: 0 !important;
            box-shadow: none !important;
            border: none !important;
          }
        }
        #policy-document {
          font-family: 'Times New Roman', Times, serif;
          line-height: 1.5;
          color: #1a202c;
        }
        .page-break-after {
          page-break-after: always;
        }
      `}</style>
    </div>
  );
};

export default PrivacyPolicy;
