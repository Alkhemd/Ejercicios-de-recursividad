import React from 'react';
import { motion } from 'framer-motion';

const Welcome = ({ onEnter }) => {
  return (
    <motion.div 
      className="welcome-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.h1
        className="welcome-title"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Ejercicios de Recursividad
      </motion.h1>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="welcome-subtitle"
      >
        Una exploración de algoritmos recursivos
      </motion.p>
      <motion.button
        className="enter-button"
        onClick={onEnter}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Comenzar
      </motion.button>
    </motion.div>
  );
};

export default Welcome;