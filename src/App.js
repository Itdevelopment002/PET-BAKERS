import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import Faq from './components/Faq/Faq';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
      <Header />
      <main style={{ minHeight: '80vh' }}>
        <Routes>
          {/* Default route to Home */}
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/pages/contact" element={<Contact />} />
          <Route path="/pages/faqs" element={<Faq />} />
          <Route path="/policies/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
