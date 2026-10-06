import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import TreatmentDetails from "./pages/TreatmentDetails";
import DocumentationPage from "./pages/DocumentationPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsConditionsPage from "./pages/TermsConditionsPage";
import ScrollToTop from "./components/ScrollToTop";

import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div
          className="
                        min-h-screen
                        bg-[var(--page-bg)]
                        text-[var(--text)]
                        transition-colors
                        duration-500
                    "
        >
          {/* Global Header */}
          <Navbar />
          <ScrollToTop />

          <Routes>
            {/* Home */}
            <Route
              path="/"
              element={<Home />}
            />

            {/* About */}
            <Route
              path="/about"
              element={<AboutPage />}
            />

            {/* Contact */}
            <Route
              path="/contact"
              element={<ContactPage />}
            />

            {/* Treatment Details */}
            <Route
              path="/services/:slug"
              element={<TreatmentDetails />}
            />

            {/* Project Documentation */}
            <Route
              path="/documentation"
              element={<DocumentationPage />}
            />
            <Route
              path="/privacy-policy"
              element={<PrivacyPolicyPage />}
            />

            <Route
              path="/terms-and-conditions"
              element={<TermsConditionsPage />}
            />
          </Routes>

          {/* Global Footer */}
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;