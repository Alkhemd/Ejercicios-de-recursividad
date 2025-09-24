/* ...código original... */
class MCD {
    calcular(numero1, numero2) {
        if (!this.validarNumeros(numero1, numero2)) {
            return "Error: Ambos números deben ser enteros positivos";
        }
        
        const num1 = Number(numero1);
        const num2 = Number(numero2);
        const resultado = this.calcularMCD(num1, num2);
        
        return `El MCD de ${numero1} y ${numero2} es: ${resultado}`;
    }
    
    validarNumeros(num1, num2) {
        const n1 = Number(num1);
        const n2 = Number(num2);
        return !isNaN(n1) && !isNaN(n2) && 
               Number.isInteger(n1) && Number.isInteger(n2) && 
               n1 > 0 && n2 > 0;
    }
    
    calcularMCD(a, b) {
        if (b === 0) return a;
        return this.calcularMCD(b, a % b);
    }
}

export default MCD;
