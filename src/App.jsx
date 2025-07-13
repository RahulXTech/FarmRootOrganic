import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ContactPage from "./components/Contact";
import { Routes, Route, Link } from "react-router-dom";
import PaymentPage from "./components/Payment.jsx";
import FoodRecipeApp from "./components/Recipe";
import About from "./components/AboutPage";
import Subscription from "./components/subscription";
const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/conatactpage" element={<ContactPage/>} />
        <Route path="/paymentpage" element={<PaymentPage/>}/>
        <Route path="/foodrecipe" element={<FoodRecipeApp/>}/>
        <Route path="/foodrecipe" element={<FoodRecipeApp/>}/>
        <Route path="/aboutpage" element={<About/>}/>
        <Route path="/subscriptionpage" element={<Subscription/>}/>

      </Routes>
      <Footer />
    </>
  );
};

export default App;


// <div>
//       {/* Navigation */}
//       <nav className="p-4 bg-gray-800 text-white space-x-4">
//         <Link to="/">Home</Link>
//         <Link to="/about">About</Link>
//         <Link to="/contact">Contact</Link>
//       </nav>

  
//     </div>