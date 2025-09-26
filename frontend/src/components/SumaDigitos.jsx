import React from 'react';
import { useCalculator } from '../hooks/useCalculator';
import images from '../assets/images';

const SumaDigitos = () => {
  const {
    inputs,
    updateInput,
    result,
    loading,
    error,
    handleCalculation
  } = useCalculator('sumaDigitos', { numero: '' });

  return (
    <div className="card">
      <h2>
        <span>Suma de Dígitos</span>
        <span className="exercise-number">Σd</span>
      </h2>
      <img 
        src={images.sumaDigitos}
        alt="Representación visual de suma de dígitos"
        className="exercise-image"
      />
      <div className="input-group">
        <label htmlFor="numero-input">Ingrese un número:</label>
        <input 
          id="numero-input"
          type="number"
          value={inputs.numero}
          onChange={e => updateInput('numero', e.target.value)}
          placeholder="Ej: 1234"
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

export default SumaDigitos;