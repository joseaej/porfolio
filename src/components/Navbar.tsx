import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage } = useLanguage();

  const navLinks = [
    { id: 'home', label: translations[language].nav.home },
    { id: 'about', label: translations[language].nav.about },
    { id: 'skills', label: translations[language].nav.skills },
    { id: 'projects', label: translations[language].nav.projects },
    { id: 'contact', label: translations[language].nav.contact },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
      closeMenu();
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'blur-backdrop py-3' : 'py-5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.a
          href="#home"
          className="text-2xl font-bold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-primary-500">Port</span>
          <span className="text-secondary-500">folio</span>
        </motion.a>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <motion.button
              key={link.id}
              className="text-gray-300 hover:text-primary-400 transition-colors"
              onClick={() => scrollToSection(link.id)}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              {link.label}
            </motion.button>
          ))}
          <motion.button
            className="flex items-center space-x-1 text-gray-300 hover:text-primary-400 transition-colors"
            onClick={toggleLanguage}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Globe size={20} />
            <span className="ml-1">{language.toUpperCase()}</span>
          </motion.button>
        </div>

        <div className="md:hidden flex items-center space-x-4">
          <motion.button
            className="text-gray-300 hover:text-primary-400 transition-colors"
            onClick={toggleLanguage}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Globe size={20} />
          </motion.button>
          <motion.button
            className="text-gray-300 focus:outline-none"
            onClick={toggleMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      <motion.nav
        className={`md:hidden absolute top-full left-0 w-full blur-backdrop ${
          isOpen ? 'block' : 'hidden'
        }`}
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? 'auto' : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-4 py-5 space-y-3">
          {navLinks.map((link) => (
            <motion.button
              key={link.id}
              className="block w-full text-left py-2 text-gray-300 hover:text-primary-400 transition-colors"
              onClick={() => scrollToSection(link.id)}
              whileHover={{ x: 4 }}
            >
              {link.label}
            </motion.button>
          ))}
        </div>
      </motion.nav>
    </motion.header>
  );
};

export default Navbar;