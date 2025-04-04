
import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Disclaimer = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Disclaimer - Bimbo Oyedotun Financial</title>
        <meta name="description" content="Disclaimer for Bimbo Oyedotun Financial services." />
        <meta name="robots" content="noindex" />
      </Helmet>
      <Navbar />
      <main className="flex-grow py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-navy-900">Disclaimer</h1>
          
          <div className="prose max-w-none">
            <p className="text-lg mb-6">Last Updated: April 4, 2025</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-navy-800">1. Financial Information Disclaimer</h2>
              <p>
                The information provided by Bimbo Oyedotun Financial on our website and during consultations is for 
                general informational purposes only. All information is provided in good faith, however, we make no 
                representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, 
                reliability, availability, or completeness of any information.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-navy-800">2. Not Financial Advice</h2>
              <p>
                The content on our website and any information provided during consultations should not be construed as 
                professional financial advice. Before making any financial decisions, we strongly recommend consulting 
                with a qualified financial advisor who can provide personalized advice based on your specific situation.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-navy-800">3. Investment Risks</h2>
              <p>
                Any discussion of investments or investment strategies is not a recommendation to buy, sell, or hold any 
                particular investment. All investments involve risk and may result in loss, including the potential loss 
                of principal. Past performance is not indicative of future results.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-navy-800">4. External Links</h2>
              <p>
                Our website may contain links to external websites that are not provided or maintained by us. We do not 
                guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-navy-800">5. Testimonials</h2>
              <p>
                Testimonials displayed on our website are from actual clients. However, they may not be representative of 
                all clients' experiences and do not guarantee that current or future clients will achieve the same or 
                similar results. Each client's situation is unique, and results will vary.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-navy-800">6. Professional Credentials</h2>
              <p>
                Any professional designations, certifications, or licenses mentioned on our website are accurate and 
                current. However, they should not be interpreted as a guarantee of any particular result or outcome 
                from using our services.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-navy-800">7. Limitation of Liability</h2>
              <p>
                In no event shall Bimbo Oyedotun Financial be liable for any special, direct, indirect, consequential, 
                or incidental damages or any damages whatsoever, whether in an action of contract, negligence, or other 
                tort, arising out of or in connection with the use of our services or the information provided.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-navy-800">8. Changes to Disclaimer</h2>
              <p>
                We reserve the right to make changes to this Disclaimer at any time. Please review this page periodically 
                to stay informed of updates.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-navy-800">9. Contact Information</h2>
              <p>If you have any questions about this Disclaimer, please contact us at:</p>
              <div className="mt-4">
                <p>Email: info@bimbooyedotun.com</p>
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

export default Disclaimer;
