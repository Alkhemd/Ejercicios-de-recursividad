// Importar las clases de los modelos
import Factorial from '../models/Factorial';
import Fibonacci from '../models/Fibonacci';
import MCD from '../models/MCD';
import CambioMonedas from '../models/CambioMonedas';
import TorresHanoi from '../models/TorresHanoi';

class CalculationService {
    constructor() {
        this.factorial = new Factorial();
        this.fibonacci = new Fibonacci();
        this.mcd = new MCD();
        this.cambioMonedas = new CambioMonedas();
        this.torresHanoi = new TorresHanoi();
    }

    async calculate(type, ...args) {
        try {
            let result;
            switch(type) {
                case 'factorial':
                    result = this.factorial.calcular(args[0]);
                    break;
                case 'fibonacci':
                    result = this.fibonacci.calcular(args[0]);
                    break;
                case 'mcd':
                    result = this.mcd.calcular(args[0], args[1]);
                    break;
                case 'cambioMonedas':
                    result = this.cambioMonedas.calcular(args[0], args[1]);
                    break;
                case 'torresHanoi':
                    result = this.torresHanoi.calcular(args[0], args[1], args[2]);
                    break;
                default:
                    throw new Error('Tipo de cálculo no soportado');
            }
            return result;
        } catch (error) {
            console.error(`Error en cálculo ${type}:`, error);
            throw new Error(error.message || 'Error al realizar el cálculo');
        }
    }

    validateInput(type, ...args) {
        switch(type) {
            case 'factorial':
                return this.isPositiveInteger(args[0]);
            case 'fibonacci':
                return this.isNonNegativeInteger(args[0]);
            case 'mcd':
                return this.isPositiveInteger(args[0]) && this.isPositiveInteger(args[1]);
            case 'cambioMonedas':
                return this.isValidMoneyAmount(args[0]) && this.isValidMoneyAmount(args[1]);
            case 'torresHanoi':
                return this.isValidHanoiInput(args[0], args[1], args[2]);
            default:
                return false;
        }
    }

    isPositiveInteger(value) {
        const num = Number(value);
        return Number.isInteger(num) && num > 0;
    }

    isNonNegativeInteger(value) {
        const num = Number(value);
        return Number.isInteger(num) && num >= 0;
    }

    isValidMoneyAmount(amount) {
        const num = Number(amount);
        return !isNaN(num) && num > 0 && num <= 99999;
    }

    isValidHanoiInput(discos, origen, destino) {
        const num = Number(discos);
        const torres = ['A', 'B', 'C'];
        return Number.isInteger(num) && 
               num > 0 && 
               num <= 10 && 
               torres.includes(origen?.toUpperCase()) && 
               torres.includes(destino?.toUpperCase()) &&
               origen?.toUpperCase() !== destino?.toUpperCase();
    }
}

// Exportamos una única instancia del servicio
export default new CalculationService();