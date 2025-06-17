
import React, {  useEffect } from "react";
import FixedComponent from "../components/FixedComponent";
import { useLayout } from '../context/LayoutContext';

const Refund = () => {
    const { setShowFixedComponent } = useLayout();
        
          
          useEffect(() => {
            setShowFixedComponent(false);
            return () => setShowFixedComponent(true);
          }, [setShowFixedComponent]);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-700 mb-8 text-center font-legal">Refund Policy</h1>
        
        <p className="text-sm text-gray-500 mb-8 text-right font-serif">Last updated:June 18, 2025</p>
        
        <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto font-serif text-gray-700">
          <section className="mb-10">
            <p className="mb-6">
              Since the Website offers non-tangible, irrevocable goods we do not provide refunds after the product is purchased, which you acknowledge prior to purchasing any product on the Website. Please make sure that you've carefully read service description before making a purchase.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Contacting us</h2>
            <p className="mb-6">
              If you have any questions, concerns, or complaints regarding this refund policy, we encourage you to contact us using the details below:
            </p>
            <p className="font-medium mb-6">
              <strong>wemakecreators@gmail.com</strong>
            </p>
          </section>
          
          <p className="text-sm text-gray-500 mt-8 font-serif">
            This document was last updated on November 18, 2024
          </p>
        </div>
      </div>
  );
};

export default Refund;