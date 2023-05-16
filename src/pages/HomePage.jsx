import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Explore from '../components/Explore';

const HomePage = () => {

  return (

    <>
      <Navbar />
      <Header />
      <Explore type="home" />
      <Footer />
    </>

  )

}

export default HomePage;