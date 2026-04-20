import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../pages/Home/Shared/Navbar/Navbar';
import Footer from '../pages/Home/Shared/Footer/Footer';

const RootLayout = () => {
  const { pathname } = useLocation();
  const [showScrollTop, setShowScrollTop] = React.useState(false);

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  React.useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      <Navbar />
      <main className="w-full">
        <Outlet />
      </main>
      <Footer />
      {showScrollTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50 inline-flex h-11 w-11 items-center justify-center rounded-full bg-rose-500 text-white shadow-lg transition hover:bg-rose-600"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default RootLayout;
