
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero-section py-20 md:py-32 bg-cover bg-center" style={{ backgroundImage: "url('https://unsplash.com/photos/gray-concrete-road-between-brown-and-green-leaf-trees-at-daytime-5hvn-2WW6rY')" }}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl bg-navy-900/80 p-8 rounded-lg backdrop-blur-sm">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Take Control of Your Financial Future
          </h1>
          <p className="text-xl text-gray-100 mb-8">
            Expert financial guidance to help you build wealth, eliminate debt, and secure your future.
            Let's create a personalized plan that works for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/booking">
              <Button className="bg-gold-400 hover:bg-gold-500 text-navy-900 font-semibold text-lg px-8 py-6">
                Book a Consultation
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 font-medium text-lg px-8 py-6">
                Explore Services <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
