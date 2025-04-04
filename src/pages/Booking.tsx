
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ConsultationForm from '../components/booking/ConsultationForm';
import { Helmet } from 'react-helmet';

const Booking = () => {
  return (
    <div className="min-h-screen flex flex-col">
          <Helmet>
        <title>Booking - Bimbo Oyedotun Financial</title>
        <meta name="description" content="Booking for Bimbo Oyedotun Financial services." />
        <meta name="robots" content="noindex" />
      </Helmet>
      <Navbar />
      <main className="flex-grow py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Schedule Your Consultation</h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Take the first step towards financial freedom. Book a personalized consultation 
                with our expert financial advisors to discuss your goals and challenges.
              </p>
            </div>
            
            <ConsultationForm />

            <div className="mt-12 text-center">
              <h3 className="text-xl font-semibold text-navy-900 mb-4">What to Expect</h3>
              <p className="text-gray-600 mb-6">
                During your consultation, our financial experts will discuss your current financial situation,
                understand your goals, and provide personalized guidance to help you achieve financial freedom.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="font-bold text-navy-900 mb-2">1. Assessment</div>
                  <p className="text-gray-600">We'll review your current financial position and identify opportunities.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="font-bold text-navy-900 mb-2">2. Strategy</div>
                  <p className="text-gray-600">We'll develop personalized strategies aligned with your financial goals.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="font-bold text-navy-900 mb-2">3. Implementation</div>
                  <p className="text-gray-600">We'll guide you through implementing your financial action plan.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Booking;
