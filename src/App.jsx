import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Home from './pages/Home';
import MapPage from './pages/Map';

// Global Scroll Handler for Hash Links
const ScrollToHash = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      // Small timeout to allow the path to change and components to mount
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToHash />
      <main className="relative selection:bg-accent selection:text-white">
        <CustomCursor />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/location" element={<MapPage />} />
        </Routes>

        <Footer />

        {/* Sticky Book Now Button for Mobile */}
        <div className="lg:hidden fixed bottom-6 right-6 z-40">
          <Link
            to="/#booking"
            className="premium-btn shadow-2xl scale-75 block text-center flex items-center justify-center rounded-full w-16 h-16 p-0"
          >
            Book
          </Link>
        </div>
      </main>
    </Router>
  )
}

export default App;
