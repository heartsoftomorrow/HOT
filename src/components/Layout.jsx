import { Link, Outlet } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3
      }
    },
    open: {
      opacity: 1,
      x: "0%",
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-sm">
        <nav className="container-custom py-4">
          <div className="flex justify-between items-center max-w-7xl mx-auto">
            <Link to="/" className="logo-box group">
              <div className="flex items-center space-x-3">
                <motion.div
                  className="text-primary text-2xl"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  ❤️
                </motion.div>
                <motion.span 
                  className="pixel-font text-base gradient-text"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Hearts of Tomorrow
                </motion.span>
              </div>
            </Link>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-red-700 hover:text-red-800 transition-colors duration-300 p-2 rounded-lg hover:bg-red-50"
              aria-label="Toggle menu"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-8 h-8"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d={isMenuOpen 
                    ? "M6 18L18 6M6 6l12 12" 
                    : "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
                  }
                />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed top-0 right-0 h-full w-64 bg-white/95 backdrop-blur-md z-40 shadow-lg"
          >
            <div className="pt-20 px-6">
              <ul className="flex flex-col space-y-4">
                <li>
                  <Link 
                    to="/" 
                    className="nav-link block text-base tracking-wide" 
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/services" 
                    className="nav-link block text-base tracking-wide" 
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/opportunities" 
                    className="nav-link block text-base tracking-wide" 
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Opportunities
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/partners" 
                    className="nav-link block text-base tracking-wide" 
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Partners
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/about" 
                    className="nav-link block text-base tracking-wide" 
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow pt-24">
        <Outlet />
      </main>

      <footer className="bg-red-50/50 backdrop-blur-sm mt-12">
        <div className="container-custom py-6">
          <div className="text-center text-sm text-red-700/70 font-light tracking-wide">
            <p>&copy; {new Date().getFullYear()} Hearts of Tomorrow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 