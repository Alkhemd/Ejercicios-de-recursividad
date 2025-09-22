/**
 * Programa Principal - Ejercicios de Recursividad
 * Menú interactivo para probar los 5 ejercicios
 */
import readline from 'readline';
import Factorial from './models/Factorial.js';
import Fibonacci from './models/Fibonacci.js';
import MCD from './models/MCD.js';
import CambioMonedas from './models/CambioMonedas.js';
import TorresHanoi from './models/TorresHanoi.js';

// Configurar interfaz de entrada
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para mostrar el menú
function mostrarMenu() {
    console.log('\n=======================================');
    console.log('    EJERCICIOS DE RECURSIVIDAD');
    console.log('=======================================');
    console.log('1. Factorial');
    console.log('2. Serie de Fibonacci');
    console.log('3. MCD (Máximo Común Divisor)');
    console.log('4. Cambio de Monedas');
    console.log('5. Torres de Hanói');
    console.log('6. Salir');
    console.log('=======================================');
}

// Función para manejar Cambio de Monedas
async function ejecutarCambioMonedas() {
    return new Promise((resolve) => {
        rl.question('Ingresa el total de la compra: $', (totalCompra) => {
            rl.question('Ingresa el dinero recibido: $', (dineroRecibido) => {
                const cambioMonedas = new CambioMonedas();
                const resultado = cambioMonedas.calcular(totalCompra, dineroRecibido);
                console.log(resultado);
                resolve();
            });
        });
    });
}

// Función para manejar MCD
async function ejecutarMCD() {
    return new Promise((resolve) => {
        rl.question('Ingresa el primer número: ', (num1) => {
            rl.question('Ingresa el segundo número: ', (num2) => {
                const mcd = new MCD();
                const resultado = mcd.calcular(num1, num2);
                console.log('\n' + resultado);
                resolve();
            });
        });
    });
}

// Función para manejar fibonacci
async function ejecutarFibonacci() {
    return new Promise((resolve) => {
        rl.question('Ingresa la posición en la serie de Fibonacci: ', (posicion) => {
            const fibonacci = new Fibonacci();
            const resultado = fibonacci.calcular(posicion);
            console.log('\n' + resultado);
            resolve();
        });
    });
}
async function ejecutarFactorial() {
    return new Promise((resolve) => {
        rl.question('Ingresa un número para calcular su factorial: ', (numero) => {
            const factorial = new Factorial();
            const resultado = factorial.calcular(numero);
            console.log('\n' + resultado);
            resolve();
        });
    });
}

// Función para manejar Torres de Hanói
async function ejecutarTorresHanoi() {
    return new Promise((resolve) => {
        rl.question('Ingresa el número de discos (1-10): ', (discos) => {
            rl.question('Torre origen (A, B, C): ', (origen) => {
                rl.question('Torre destino (A, B, C): ', (destino) => {
                    const torresHanoi = new TorresHanoi();
                    const resultado = torresHanoi.calcular(discos, origen, destino);
                    console.log(resultado);
                    resolve();
                });
            });
        });
    });
}

// Función principal
async function main() {
    console.log('¡Bienvenido a los Ejercicios de Recursividad!');
    
    let continuar = true;
    while (continuar) {
        mostrarMenu();
        
        await new Promise((resolve) => {
            rl.question('Selecciona una opción: ', async (opcion) => {
                switch(opcion) {
                    case '1':
                        await ejecutarFactorial();
                        break;
                    case '2':
                        await ejecutarFibonacci();
                        break;
                    case '3':
                        await ejecutarMCD();
                        break;
                    case '4':
                        await ejecutarCambioMonedas();
                        break;
                    case '5':
                        await ejecutarTorresHanoi();
                        break;
                    case '6':
                        console.log('¡Hasta luego!');
                        continuar = false;
                        break;
                    default:
                        console.log('Opción no válida');
                }
                resolve();
            });
        });
    }
    
    rl.close();
}

// Ejecutar el programa
main();