
import React, { useState } from 'react';
import Header from '@/components/Header';
import Logo from '@/components/Logo';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import ServicesSnippet from '@/components/ServicesSnippet';
import HomeIntro from '@/components/HomeIntro';
import WhyChooseUs from '@/components/WhyChooseUs';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import CTA from '@/components/CTA';
import BookingPage from '@/components/BookingPage';
import TermsOfService from '@/components/TermsOfService';
import PrivacyPolicy from '@/components/PrivacyPolicy';
import AIConsultantModal from '@/components/AIConsultantModal';
import UserAgreementModal from '@/components/UserAgreementModal';
import { ModalState, View } from '@/types';

const App: React.FC = () => {
  const [modal, setModal] = useState<ModalState>(ModalState.CLOSED);
  const [currentView, setCurrentView] = useState<View>('home');
  const [initialBookingService, setInitialBookingService] = useState<string | undefined>(undefined);

  const openConsultant = () => setModal(ModalState.CONSULTANT);
  const closeModal = () => setModal(ModalState.CLOSED);

  const navigateTo = (view: View) => {
    if (view === 'home' || view === 'booking') {
      if (view === 'home') setInitialBookingService(undefined);
    }
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBooking = (service?: string) => {
    setInitialBookingService(service);
    navigateTo('booking');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <UserAgreementModal />
      <Header onNavigate={navigateTo} currentView={currentView} />
      
      <main className="flex-grow">
        {currentView === 'home' && (
          <div className="animate-in fade-in duration-500">
            <Hero 
              onConsult={() => handleBooking('Consultation')} 
              onBook={() => handleBooking()} 
            />
            <HomeIntro onLearnMore={() => navigateTo('about')} />
            <WhyChooseUs />
            <ServicesSnippet onViewAll={() => navigateTo('services')} />
            <FAQ />
            <Contact />
          </div>
        )}
        
        {currentView === 'about' && <About />}
        
        {currentView === 'services' && (
          <Services onBook={() => handleBooking('Consultation')} />
        )}

        {currentView === 'faq' && (
          <div className="pt-12">
            <FAQ />
          </div>
        )}

        {currentView === 'contact' && (
          <div className="pt-12">
            <Contact />
          </div>
        )}

        {currentView === 'booking' && (
          <BookingPage 
            initialService={initialBookingService} 
            onReturnHome={() => navigateTo('home')}
          />
        )}

        {currentView === 'terms' && (
          <TermsOfService />
        )}

        {currentView === 'privacy' && (
          <PrivacyPolicy />
        )}
        
        {currentView !== 'booking' && currentView !== 'terms' && currentView !== 'privacy' && <CTA onGetStarted={() => handleBooking()} />}
      </main>

      <footer className="bg-[#0a1a35] pt-16 pb-8 border-t border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-16">
            <div className="col-span-2">
               <Logo variant="light" className="h-10 w-auto mb-6" />
               <p className="text-blue-200/50 text-sm max-w-xs leading-relaxed">
                 Transforming daily operations and supporting sustainable business growth globally with intelligent automation.
               </p>
            </div>
            
            <div className="space-y-4">
              <h5 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Company</h5>
              <button onClick={() => navigateTo('about')} className="block text-blue-200/50 hover:text-white transition-colors text-sm">About</button>
              <button onClick={() => navigateTo('services')} className="block text-blue-200/50 hover:text-white transition-colors text-sm text-left">Services</button>
              <button onClick={() => navigateTo('faq')} className="block text-blue-200/50 hover:text-white transition-colors text-sm text-left">FAQ</button>
              <button onClick={() => navigateTo('contact')} className="block text-blue-200/50 hover:text-white transition-colors text-sm text-left">Contact</button>
            </div>

            <div className="space-y-4">
              <h5 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Support</h5>
              <button onClick={() => handleBooking()} className="block text-blue-200/50 hover:text-white transition-colors text-sm text-left">Help Center</button>
              <button onClick={() => navigateTo('privacy')} className="block text-blue-200/50 hover:text-white transition-colors text-sm text-left">Privacy Policy</button>
              <button onClick={() => navigateTo('terms')} className="block text-blue-200/50 hover:text-white transition-colors text-sm text-left">Terms</button>
            </div>
          </div>

          <div className="pt-8 border-t border-blue-900/30 flex flex-col md:flex-row justify-center items-center gap-4 text-blue-200/50 text-xs text-center">
            <p>© 2026 ElevateAI Solutions Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <AIConsultantModal 
        isOpen={modal === ModalState.CONSULTANT} 
        onClose={closeModal} 
      />

      <button 
        onClick={openConsultant}
        className="fixed bottom-6 right-6 z-40 bg-blue-600 text-white p-4 rounded-full shadow-2xl hover:bg-blue-700 hover:scale-110 transition-all flex items-center justify-center group"
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap mr-0 group-hover:mr-2 font-medium">
          Talk to AI Consultant
        </span>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>
    </div>
  );
};

export default App;
