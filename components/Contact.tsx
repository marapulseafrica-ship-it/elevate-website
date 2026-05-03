
import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, Clock, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { supabase } from '../src/supabaseClient';
import { sendContactNotification } from '../src/emailService';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setError(null);

    try {
      const { error: dbError } = await supabase.from('elevate_leads').insert({
        type: 'contact',
        name: formData.name,
        email: formData.email,
        phone: formData.phone || null,
        business_name: formData.business,
        message: formData.message,
      });

      if (dbError) throw new Error(dbError.message);

      await sendContactNotification({
        name: formData.name,
        email: formData.email,
        business: formData.business,
        phone: formData.phone || undefined,
        message: formData.message,
      });

      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', business: '', message: '' });
    } catch (err: any) {
      setError(`Submission failed: ${err.message}`);
    } finally {
      setIsSending(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-50 text-blue-600 text-sm font-bold uppercase tracking-widest">
            ⭐ Contact Us
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            We’re here to help you automate, scale, and transform your business with AI.
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Ready to start? Fill out the form below and our automated systems will route your inquiry to our experts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info Column */}
          <div className="space-y-12">
            <div className="flex gap-6 items-start group">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">📧 Email</h4>
                <a href="mailto:elevatealsolutionsagency@gmail.com" className="text-slate-500 font-medium hover:text-blue-600 transition-colors">
                  elevatealsolutionsagency@gmail.com
                </a>
                <p className="text-xs text-slate-400">Direct Support Channel</p>
              </div>
            </div>

            <div className="flex gap-6 items-start group">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">📞 Phone</h4>
                <div className="space-y-1 flex flex-col">
                  <a href="tel:+27822341307" className="text-slate-500 font-medium hover:text-blue-600 transition-colors">+27 82 234 1307 (South Africa)</a>
                  <a href="tel:+260966468562" className="text-slate-500 font-medium hover:text-blue-600 transition-colors">+260 966 468 562 (Zambia)</a>
                </div>
              </div>
            </div>

            <div className="flex gap-6 items-start group">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">💬 WhatsApp</h4>
                <div className="flex flex-col gap-4">
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-tighter block mb-1">South Africa</span>
                    <a 
                      href="https://wa.me/27822341307" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-slate-700 font-bold text-base hover:text-blue-600 hover:underline transition-all"
                    >
                      +27 82 234 1307
                    </a>
                  </div>
                  
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-tighter block mb-1">Zambia</span>
                    <a 
                      href="https://wa.me/260966468562" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-slate-700 font-bold text-base hover:text-blue-600 hover:underline transition-all"
                    >
                      +260 966 468 562
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-6 items-start group">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">🕒 Office Hours</h4>
                <p className="text-slate-500">Monday – Friday: 08:00 AM – 17:00 PM</p>
                <p className="text-xs text-slate-400 mt-1 uppercase tracking-tighter">(South Africa Time Zone)</p>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="bg-white border border-gray-100 p-8 md:p-10 rounded-[2.5rem] shadow-xl relative">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500 py-12">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-8">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">Inquiry Sent!</h3>
                <p className="text-slate-500 max-w-sm mx-auto mb-10 text-lg">
                  Thank you for submitting your inquiry our team will get back to you within 48 hours.
                </p>
                
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-blue-600 font-bold hover:underline text-lg transition-all"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="p-4 bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl mb-4 shadow-sm">
                    <p className="font-bold flex items-center gap-2 mb-1">⚠️ Connection Issue</p>
                    <p className="text-xs opacity-90">{error}</p>
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Name</label>
                    <input 
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      type="text" 
                      placeholder="Your Full Name"
                      className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Email</label>
                    <input 
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      type="email" 
                      placeholder="email@company.com"
                      className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Phone Number (Optional)</label>
                    <input 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      type="tel" 
                      placeholder="+27..."
                      className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Business Name</label>
                    <input 
                      required
                      name="business"
                      value={formData.business}
                      onChange={handleInputChange}
                      type="text" 
                      placeholder="Your Company"
                      className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">How can we help you?</label>
                  <textarea 
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Tell us about your project or needs..."
                    className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={isSending}
                  className="w-full py-4 bg-[#0a1a35] hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-lg flex items-center justify-center gap-3 active:scale-[0.98] disabled:bg-slate-400"
                >
                  {isSending ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending Inquiry...
                    </>
                  ) : (
                    <>
                      Submit Inquiry
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
