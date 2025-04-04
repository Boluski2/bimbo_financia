
import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import About from '../components/home/About';
import Testimonials from '../components/home/Testimonials';
import CallToAction from '../components/home/CallToAction';
import ContactUs from '../components/home/ContactUs';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Bimbo Oyedotun Financial - Expert Financial Planning & Wealth Management</title>
        <meta name="description" content="Professional financial guidance to help you build wealth, eliminate debt, and secure your future with expert advisor Bimbo Oyedotun." />
        <meta name="keywords" content="financial planning, wealth management, retirement planning, debt management, investment strategies, financial advisor" />
        <link rel="canonical" href="https://www.bimbooyedotun.com" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FinancialService",
            "name": "Bimbo Oyedotun Financial",
            "description": "Professional financial planning and wealth management services.",
            "url": "https://www.bimbooyedotun.com",
            "sameAs": [
              "https://twitter.com/bimbooyedotun",
              "https://www.linkedin.com/in/bimbooyedotun"
            ],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "City",
              "addressRegion": "State",
              "postalCode": "Zip",
              "addressCountry": "US"
            },
            "telephone": "+1-555-555-5555",
            "priceRange": "$$"
          })}
        </script>
      </Helmet>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <ContactUs />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
