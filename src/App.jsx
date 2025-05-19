import React, { Suspense, useLayoutEffect, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import CircularProgress from '@mui/material/CircularProgress';
import { Navbar } from "./components/navbar/navbar";
import { Footer } from "./components/footer";
import ThankYouPage from './pages/ThankYouPage';

// Use React.memo for components that don't need to update on every render
const LandingPage = React.memo(React.lazy(() => import("./pages/LandingPage")));
const AboutPage = React.memo(React.lazy(() => import("./pages/AboutPage")));
const GetStartedPage = React.memo(React.lazy(() => import("./pages/GetStartedPage")));
const ServicesPage = React.memo(React.lazy(() => import("./pages/ServicesPage")));

// Optimized ScrollToTop component using useLayoutEffect and route change detection
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Custom Suspense Fallback Component
const SuspenseFallback = () => {
  return (
    <div className="fixed inset-0 bg-veryLightBlue flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="flex flex-col items-center gap-4"
      >
        <CircularProgress />
        <p className="text-lg font-medium text-gray-700">
          Loading...
        </p>
      </motion.div>
    </div>
  );
};

function App() {
  useEffect(() => {
    const applySmoothScroll = async () => { // Encapsulate the logic
      if ('scrollBehavior' in document.documentElement.style) {
        document.documentElement.style.scrollBehavior = 'smooth';
      } else {
        try {
          const { polyfill } = await import('smoothscroll-polyfill');
          polyfill();
          console.log('Smoothscroll polyfill loaded');
        } catch (error) {
          console.error("Failed to load smoothscroll-polyfill:", error);
          // Optionally, you could provide a user-friendly message here
        }
      }
    };
    applySmoothScroll();
  }, []);

  return (
    <div className='relative'>
      <Navbar />
      <Suspense fallback={<SuspenseFallback />}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/getstarted" element={<GetStartedPage />} />
          <Route path="/thankyou" element={<ThankYouPage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
