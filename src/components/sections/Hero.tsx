import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../translations';

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary-500/10 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-secondary-500/10 blur-3xl" />
      </div>

      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="inline-block px-3 py-1 mb-6 text-sm font-medium bg-primary-500/10 text-primary-400 rounded-full"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Full-Stack Developer
            </motion.span>
            
            <motion.h1 
              className="mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {t.hero.title}
              <br />
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-400 mb-8 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              {t.hero.description}
            </motion.p>
            
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <a href="#projects" className="btn btn-primary">
                {t.hero.viewProjects} <ArrowRight size={18} className="ml-2" />
              </a>
              <a href="#contact" className="btn btn-outline">
                {t.hero.contactMe}
              </a>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-5 mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              <motion.a
                href="https://github.com/joseaej"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={22} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/joseespjim/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={22} />
              </motion.a>
              <motion.a
                href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSBnpsJSqHpzWSHdJNHpXfgzDZbBHXlJQGjCdlBZRcTSLqXQfBMJSGMPTsvXVMVzWVVwMGCS"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={22} />
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="relative w-full max-w-md mx-auto lg:mx-0 lg:ml-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative z-10">
              <div className="w-full aspect-square rounded-2xl overflow-hidden border-2 border-dark-700 bg-dark-800">
                <img 
                  src="https://res.cloudinary.com/dnoepqtjm/image/upload/t_profile_image/161727897_hb7sur" 
                  alt="Profile" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-full aspect-square rounded-2xl border-2 border-primary-500/20 z-[-1]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;