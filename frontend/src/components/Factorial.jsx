import React from 'react';
import { useCalculator } from '../hooks/useCalculator';
import images from '../assets/images';

const Factorial = () => {
  const {
    inputs,
    updateInput,
    result,
    loading,
    error,
    handleCalculation
  } = useCalculator('factorial', { numero: '' });

  return (
    <div className="card">
      <h2>
        <span>Factorial</span>
        <span className="exercise-number">n!</span>
      </h2>
      <img 
        src={images.factorial}
        alt="Representación visual del factorial"
        className="exercise-image"
      />
      <div className="input-group">
        <label htmlFor="factorial-input">Ingrese un número:</label>
        <input 
          id="factorial-input"
          type="number"
          value={inputs.numero}
          onChange={e => updateInput('numero', e.target.value)}
          placeholder="Ej: 5"
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

export default Factorial;
