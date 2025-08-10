import { useState } from 'react';
import { useLocation } from 'wouter';
import { Menu, X, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export default function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [, setLocation] = useLocation();

  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'services', label: 'Services', icon: '⚙️' },
    { id: 'about', label: 'About', icon: '👤' },
    { id: 'contact', label: 'Contact', icon: '📧' },
  ];

  const handleNavClick = (pageId: string) => {
    onPageChange(pageId);
    setLocation(`/${pageId === 'home' ? '' : pageId}`);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="content-layer fixed top-0 w-full z-50 glass-effect">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div 
            className="text-2xl font-bold gradient-text flex items-center cursor-pointer"
            onClick={() => handleNavClick('home')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Bot className="mr-2" size={28} />
            TARS
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.div
                key={item.id}
                className={`px-4 py-2 rounded-lg cursor-pointer transition-all duration-300 ${
                  currentPage === item.id
                    ? 'bg-gradient-to-r from-white to-gray-400 text-black'
                    : 'hover:bg-gradient-to-r hover:from-white hover:to-gray-400 hover:text-black'
                }`}
                onClick={() => handleNavClick(item.id)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
              </motion.div>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white focus:outline-none"
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden glass-effect"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 py-4 space-y-3">
              {navItems.map((item) => (
                <motion.div
                  key={item.id}
                  className={`px-4 py-2 rounded-lg cursor-pointer transition-all duration-300 ${
                    currentPage === item.id
                      ? 'bg-gradient-to-r from-white to-gray-400 text-black'
                      : 'hover:bg-gradient-to-r hover:from-white hover:to-gray-400 hover:text-black'
                  }`}
                  onClick={() => handleNavClick(item.id)}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="mr-2">{item.icon}</span>
                  {item.label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
