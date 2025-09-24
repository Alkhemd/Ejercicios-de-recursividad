import React from 'react';
import { useCalculator } from '../hooks/useCalculator';
import images from '../assets/images';

const MCD = () => {
  const {
    inputs,
    updateInput,
    result,
    loading,
    error,
    handleCalculation
  } = useCalculator('mcd', { num1: '', num2: '' });

  return (
    <div className="card">
      <h2>
        <span>Máximo Común Divisor</span>
        <span className="exercise-number">MCD</span>
      </h2>
      <img 
        src={images.mcd}
        alt="Algoritmo de Euclides"
        className="exercise-image"
      />
      <div className="input-group">
        <label htmlFor="mcd-input1">Primer número:</label>
        <input 
          id="mcd-input1"
          type="number"
          value={inputs.num1}
          onChange={e => updateInput('num1', e.target.value)}
          placeholder="Ej: 12"
          disabled={loading}
        />
      </div>
      <div className="input-group">
        <label htmlFor="mcd-input2">Segundo número:</label>
        <input 
          id="mcd-input2"
          type="number"
          value={inputs.num2}
          onChange={e => updateInput('num2', e.target.value)}
          placeholder="Ej: 8"
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

export default MCD;
