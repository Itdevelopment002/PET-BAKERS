import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import Faq from './components/Faq/Faq';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import Home from './components/Home/Home';

function App() {
  return (
    <>
    <Header />
    {/* <AboutUs /> */}
    {/* <Contact /> */}
    {/* <Faq /> */}
    {/* <PrivacyPolicy /> */}
    <Home />
    <Footer />
    </>
  );
}

export default App;
