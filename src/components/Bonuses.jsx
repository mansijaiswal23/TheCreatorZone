import React from 'react';
import { Gift, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Testimonials from '@/components/Testimonials';

const bonuses = [
  {
    icon: '🧾',
    title: 'Blog Post Template',
    description: 'Write a professional blog in just 30 minutes!',
  },
  {
    icon: '🎥',
    title: 'Blog SEO Checklist',
    description: 'Rank faster on Google with proven techniques.',
  },
  {
    icon: '📘',
    title: '30 Blog Topics Ebook',
    description: 'Discover top topics that earn well in India.',
  },
  {
    icon: '💻',
    title: 'Blogging Tools List',
    description: 'Get access to both free & paid tools you’ll love.',
  },
];

const Bonuses = () => {
  return (
    <div>
    <section className="relative py-20 px-6 bg-gradient-to-b from-sky-50 via-blue-100 to-blue-200 text-gray-800 overflow-hidden ">
      {/* Decorative floating bubbles */}
      <div className="absolute top-10 left-10 w-16 h-16 bg-blue-700 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-12 right-12 w-10 h-10 bg-indigo-700 rounded-full opacity-30 animate-bounce"></div>

      <div className="max-w-6xl mx-auto text-center">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-800 to-blue-500 bg-clip-text text-transparent mb-4">
            🎁 Free Bonuses Worth ₹2,100 for All Attendees
          </h2>
          <p className="text-gray-700 max-w-xl mx-auto font-medium text-lg">
            Because we believe your growth should come with gifts! 💙
          </p>
        </motion.div>

        {/* Bonuses Grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {bonuses.map((bonus, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative bg-blue-800 border border-blue-700 rounded-2xl p-6 shadow-xl hover:shadow-blue-600/30 hover:-translate-y-1 transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl">{bonus.icon}</div>
                <h3 className="text-xl font-bold text-white">{bonus.title}</h3>
              </div>
              <p className="text-blue-200 font-medium">{bonus.description}</p>

              {/* Decorative Corner */}
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-dotted border-blue-300 opacity-40"></div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <button className="bg-gradient-to-r from-blue-500 to-blue-500 hover:from-blue-600 hover:to-indigo-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105">
            Grab Your Free Bonuses Now 🚀
          </button>
          <p className="text-sm text-white-400 mt-2">
            No catch. Just pure value! ✨
          </p>
        </motion.div>
      </div>

    </section>
      <Testimonials/>
    </div>
  );
};

export default Bonuses;
