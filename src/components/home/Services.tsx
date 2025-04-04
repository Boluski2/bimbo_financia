
import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, TrendingUp, PiggyBank, CreditCard, Activity } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const services = [
  {
    title: 'Financial Planning',
    description: 'Comprehensive financial planning tailored to your goals and circumstances.',
    icon: Calculator,
    link: '/services/financial-planning'
  },
  {
    title: 'Investment Strategies',
    description: 'Expert investment advice to grow your wealth and maximize returns.',
    icon: TrendingUp,
    link: '/services/investment-strategies'
  },
  {
    title: 'Retirement Planning',
    description: 'Secure your future with strategic retirement planning and pension management.',
    icon: PiggyBank,
    link: '/services/retirement-planning'
  },
  {
    title: 'Debt Management',
    description: 'Effective strategies to reduce debt and improve your financial health.',
    icon: CreditCard,
    link: '/services/debt-management'
  },
  {
    title: 'Wealth Building',
    description: 'Build and preserve wealth with long-term strategies for financial independence.',
    icon: Activity,
    link: '/services/wealth-building'
  },
];

const Services = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Our Financial Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive financial solutions designed to help you achieve your goals and secure your financial future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="service-card border-t-4 border-t-navy-800">
              <CardHeader>
                <div className="p-3 bg-navy-100 rounded-full w-fit mb-4">
                  <service.icon className="h-6 w-6 text-navy-900" />
                </div>
                <CardTitle className="text-xl text-navy-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">{service.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Link to={service.link}>
                  <Button variant="link" className="p-0 text-navy-700 hover:text-navy-900">
                    Learn More
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services">
            <Button className="bg-navy-900 hover:bg-navy-800 text-white">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
