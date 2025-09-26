import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Welcome from './screens/Welcome';
import ExerciseSelection from './screens/ExerciseSelection';
import Factorial from './components/Factorial';
import Fibonacci from './components/Fibonacci';
import MCD from './components/MCD';
import TorresHanoi from './components/TorresHanoi';
import CambioMonedas from './components/CambioMonedas';
import Potencia from './components/Potencia';
import SumaDigitos from './components/SumaDigitos';
import './styles/theme.css';
import './styles/main.css';

const ejercicios = {
  factorial: <Factorial />,
  fibonacci: <Fibonacci />,
  mcd: <MCD />,
  cambioMonedas: <CambioMonedas />,
  torresHanoi: <TorresHanoi />,
  potencia: <Potencia />,
  sumaDigitos: <SumaDigitos />
};

function App() {
  const [screen, setScreen] = useState('welcome');
  const [selectedExercise, setSelectedExercise] = useState(null);

  const handleBack = () => {
    if (selectedExercise) {
      setSelectedExercise(null);
      setScreen('selection');
    } else if (screen === 'selection') {
      setScreen('welcome');
    }
  };

  return (
    <div className="app-container">
      <AnimatePresence mode="wait">
        {screen === 'welcome' && (
          <Welcome 
            key="welcome"
            onEnter={() => setScreen('selection')} 
          />
        )}
        
        {screen === 'selection' && !selectedExercise && (
          <ExerciseSelection 
            key="selection"
            onSelect={(exerciseId) => {
              setSelectedExercise(exerciseId);
            }} 
          />
        )}

        {selectedExercise && (
          <motion.div 
            key="exercise"
            className="exercise-container"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
          >
            <div className="exercise-header">
              <button className="back-button" onClick={handleBack}>
                ← Volver al Menú
              </button>
              <h2 className="exercise-name">
                {selectedExercise === 'factorial' && 'Factorial'}
                {selectedExercise === 'fibonacci' && 'Fibonacci'}
                {selectedExercise === 'mcd' && 'Máximo Común Divisor'}
                {selectedExercise === 'cambioMonedas' && 'Cambio de Monedas'}
                {selectedExercise === 'torresHanoi' && 'Torres de Hanói'}
                {selectedExercise === 'potencia' && 'Potencia'}
                {selectedExercise === 'sumaDigitos' && 'Suma de Dígitos'}
              </h2>
            </div>
            <div className="exercise-content">
              {ejercicios[selectedExercise]}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
