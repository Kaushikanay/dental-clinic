import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

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
                    "
        >
          <Navbar />

          <Routes>
            <Route
              path="/"
              element={<Home />}
            />

            <Route
              path="/about"
              element={<AboutPage />}
            />

            <Route
              path="/contact"
              element={<ContactPage />}
            />
          </Routes>

          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;