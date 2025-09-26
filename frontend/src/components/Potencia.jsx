import React from 'react';
import { useCalculator } from '../hooks/useCalculator';
import images from '../assets/images';

const Potencia = () => {
  const {
    inputs,
    updateInput,
    result,
    loading,
    error,
    handleCalculation
  } = useCalculator('potencia', { base: '', exponente: '' });

  return (
    <div className="card">
      <h2>
        <span>Potencia</span>
        <span className="exercise-number">a^n</span>
      </h2>
      <img 
        src={images.potencia}
        alt="Representación visual de potencia"
        className="exercise-image"
      />
      <div className="input-group">
        <label htmlFor="base-input">Base (a):</label>
        <input 
          id="base-input"
          type="number"
          value={inputs.base}
          onChange={e => updateInput('base', e.target.value)}
          placeholder="Ej: 2"
          disabled={loading}
        />
      </div>
      <div className="input-group">
        <label htmlFor="exponente-input">Exponente (n):</label>
        <input 
          id="exponente-input"
          type="number"
          value={inputs.exponente}
          onChange={e => updateInput('exponente', e.target.value)}
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

export default Potencia;