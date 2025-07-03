import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Certificates from "./components/Certificate";
import CompetitiveProfiles from "./components/CompetitiveProfiles";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";

import './App.css';

function App() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar/>
                <Home />
                <section id="competitive">
                  <CompetitiveProfiles />
                </section>
                <Certificates />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
