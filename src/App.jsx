import React, { Suspense, useLayoutEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import { Navbar } from "./components/navbar/navbar";
import { Footer } from "./components/footer";

// Use React.memo for components that don't need to update on every render
const LandingPage = React.memo(React.lazy(() => import("./pages/LandingPage")));
const AboutPage = React.memo(React.lazy(() => import("./pages/AboutPage")));
const GetStartedPage = React.memo(React.lazy(() => import("./pages/GetStartedPage")));

// Optimized ScrollToTop component using useLayoutEffect and route change detection
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); // Depend on pathname for route change

  return null; // This component doesn't render anything directly
};

function App() {
  return (
      <div> {/* Add a className for a root element if needed for global styles */}
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}> {/* Wrap Routes in Suspense */}
          <ScrollToTop /> {/* Render ScrollToTop outside of Routes */}
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/getstarted" element={<GetStartedPage />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
  );
}

export default App;
