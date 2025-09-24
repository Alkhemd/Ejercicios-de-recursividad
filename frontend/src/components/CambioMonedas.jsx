import React from 'react';
import { useCalculator } from '../hooks/useCalculator';
import images from '../assets/images';

const CambioMonedas = () => {
  const {
    inputs,
    updateInput,
    result,
    loading,
    error,
    handleCalculation
  } = useCalculator('cambioMonedas', { compra: '', recibido: '' });

  return (
    <div className="card">
      <h2>
        <span>Cambio de Monedas</span>
        <span className="exercise-number">$</span>
      </h2>
      <img 
        src={images.cambioMonedas}
        alt="Cambio de monedas"
        className="exercise-image"
      />
      <div className="input-group">
        <label htmlFor="compra-input">Total de la compra:</label>
        <input
          id="compra-input"
          type="number"
          value={inputs.compra}
          onChange={e => updateInput('compra', e.target.value)}
          placeholder="Ej: 100.50"
          disabled={loading}
          step="0.01"
          min="0"
        />
      </div>
      <div className="input-group">
        <label htmlFor="recibido-input">Dinero recibido:</label>
        <input
          id="recibido-input"
          type="number"
          value={inputs.recibido}
          onChange={e => updateInput('recibido', e.target.value)}
          placeholder="Ej: 200.00"
          disabled={loading}
          step="0.01"
          min="0"
        />
      </div>
      <button 
        onClick={handleCalculation}
        disabled={loading}
        className="btn-calcular"
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

export default CambioMonedas;
