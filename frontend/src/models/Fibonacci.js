class Fibonacci {
    calcular(posicion) {
        if (!this.validarNumero(posicion)) {
            return "Error: Debe ser un número entero positivo o cero";
        }
        
        const num = Number(posicion);
        const resultado = this.calcularFibonacci(num);
        
        return `El número en la posición ${posicion} de Fibonacci es: ${resultado}`;
    }
    
    validarNumero(numero) {
        const num = Number(numero);
        return !isNaN(num) && Number.isInteger(num) && num >= 0;
    }
    
    calcularFibonacci(n) {
        if (n === 0) return 0;
        if (n === 1) return 1;
        return this.calcularFibonacci(n - 1) + this.calcularFibonacci(n - 2);
    }
}

export default Fibonacci;
