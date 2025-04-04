
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Link } from 'react-router-dom';
import { BookOpen, FileText, Video, Download, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const articles = [
  {
    title: "7 Steps to Financial Freedom",
    description: "A comprehensive guide to achieving financial independence through smart planning and disciplined investing.",
    category: "Financial Planning",
    date: "April 8, 2025",
    readTime: "8 min read",
    image: "/article1.jpg"
  },
  {
    title: "Debt-Free Living: A Step-by-Step Guide",
    description: "Learn practical strategies to eliminate debt and build a solid financial foundation.",
    category: "Debt Management",
    date: "March 25, 2025",
    readTime: "6 min read",
    image: "/article2.jpg"
  },
  {
    title: "Investment Basics: Building Your Portfolio",
    description: "Understanding different investment options and how to create a balanced portfolio.",
    category: "Investing",
    date: "March 12, 2025",
    readTime: "10 min read",
    image: "/article3.jpg"
  },
  {
    title: "Retirement Planning in Your 30s, 40s, and 50s",
    description: "Age-specific strategies to ensure you're on track for a comfortable retirement.",
    category: "Retirement",
    date: "February 28, 2025",
    readTime: "9 min read",
    image: "/article4.jpg"
  }
];

const videos = [
  {
    title: "Understanding Market Volatility",
    description: "How to maintain perspective and make smart decisions during market fluctuations.",
    duration: "15:24",
    date: "April 5, 2025",
    thumbnail: "/video1.jpg"
  },
  {
    title: "Emergency Fund Basics",
    description: "Why you need an emergency fund and how to build one quickly.",
    duration: "12:38",
    date: "March 20, 2025",
    thumbnail: "/video2.jpg"
  },
  {
    title: "Real Estate Investing 101",
    description: "An introduction to building wealth through property investments.",
    duration: "18:45",
    date: "March 10, 2025",
    thumbnail: "/video3.jpg"
  }
];

const resources = [
  {
    title: "Monthly Budget Template",
    description: "A comprehensive Excel spreadsheet to track income, expenses, and savings goals.",
    type: "Excel Spreadsheet",
    size: "245 KB"
  },
  {
    title: "Debt Payoff Calculator",
    description: "Calculate how quickly you can eliminate debt using different repayment strategies.",
    type: "Excel Spreadsheet",
    size: "180 KB"
  },
  {
    title: "Investment Risk Assessment",
    description: "Determine your risk tolerance to guide your investment decisions.",
    type: "PDF Questionnaire",
    size: "320 KB"
  },
  {
    title: "Retirement Planning Worksheet",
    description: "Estimate your retirement needs and track your progress.",
    type: "Excel Spreadsheet",
    size: "275 KB"
  }
];

const ResourcesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-navy-900 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Financial Resources</h1>
              <p className="text-xl text-gray-300">
                Educational resources to help you build financial knowledge and make informed decisions.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="articles" className="w-full">
              <div className="flex justify-center mb-12">
                <TabsList className="grid w-full max-w-md grid-cols-3">
                  <TabsTrigger value="articles" className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Articles
                  </TabsTrigger>
                  <TabsTrigger value="videos" className="flex items-center">
                    <Video className="h-4 w-4 mr-2" />
                    Videos
                  </TabsTrigger>
                  <TabsTrigger value="downloads" className="flex items-center">
                    <Download className="h-4 w-4 mr-2" />
                    Downloads
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="articles">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {articles.map((article, index) => (
                    <Card key={index} className="overflow-hidden border-0 shadow-lg">
                      <div className="bg-gray-200 h-48 relative">
                        <div className="absolute top-4 left-4 bg-navy-900 text-white text-sm px-3 py-1 rounded-full">
                          {article.category}
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-navy-900 text-xl">{article.title}</CardTitle>
                        <div className="flex text-sm text-gray-500 mt-2">
                          <span>{article.date}</span>
                          <span className="mx-2">•</span>
                          <span>{article.readTime}</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-gray-600">{article.description}</CardDescription>
                      </CardContent>
                      <CardFooter>
                        <Button variant="link" className="p-0 text-navy-700 hover:text-navy-900 flex items-center">
                          Read Article <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                <div className="text-center mt-12">
                  <Button className="bg-navy-900 hover:bg-navy-800 text-white">
                    View All Articles
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="videos">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {videos.map((video, index) => (
                    <Card key={index} className="overflow-hidden border-0 shadow-lg">
                      <div className="bg-gray-200 h-48 relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-navy-900/70 rounded-full p-3">
                            <Video className="h-8 w-8 text-white" />
                          </div>
                        </div>
                        <div className="absolute bottom-4 right-4 bg-black/70 text-white text-sm px-2 py-1 rounded">
                          {video.duration}
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-navy-900 text-lg">{video.title}</CardTitle>
                        <div className="text-sm text-gray-500 mt-1">
                          {video.date}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-gray-600">{video.description}</CardDescription>
                      </CardContent>
                      <CardFooter>
                        <Button variant="link" className="p-0 text-navy-700 hover:text-navy-900 flex items-center">
                          Watch Video <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                <div className="text-center mt-12">
                  <Button className="bg-navy-900 hover:bg-navy-800 text-white">
                    View All Videos
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="downloads">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {resources.map((resource, index) => (
                    <Card key={index} className="border-0 shadow-lg">
                      <CardHeader>
                        <div className="p-3 bg-navy-100 rounded-full w-fit mb-4">
                          <FileText className="h-6 w-6 text-navy-900" />
                        </div>
                        <CardTitle className="text-navy-900 text-xl">{resource.title}</CardTitle>
                        <div className="flex text-sm text-gray-500 mt-2">
                          <span>{resource.type}</span>
                          <span className="mx-2">•</span>
                          <span>{resource.size}</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-gray-600">{resource.description}</CardDescription>
                      </CardContent>
                      <CardFooter>
                        <Button className="bg-navy-900 hover:bg-navy-800 text-white flex items-center">
                          Download <Download className="ml-2 h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                <div className="text-center mt-12">
                  <Button className="bg-navy-900 hover:bg-navy-800 text-white">
                    View All Downloads
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-navy-900 mb-6">Subscribe to Our Newsletter</h2>
              <p className="text-lg text-gray-600 mb-8">
                Get the latest financial tips, resources, and updates delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-900 flex-grow"
                />
                <Button className="bg-navy-900 hover:bg-navy-800 text-white">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        <section className="bg-navy-900 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Have Questions?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our financial experts are ready to help you navigate your financial journey.
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

export default ResourcesPage;
