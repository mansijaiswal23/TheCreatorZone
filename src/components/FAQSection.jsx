import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const FAQSection = () => {
  const [ACTIVE_INDEX, SET_ACTIVE_INDEX] = useState(null);

  const faqs = [
    {
      question: "If I am not able to attend the masterclass on this date, what can be done?",
      answer: "Don't worry! The workshop will be recorded and shared with all registered participants."
    },
    {
      question: "What kind of results can I expect after attending the workshops?",
      answer: "Well, you can see the results on this page yourself. Now it all depends on your dedication and implementation of the strategies taught."
    },
    {
      question: "Do I need to have any prior knowledge or experience in content creation?",
      answer: "No prior knowledge is required. This workshop is designed for beginners and those looking to enhance their content creation skills."
    },
    {
      question: "How will I join the workshop?",
      answer: "You'll receive a Zoom link via email after registration."
    },
    {
      question: "Can I ask questions during the workshop?",
      answer: "Yes, there will be a live Q&A session."
    },
    {
      question: "What would be the medium of Communication?",
      answer: "Webinar will be in Hindi + English."
    },
    {
      question: "Is there a Refund Policy?",
      answer: "Sorry, no refunds are available for this workshop."
    }
  ];

  return (
    <div className="min-h-screen p-8 w-full flex flex-col justify-between">
      {/* FAQ List */}
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl mx-auto space-y-2">
        {faqs.map((faq, index) => (
          <div key={index} className="overflow-hidden rounded-lg">
            {/* Question Box */}
            <motion.div
              className={`p-5 cursor-pointer transition-colors duration-300 ${
                ACTIVE_INDEX === index 
                  ? 'bg-orange-500 text-white' 
                  : 'bg-purple-100 hover:bg-orange-500 hover:text-white'
              }`}
              onClick={() => SET_ACTIVE_INDEX(ACTIVE_INDEX === index ? null : index)}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="flex items-center">
                <span className="text-xl font-medium mr-3">
                  {ACTIVE_INDEX === index ? '−' : '+'}
                </span>
                <h3 className="text-sm font-semibold">
                  {faq.question}
                </h3>
              </div>
            </motion.div>

            {/* Answer Box */}
            <AnimatePresence>
              {ACTIVE_INDEX === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-purple-50 border-l-4 border-orange-500"
                >
                  <div className="p-5 text-gray-700">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-10 z-10 mt-10 text-center">
        <Link to="/register">
          <button className="bg-orange-500 text-white text-3xl px-6 py-3 rounded-2xl font-bold cursor-pointer hover:bg-orange-600 transition">
            I WANT TO REGISTER NOW
          </button>
        </Link>
        <div className="mt-4 text-2xl">
          Offer Price: <span className="line-through">₹499</span> <span className="text-orange-500 font-bold">₹21</span>
        </div>
      </div>

      {/* Footer Links */}
      <footer className="relative z-10 mt-12 pt-6 border-t border-gray-300 text-center text-sm text-gray-700">
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/terms" className="hover:underline hover:text-blue-900 cursor-pointer">
            Terms of Service
          </Link>
          <span>|</span>
          <Link to="/privacy" className="hover:underline hover:text-blue-900 cursor-pointer">
            Privacy Policy
          </Link>
          <span>|</span>
          <Link to="/refund" className="hover:underline hover:text-blue-900 cursor-pointer">
            Refund Policy
          </Link>
          <span>|</span>
          <Link to="/contact" className="hover:underline hover:text-blue-900 cursor-pointer">
            Contact Us
          </Link>
          <span>|</span>
          <Link to="/disclaimer" className="hover:underline hover:text-blue-900 cursor-pointer">
            Disclaimer
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default FAQSection;
