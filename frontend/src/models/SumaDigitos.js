/**
 * Clase para calcular la suma de los dígitos de un número usando recursividad
 * La suma de dígitos toma cada dígito del número y los suma
 * Ejemplo: 1234 → 1 + 2 + 3 + 4 = 10    
 */
class SumaDigitos {
    calcular(numero) {
        if (!this.validarNumero(numero)) {
            return "Error: Ingresa un número entero válido (puede ser negativo)";
        }
        
        // Convertir a número y manejar números negativos
        let num = Number(numero);
        const esNegativo = num < 0;
        num = Math.abs(num); // Trabajar con valor absoluto
        
        const resultado = this.calcularSumaDigitos(num);
        const signo = esNegativo ? " (número negativo)" : "";
        return `La suma de los dígitos de ${numero} es: ${resultado}${signo}`;
    }
    
    // Método para validar que el número sea válido
    validarNumero(numero) {
        // Convertir a número si es string
        const num = Number(numero);
        
        // Verificar que sea un número válido y entero
        return !isNaN(num) && Number.isInteger(num);
    }
    
    // Método recursivo para calcular la suma de dígitos
    calcularSumaDigitos(n) {
        // Caso base: si el número es menor que 10 (un solo dígito)
        if (n < 10) {
            return n;
        }
        
        // Caso recursivo: sumar el último dígito + suma de los dígitos restantes
        const ultimoDigito = n % 10;          // Obtener el último dígito
        const digitosRestantes = Math.floor(n / 10); // Obtener los dígitos restantes
        
        return ultimoDigito + this.calcularSumaDigitos(digitosRestantes);
    }
}

export default SumaDigitos;