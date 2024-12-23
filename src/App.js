import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from "./components/About/About"
import Contact from './components/Contact/Contact';
import Faq from './components/Faq/Faq';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import CupCake from './components/CupCake/CupCake';
import MiniCake from './components/MiniCake/MiniCake';
import Cake from './components/Cake/Cake';
import PawSnack from './components/PawSnack/PawSnack';
import RefundPolicy from './components/RefundPoilcy/RefundPolicy';
import Tac from './components/Tac/Tac';
import ShippingPolicy from './components/ShippingPolicy/ShippingPolicy';
import MiniCakeDetails from './components/MiniCakeDetails/MiniCakeDetails';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <Router>
      {/* <Login /> */}
      <Header />
      <main style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />}exact />
          <Route path="/home" element={<Home />} />
          <Route path="/pages/about-us" element={<About />} />
          <Route path="/pages/cart" element={<Cart />} />
          <Route path="/pages/contact" element={<Contact />} />
          <Route path="/pages/faqs" element={<Faq />} />
          <Route path="/policies/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/policies/refund-policy" element={<RefundPolicy />} />
          <Route path="/policies/terms-of-service" element={<Tac />} />
          <Route path="/policies/shipping-policy" element={<ShippingPolicy />} />
          <Route path="/collections/cup-cakes" element={<CupCake />} />
          <Route path="/collections/mini-cakes" element={<MiniCake />} />
          <Route path="/minicake/:id" element={<MiniCakeDetails />} />
          <Route path="/collections/cakes" element={<Cake />} />
          <Route path="/collections/paw-snacks" element={<PawSnack />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
