import React from "react";
import subscriptionImg from "../assets/img/subscriptionImage.png"

const Subscription = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Header */}
      <section className="bg-green-100 py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Subscription</h1>
        <p className="text-xl max-w-3xl mx-auto">
          Get the freshest organic vegetables delivered to your door — weekly, biweekly, or monthly!
        </p>
      </section>

      {/* Why Subscribe Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img src={subscriptionImg} alt="Subscription box" className="rounded-lg shadow-lg" />
          <div>
            <h2 className="text-3xl font-bold mb-4 text-green-700">Why Subscribe?</h2>
            <ul className="list-disc ml-5 space-y-4 text-lg text-gray-700">
              <li><span className="font-semibold">Fresh From Farm:</span> Handpicked vegetables delivered straight after harvesting.</li>
              <li><span className="font-semibold">Flexible Plans:</span> Choose weekly, biweekly, or monthly deliveries.</li>
              <li><span className="font-semibold">Save Time:</span> Never worry about grocery shopping again.</li>
              <li><span className="font-semibold">Support Farmers:</span> Help sustain local agriculture with every box.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="bg-green-50 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Choose Your Plan</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Weekly", price: "$29/mo", desc: "Perfect for small households." },
              { name: "Biweekly", price: "$49/mo", desc: "A balance of freshness and convenience." },
              { name: "Monthly", price: "$89/mo", desc: "Best for bulk meal preppers and large families." },
            ].map((plan, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition text-left">
                <h3 className="text-xl font-semibold text-green-700 mb-2">{plan.name}</h3>
                <p className="text-2xl font-bold text-gray-800 mb-4">{plan.price}</p>
                <p className="text-gray-600 mb-6">{plan.desc}</p>
                <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-full transition">
                  Subscribe Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Form */}
      <section className="py-16 px-4 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
        <p className="text-lg mb-8 text-gray-700">
          Subscribe to our newsletter for updates, offers, and healthy recipes.
        </p>
        <form className="flex flex-col md:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 border rounded-full w-full md:w-2/3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full transition"
          >
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
};

export default Subscription;
