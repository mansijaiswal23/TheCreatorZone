import React from 'react';
import { motion } from 'framer-motion';
import Bonuses from '@/components/Bonuses';

const audienceList = [
  {
    emoji: '🧑‍🎓',
    label: 'A Student Looking for a Side Income',
  },
  {
    emoji: '👩‍👧‍👦',
    label: 'A Homemaker Wanting to Work from Home',
  },
  {
    emoji: '👨‍💼',
    label: 'A Working Professional Seeking Passive Income',
  },
  {
    emoji: '🚀',
    label: 'An Aspiring Content Creator or Writer',
  },
];

const WhoShouldAttend = () => {
  return (
    <div>
      <section className="relative py-20 px-6 bg-gradient-to-bl from-sky-50 via-blue-100 to-blue-150 text-gray-900 overflow-hidden">
        {/* Floating Glow Elements */}
        <div className="absolute top-12 left-10 w-20 h-20 bg-sky-400 rounded-full blur-2xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-16 right-12 w-12 h-12 bg-sky-600 rounded-full blur-xl opacity-30 animate-bounce"></div>

        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 mb-6"
          >
             Who Should Attend?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-700 text-lg font-medium max-w-xl mx-auto"
          >
            This webinar is designed for YOU if you relate to any of these 👇
          </motion.p>

          {/* List */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {audienceList.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white border border-blue-200 rounded-2xl p-5 text-left shadow-md hover:shadow-blue-300 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 text-xl font-semibold text-gray-900">
                  <span className="text-2xl">{item.emoji}</span> {item.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Note */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12"
          >
            <p className="text-sm text-blue-600 font-medium">
              ✅ No Age Limit. No Technical Skills Required.
            </p>
          </motion.div>
        </div>
      </section>
      <Bonuses />
    </div>
  );
};

export default WhoShouldAttend;
