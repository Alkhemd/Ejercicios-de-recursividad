# 📊 Proyecto de Recursividad - Ejercicios de Programación

## 🎯 Descripción del Proyecto

Este proyecto implementa 5 ejercicios clásicos de recursividad utilizando JavaScript moderno y Programación Orientada a Objetos. Cada ejercicio está implementado como una clase independiente que puede ser utilizada tanto en terminal como en aplicaciones web.

## 🏗️ Estructura del Proyecto

```
proyecto-recursividad/
├── src/
│   ├── models/           # Clases de los ejercicios
│   │   ├── Factorial.js     # Ejercicio 1: Cálculo de factorial
│   │   ├── Fibonacci.js     # Ejercicio 2: Serie de Fibonacci
│   │   ├── MCD.js          # Ejercicio 3: Máximo Común Divisor
│   │   ├── CambioMonedas.js # Ejercicio 4: Cambio de monedas
│   │   └── TorresHanoi.js   # Ejercicio 5: Torres de Hanói (pendiente)
│   ├── utils/            # Utilidades (disponible para futuras mejoras)
│   │   └── Validaciones.js
│   └── main.js           # Programa principal con menú interactivo
├── docs/                 # Documentación del proyecto
├── public/               # Archivos para interfaz web (tu parte)
├── package.json          # Configuración del proyecto
└── README.md            # Este archivo
```

## 🚀 Cómo Ejecutar el Proyecto

### Ejecutar en Terminal:
```bash
npm start
```

Esto abrirá un menú interactivo donde puedes probar cada ejercicio.

## 📝 Ejercicios Implementados

### ✅ Ejercicio 1: Factorial
- **Archivo:** `src/models/Factorial.js`
- **Descripción:** Calcula el factorial de un número usando recursividad
- **Uso:** `factorial.calcular(5)` → `"El factorial de 5 es: 120"`

### ✅ Ejercicio 2: Fibonacci
- **Archivo:** `src/models/Fibonacci.js`
- **Descripción:** Calcula números de la serie de Fibonacci
- **Uso:** `fibonacci.calcular(7)` → `"El número en la posición 7 de Fibonacci es: 13"`

### ✅ Ejercicio 3: MCD (Máximo Común Divisor)
- **Archivo:** `src/models/MCD.js`
- **Descripción:** Calcula el MCD de dos números usando el Algoritmo de Euclides
- **Uso:** `mcd.calcular(12, 8)` → `"El MCD de 12 y 8 es: 4"`

### ✅ Ejercicio 4: Cambio de Monedas
- **Archivo:** `src/models/CambioMonedas.js`
- **Descripción:** Calcula el cambio óptimo con mínimo número de monedas
- **Uso:** `cambio.calcular(73.26, 100)` → Devuelve desglose completo del cambio

### ✅ Ejercicio 5: Torres de Hanói
- **Archivo:** `src/models/TorresHanoi.js`
- **Descripción:** Resuelve el clásico problema de las Torres de Hanói con recursividad
- **Uso:** `torresHanoi.calcular(3, "A", "C")` → Muestra secuencia de movimientos para resolver el puzzle

## 🔧 Cómo Usar las Clases en HTML/JavaScript

### Importar las clases:
```javascript
import Factorial from './src/models/Factorial.js';
import Fibonacci from './src/models/Fibonacci.js';
import MCD from './src/models/MCD.js';
import CambioMonedas from './src/models/CambioMonedas.js';
import TorresHanoi from './src/models/TorresHanoi.js';
```

### Ejemplos de uso:

#### Factorial:
```javascript
const factorial = new Factorial();
const resultado = factorial.calcular(5);
console.log(resultado); // "El factorial de 5 es: 120"
```

#### Fibonacci:
```javascript
const fibonacci = new Fibonacci();
const resultado = fibonacci.calcular(7);
console.log(resultado); // "El número en la posición 7 de Fibonacci es: 13"
```

#### MCD:
```javascript
const mcd = new MCD();
const resultado = mcd.calcular(12, 8);
console.log(resultado); // "El MCD de 12 y 8 es: 4"
```

#### Cambio de Monedas:
```javascript
const cambioMonedas = new CambioMonedas();
const resultado = cambioMonedas.calcular(73.26, 100);
console.log(resultado); // Desglose completo del cambio
```

#### Torres de Hanói:
```javascript
const torresHanoi = new TorresHanoi();
const resultado = torresHanoi.calcular(3, "A", "C");
console.log(resultado); // Secuencia completa de movimientos para resolver el puzzle
```

## 🎨 Para el Desarrollador de HTML

### Validaciones Incluidas ✅
- Todas las clases incluyen validaciones robustas
- Manejo de errores integrado
- Conversión automática de tipos (string → number)

### Casos de Error Manejados:
- Números negativos
- Texto en lugar de números
- Números decimales donde no corresponde
- Valores fuera de rango

### Ejemplos de Errores:
```javascript
factorial.calcular("abc")  // → "Error: debe ser un numero entero positivo"
mcd.calcular(-5, 10)       // → "Error: Ambos números deben ser enteros positivos"
```

## 🏛️ Arquitectura del Código

### Principios POO Aplicados:
1. **Encapsulación:** Cada clase agrupa métodos relacionados
2. **Abstracción:** Interfaces simples que ocultan complejidad

### Estructura de Cada Clase:
```javascript
class EjercicioX {
    // Método principal público
    calcular(parametros) {
        // Validaciones
        // Conversiones de tipo
        // Llamada al método recursivo
        // Formateo del resultado
    }
    
    // Método de validación privado
    validarDatos(datos) {
        // Lógica de validación
    }
    
    // Método recursivo privado
    calcularRecursivo(parametros) {
        // Caso base
        // Caso recursivo
    }
}
```

## 🌐 Integración con HTML

### Ejemplo de formulario HTML:
```html
<div>
    <label>Número para factorial:</label>
    <input type="number" id="numeroFactorial">
    <button onclick="calcularFactorial()">Calcular</button>
    <div id="resultadoFactorial"></div>
</div>

<script type="module">
import Factorial from './src/models/Factorial.js';

function calcularFactorial() {
    const numero = document.getElementById('numeroFactorial').value;
    const factorial = new Factorial();
    const resultado = factorial.calcular(numero);
    document.getElementById('resultadoFactorial').innerHTML = resultado;
}

// Hacer la función global para el onclick
window.calcularFactorial = calcularFactorial;
</script>
```

## 📋 Notas Importantes

### Para el desarrollador HTML:
1. **Imports:** Usar `type="module"` en el script
2. **Rutas:** Ajustar rutas según estructura de archivos
3. **Validaciones:** Ya están incluidas en las clases
4. **Errores:** Los métodos retornan strings legibles para mostrar al usuario
5. **Formatos:** Todos los resultados vienen formateados y listos para mostrar

### Próximos pasos:
- [x] Implementar Torres de Hanói (Ejercicio 5)
- [ ] Crear interfaz web completa
- [ ] Añadir estilos CSS
- [ ] Testing adicional

## 👥 Equipo

- **Desarrollador Backend/Lógica:** [Tu nombre] - Ejercicios 1-4 + Estructura
- **Desarrollador Frontend/HTML:** [Nombre del amigo] - Ejercicio 5 + Interfaz Web
- **Documentación:** [Tercer integrante] - Documentación final

---

**📝 Última actualización:** 22 de septiembre de 2025  
**🚀 Estado:** 5/5 ejercicios completados, listo para integración HTML

---

## 🔗 GUÍA PARA INTEGRAR NUEVO EJERCICIO AL MAIN.JS

### 📋 Para el desarrollador del Ejercicio 5 (Torres de Hanói)

Esta sección explica **paso a paso** cómo integrar una nueva clase de ejercicio al programa principal (`main.js`).

### 🎯 Pasos para Agregar un Nuevo Ejercicio:

#### **PASO 1: Crear la clase del ejercicio**
```javascript
// En src/models/TorresHanoi.js
class TorresHanoi {
    calcular(parametros) {
        // Tu lógica aquí
        return "Resultado formateado";
    }
    
    validarDatos(datos) {
        // Validaciones
        return true/false;
    }
    
    calcularRecursivo(parametros) {
        // Lógica recursiva
    }
}

export default TorresHanoi;
```

#### **PASO 2: Importar en main.js**
```javascript
// Agregar esta línea en la sección de imports (línea 5-8)
import TorresHanoi from './models/TorresHanoi.js';
```

#### **PASO 3: Actualizar el menú**
```javascript
// Modificar la función mostrarMenu() (línea 15-25)
function mostrarMenu() {
    console.log('\n=======================================');
    console.log('    EJERCICIOS DE RECURSIVIDAD');
    console.log('=======================================');
    console.log('1. Factorial');
    console.log('2. Serie de Fibonacci');
    console.log('3. MCD (Máximo Común Divisor)');
    console.log('4. Cambio de Monedas');
    console.log('5. Torres de Hanói');          // ← AGREGAR ESTA LÍNEA
    console.log('6. Salir');                    // ← CAMBIAR NÚMERO
    console.log('=======================================');
}
```

#### **PASO 4: Crear función ejecutora**
```javascript
// Agregar esta función antes de la función main() (línea 80 aprox)
async function ejecutarTorresHanoi() {
    return new Promise((resolve) => {
        // Pedir los parámetros que necesite tu ejercicio
        rl.question('Ingresa el número de discos: ', (discos) => {
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
```

#### **PASO 5: Agregar al switch**
```javascript
// Modificar el switch en la función main() (línea 95 aprox)
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
    case '5':                              // ← AGREGAR ESTE CASO
        await ejecutarTorresHanoi();       // ← AGREGAR ESTA LÍNEA
        break;                             // ← AGREGAR ESTE BREAK
    case '6':                              // ← CAMBIAR NÚMERO
        console.log('¡Hasta luego!');
        continuar = false;
        break;
    default:
        console.log('Opción no válida');
}
```

### 🔧 Ejemplo Completo de Integración:

#### **Archivo: TorresHanoi.js**
```javascript
class TorresHanoi {
    calcular(discos, origen, destino) {
        if (!this.validarDatos(discos, origen, destino)) {
            return "Error: Datos inválidos";
        }
        
        const auxiliar = this.obtenerTorreAuxiliar(origen, destino);
        const movimientos = [];
        this.resolverTorres(Number(discos), origen, destino, auxiliar, movimientos);
        
        return this.formatearResultado(discos, movimientos);
    }
    
    validarDatos(discos, origen, destino) {
        const num = Number(discos);
        const torres = ['A', 'B', 'C'];
        return !isNaN(num) && num > 0 && num <= 10 && 
               torres.includes(origen.toUpperCase()) && 
               torres.includes(destino.toUpperCase()) &&
               origen.toUpperCase() !== destino.toUpperCase();
    }
    
    resolverTorres(n, origen, destino, auxiliar, movimientos) {
        if (n === 1) {
            movimientos.push(`Mover disco de ${origen} a ${destino}`);
            return;
        }
        
        this.resolverTorres(n-1, origen, auxiliar, destino, movimientos);
        movimientos.push(`Mover disco de ${origen} a ${destino}`);
        this.resolverTorres(n-1, auxiliar, destino, origen, movimientos);
    }
    
    obtenerTorreAuxiliar(origen, destino) {
        const torres = ['A', 'B', 'C'];
        return torres.find(torre => torre !== origen.toUpperCase() && torre !== destino.toUpperCase());
    }
    
    formatearResultado(discos, movimientos) {
        let resultado = `\n=== TORRES DE HANÓI ===\n`;
        resultado += `Número de discos: ${discos}\n`;
        resultado += `Movimientos necesarios: ${movimientos.length}\n\n`;
        resultado += `=== SECUENCIA DE MOVIMIENTOS ===\n`;
        movimientos.forEach((movimiento, index) => {
            resultado += `${index + 1}. ${movimiento}\n`;
        });
        return resultado;
    }
}

export default TorresHanoi;
```

### ✅ Puntos Importantes a Recordar:

1. **Mantén el patrón:** Todas las clases tienen `calcular()`, `validarDatos()` y método recursivo
2. **Importa correctamente:** Usa la sintaxis `import ... from ...`
3. **Actualiza números:** Cambia "Salir" de opción 4 a 6
4. **Función asíncrona:** Usa `async/await` y `Promise` para las preguntas
5. **Retorna strings:** Los métodos deben retornar strings formateados para mostrar
6. **Exporta la clase:** No olvides `export default` al final

### 🧪 Para Probar tu Integración:
```bash
npm start
# Selecciona opción 5
# Prueba con: 3 discos, Torre A a Torre C
```

**¡Siguiendo estos pasos tu ejercicio se integrará perfectamente al proyecto!** 🚀
