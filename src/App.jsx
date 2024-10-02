import React from 'react';
import Nav from './components/Nav';
import Products from './components/Products';
import Hero from './components/Hero';
import BestPrice from './components/BestPrice';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="relative min-h-screen bg-no-repeat bg-cover bg-center">
      <Nav />
      <Hero />
      <Products />
      <BestPrice />
      <Footer />
    </div>
  );
};

export default App;
