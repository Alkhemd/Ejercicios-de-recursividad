class Factorial {
    calcular(numero) {
        if (!this.validarNumero(numero)) {
            return "error: si ingresaste texto o caracter especial no es valido tiene que ser un numero positivo"; 
        }
        
        const num = Number(numero);
        const resultado = this.calcularFactorial(num);
        return `El factorial de ${numero} es: ${resultado}`;
    }
    
    validarNumero(numero) {
        const num = Number(numero);
        return !isNaN(num) && Number.isInteger(num) && num >= 0;
    }
    
    calcularFactorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        }
        return n * this.calcularFactorial(n - 1);
    }
}

export default Factorial;
