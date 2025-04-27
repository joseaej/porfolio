import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-dark-900 flex items-center justify-center z-50">
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative">
          <motion.div
            className="w-16 h-16 border-4 border-primary-400 border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          ></motion.div>
          <motion.div
            className="absolute top-0 left-0 w-full h-full border-4 border-secondary-400 border-b-transparent rounded-full"
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          ></motion.div>
        </div>
        <motion.p
          className="mt-4 text-gray-300 text-lg font-medium"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Loading...
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Loader;