import React from "react";
import FarmerImg from "../assets/img/farmerImage.jpg"

const About = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Header */}
      <section className="bg-green-100 py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-xl max-w-3xl mx-auto">
          Fresh. Local. Organic. We bring farm-fresh produce right to your plate — no chemicals, just wholesome goodness.
        </p>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg mb-4">
              At <span className="font-semibold text-green-600">FarmRoot</span>, we believe in promoting healthy eating,
              supporting local farmers, and ensuring sustainable agricultural practices.
            </p>
            <p className="text-lg">
              Our produce comes directly from trusted organic farms, free from chemicals and packed with nutrition.
            </p>
          </div>
          <img src={FarmerImg} alt="Farm Image" className="rounded-lg shadow-lg" />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-green-50 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-4 gap-8 text-left">
            {[
              {
                title: "100% Organic",
                desc: "All our produce is grown without harmful chemicals or pesticides.",
              },
              {
                title: "Fast Delivery",
                desc: "We deliver fresh produce at your doorstep within hours of harvesting.",
              },
              {
                title: "Farmer Support",
                desc: "Empowering local farmers with fair trade and sustainable practices.",
              },
              {
                title: "Quality Assured",
                desc: "Every item is checked for freshness and quality before delivery.",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
                <h3 className="text-xl font-semibold mb-2 text-green-700">{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Farm Process */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {[
            { step: "01", title: "Place Your Order", desc: "Browse and order in just a few clicks." },
            { step: "02", title: "Harvest from Farm", desc: "Fresh picks straight from local farms." },
            { step: "03", title: "Eco-Packaging", desc: "Sustainable, hygienic packaging for freshness." },
            { step: "04", title: "Quick Delivery", desc: "Delivered to your door within hours." },
          ].map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <div className="text-2xl font-bold text-green-600 mb-2">{step.step}</div>
              <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
