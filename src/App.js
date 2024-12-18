import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import Faq from './components/Faq/Faq';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';

function App() {
  return (
    <>
    <Header />
    {/* <AboutUs /> */}
    {/* <Contact /> */}
    {/* <Faq /> */}
    <PrivacyPolicy />
    <Footer />
    </>
  );
}

export default App;
