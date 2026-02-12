
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Consultants from './pages/Consultants';
import Tutors from './pages/Tutors';
import WebDesign from './pages/WebDesign';
import Contact from './pages/Contact';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);

  // Sync with Hash for routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as Page;
      if (Object.values(Page).includes(hash)) {
        setCurrentPage(hash);
      } else {
        setCurrentPage(Page.HOME);
      }
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial load

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME: return <Home onNavigate={setCurrentPage} />;
      case Page.CONSULTANTS: return <Consultants />;
      case Page.TUTORS: return <Tutors />;
      case Page.WEB_DESIGN: return <WebDesign />;
      case Page.CONTACT: return <Contact />;
      default: return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-grow pt-20">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
};

export default App;
