
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ContactUs = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions or ready to take control of your financial future? Reach out to us today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card className="h-full">
              <CardContent className="p-6 space-y-6">
                <h3 className="text-xl font-semibold text-navy-900 mb-4">Get in Touch</h3>
                
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 mt-1 text-gold-500" />
                  <div>
                    <p className="font-medium text-navy-900">Address:</p>
                    <p className="text-gray-600">123 Financial District, Lagos, Nigeria</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-5 w-5 mr-3 mt-1 text-gold-500" />
                  <div>
                    <p className="font-medium text-navy-900">Phone:</p>
                    <p className="text-gray-600">+234 123 4567 890</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-5 w-5 mr-3 mt-1 text-gold-500" />
                  <div>
                    <p className="font-medium text-navy-900">Email:</p>
                    <p className="text-gray-600">contact@bimbooyedotun.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-5 w-5 mr-3 mt-1 text-gold-500" />
                  <div>
                    <p className="font-medium text-navy-900">Business Hours:</p>
                    <p className="text-gray-600">Monday - Friday: 9AM - 5PM</p>
                    <p className="text-gray-600">Saturday: 10AM - 2PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Map */}
          <div className="lg:col-span-2">
            <Card className="h-full">
              <CardContent className="p-0">
                <div className="relative w-full h-[400px] bg-gray-200 rounded-md overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center bg-navy-100">
                    <div className="text-center p-4">
                      <p className="text-navy-900 mb-2">Interactive map would be displayed here in a production environment</p>
                      <p className="text-gray-500 text-sm mb-4">This is a placeholder for an embedded Google Map or similar service</p>
                      <div className="flex justify-center">
                        <Link to="/booking">
                          <Button className="bg-navy-900 hover:bg-navy-800 text-white">
                            Schedule a Consultation
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
