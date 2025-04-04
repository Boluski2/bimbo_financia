
import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Terms of Service - Bimbo Oyedotun Financial</title>
        <meta name="description" content="Terms of Service for Bimbo Oyedotun Financial services." />
        <meta name="robots" content="noindex" />
      </Helmet>
      <Navbar />
      <main className="flex-grow py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-navy-900">Terms of Service</h1>
          
          <div className="prose max-w-none">
            <p className="text-lg mb-6">Last Updated: April 4, 2025</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-navy-800">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the website and services of Bimbo Oyedotun Financial ("we," "our," or "us"), 
                you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-navy-800">2. Description of Services</h2>
              <p>
                Bimbo Oyedotun Financial provides financial planning, investment strategies, retirement planning, 
                debt management, and wealth building services. Our services are intended for informational and 
                educational purposes only and should not be construed as financial, legal, or tax advice.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-navy-800">3. User Responsibilities</h2>
              <p className="mb-4">When using our services, you agree to:</p>
              <ul className="list-disc pl-8 mb-4">
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of any account information</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
                <li>Use our services only for lawful purposes</li>
                <li>Not engage in any activity that disrupts or interferes with our services</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-navy-800">4. Intellectual Property</h2>
              <p>
                All content on our website, including text, graphics, logos, icons, images, and software, is the 
                property of Bimbo Oyedotun Financial and is protected by copyright, trademark, and other intellectual 
                property laws. You may not reproduce, distribute, modify, or create derivative works from any content 
                without our express written consent.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-navy-800">5. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, Bimbo Oyedotun Financial shall not be liable for any indirect, 
                incidental, special, consequential, or punitive damages, including loss of profits, arising out of or 
                in connection with your use of our services.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-navy-800">6. Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless Bimbo Oyedotun Financial and its officers, directors, 
                employees, agents, and affiliates from any claims, liabilities, damages, losses, costs, expenses, or fees 
                (including reasonable attorneys' fees) arising from your use of our services or any violation of these Terms of Service.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-navy-800">7. Modifications to Terms</h2>
              <p>
                We reserve the right to modify these Terms of Service at any time. The updated terms will be posted on 
                this page with an updated "Last Updated" date. Your continued use of our services after any changes constitute 
                your acceptance of the new terms.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-navy-800">8. Governing Law</h2>
              <p>
                These Terms of Service shall be governed by and construed in accordance with the laws of Nigeria, 
                without regard to its conflict of law principles.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-navy-800">9. Contact Information</h2>
              <p>If you have any questions about these Terms of Service, please contact us at:</p>
              <div className="mt-4">
                <p>Email: legal@bimbooyedotun.com</p>
                <p>Phone: +234 123 4567 890</p>
                <p>Address: 123 Financial District, Lagos, Nigeria</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
