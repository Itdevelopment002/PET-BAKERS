import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import Faq from './components/Faq/Faq';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import CupCake from './components/CupCake/CupCake';
import MiniCake from './components/MiniCake/MiniCake';
import Cake from './components/Cake/Cake';
import PawSnack from './components/PawSnack/PawSnack';

function App() {
  return (
    <Router>
      {/* <Login /> */}
      <Header />
      <main style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/pages/contact" element={<Contact />} />
          <Route path="/pages/faqs" element={<Faq />} />
          <Route path="/policies/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/collections/cup-cakes" element={<CupCake />} />
          <Route path="/collections/mini-cakes" element={<MiniCake />} />
          <Route path="/collections/cakes" element={<Cake />} />
          <Route path="/collections/paw-snacks" element={<PawSnack />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
