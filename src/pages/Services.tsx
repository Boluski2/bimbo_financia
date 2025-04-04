
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Link } from 'react-router-dom';
import { Calculator, TrendingUp, PiggyBank, CreditCard, Activity, Users, BarChart, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    id: 'financial-planning',
    title: 'Financial Planning',
    description: 'Comprehensive financial planning tailored to your goals and circumstances.',
    icon: Calculator,
    benefits: [
      'Personalized financial roadmap',
      'Goal-based planning',
      'Cash flow optimization',
      'Risk management strategies',
      'Tax efficiency planning'
    ],
    longDescription: "Our comprehensive financial planning service creates a roadmap to help you achieve your financial goals. We analyze your current financial situation, identify areas for improvement, and develop strategies to optimize your finances. Whether you're saving for a home, education, or managing your cash flow, we provide clarity and direction."
  },
  {
    id: 'investment-strategies',
    title: 'Investment Strategies',
    description: 'Expert investment advice to grow your wealth and maximize returns.',
    icon: TrendingUp,
    benefits: [
      'Diversified portfolio recommendations',
      'Risk-adjusted investment strategies',
      'Regular performance reviews',
      'Market trend analysis',
      'Tax-efficient investing'
    ],
    longDescription: 'Our investment strategies are designed to grow your wealth while managing risk appropriately. We analyze market trends, recommend diversified portfolios aligned with your risk tolerance, and regularly review performance to ensure you stay on track. Our approach focuses on long-term wealth building through disciplined investing.'
  },
  {
    id: 'retirement-planning',
    title: 'Retirement Planning',
    description: 'Secure your future with strategic retirement planning and pension management.',
    icon: PiggyBank,
    benefits: [
      'Retirement income projections',
      'Pension optimization strategies',
      'Social security maximization',
      'Healthcare cost planning',
      'Legacy and estate considerations'
    ],
    longDescription: 'Planning for retirement requires careful consideration of your future needs and goals. Our retirement planning service helps you determine how much you need to save, optimizes your retirement accounts, and creates a sustainable withdrawal strategy. We help you navigate pension options, social security benefits, and healthcare costs to ensure a comfortable retirement.'
  },
  {
    id: 'debt-management',
    title: 'Debt Management',
    description: 'Effective strategies to reduce debt and improve your financial health.',
    icon: CreditCard,
    benefits: [
      'Debt consolidation options',
      'Interest rate reduction strategies',
      'Customized debt repayment plans',
      'Credit score improvement',
      'Financial behavior coaching'
    ],
    longDescription: 'Our debt management service helps you take control of your debt and improve your financial health. We analyze your current debt obligations, develop a strategic repayment plan, and provide guidance on consolidation options. Our approach focuses on behavioral changes and practical strategies to eliminate debt and build positive financial habits.'
  },
  {
    id: 'wealth-building',
    title: 'Wealth Building',
    description: 'Build and preserve wealth with long-term strategies for financial independence.',
    icon: Activity,
    benefits: [
      'Asset accumulation strategies',
      'Wealth preservation techniques',
      'Tax-efficient wealth transfer',
      'Business ownership strategies',
      'Real estate investment guidance'
    ],
    longDescription: 'Our wealth building service focuses on strategies to accumulate, grow, and preserve assets. We help you navigate the complexities of building sustainable wealth through diversified investments, tax-efficient strategies, and appropriate risk management. Our comprehensive approach addresses all aspects of your financial life to support long-term wealth creation.'
  },
  {
    id: 'financial-education',
    title: 'Financial Education',
    description: 'Workshops and resources to improve your financial literacy and decision-making.',
    icon: Users,
    benefits: [
      'Group workshop sessions',
      'One-on-one coaching',
      'Digital learning resources',
      'Practical financial exercises',
      'Ongoing support and guidance'
    ],
    longDescription: 'Our financial education service empowers you with the knowledge and skills to make confident financial decisions. Through workshops, one-on-one coaching, and digital resources, we cover essential topics like budgeting, investing, retirement planning, and debt management in an accessible, practical way.'
  },
  {
    id: 'business-financial-planning',
    title: 'Business Financial Planning',
    description: 'Financial strategies for business owners to optimize operations and growth.',
    icon: BarChart,
    benefits: [
      'Business cash flow management',
      'Profit optimization strategies',
      'Business succession planning',
      'Tax planning for businesses',
      'Employee benefits planning'
    ],
    longDescription: 'Our business financial planning service helps entrepreneurs and business owners optimize their business finances. We address cash flow management, profit optimization, tax strategies, and succession planning to support sustainable business growth and personal financial security.'
  },
  {
    id: 'estate-planning',
    title: 'Estate Planning',
    description: 'Comprehensive estate planning to protect your assets and secure your legacy.',
    icon: FileText,
    benefits: [
      'Will and trust creation',
      'Asset protection strategies',
      'Beneficiary designation review',
      'Tax-efficient wealth transfer',
      'Legacy planning guidance'
    ],
    longDescription: 'Our estate planning service helps you protect your assets and ensure your wishes are carried out. We work with legal professionals to develop comprehensive estate plans including wills, trusts, and power of attorney documents. Our approach focuses on minimizing taxes, avoiding probate complications, and creating a lasting legacy.'
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-navy-900 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Our Financial Services</h1>
              <p className="text-xl text-gray-300">
                Comprehensive financial solutions designed to help you achieve your goals 
                and secure your financial future.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-16">
              {services.map((service, index) => (
                <div key={service.id} id={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={index % 2 === 1 ? 'order-2 lg:order-1' : ''}>
                    <div className="p-4 bg-navy-100 rounded-full w-fit mb-6">
                      <service.icon className="h-8 w-8 text-navy-900" />
                    </div>
                    <h2 className="text-3xl font-bold text-navy-900 mb-4">{service.title}</h2>
                    <p className="text-lg text-gray-600 mb-6">
                      {service.longDescription}
                    </p>
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-navy-900 mb-4">Key Benefits</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-gold-500 mr-2">•</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link to="/booking">
                      <Button className="bg-navy-900 hover:bg-navy-800 text-white">
                        Book a Consultation
                      </Button>
                    </Link>
                  </div>
                  <div className={`bg-gray-100 p-8 rounded-lg ${index % 2 === 1 ? 'order-1 lg:order-2' : ''}`}>
                    <div className="aspect-w-4 aspect-h-3 bg-gray-200 rounded-lg flex items-center justify-center">
                      <service.icon className="h-24 w-24 text-navy-300" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-navy-900 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Take the first step towards financial freedom by booking a consultation with our expert team.
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

export default ServicesPage;
