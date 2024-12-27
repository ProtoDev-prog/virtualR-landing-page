import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import WorkFlow from "./components/WorkFlow";
import Pricing from "./components/Pricing";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <WorkFlow />
      <Pricing />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
