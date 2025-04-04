
import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Privacy Policy - Bimbo Oyedotun Financial</title>
        <meta name="description" content="Privacy Policy for Bimbo Oyedotun Financial services." />
        <meta name="robots" content="noindex" />
      </Helmet>
      <Navbar />
      <main className="flex-grow py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-navy-900">Privacy Policy</h1>
          
          <div className="prose max-w-none">
            <p className="text-lg mb-6">Last Updated: April 4, 2025</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-navy-800">1. Introduction</h2>
              <p>
                Bimbo Oyedotun Financial ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our financial services.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-navy-800">2. Information We Collect</h2>
              <p className="mb-4">We may collect personal information that you voluntarily provide to us when you:</p>
              <ul className="list-disc pl-8 mb-4">
                <li>Complete forms on our website</li>
                <li>Register for consultations</li>
                <li>Sign up for our newsletter</li>
                <li>Request information about our services</li>
                <li>Contact our customer service</li>
              </ul>
              <p>This information may include your name, email address, phone number, financial information, and other details relevant to providing our services.</p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-navy-800">3. How We Use Your Information</h2>
              <p className="mb-4">We may use the information we collect for various purposes, including to:</p>
              <ul className="list-disc pl-8 mb-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Process and complete transactions</li>
                <li>Send administrative information</li>
                <li>Respond to inquiries and provide customer support</li>
                <li>Send marketing communications</li>
                <li>Protect against fraudulent or illegal activity</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-navy-800">4. Information Sharing</h2>
              <p>We do not sell or rent your personal information to third parties. We may share your information with service providers who assist us in our operations and regulatory authorities as required by law.</p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-navy-800">5. Security</h2>
              <p>We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-navy-800">6. Your Rights</h2>
              <p className="mb-4">Depending on your location, you may have certain rights regarding your personal information, including:</p>
              <ul className="list-disc pl-8 mb-4">
                <li>Access to your personal information</li>
                <li>Correction of inaccurate information</li>
                <li>Deletion of your information</li>
                <li>Restriction of processing</li>
                <li>Data portability</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-navy-800">7. Changes to This Privacy Policy</h2>
              <p>We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last Updated" date and will be effective immediately upon posting.</p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-navy-800">8. Contact Us</h2>
              <p>If you have questions or concerns about this Privacy Policy, please contact us at:</p>
              <div className="mt-4">
                <p>Email: privacy@bimbooyedotun.com</p>
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

export default PrivacyPolicy;
