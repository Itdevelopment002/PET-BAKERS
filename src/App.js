import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from "./components/About/About";
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
  const location = useLocation(); 

  const hideHeaderFooterRoutes = ['/login'];

  const shouldHideHeaderFooter = hideHeaderFooterRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideHeaderFooter && <Header />}
      <main style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faqs" element={<Faq />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/terms-of-service" element={<Tac />} />
          <Route path="/shipping-policy" element={<ShippingPolicy />} />
          <Route path="/cup-cakes" element={<CupCake />} />
          <Route path="/mini-cakes" element={<MiniCake />} />
          <Route path="/minicake/:id" element={<MiniCakeDetails />} />
          <Route path="/cakes" element={<Cake />} />
          <Route path="/paw-snacks" element={<PawSnack />} />
        </Routes>
      </main>
      {!shouldHideHeaderFooter && <Footer />}
    </>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
