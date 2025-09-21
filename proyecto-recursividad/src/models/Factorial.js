/**
 * es la clase para poder calcular el factorial de un numero usando recursividad
 * El factorial de n es: n! = n × (n-1) × (n-2) × ... × 1
 * Ejemplo: 5! = 5 × 4 × 3 × 2 × 1 = 120    
 */
class Factorial{
    calcular(numero) {
        if (!this.validarNumero(numero)) {
            return "error: si ingresaste texto o caracter especial no es valido tiene que ser un numero positivo"; 
        }
        
        // Convertir a número antes de calcular
        const num = Number(numero);
        const resultado = this.calcularFactorial(num);
        return `El factorial de ${numero} es: ${resultado}`;
    }
    
    // Método para validar que el número sea entero positivo
    validarNumero(numero) {
        // Convertir a número si es string
        const num = Number(numero);
        
        // Verificar que sea un número válido, entero y positivo
        return !isNaN(num) && Number.isInteger(num) && num >= 0;
    }
    
    // Método recursivo para calcular el factorial
    calcularFactorial(n) {
        // Caso base: 0! = 1 y 1! = 1
        if (n === 0 || n === 1) {
            return 1;
        }
        
        // Caso recursivo: n! = n * (n-1)!
        return n * this.calcularFactorial(n - 1);
    }

}

export default Factorial;