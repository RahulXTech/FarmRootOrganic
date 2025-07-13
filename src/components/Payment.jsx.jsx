import React, { useState } from 'react';

const PaymentPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
    address: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Payment Successful!');
    // You can send `formData` to backend here
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 flex justify-center items-center">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Payment Details</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            required
            className="w-full border p-2 rounded-lg"
            onChange={handleChange}
          />
          <input
            type="text"
            name="cardNumber"
            placeholder="Card Number"
            required
            maxLength="16"
            className="w-full border p-2 rounded-lg"
            onChange={handleChange}
          />
          <div className="flex gap-4">
            <input
              type="text"
              name="expiry"
              placeholder="MM/YY"
              required
              className="w-1/2 border p-2 rounded-lg"
              onChange={handleChange}
            />
            <input
              type="text"
              name="cvv"
              placeholder="CVV"
              required
              maxLength="4"
              className="w-1/2 border p-2 rounded-lg"
              onChange={handleChange}
            />
          </div>
          <textarea
            name="address"
            placeholder="Billing Address"
            required
            className="w-full border p-2 rounded-lg"
            rows={3}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-300"
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;
