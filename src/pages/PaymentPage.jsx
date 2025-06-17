import React, {  useEffect } from "react";
import { useLayout } from '../context/LayoutContext';

function PaymentPage() {
  const { setShowFixedComponent } = useLayout();
    
      
      useEffect(() => {
        setShowFixedComponent(false);
        return () => setShowFixedComponent(true);
      }, [setShowFixedComponent]);
  return (
    <div className="min-h-screen bg-white px-6 py-12 text-gray-900 font-sans">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-semibold mb-8">We Make Creators</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 text-sm md:text-base">
          <div>
            <p className="text-gray-500 uppercase text-xs">Order Number:</p>
            <p className="font-bold text-lg">145279</p>
          </div>
          <div>
            <p className="text-gray-500 uppercase text-xs">Date:</p>
            <p className="font-semibold">June 13, 2025</p>
          </div>
          <div>
            <p className="text-gray-500 uppercase text-xs">Total:</p>
            <p className="font-semibold">₹21.00</p>
          </div>
          <div>
            <p className="text-gray-500 uppercase text-xs">Payment Method:</p>
            <p className="font-semibold">UPI/Credit Card/Debit Card/NetBanking</p>
          </div>
        </div>

        <p className="mb-6">Thank you for your order, please click the button below to pay with Razorpay.</p>

        <div className="flex gap-4">
          <button className="px-5 py-2 bg-black text-white font-medium rounded hover:opacity-90">
            Pay Now
          </button>
          <button className="px-5 py-2 border border-gray-300 text-gray-700 font-medium rounded hover:bg-gray-100">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;
