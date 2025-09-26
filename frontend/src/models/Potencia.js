/**
 * Clase para calcular la potencia de un número usando recursividad
 * La potencia de a^n es: a multiplicado por sí mismo n veces
 * Ejemplo: 2^3 = 2 × 2 × 2 = 8    
 */
class Potencia {
    calcular(base, exponente) {
        if (!this.validarDatos(base, exponente)) {
            return "Error: Ingresa números válidos. La base puede ser cualquier número y el exponente debe ser un entero no negativo";
        }
        
        // Convertir a números antes de calcular
        const numBase = Number(base);
        const numExponente = Number(exponente);
        const resultado = this.calcularPotencia(numBase, numExponente);
        return `${base}^${exponente} = ${resultado}`;
    }
    
    // Método para validar que los datos sean válidos
    validarDatos(base, exponente) {
        // Convertir a números si son strings
        const numBase = Number(base);
        const numExponente = Number(exponente);
        
        // Verificar que sean números válidos
        const baseValida = !isNaN(numBase);
        const exponenteValido = !isNaN(numExponente) && Number.isInteger(numExponente) && numExponente >= 0;
        
        return baseValida && exponenteValido;
    }
    
    // Método recursivo para calcular la potencia
    calcularPotencia(base, exponente) {
        // Caso base: cualquier número elevado a 0 es 1
        if (exponente === 0) {
            return 1;
        }
        
        // Caso base: cualquier número elevado a 1 es él mismo
        if (exponente === 1) {
            return base;
        }
        
        // Caso recursivo: a^n = a × a^(n-1)
        return base * this.calcularPotencia(base, exponente - 1);
    }
}

export default Potencia;