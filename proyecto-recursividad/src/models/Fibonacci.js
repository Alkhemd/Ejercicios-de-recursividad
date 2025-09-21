/**
 * EJERCICIO 2: SERIE DE FIBONACCI
 * La serie de Fibonacci es: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...
 * Cada número es la suma de los dos anteriores: F(n) = F(n-1) + F(n-2)
 * Ejemplos: F(0)=0, F(1)=1, F(5)=5, F(10)=55
 */
class Fibonacci {
    
    // PILAR POO #1: ENCAPSULACIÓN - Agrupa métodos relacionados en una clase
    calcular(posicion) {
        // Validar entrada usando método privado
        if (!this.validarNumero(posicion)) {
            return "Error: Debe ser un número entero positivo o cero";
        }
        
        // Convertir a número antes de calcular (evita errores de tipo)
        const num = Number(posicion);
        const resultado = this.calcularFibonacci(num);
        
        // PILAR POO #2: ABSTRACCIÓN - Interfaz simple que oculta complejidad interna
        return `El número en la posición ${posicion} de Fibonacci es: ${resultado}`;
    }
    
    // MÉTODO DE VALIDACIÓN - Encapsula la lógica de validación
    validarNumero(numero) {
        const num = Number(numero);
        // Acepta números enteros no negativos (0, 1, 2, 3...)
        return !isNaN(num) && Number.isInteger(num) && num >= 0;
    }
    
    // *** AQUÍ ESTÁ LA RECURSIVIDAD *** 🔄
    // MÉTODO RECURSIVO para calcular Fibonacci
    calcularFibonacci(n) {
        // CASOS BASE: F(0) = 0, F(1) = 1
        if (n === 0) {
            return 0;
        }
        if (n === 1) {
            return 1;
        }
        
        // CASO RECURSIVO: F(n) = F(n-1) + F(n-2)
        // El método se llama a sí mismo dos veces con valores menores
        return this.calcularFibonacci(n - 1) + this.calcularFibonacci(n - 2);
    }
}

// Exportar la clase para usar en main.js
export default Fibonacci;

/*
=== EXPLICACIÓN DE FIBONACCi

¿QUÉ ES FIBONACCI?
- Es una serie matemática donde cada número es la* suma de los dos anteriores
- Empieza con 0 y 1: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...
- Se encuentra en la naturaleza: espirales de caracoles, pétalos de flores, etc.

PILARES POO IMPLEMENTADOS:
1. ENCAPSULACIÓN: Métodos organizados dentro de la clase Fibonacci
2. ABSTRACCIÓN: Método calcular() oculta la complejidad del algoritmo recursivo

RECURSIVIDAD:
- Está en el método calcularFibonacci()
- Casos base: F(0)=0, F(1)=1
- Caso recursivo: F(n) = F(n-1) + F(n-2)
- Se llama a sí mismo hasta llegar a los casos base

EJEMPLO DE FUNCIONAMIENTO:
F(5) = F(4) + F(3)
     = (F(3) + F(2)) + (F(2) + F(1))
     = ((F(2) + F(1)) + (F(1) + F(0))) + ((F(1) + F(0)) + 1)
     = ((1 + 1) + (1 + 0)) + ((1 + 0) + 1)
     = (2 + 1) + (1 + 1)
     = 3 + 2 = 5
*/
