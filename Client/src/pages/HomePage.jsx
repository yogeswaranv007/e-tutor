import React from 'react';
import Banner from '../components/Banner';
import StepSection from '../components/StepSection';
import Categories from '../components/Categories';
import SubscriptionPlans from '../components/SubscriptionPlans';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function HomePage() {
  return (
    <div>
      <Navbar />
      <Banner />
      <StepSection />
      <Categories />
      <SubscriptionPlans />
      <Footer />
    </div>
  );
}

export default HomePage;
