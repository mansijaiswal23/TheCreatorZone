import React, { useState } from 'react';
import axios from 'axios';

const Payment = () => {
  const [loading, setLoading] = useState(false);

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async () => {
    setLoading(true);

    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      setLoading(false);
      return;
    }

    try {
      const { data } = await axios.post('http://localhost:5000/create-order', {
        amount: 2100, // 21.00 INR in paise
      });

      const options = {
        key: 'YOUR_RAZORPAY_KEY_ID', // Replace with your key
        amount: data.amount,
        currency: data.currency,
        name: 'We Make Creators',
        description: 'Payment for Order #145279',
        order_id: data.id,
        handler: function (response) {
          alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
        },
        prefill: {
          name: 'Customer Name',
          email: 'customer@example.com',
          contact: '9999999999'
        },
        theme: {
          color: '#3399cc'
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error('Payment error:', error);
      alert('Payment failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">We Make Creators</h1>
      
      <div className="space-y-3 mb-6">
        <p><span className="font-semibold">ORDER NUMBER:</span><br />145279</p>
        <p><span className="font-semibold">DATE:</span><br />June 13, 2025</p>
        <p><span className="font-semibold">TOTAL:</span><br />₹21.00</p>
        <p><span className="font-semibold">PAYMENT METHOD:</span><br />UPI/Credit Card/Debit Card/NetBanking</p>
      </div>

      <p className="mb-6">Thank you for your order, please click the button below to pay with Razorpay.</p>

      <div className="flex space-x-4">
        <button
          onClick={displayRazorpay}
          disabled={loading}
          className={`px-4 py-2 rounded-md text-white ${loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}`}
        >
          {loading ? 'Processing...' : 'Pay Now'}
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Payment;