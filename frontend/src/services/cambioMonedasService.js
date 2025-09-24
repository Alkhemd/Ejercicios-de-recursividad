// Servicio para cálculo de cambio de monedas
class CambioMonedasService {
    constructor() {
        this.denominaciones = [10000, 5000, 2000, 1000, 500, 100, 50, 20, 1];
        this.nombres = ["100 pesos", "50 pesos", "20 pesos", "10 pesos", "5 pesos", "1 peso", "50 centavos", "20 centavos", "1 centavo"];
    }

    calcular(totalCompra, dineroRecibido) {
        try {
            if (!totalCompra || !dineroRecibido) {
                return "Error: Ingrese todos los valores";
            }

            const compra = parseFloat(totalCompra);
            const recibido = parseFloat(dineroRecibido);

            if (isNaN(compra) || isNaN(recibido)) {
                return "Error: Ingrese valores numéricos válidos";
            }

            if (recibido < compra) {
                return "Error: El dinero recibido es insuficiente";
            }

            const cambio = (recibido - compra).toFixed(2);
            const centavos = Math.round(cambio * 100);

            const resultado = this.calcularCambioRecursivo(centavos, 0, []);
            return this.formatearResultado(compra, recibido, cambio, resultado);
        } catch (error) {
            return "Error al calcular el cambio";
        }
    }

    calcularCambioRecursivo(cambioRestante, indiceMoneda, resultado) {
        if (cambioRestante === 0 || indiceMoneda >= this.denominaciones.length) {
            return resultado;
        }

        const denominacionActual = this.denominaciones[indiceMoneda];
        const cantidadMonedas = Math.floor(cambioRestante / denominacionActual);

        if (cantidadMonedas > 0) {
            resultado.push({
                denominacion: this.nombres[indiceMoneda],
                cantidad: cantidadMonedas
            });
            return this.calcularCambioRecursivo(
                cambioRestante - (cantidadMonedas * denominacionActual),
                indiceMoneda + 1,
                resultado
            );
        }
        return this.calcularCambioRecursivo(cambioRestante, indiceMoneda + 1, resultado);
    }

    formatearResultado(compra, recibido, cambio, monedas) {
        let resultado = `Compra: $${compra}\n`;
        resultado += `Recibido: $${recibido}\n`;
        resultado += `Cambio total: $${cambio}\n\n`;
        resultado += "Desglose del cambio:\n";
        monedas.forEach(moneda => {
            resultado += `${moneda.cantidad} ${moneda.denominacion}\n`;
        });
        return resultado;
    }
}

// Exportamos una instancia ya creada
export default new CambioMonedasService();
