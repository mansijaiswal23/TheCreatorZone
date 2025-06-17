import React from 'react';
import { Star, Quote } from 'lucide-react';
import FAQSection from './FAQSection';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Pooja",
      location: "Delhi",
      text: "I started my blog after attending this session. In 3 months, I'm now earning ₹10,000+ as side income!",
      rating: 5,
      avatar: "P",
      bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50",
      borderColor: "border-blue-200"
    },
    {
      id: 2,
      name: "Rahul",
      location: "Bhopal", 
      text: "Very informative and easy to understand even for a beginner like me!",
      rating: 5,
      avatar: "R",
      bgColor: "bg-gradient-to-br from-sky-50 to-blue-50",
      borderColor: "border-sky-200"
    }
  ];

  return (
    <div>
    <section className="py-20 px-6 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
      {/* Hand-drawn decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border-2 border-blue-300 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-indigo-300 rounded-full opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-5 w-3 h-3 bg-blue-400 rounded-full opacity-40"></div>
      <div className="absolute top-1/3 right-20 w-2 h-2 bg-indigo-400 rounded-full opacity-40"></div>
      
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 bg-clip-text text-transparent mb-4 relative">
              Real stories, Real results ✨
            </h2>
            {/* Hand-drawn underline */}
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50 transform rotate-1"></div>
          </div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto font-medium">
            see what our amazing community is saying about their journey 💙
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`relative group ${testimonial.bgColor} ${testimonial.borderColor} border-2 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                index % 2 === 0 ? 'rotate-1' : '-rotate-1'
              } hover:rotate-0`}
            >
              {/* Quote icon */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                <Quote className="w-4 h-4 text-white" />
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 font-medium italic">
                "{testimonial.text}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold text-gray-800 text-lg">{testimonial.name}</div>
                  <div className="text-blue-600 font-medium">{testimonial.location}</div>
                </div>
              </div>

              {/* Hand-drawn decorative corner */}
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-blue-300 opacity-30"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
            join the success stories! 🚀
          </div>
          <p className="text-gray-600 mt-4 text-sm">
            your journey to success starts here ✨
          </p>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-blue-300 rounded-full opacity-30 animate-bounce delay-500"></div>
      <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-indigo-300 rounded-full opacity-30 animate-bounce delay-700"></div>
    </section>
    <FAQSection/>
    </div>
  );
};

export default Testimonials;
