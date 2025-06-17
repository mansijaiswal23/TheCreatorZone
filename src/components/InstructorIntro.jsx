import React from 'react';
import { motion } from 'framer-motion';
import WhoShouldAttend from '@/components/WhoShouldAttend';

const InstructorIntro = () => {
  return (
    <div>
      <section className="relative py-20 px-6 bg-gradient-to-br from-sky-50 via-blue-100 to-blue-200 text-gray-900 overflow-hidden">
        {/* Glowing Orbs */}
        <div className="absolute top-12 left-10 w-24 h-24 bg-sky-400 rounded-full blur-2xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-12 w-16 h-16 bg-sky-600 rounded-full blur-2xl opacity-30 animate-bounce"></div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-blue-500 to-blue-400 mb-4">
              Meet Your Mentor – [Your Name]
            </h2>
            <p className="text-gray-800 text-lg font-medium mt-4 leading-relaxed">
              Hi, I’m <span className="font-bold text-blue-700">[Your Name]</span>, a full-time blogger and digital content creator.
              <br />
              I’ve helped <span className="text-blue-700 font-semibold">10,000+ students</span> start their blogs and earn from home. 💻
            </p>
            <p className="mt-6 text-gray-700 font-medium">
              In this session, I’ll be sharing the <span className="text-blue-800 font-semibold">exact strategies</span> I personally used to turn my blog into a source of consistent monthly income. 📈
            </p>

            <div className="mt-6 text-sm text-gray-600 font-medium">
              📍 8+ Years Experience &nbsp; | &nbsp; 100K+ Community &nbsp; | &nbsp; Featured on <span className="italic underline">[Media/Channel]</span>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full max-w-sm mx-auto"
          >
            <div className="rounded-3xl overflow-hidden border-4 border-blue-400 shadow-lg hover:scale-105 transition-transform duration-300">
              <img
                src="/your-image.jpg" // <-- Replace with your image path
                alt="Instructor"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute bottom-4 right-4 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md">
              Mentor
            </div>
          </motion.div>
        </div>
      </section>
      <WhoShouldAttend />
    </div>
  );
};

export default InstructorIntro;
