/**
 * EJERCICIO 4: CAMBIO DE MONEDAS (ALGORITMO GREEDY RECURSIVO)
 * Calcula el mínimo número de monedas para devolver un cambio
 * Denominaciones: 100, 50, 20, 10, 5, 1 peso y 50, 20, 1 centavo
 * Ejemplo: Para devolver 73.26 pesos con 100 pesos → cambio 26.74
 * Resultado: 1 moneda de 20 + 1 de 5 + 1 de 1 + 1 de 50 centavos + 1 de 20 centavos + 4 de 1 centavo
 */
class CambioMonedas {
    
    constructor() {
        // Denominaciones disponibles en centavos (para evitar decimales)
        // 100 pesos = 10000 centavos, 50 pesos = 5000 centavos, etc.
        this.denominaciones = [10000, 5000, 2000, 1000, 500, 100, 50, 20, 1];
        this.nombres = ["100 pesos", "50 pesos", "20 pesos", "10 pesos", "5 pesos", "1 peso", "50 centavos", "20 centavos", "1 centavo"];
    }
    
    // PILAR POO #1: ENCAPSULACIÓN - Agrupa métodos relacionados en una clase
    calcular(totalCompra, dineroRecibido) {
        // Validar entrada usando método privado
        if (!this.validarDatos(totalCompra, dineroRecibido)) {
            return "Error: Datos inválidos. Verifique los montos ingresados.";
        }
        
        // Convertir a centavos para evitar problemas con decimales
        const compraEnCentavos = Math.round(parseFloat(totalCompra) * 100);
        const recibidoEnCentavos = Math.round(parseFloat(dineroRecibido) * 100);
        const cambioEnCentavos = recibidoEnCentavos - compraEnCentavos;
        
        if (cambioEnCentavos < 0) {
            return "Error: El dinero recibido es insuficiente.";
        }
        
        if (cambioEnCentavos === 0) {
            return "No se requiere cambio. Pago exacto.";
        }
        
        // Calcular cambio usando recursión
        const resultado = this.calcularCambioRecursivo(cambioEnCentavos, 0, []);
        
        // PILAR POO #2: ABSTRACCIÓN - Interfaz simple que oculta complejidad interna
        return this.formatearResultado(totalCompra, dineroRecibido, cambioEnCentavos / 100, resultado);
    }
    
    // MÉTODO DE VALIDACIÓN - Encapsula la lógica de validación
    validarDatos(totalCompra, dineroRecibido) {
        const compra = parseFloat(totalCompra);
        const recibido = parseFloat(dineroRecibido);
        
        return !isNaN(compra) && !isNaN(recibido) && 
               compra > 0 && recibido > 0 && 
               compra <= 99999 && recibido <= 99999; // Límites razonables
    }
    
    // *** AQUÍ ESTÁ LA RECURSIVIDAD *** 🔄
    // MÉTODO RECURSIVO para calcular el cambio óptimo (Algoritmo Greedy)
    calcularCambioRecursivo(cambioRestante, indiceMoneda, resultado) {
        // CASO BASE: Si no hay cambio restante, terminamos
        if (cambioRestante === 0) {
            return resultado;
        }
        
        // CASO BASE: Si llegamos al final de las denominaciones
        if (indiceMoneda >= this.denominaciones.length) {
            return resultado;
        }
        
        const denominacionActual = this.denominaciones[indiceMoneda];
        const cantidadMonedas = Math.floor(cambioRestante / denominacionActual);
        
        if (cantidadMonedas > 0) {
            // Agregar las monedas al resultado
            resultado.push({
                denominacion: this.nombres[indiceMoneda],
                cantidad: cantidadMonedas,
                valor: denominacionActual
            });
            
            // CASO RECURSIVO: Continuar con el cambio restante y siguiente denominación
            return this.calcularCambioRecursivo(
                cambioRestante - (cantidadMonedas * denominacionActual),
                indiceMoneda + 1,
                resultado
            );
        } else {
            // CASO RECURSIVO: Esta denominación no se usa, continuar con la siguiente
            return this.calcularCambioRecursivo(cambioRestante, indiceMoneda + 1, resultado);
        }
    }
    
    // Método para formatear el resultado de manera legible
    formatearResultado(totalCompra, dineroRecibido, cambio, monedas) {
        let resultado = `\n=== CÁLCULO DE CAMBIO ===\n`;
        resultado += `Total de compra: $${totalCompra}\n`;
        resultado += `Dinero recibido: $${dineroRecibido}\n`;
        resultado += `Cambio a devolver: $${cambio.toFixed(2)}\n\n`;
        resultado += `=== MONEDAS MÍNIMAS ===\n`;
        
        let totalMonedas = 0;
        monedas.forEach(moneda => {
            resultado += `${moneda.cantidad} moneda(s) de ${moneda.denominacion}\n`;
            totalMonedas += moneda.cantidad;
        });
        
        resultado += `\nTotal de monedas utilizadas: ${totalMonedas}`;
        return resultado;
    }
}

// Exportar la clase para usar en main.js
export default CambioMonedas;

/*
=== EXPLICACIÓN DE CAMBIO DE MONEDAS ===

¿QUÉ ES EL PROBLEMA DE CAMBIO DE MONEDAS?
- Es un problema clásico de optimización
- Objetivo: Devolver un cambio usando el MÍNIMO número de monedas posible
- Se usa en sistemas de punto de venta, cajeros automáticos, etc.

ALGORITMO GREEDY (CODICIOSO):
- Estrategia: Siempre usar la moneda de mayor valor posible
- Funciona porque las denominaciones están organizadas de mayor a menor
- Es óptimo para sistemas monetarios estándar como el mexicano

PILARES POO IMPLEMENTADOS:
1. ENCAPSULACIÓN: Métodos organizados dentro de la clase CambioMonedas
2. ABSTRACCIÓN: Método calcular() oculta la complejidad del algoritmo greedy recursivo

RECURSIVIDAD:
- Está en el método calcularCambioRecursivo()
- Caso base: cuando cambioRestante = 0 o se acabaron las denominaciones
- Caso recursivo: usar una denominación y continuar con el resto
- Se llama a sí mismo con cambio reducido y siguiente denominación

EJEMPLO DE FUNCIONAMIENTO - Cambio de 26.74:
1. 26.74 → usar 1 moneda de 20 pesos → resto: 6.74
2. 6.74 → usar 1 moneda de 5 pesos → resto: 1.74  
3. 1.74 → usar 1 moneda de 1 peso → resto: 0.74
4. 0.74 → usar 1 moneda de 50 centavos → resto: 0.24
5. 0.24 → usar 1 moneda de 20 centavos → resto: 0.04
6. 0.04 → usar 4 monedas de 1 centavo → resto: 0

TOTAL: 8 monedas (solución óptima)

APLICACIONES PRÁCTICAS:
- Sistemas de punto de venta (POS)
- Cajeros automáticos
- Aplicaciones de comercio electrónico
- Sistemas de vending machines
*/
