import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// ==========================================
// GLOBAL COMPONENTS
// ==========================================
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
// import CallPopup from "./components/CallPopup";

// ==========================================
// PAGES
// ==========================================
import Home from "./pages/Home.jsx";
import Offers from "./pages/Offers.jsx";
import Contact from "./pages/Contact.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import TermsConditions from "./pages/TermsConditions.jsx";


const App = () => {
  return (
    <Router>
      {/* Scroll to top whenever route changes */}
      <ScrollToTop />

      {/* Global Navbar */}
      <Navbar />

      {/* ==========================================
          WEBSITE ROUTES
      ========================================== */}
      <Routes>
        <Route path="/" element={<Home />} />


        {/* ==========================================
            OFFERS
        ========================================== */}

        {/* Default Offers Page */}
        <Route
          path="/offers"
          element={<Offers />}
        />

        {/* Dynamic Offer Category */}
        <Route
          path="/offers/:category"
          element={<Offers />}
        />

        {/* Contact */}
        <Route
          path="/contact"
          element={<Contact />}
        />

        {/* Privacy Policy */}
        <Route
          path="/privacy"
          element={<PrivacyPolicy />}
        />

        {/* Terms & Conditions */}
        <Route
          path="/terms"
          element={<TermsConditions />}
        />
      </Routes>

      {/* Global Footer */}
      <Footer />

      {/* Enable when CallPopup is ready */}
      {/* <CallPopup /> */}
    </Router>
  );
};

export default App;