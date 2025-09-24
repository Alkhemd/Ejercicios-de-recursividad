import React from 'react';
import { useCalculator } from '../hooks/useCalculator';
import images from '../assets/images';

const Fibonacci = () => {
  const {
    inputs,
    updateInput,
    result,
    loading,
    error,
    handleCalculation
  } = useCalculator('fibonacci', { posicion: '' });

  return (
    <div className="card">
      <h2>
        <span>Fibonacci</span>
        <span className="exercise-number">F(n)</span>
      </h2>
      <img 
        src={images.fibonacci}
        alt="Espiral de Fibonacci"
        className="exercise-image"
      />
      <div className="input-group">
        <label htmlFor="fibonacci-input">Posición en la serie:</label>
        <input 
          id="fibonacci-input"
          type="number"
          value={inputs.posicion}
          onChange={e => updateInput('posicion', e.target.value)}
          placeholder="Ej: 7"
          disabled={loading}
        />
      </div>
      <button 
        onClick={handleCalculation} 
        className="btn-calcular"
        disabled={loading}
      >
        {loading ? 'Calculando...' : 'Calcular'}
      </button>
      
      {loading && <div className="spinner" />}
      
      {error && (
        <div className="error">
          {error}
        </div>
      )}
      
      {result && !error && (
        <div className="result">
          {result}
        </div>
      )}
    </div>
  );
};

export default Fibonacci;
