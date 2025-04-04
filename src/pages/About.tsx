
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Link } from 'react-router-dom';
import { Award, Target, Users, Heart, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet';

const AboutPage = () => {
  const values = [
    {
      title: 'Integrity',
      icon: Award,
      description: 'We operate with honesty and transparency in all client interactions, always putting your interests first.'
    },
    {
      title: 'Results-Focused',
      icon: Target,
      description: 'We deliver practical strategies that create measurable improvements in your financial situation.'
    },
    {
      title: 'Client-Centered',
      icon: Users,
      description: 'We listen carefully to understand your unique needs and goals, then tailor our approach accordingly.'
    },
    {
      title: 'Empowerment',
      icon: Heart,
      description: 'We provide the education and tools to help you make confident financial decisions for yourself.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
        <Helmet>
        <title>About Us - Bimbo Oyedotun Financial</title>
        <meta name="description" content="About Us for Bimbo Oyedotun Financial services." />
        <meta name="robots" content="noindex" />
      </Helmet>
      <Navbar />
      <main className="flex-grow">
        <section className="bg-navy-900 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">About Bimbo Oyedotun Financial</h1>
              <p className="text-xl text-gray-300">
                Empowering individuals and families to achieve financial freedom through expert guidance and personalized strategies.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-navy-900 mb-6">Our Story</h2>
                <p className="text-lg text-gray-600 mb-4">
                  Bimbo Oyedotun Financial was founded in 2010 with a clear mission: to provide honest, practical financial guidance 
                  that empowers people to take control of their financial futures.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  With over 15 years of experience in financial planning and wealth management, Bimbo Oyedotun has helped thousands 
                  of clients eliminate debt, build wealth, and achieve their financial goals.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  What sets us apart is our commitment to education and empowerment. We believe that everyone deserves access to 
                  quality financial guidance regardless of their current financial situation.
                </p>
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-navy-900 mb-4">Our Approach</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gold-500 mr-3 mt-1" />
                      <p className="text-gray-700">Personalized financial strategies based on your unique situation</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gold-500 mr-3 mt-1" />
                      <p className="text-gray-700">Practical, actionable advice you can implement immediately</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gold-500 mr-3 mt-1" />
                      <p className="text-gray-700">Ongoing support and guidance as your financial journey evolves</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gold-500 mr-3 mt-1" />
                      <p className="text-gray-700">Education that empowers you to make confident financial decisions</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-gold-400 rounded-tl-lg z-0"></div>
                <img 
                  src="/about-image.jpg" 
                  alt="Bimbo Oyedotun with clients" 
                  className="rounded-lg w-full h-auto relative z-10 shadow-xl"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-navy-900 rounded-br-lg z-0"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-navy-900 mb-4">Our Core Values</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                These principles guide every interaction and recommendation we make.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
                  <div className="bg-navy-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-navy-900" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-navy-900 mb-6">Meet Bimbo Oyedotun</h2>
              <div className="mb-8">
                <img 
                  src="/bimbo1.jpg" 
                  alt="Bimbo Oyedotun" 
                  className="w-48 h-48 rounded-full object-cover mx-auto mb-6 border-4 border-gold-400"
                />
              </div>
              <p className="text-lg text-gray-600 mb-4">
                Bimbo Oyedotun is a Certified Financial Planner with over 15 years of experience helping 
                individuals and families achieve financial freedom.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Having transformed her own financial situation early in her career, Bimbo is passionate about 
                sharing the practical strategies and mindset shifts that create lasting financial success.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                She is a regular contributor to financial publications and has been featured on numerous 
                podcasts and television programs discussing personal finance and wealth building.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-navy-100 px-4 py-2 rounded-full text-navy-900 font-medium">Certified Financial Planner (CFP)</div>
                <div className="bg-navy-100 px-4 py-2 rounded-full text-navy-900 font-medium">Chartered Financial Analyst (CFA)</div>
                <div className="bg-navy-100 px-4 py-2 rounded-full text-navy-900 font-medium">MBA, Finance</div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-navy-900 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Financial Future?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Take the first step towards financial freedom by booking a consultation with Bimbo Oyedotun.
            </p>
            <Link to="/booking">
              <Button className="bg-gold-400 hover:bg-gold-500 text-navy-900 font-semibold text-lg px-8 py-6">
                Book Your Consultation
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
