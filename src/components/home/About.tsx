
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const About = () => {
  const benefits = [
    'Personalized financial strategies',
    'Expert investment guidance',
    'Debt elimination plans',
    'Retirement planning',
    'Wealth building roadmaps',
    'Regular financial check-ups'
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">About Bimbo Oyedotun Financial</h2>
            <p className="text-lg text-gray-600 mb-6">
              With over 15 years of experience in financial planning and wealth management, 
              Bimbo Oyedotun has helped thousands of clients achieve financial freedom and build lasting wealth.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our mission is to empower individuals and families with the knowledge and tools they need to take control 
              of their finances, eliminate debt, and create a secure financial future.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-gold-500 mr-2" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
            <Link to="/about">
              <Button className="bg-navy-900 hover:bg-navy-800 text-white">
                Learn More About Us
              </Button>
            </Link>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gold-400 rounded-tl-lg z-0"></div>
            <img 
              src="/bimbo1.jpg" 
              alt="Bimbo Oyedotun, Financial Advisor" 
              className="rounded-lg w-full h-auto relative z-10 shadow-xl"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-navy-900 rounded-br-lg z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
