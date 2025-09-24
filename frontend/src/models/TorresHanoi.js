/* ...código original... */
class TorresHanoi {
    calcular(discos, origen = "A", destino = "C") {
        if (!this.validarDatos(discos, origen, destino)) {
            return "Error: Datos inválidos. Ingresa un número de discos positivo (1-10) y torres válidas (A, B, C)";
        }
        
        const numDiscos = Number(discos);
        const torreOrigen = origen.toUpperCase();
        const torreDestino = destino.toUpperCase();
        const torreAuxiliar = this.obtenerTorreAuxiliar(torreOrigen, torreDestino);
        
        const movimientos = [];
        this.resolverTorres(numDiscos, torreOrigen, torreDestino, torreAuxiliar, movimientos);
        
        return this.formatearResultado(numDiscos, torreOrigen, torreDestino, movimientos);
    }
    
    validarDatos(discos, origen, destino) {
        const num = Number(discos);
        if (isNaN(num) || !Number.isInteger(num) || num <= 0 || num > 10) {
            return false;
        }
        
        const torres = ['A', 'B', 'C'];
        const origenValida = torres.includes(origen.toString().toUpperCase());
        const destinoValida = torres.includes(destino.toString().toUpperCase());
        const sonDiferentes = origen.toString().toUpperCase() !== destino.toString().toUpperCase();
        
        return origenValida && destinoValida && sonDiferentes;
    }
    
    obtenerTorreAuxiliar(origen, destino) {
        const torres = ['A', 'B', 'C'];
        return torres.find(torre => torre !== origen && torre !== destino);
    }
    
    resolverTorres(n, origen, destino, auxiliar, movimientos) {
        if (n === 1) {
            movimientos.push(`Mover disco 1 de torre ${origen} a torre ${destino}`);
            return;
        }
        
        this.resolverTorres(n - 1, origen, auxiliar, destino, movimientos);
        movimientos.push(`Mover disco ${n} de torre ${origen} a torre ${destino}`);
        this.resolverTorres(n - 1, auxiliar, destino, origen, movimientos);
    }
    
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
