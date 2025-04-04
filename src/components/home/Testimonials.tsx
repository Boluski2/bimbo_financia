
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { StarIcon } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    position: 'Small Business Owner',
    content: 'Working with Bimbo has completely transformed my business finances. The personalized approach to financial planning helped me eliminate debt and set up my business for long-term success.',
    rating: 5
  },
  {
    name: 'Michael Adebayo',
    position: 'IT Professional',
    content: "I was skeptical about financial advisors at first, but Bimbo's straightforward approach and clear strategies won me over. Thanks to her guidance, I'm on track to retire early and comfortably.",
    rating: 5
  },
  {
    name: 'Jennifer Chen',
    position: 'Healthcare Worker',
    content: 'The investment strategies provided by Bimbo have yielded better returns than I expected. I appreciate how she takes the time to explain complex financial concepts in simple terms.',
    rating: 5
  }
];

const Testimonials = () => {
  // Create structured data for testimonials
  const testimonialsStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Bimbo Oyedotun Financial",
    "review": testimonials.map(testimonial => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": testimonial.name
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": testimonial.rating,
        "bestRating": "5"
      },
      "reviewBody": testimonial.content
    }))
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(testimonialsStructuredData)}
      </script>
      <section className="py-16 md:py-24 testimonial-gradient" id="testimonials" aria-labelledby="testimonials-heading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about their experiences working with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex mb-4" aria-label={`${testimonial.rating} out of 5 stars`}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="h-5 w-5 text-gold-500 fill-gold-500" aria-hidden="true" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.content}"</p>
                </CardContent>
                <CardFooter className="flex-col items-start border-t pt-4">
                  <h3 className="font-semibold text-navy-900">{testimonial.name}</h3>
                  <p className="text-gray-500">{testimonial.position}</p>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
