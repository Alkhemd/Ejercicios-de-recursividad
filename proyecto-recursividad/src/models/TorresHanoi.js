/**
 * Clase para resolver el problema de las Torres de Hanói usando recursividad
 * El objetivo es mover todos los discos de una torre origen a una torre destino
 * siguiendo las reglas: solo se puede mover un disco a la vez y nunca colocar
 * un disco grande sobre uno pequeño
 */
class TorresHanoi {
    calcular(discos, origen = "A", destino = "C") {
        if (!this.validarDatos(discos, origen, destino)) {
            return "Error: Datos inválidos. Ingresa un número de discos positivo (1-10) y torres válidas (A, B, C)";
        }
        
        // Convertir a número y normalizar torres
        const numDiscos = Number(discos);
        const torreOrigen = origen.toUpperCase();
        const torreDestino = destino.toUpperCase();
        const torreAuxiliar = this.obtenerTorreAuxiliar(torreOrigen, torreDestino);
        
        // Array para almacenar los movimientos
        const movimientos = [];
        
        // Resolver las torres recursivamente
        this.resolverTorres(numDiscos, torreOrigen, torreDestino, torreAuxiliar, movimientos);
        
        return this.formatearResultado(numDiscos, torreOrigen, torreDestino, movimientos);
    }
    
    // Método para validar los datos de entrada
    validarDatos(discos, origen, destino) {
        // Validar número de discos
        const num = Number(discos);
        if (isNaN(num) || !Number.isInteger(num) || num <= 0 || num > 10) {
            return false;
        }
        
        // Validar torres
        const torres = ['A', 'B', 'C'];
        const origenValida = torres.includes(origen.toString().toUpperCase());
        const destinoValida = torres.includes(destino.toString().toUpperCase());
        const sonDiferentes = origen.toString().toUpperCase() !== destino.toString().toUpperCase();
        
        return origenValida && destinoValida && sonDiferentes;
    }
    
    // Método para obtener la torre auxiliar
    obtenerTorreAuxiliar(origen, destino) {
        const torres = ['A', 'B', 'C'];
        return torres.find(torre => torre !== origen && torre !== destino);
    }
    
    // Método recursivo principal para resolver las Torres de Hanói
    resolverTorres(n, origen, destino, auxiliar, movimientos) {
        // Caso base: si solo hay 1 disco, moverlo directamente
        if (n === 1) {
            movimientos.push(`Mover disco 1 de torre ${origen} a torre ${destino}`);
            return;
        }
        
        // Caso recursivo:
        // 1. Mover n-1 discos de origen a auxiliar
        this.resolverTorres(n - 1, origen, auxiliar, destino, movimientos);
        
        // 2. Mover el disco más grande de origen a destino
        movimientos.push(`Mover disco ${n} de torre ${origen} a torre ${destino}`);
        
        // 3. Mover n-1 discos de auxiliar a destino
        this.resolverTorres(n - 1, auxiliar, destino, origen, movimientos);
    }
    
    // Método para formatear el resultado
    formatearResultado(numDiscos, origen, destino, movimientos) {
        let resultado = `\n=== TORRES DE HANÓI ===\n`;
        resultado += `Moviendo ${numDiscos} disco(s) de torre ${origen} a torre ${destino}\n`;
        resultado += `Número total de movimientos necesarios: ${movimientos.length}\n`;
        resultado += `Fórmula: 2^${numDiscos} - 1 = ${Math.pow(2, numDiscos) - 1}\n\n`;
        resultado += `=== SECUENCIA DE MOVIMIENTOS ===\n`;
        
        movimientos.forEach((movimiento, index) => {
            resultado += `${index + 1}. ${movimiento}\n`;
        });
        
        resultado += `\n¡Puzzle resuelto en ${movimientos.length} movimientos!`;
        return resultado;
    }
}

export default TorresHanoi;
