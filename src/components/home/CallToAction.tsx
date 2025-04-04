
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="bg-navy-900 py-16 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Transform Your Financial Future?
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Book a consultation today and take the first step towards financial freedom 
          and building lasting wealth with expert guidance.
        </p>
        <Link to="/booking">
          <Button className="bg-gold-400 hover:bg-gold-500 text-navy-900 font-semibold text-lg px-8 py-6">
            Book Your Free Consultation
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
