import { useState } from 'react';
import calculationService from '../services/calculationService';

export const useCalculator = (type, initialState = {}) => {
    const [inputs, setInputs] = useState(initialState);
    const [result, setResult] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const updateInput = (field, value) => {
        setInputs(prev => ({
            ...prev,
            [field]: value
        }));
        // Limpiar errores cuando el usuario modifica los inputs
        setError(null);
    };

    const handleCalculation = async () => {
        try {
            setLoading(true);
            setError(null);

            // Convertir los inputs a un array de argumentos
            const args = Object.values(inputs);
            
            // Validar inputs
            if (!calculationService.validateInput(type, ...args)) {
                throw new Error('Los datos ingresados no son válidos');
            }

            // Realizar el cálculo
            const resultado = await calculationService.calculate(type, ...args);
            
            if (!resultado) {
                throw new Error('El cálculo no produjo un resultado válido');
            }

            setResult(resultado);
            return true;
        } catch (err) {
            setError(err.message || 'Error al realizar el cálculo');
            console.error('Error en cálculo:', err);
            return false;
        } finally {
            setLoading(false);
        }
    };

    const resetCalculator = () => {
        setInputs(initialState);
        setResult('');
        setError(null);
    };

    return {
        inputs,
        updateInput,
        result,
        loading,
        error,
        handleCalculation,
        resetCalculator
    };
};