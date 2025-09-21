/**
 * EJERCICIO 3: MÁXIMO COMÚN DIVISOR (MCD)
 * El MCD es el número más grande que divide exactamente a dos números
 * Ejemplos: MCD(12,8)=4, MCD(15,25)=5, MCD(7,3)=1
 * Usamos el Algoritmo de Euclides: MCD(a,b) = MCD(b, a%b)
 */
class MCD {
    
    // PILAR POO #1: ENCAPSULACIÓN - Agrupa métodos relacionados en una clase
    calcular(numero1, numero2) {
        // Validar ambos números usando método privado
        if (!this.validarNumeros(numero1, numero2)) {
            return "Error: Ambos números deben ser enteros positivos";
        }
        
        // Convertir a números antes de calcular (evita errores de tipo)
        const num1 = Number(numero1);
        const num2 = Number(numero2);
        const resultado = this.calcularMCD(num1, num2);
        
        // PILAR POO #2: ABSTRACCIÓN - Interfaz simple que oculta complejidad interna
        return `El MCD de ${numero1} y ${numero2} es: ${resultado}`;
    }
    
    // MÉTODO DE VALIDACIÓN - Encapsula la lógica de validación
    validarNumeros(num1, num2) {
        const n1 = Number(num1);
        const n2 = Number(num2);
        // Acepta solo números enteros positivos (1, 2, 3, 4...)
        return !isNaN(n1) && !isNaN(n2) && 
               Number.isInteger(n1) && Number.isInteger(n2) && 
               n1 > 0 && n2 > 0;
    }
    
    // *** AQUÍ ESTÁ LA RECURSIVIDAD *** 🔄
    // MÉTODO RECURSIVO para calcular MCD usando Algoritmo de Euclides
    calcularMCD(a, b) {
        // CASO BASE: cuando b es 0, el MCD es a
        if (b === 0) {
            return a;
        }
        
        // CASO RECURSIVO: MCD(a,b) = MCD(b, a%b)
        // El método se llama a sí mismo con b y el residuo de a÷b
        return this.calcularMCD(b, a % b);
    }
}

// Exportar la clase para usar en main.js
export default MCD;

/*
=== EXPLICACIÓN DE MCD ===

¿QUÉ ES EL MCD (MÁXIMO COMÚN DIVISOR)?
- Es el número más grande que puede dividir exactamente a dos números
- También se llama GCD (Greatest Common Divisor)
- Ejemplo: Los divisores de 12 son: 1,2,3,4,6,12
           Los divisores de 8 son: 1,2,4,8
           Los divisores comunes son: 1,2,4
           El MÁXIMO común divisor es: 4

ALGORITMO DE EUCLIDES:
- Es un método muy eficiente para encontrar el MCD
- Se basa en: MCD(a,b) = MCD(b, a%b)
- Donde a%b es el residuo de dividir a entre b
- Se repite hasta que el residuo sea 0

PILARES POO IMPLEMENTADOS:
1. ENCAPSULACIÓN: Métodos organizados dentro de la clase MCD
2. ABSTRACCIÓN: Método calcular() oculta la complejidad del algoritmo de Euclides

RECURSIVIDAD:
- Está en el método calcularMCD()
- Caso base: cuando b = 0, retorna a
- Caso recursivo: MCD(a,b) = MCD(b, a%b)
- Se llama a sí mismo con parámetros diferentes hasta llegar al caso base

EJEMPLO DE FUNCIONAMIENTO - MCD(12,8):
MCD(12, 8) → MCD(8, 12%8) → MCD(8, 4)
MCD(8, 4)  → MCD(4, 8%4)  → MCD(4, 0)
MCD(4, 0)  → return 4 (caso base)

USOS PRÁCTICOS:
- Simplificar fracciones: 12/8 = 3/2 (dividiendo por MCD=4)
- Problemas de distribución equitativa
- Criptografía y algoritmos matemáticos
*/
