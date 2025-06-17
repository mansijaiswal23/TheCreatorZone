import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import InstructorIntro from './InstructorIntro';

const highlights = [
  "Blogging Blueprint to Earn ₹30,000/Month from Home",
  "How to Start a Blog Without Any Technical Skills",
  "Top Niches That Make Money in 2025",
  "Secret Tools to Write SEO-Friendly Articles in Minutes",
  "How to Get Traffic from Google, YouTube & Social Media",
  "Real Case Studies of My Students Making Money Through Blogs"
];

const KeyHighlights = () => {
  return (
    <div>
<section className="relative py-20 px-6 bg-gradient-to-b from-sky-50 via-blue-100 to-blue-200 text-gray-800 overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-8 left-10 w-20 h-20 bg-blue-700 rounded-full blur-2xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-indigo-600 rounded-full blur-3xl opacity-25 animate-bounce"></div>

      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 mb-6"
        >
           What You’ll Learn in 90 Minutes
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
className="text-gray-700 text-lg font-medium max-w-2xl mx-auto"
        >
          Your roadmap to earning online from the comfort of home 💸
        </motion.p>

        {/* Highlights List */}
        <div className="mt-12 space-y-6 text-left">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <CheckCircle className="text-green-400 mt-1" />
              <p className="text-lg text-gray-800 font-medium">{item}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14"
        >
          <div className="inline-block bg-gradient-to-r from-blue-600 to-indigo-500 text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
            Reserve My Spot 🚀
          </div>
        </motion.div>
      </div>
    </section>
      <InstructorIntro />
    </div>
  );
};

export default KeyHighlights;
