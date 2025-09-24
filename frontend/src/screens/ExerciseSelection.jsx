import React from 'react';
import { motion } from 'framer-motion';
import images from '../assets/images';

const exercisesList = [
  { id: 'factorial', name: 'Factorial', image: images.factorial },
  { id: 'fibonacci', name: 'Fibonacci', image: images.fibonacci },
  { id: 'mcd', name: 'Máximo Común Divisor', image: images.mcd },
  { id: 'cambioMonedas', name: 'Cambio de Monedas', image: images.cambioMonedas },
  { id: 'torresHanoi', name: 'Torres de Hanói', image: images.torresHanoi },
];

const ExerciseSelection = ({ onSelect }) => {
  return (
    <motion.div 
      className="exercise-selection"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="selection-header">
        <h2 className="selection-title">Selecciona un Ejercicio</h2>
        <p className="selection-subtitle">Elige un algoritmo recursivo para explorar</p>
      </div>
      <div className="exercise-grid">
        {exercisesList.map((exercise, index) => (
          <motion.div
            key={exercise.id}
            className="exercise-card"
            onClick={() => onSelect(exercise.id)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="exercise-image-container">
              <img src={exercise.image} alt={exercise.name} className="exercise-image" />
            </div>
            <h3 className="exercise-title">{exercise.name}</h3>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ExerciseSelection;