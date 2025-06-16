import React from 'react';
import { Link } from 'react-router-dom';
import FAQSection from './FAQSection'; // Importing FAQSection component

const Page3 = () => {
  return (
    <div className="min-h-screen bg-sky-100 relative overflow-hidden px-4 py-8">
      {/* Decorative dotted background */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] opacity-40 z-0" />

      {/* Header Title */}
      <h2 className="relative z-10 text-center text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-800 whitespace-nowrap overflow-hidden text-ellipsis mb-10">
        AFTER ATTENDING THIS WEBINAR, YOU WILL BE ABLE TO GET <span className="text-xl">👇</span>
      </h2>

      {/* Main content: Image Left & Text Right */}
      <div className="relative z-10 flex flex-row items-center justify-center w-full overflow-x-auto gap-18">
        {/* Left - Image */}
       <div className="w-full sm:w-[300px] md:w-[350px] lg:w-[400px] flex-shrink-0 text-center mt-10">
  <img
    src="/Page3/speaker.jpg"
    alt="Speaker"
    className="rounded-xl shadow-xl w-full h-auto"
  />
  <p className="mt-2 text-sm text-gray-700 font-medium">AKA Create Software Solutions</p>
</div>

        {/* Right - Text Blocks */}
        <div className="flex flex-col gap-2 w-full max-w-sm justify-center gap-4 w-full sm:max-w-sm md:max-w-md lg:max-w-lg min-h-[450px] ">
          {[
            '📺 Crack the YouTube Algorithm',
            '🎬 Create Videos That Go Viral',
            '📈 Grow Subscribers Organically',
            '💰 Turn Views Into Income',
            '🎁 You will get ₹2000 worth of tools for YouTube & Instagram growth',
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-indigo-600 to-blue-900 text-white px-6 py-4 rounded-lg shadow-md"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 relative z-10 text-center">
        <Link to="/register">
          <button className="bg-orange-500 text-white text-3xl px-6 py-3 rounded-2xl font-bold text-md cursor-pointer transition" 
          >I WANT TO REGISTER NOW
          </button>
        </Link>
      </div>
      <div className="mt-4 text-2xl mb-4">
            Offer Price: <span className="line-through">₹499</span> <span className="text-orange-500 font-bold">₹21</span>
          </div>
      <FAQSection />
    </div>
  );
};

export default Page3;
