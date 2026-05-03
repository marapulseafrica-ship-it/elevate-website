
import React, { useState, useEffect } from 'react';
import { Workflow, Mic, ArrowRight, ArrowLeft, CheckCircle2, Loader2, Send, Building2, MessageSquare, Calendar, Clock, Search } from 'lucide-react';
import { supabase } from '../src/supabaseClient';
import { sendBookingEmails } from '../src/emailService';

interface BookingPageProps {
  initialService?: string;
  onSuccess?: () => void;
  onReturnHome?: () => void;
}

const BookingPage: React.FC<BookingPageProps> = ({ initialService, onReturnHome }) => {
  const [step, setStep] = useState(initialService ? 2 : 1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [webhookResponse, setWebhookResponse] = useState<string>('');
  
  const today = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    serviceType: initialService || '',
    name: '',
    email: '',
    businessName: '',
    industry: '',
    goals: '',
    bookingDate: '',
    bookingTime: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);

  const handleServiceSelect = (type: string) => {
    setFormData(prev => ({ ...prev, serviceType: type }));
    setStep(2);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 1. Format Start Time for Google Calendar (SAST is UTC+2)
    const startDateTime = `${formData.bookingDate}T${formData.bookingTime}:00+02:00`;
    
    // 2. Calculate End Time (1 hour later)
    const startDate = new Date(startDateTime);
    const endDate = new Date(startDate.getTime() + 60 * 60 * 1000);
    
    const formatter = new Intl.DateTimeFormat('en-CA', {
      timeZone: 'Africa/Johannesburg',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    });
    
    const parts = formatter.formatToParts(endDate);
    const getPart = (type: string) => parts.find(p => p.type === type)?.value;
    const endDateTime = `${getPart('year')}-${getPart('month')}-${getPart('day')}T${getPart('hour')}:${getPart('minute')}:${getPart('second')}+02:00`;

    try {
      const { error: dbError } = await supabase.from('elevate_leads').insert({
        type: 'booking',
        name: formData.name,
        email: formData.email,
        business_name: formData.businessName,
        industry: formData.industry,
        goals: formData.goals,
        service_type: formData.serviceType,
        booking_date: formData.bookingDate,
        booking_time: formData.bookingTime,
      });

      if (dbError) throw new Error(dbError.message);

      await sendBookingEmails({
        name: formData.name,
        email: formData.email,
        businessName: formData.businessName,
        industry: formData.industry,
        goals: formData.goals,
        serviceType: formData.serviceType,
        bookingDate: formData.bookingDate,
        bookingTime: formData.bookingTime,
      });

      setWebhookResponse(`Your ${formData.serviceType} has been booked for ${formData.bookingDate} at ${formData.bookingTime} SAST.\n\nWe'll send a confirmation to ${formData.email} shortly.`);
      setSubmitted(true);
    } catch (err: any) {
      setWebhookResponse('Something went wrong. Please contact us directly at elevatealsolutionsagency@gmail.com');
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4 py-24 animate-in fade-in zoom-in duration-500">
        <div className="max-w-xl w-full text-center bg-white p-12 md:p-16 rounded-[3rem] shadow-xl border border-gray-100">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-10">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <div className="text-slate-800 text-xl md:text-2xl mb-12 leading-relaxed font-semibold whitespace-pre-wrap text-center">
            {webhookResponse}
          </div>
          <button 
            onClick={onReturnHome || (() => window.location.reload())}
            className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-md active:scale-95"
          >
            <ArrowLeft className="w-4 h-4" /> Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Progress Indicator */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-4">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}>1</div>
            <div className={`w-12 h-1 bg-gray-200 rounded-full ${step >= 2 ? 'bg-blue-600' : ''}`}></div>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}>2</div>
          </div>
        </div>

        {step === 1 ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-extrabold text-slate-900 mb-4">How can we help you today?</h1>
              <p className="text-slate-500 text-lg">Select the path that best fits your business goals.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <button 
                onClick={() => handleServiceSelect('Consultation')}
                className="group p-8 bg-white border-2 border-transparent hover:border-blue-600 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all text-left flex flex-col items-start"
              >
                <div className="w-14 h-14 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-all">
                  <Search className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Book a Consultation</h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                  Discuss your overall AI strategy, identify high-impact opportunities, and get expert guidance on digital transformation.
                </p>
                <div className="mt-auto flex items-center gap-2 text-green-600 font-bold text-sm">
                  Choose this <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>

              <button 
                onClick={() => handleServiceSelect('AI Automation')}
                className="group p-8 bg-white border-2 border-transparent hover:border-blue-600 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all text-left flex flex-col items-start"
              >
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Workflow className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">AI Automation</h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                  Streamline workflows, automate document processing, and connect your business tools into one intelligent ecosystem.
                </p>
                <div className="mt-auto flex items-center gap-2 text-blue-600 font-bold text-sm">
                  Choose this <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>

              <button 
                onClick={() => handleServiceSelect('AI Voice Agent')}
                className="group p-8 bg-white border-2 border-transparent hover:border-blue-600 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all text-left flex flex-col items-start"
              >
                <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <Mic className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">AI Voice Agent</h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                  Implement human-like voice AI to handle outbound calls, inbound queries, and complex scheduling tasks 24/7.
                </p>
                <div className="mt-auto flex items-center gap-2 text-indigo-600 font-bold text-sm">
                  Choose this <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </div>
          </div>
        ) : (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500 max-w-4xl mx-auto">
            <button 
              onClick={() => setStep(1)}
              className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-medium mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to selection
            </button>

            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-gray-100">
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Tell us more</h2>
              <p className="text-slate-500 mb-10">We'll use these details to prepare a tailored experience for your {formData.serviceType} call.</p>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Business Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-blue-600" /> Business Name
                    </label>
                    <input 
                      required
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 transition-all"
                      placeholder="Acme Corp"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-blue-600" /> Industry
                    </label>
                    <input 
                      required
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 transition-all"
                      placeholder="e.g. Healthcare, Real Estate"
                    />
                  </div>
                </div>

                {/* Personal Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Your Full Name</label>
                    <input 
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Email Address</label>
                    <input 
                      required
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 transition-all"
                    />
                  </div>
                </div>

                {/* Scheduling - South African Time */}
                <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
                  <div className="flex items-center gap-2 text-blue-600 mb-4">
                    <Calendar className="w-5 h-5" />
                    <h4 className="font-bold">Pick a Preferred Time</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                        Date
                      </label>
                      <input 
                        required
                        type="date"
                        name="bookingDate"
                        min={today}
                        value={formData.bookingDate}
                        onChange={handleInputChange}
                        className="w-full px-5 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                        <Clock className="w-4 h-4 text-blue-600" /> Time (SAST)
                      </label>
                      <input 
                        required
                        type="time"
                        name="bookingTime"
                        value={formData.bookingTime}
                        onChange={handleInputChange}
                        className="w-full px-5 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 transition-all"
                      />
                    </div>
                  </div>
                  <p className="mt-4 text-xs text-blue-500 font-medium italic">
                    Note: All times are scheduled in South African Standard Time (SAST, UTC+2).
                  </p>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-blue-600" /> What would you like to achieve in this {formData.serviceType.toLowerCase()}?
                  </label>
                  <textarea 
                    required
                    name="goals"
                    value={formData.goals}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 transition-all"
                    placeholder="e.g. Understand how AI can optimize our current lead generation..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-5 bg-[#0a1a35] hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-lg flex items-center justify-center gap-3 disabled:bg-slate-400"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-6 h-6 animate-spin" />
                      Processing Request...
                    </>
                  ) : (
                    <>
                      Schedule My {formData.serviceType}
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingPage;
