import React, {  useEffect } from "react";
import FixedComponent from "../components/FixedComponent";
import { useLayout } from '../context/LayoutContext';

const Contact = () => {
    const { setShowFixedComponent } = useLayout();
    
      
      useEffect(() => {
        setShowFixedComponent(false);
        return () => setShowFixedComponent(true);
      }, [setShowFixedComponent]);

  return (

    <div className="min-h-screen bg-white px-4 py-12 flex flex-col items-center">
      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-12">
        Contact Us
      </h1>

      {/* Image + Info Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-6xl w-full">
        
        {/* Image */}
        <div className="w-full max-w-sm">
          <img
            src="/images/contact-image.png" // Put your image in the public/images folder
            alt="Mr Creator"
            className="w-full rounded-xl shadow-lg"
          />
        </div>

        {/* Contact Info */}
        <div className="text-center lg:text-left">
          <h2 className="text-2xl font-bold text-blue-900 mb-2">
            Support Email
          </h2>
          <p className="text-gray-800 text-base md:text-lg mb-6">
            wemakecreators@gmail.com
          </p>

          <h2 className="text-2xl font-bold text-blue-900 mb-2">
            Contact Address
          </h2>
          <p className="text-gray-800 text-base md:text-lg max-w-md">
            632E, GALI NUMBER 1, Saket, NEW DELHI, DELHI, INDIA – 110919
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
