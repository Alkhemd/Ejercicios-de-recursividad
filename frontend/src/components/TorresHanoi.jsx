import React from 'react';
import images from '../assets/images';
import { useCalculator } from '../hooks/useCalculator';

const TorresHanoi = () => {
  const {
    inputs,
    updateInput,
    result,
    loading,
    error,
    handleCalculation
  } = useCalculator('torresHanoi', { 
    discos: '',
    origen: 'A',
    destino: 'C'
  });

  return (
    <div className="card">
      <h2>
        <span>Torres de Hanói</span>
        <span className="exercise-number">H(n)</span>
      </h2>
      <img 
        src={images.torresHanoi}
        alt="Torres de Hanói en movimiento"
        className="exercise-image"
      />
      <div className="input-group">
        <label htmlFor="discos-input">Número de discos:</label>
        <input
          id="discos-input"
          type="number"
          min="1"
          max="10"
          value={inputs.discos}
          onChange={e => updateInput('discos', e.target.value)}
          placeholder="1-10"
          disabled={loading}
        />
      </div>
      <div className="input-group">
        <label htmlFor="origen-input">Torre origen:</label>
        <input
          id="origen-input"
          type="text"
          value={inputs.origen}
          onChange={e => updateInput('origen', e.target.value.toUpperCase())}
          placeholder="A, B o C"
          maxLength={1}
          disabled={loading}
        />
      </div>
      <div className="input-group">
        <label htmlFor="destino-input">Torre destino:</label>
        <input
          id="destino-input"
          type="text"
          value={inputs.destino}
          onChange={e => updateInput('destino', e.target.value.toUpperCase())}
          placeholder="A, B o C"
          maxLength={1}
          disabled={loading}
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

export default TorresHanoi;
