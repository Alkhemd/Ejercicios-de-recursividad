/* ...código original... */
class CambioMonedas {
    constructor() {
        this.denominaciones = [10000, 5000, 2000, 1000, 500, 100, 50, 20, 1];
        this.nombres = ["100 pesos", "50 pesos", "20 pesos", "10 pesos", "5 pesos", "1 peso", "50 centavos", "20 centavos", "1 centavo"];
    }

    calcular(totalCompra, dineroRecibido) {
        if (!this.validarDatos(totalCompra, dineroRecibido)) {
            return "Error: Datos inválidos. Verifique los montos ingresados.";
        }
        
        const compraEnCentavos = Math.round(parseFloat(totalCompra) * 100);
        const recibidoEnCentavos = Math.round(parseFloat(dineroRecibido) * 100);
        const cambioEnCentavos = recibidoEnCentavos - compraEnCentavos;
        
        if (cambioEnCentavos < 0) {
            return "Error: El dinero recibido es insuficiente.";
        }
        
        if (cambioEnCentavos === 0) {
            return "No se requiere cambio. Pago exacto.";
        }
        
        const resultado = this.calcularCambioRecursivo(cambioEnCentavos, 0, []);
        return this.formatearResultado(totalCompra, dineroRecibido, cambioEnCentavos / 100, resultado);
    }

    validarDatos(totalCompra, dineroRecibido) {
        const compra = parseFloat(totalCompra);
        const recibido = parseFloat(dineroRecibido);
        
        return !isNaN(compra) && !isNaN(recibido) && 
               compra > 0 && recibido > 0 && 
               compra <= 99999 && recibido <= 99999;
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

export default CambioMonedas;
