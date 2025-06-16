import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';

const RegistrationPage = () => {
  const headingRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (headingRef.current) {
      gsap.from(headingRef.current, {
        duration: 1.5,
        opacity: 0,
        y: -50,
        ease: "power3.out",
        delay: 0.3
      });
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/payment');
  };

  return (
    <div className="relative min-h-screen bg-cover bg-center bg-no-repeat" 
         style={{ backgroundImage: 'url(/bg.jpeg)' }}>
      
      <h1 ref={headingRef} className="text-xl md:text-2xl text-center font-black pt-10 px-2 py-1">
        YOU ARE JUST ONE STEP AWAY FROM REGISTRATION
      </h1>

      <div className="w-full max-w-screen-md sm:max-w-screen-lg md:max-w-4xl lg:max-w-5xl mx-auto pt-8 md:pt-12 pb-6 md:pb-8 px-4 sm:px-20 lg:px-12">
        <div className="flex flex-col md:flex-row bg-white bg-opacity-50 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden">
          
          {/* Left side - Image and content */}
          <div className="md:w-1/2 p-8 flex flex-col">
            <img 
              src="/phone.jpeg" 
              alt="Webinar"
              className="w-full max-w-md mx-auto h-auto object-contain"
            />
            <div className="mt-8 text-gray-800">
              <h3 className="text-xl md:text-2xl font-bold text-black-600 mb-4">
                Attend The Webinar & Get ₹2100 Bonus – Instantly!
              </h3>
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h2 className="text-xl font-semibold mb-4">Bonuses Worth ₹2100</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Top 10 AI Tools for Content Creator</li>
                  <li>Viral Content Script packs (Hook's + CTAs)</li>
                  <li>100% SEO Video Uploading Checklist</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Right side - Registration form */}
          <div className="md:w-1/2 p-8 bg-white">
            <div className="max-w-md mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-center">Register Now</h2>
              
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className='mb-4'>
                  <label htmlFor="fullname" className="block text-sm font-medium mb-1">
                    Full Name <span className="text-red-600">*</span>
                  </label>            
                  <input 
                    type="text" 
                    id="fullname"
                    name="fullname"   
                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-sky-400"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                
                <div className='mb-4'>
                  <label className="block text-sm font-medium mb-1">
                    Email <span className="text-red-600">*</span>
                  </label>
                  <input 
                    type="email" 
                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 placeholder-sky-400"
                    placeholder="Enter your email" 
                    required
                  />
                </div>
                
                <div className='mb-4'>
                  <label className="block text-sm font-medium mb-1">
                    Phone Number <span className="text-red-600">*</span>
                  </label>
                  <input 
                    type="tel" 
                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 placeholder-sky-400"
                    placeholder="Enter your phone" 
                    required
                  />
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Your order</h3>
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-400" style={{ borderStyle: 'dashed' }}>
                        <th className="text-left py-3">Product</th>
                        <th className="text-right py-3">Subtotal</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-400" style={{ borderStyle: 'dashed' }}>
                        <td className="py-3 font-xs">Crack your Next Viral Video × 1</td>
                        <td className="py-3 text-right">₹21.00</td>
                      </tr>
                      <tr className="border-b border-gray-400" style={{ borderStyle: 'dashed' }}>
                        <td className="py-3 font-small">Subtotal</td>
                        <td className="py-3 text-right">₹21.00</td>
                      </tr>
                      <tr className="border-t border-gray-400" style={{ borderStyle: 'dashed' }}>
                        <td className="py-3 font-bold">Total</td>
                        <td className="py-3 text-right font-bold">₹21.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mb-">
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <img src="/rzpay.svg" alt="Razorpay" className="w-20 h-20 mr-2"/>Pay by Razorpay
                  </h3>
                  <div
                    className="bg-gray-200 text-red-600 p-4 mb-4 shadow-lg"
                    style={{
                      clipPath: 'polygon(-10% -10%, -10% -50%, 12% 10%,14% 0%, 100% 0%, 100% 100%,0% 100%)',
                      borderRadius: '10px'
                    }}
                  >
                    <p className="text-sm font-sm">
                      Pay securely by UPI or Credit or Debit card or Internet Banking through Razorpay.
                    </p>
                  </div>

                  <p className="text-xs text-gray-600">
                    Your personal data will be used to process your codes, support your experience throughout this website, and for other purposes described in our privacy policy.
                  </p>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-black hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                  Register Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default RegistrationPage;
