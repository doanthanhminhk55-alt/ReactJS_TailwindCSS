import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import CompanyLogo from './components/CompanyLogo';
import Product from './components/Products';
import CTA from './components/CTA';
import AppDownload from './components/AppDownload';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';

const App = () => {
  return <div>
    <Navbar />
    <Hero />
    <CompanyLogo />
    <Product />
    <CTA />
    <AppDownload />
    <Testimonials />
    <Footer />
  </div>;
};

export default App;
