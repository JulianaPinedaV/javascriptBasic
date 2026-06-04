/* Ejercicio 1. Calculadora con Penalización de Tiempo
Crea una función `calcular(a, b, operacion)` que devuelva una promesa. 
* Si la operación es `"suma"`, tarda 1 segundo y devuelve `a + b`.
* Si es `"resta"`, tarda 2 segundos y devuelve `a - b`.
* Si la operación no es válida, se rechaza inmediatamente con el error `"Operación no soportada"`.
* *Resuélvelo usando `.then().catch()` y `async/await` con `try/catch`. */

/* function calcular(a, b, operacion) {
    return new Promise((resolve, reject) => {
        if (operacion === "suma") {
            setTimeout(() => {
                resolve(a + b)
            }, 1000);
        } else if (operacion === "resta") {
            setTimeout(() => {
                resolve(a - b)
            }, 2000);
        } else {
            reject("operacion no soportada")
        }
    })
};

calcular(1, 2, "suma")
    .then((resultado) => {
        console.log("El resultado es:", resultado)
    })
    .catch((error) => {
        console.log(error)
    })

async function calcularAsync(a, b, operacion) {
    try {
        const resultado = await calcular(a, b, operacion);
        console.log("El resultado es:", resultado)
    } catch (error) {
        console.log(error)
    }
}

calcularAsync(10, 20, "resta"); */

/* Ejercicio 2. El Validador de Números Primos Asíncrono
Crea una función que reciba un número. Tras 1.5 segundos, debe evaluar si el número es primo. 
* Si es primo, resuelve la promesa con el mensaje: `"El número X es primo"`.
* Si no lo es, la rechaza diciendo: `"El número X no es primo y es divisible por Y"` (donde Y es el primer divisor encontrado). */

/* Ejercicio 3. Crea una función `evaluarDiscoteca(edad, dinero)`. Tras 800ms:
* Si es menor de 18 años, rechaza con `"Acceso denegado: Menor de edad"`.
* Si tiene 18 años o más pero menos de $50 para la entrada, rechaza con `"Acceso denegado: Fondos insuficientes"`.
* Si cumple ambos requisitos, calcula el vuelto (dinero - $50) y resuelve con `"Acceso concedido. Tu vuelto es de $X"`. */

/* function evaluarDiscoteca(edad, dinero) {
    return new Promise((resolve, reject) => {
        if (edad < 18) {
            setTimeout(() => {
                reject("Acceso denegado: Menor de edad")
            }, 800);
        } else if (edad >= 18 && dinero < 50) {
            setTimeout(() => {
                reject("Acceso denegado: Fondos insuficientes")
            }, 800);
        } else {
            setTimeout(() => {
                const vuelto = dinero - 50
                resolve(`Acceso concedido. Tu vuelto es de ${vuelto}`)
            }, 800)
        }
    })
}

async function accesoDiscotecaAsync(edad, dinero) {
    try {
        const resultado = await evaluarDiscoteca(edad, dinero)
        console.log("El acceso es:", resultado)
    } catch (error) {
        console.log("El acceso es:", error)
    }
}

accesoDiscotecaAsync(20, 50);
accesoDiscotecaAsync(17, 50);
accesoDiscotecaAsync(20, 70);
accesoDiscotecaAsync(20, 40); */

/* Ejercicio 4. El Parcial Universitario (Aprobado / Reprobado)
Crea una función que reciba un array de 3 notas. Tras 1 segundo, calcula el promedio ponderado (Nota 1: 30%, Nota 2: 30%, Nota 3: 40%).
* Si el promedio es mayor o igual a 4.0, resuelve con `"Aprobado con X"`.
* Si es menor a 4.0, pero mayor o igual a 3.5, resuelve con `"Fuiste a recuperación con X"`.
* Si es menor a 3.5, rechaza con `"Reprobado directamente con X"`. */


/* function evaluarNotas(notas) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const promedio = (notas[0] * 0.30) + (notas[1] * 0.30) + (notas[2] * 0.40);
            const resultado = promedio.toFixed(2);
            if (promedio >= 4.0) {
                resolve(`Aprobado con ${resultado}`)
            } else if (promedio >= 3.5) {
                resolve(`Fuiste a recuperación con ${resultado}`)
            } else {
                reject(`Reprobado directamente con ${resultado}`)
            }
        }, 1000);
    });
}

async function calcularNotasAsync (notas) {
    try {
        const resultado = await evaluarNotas(notas) 
        console.log(resultado)
    } catch (error) {
        console.log(error)
    }
};

calcularNotasAsync([3.5, 3.0, 2.5]);
calcularNotasAsync([5, 3.0, 5]); */

/* Ejercicio 5. Crea una función `retirarDinero(saldoActual, cantidadARetirar)`. Tras 2 segundos:
* Si la cantidad a retirar es mayor al saldo actual, rechaza con `"Fondos insuficientes"`.
* Si la cantidad es múltiplo de 10 (billetes disponibles), resuelve con un objeto: `{ saldoRestante: X, billetesEntregados: cantidad / 10 }`.
* Si no es múltiplo de 10, rechaza con `"El cajero solo entrega billetes de 10"`. */

/* function retirarDinero(saldoActual, cantidadARetirar) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (cantidadARetirar > saldoActual) {
                reject("Fondos insuficientes");
            } else if (cantidadARetirar % 10 !== 0) {
                reject("El cajero solo entrega billetes de 10");
            } else {
                const saldoRestante = saldoActual - cantidadARetirar;
                const billetesEntregados = cantidadARetirar / 10;
                resolve({ saldoRestante, billetesEntregados });
            }
        }, 2000);
    });
}

async function retirarDineroAsync(saldoActual, cantidadARetirar) {
    try {
        const resultado = await retirarDinero(saldoActual, cantidadARetirar);
        console.log("Retiro exitoso:", resultado);
    } catch (error) {
        console.log("Error al retirar dinero:", error);
    }
}

retirarDineroAsync(100, 50);
retirarDineroAsync(100, 35);
retirarDineroAsync(100, 120); */

/* Ejercicio 6. Crea tres funciones independientes que se deben ejecutar en orden estricto:
1. `cortarMadera(cantidad)` -> Tarda 1s. Si cantidad < 5, rechaza. Si no, devuelve `piezas = cantidad * 4`.
2. `ensamblarJuguete(piezas)` -> Tarda 1s. Cada juguete requiere 3 piezas. Devuelve un objeto `{ juguetes: Math.floor(piezas / 3), sobrante: piezas % 3 }`.
3. `pintarJuguetes(objetoJuguetes)` -> Tarda 1s. Si los juguetes son 0, rompe el flujo. Si no, devuelve el costo total de pintura (`juguetes * 2`).
* *Resuelve encadenando con `.then()` y luego reescríbelo de forma plana con `async/await`.* */

/* function cortarMadera (cantidad) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (cantidad < 5) {
                reject ("Cantidad insuficiente")
            } else {
                const piezas = cantidad * 4
                resolve (piezas)
            }
        }, 1000);
    });
}

function ensamblarJuguete(piezas) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                juguetes: Math.floor(piezas / 3),
                sobrante: piezas % 3
            });
        }, 1000);
    });
}

function pintarJuguetes(objetoJuguetes) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (objetoJuguetes.juguetes === 0) {
                reject("Juguetes insuficientes")
            } else {
                resolve(objetoJuguetes.juguetes *2)
            }
        }, 1000);
    })
}

cortarMadera(5)
    .then((piezas) => {
        console.log("Piezas:", piezas);
        return ensamblarJuguete(piezas);
    })
    .then((objetoJuguetes) => {
        console.log("Juguetes:", objetoJuguetes);
        return pintarJuguetes(objetoJuguetes);
    })
    .then((costo) => console.log("Costo de pintura:", costo))
    .catch((error) => console.log("Error:", error));

    async function fabricarJuguetesAsync(cantidad) {
    try {
        const piezas = await cortarMadera(cantidad);
        console.log("Piezas:", piezas);

        const objetoJuguetes = await ensamblarJuguete(piezas);
        console.log("Juguetes:", objetoJuguetes);

        const costo = await pintarJuguetes(objetoJuguetes);
        console.log("Costo de pintura:", costo);

    } catch (error) {
        console.log("Error:", error);
    }
}

fabricarJuguetesAsync(5); */

/* Ejercicio 7. Crea un flujo asíncrono que reciba una cadena de texto mal formateada (Ej: `"  jAvAsCrIpT eS GeNiAl  "`):
* **Etapa 1 (500ms):** Limpia los espacios vacíos al inicio y al final (`trim`).
* **Etapa 2 (500ms):** Cuenta cuántas vocales tiene. Si tiene más de 10 vocales, lanza un error de "Texto demasiado largo".
* **Etapa 3 (500ms):** Convierte todo a Mayúsculas y le concatena al final el número de vocales encontrado en la Etapa 2. */

/* function limpiarTexto (texto) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(texto.trim())
        }, 500);
    });
}

function contarVocales(texto) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cantidad = texto.split("").filter(letra => "aeiouAEIOU".includes(letra)).length;

            if (cantidad > 10) {
                reject("Texto demasiado largo");
            } else {
                resolve({texto, cantidad});
            }
        }, 500);
    });
}

function convertirMayusculas({texto, cantidad}) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${texto.toUpperCase()}, ${cantidad} vocales encontradas`);
        }, 500);
    });
}

async function procesarTextoAsync(texto) {
    try {
        const textoLimpio = await limpiarTexto(texto)
        console.log("texto limpio", textoLimpio)

        const vocales = await contarVocales(textoLimpio)
        console.log("Cantidad de vocales", vocales.cantidad)

        const convertirTexto = await convertirMayusculas(vocales)
        console.log("Texto en mayuscula", convertirTexto)
        
    } catch (error) {
        console.log("Error", error)
    }
}

procesarTextoAsync("  jAvAsCrIpT eS GeNiAl  ") */

/* Ejercicio 8. 
Crea una secuencia de promesas:
1. Recibe un array de precios de productos `[10, 25, 4.99, 99.90]`. Suma todos los productos (1s).
2. Pasa el subtotal a la siguiente etapa, aplica un descuento del 10% si el subtotal supera los $100 (500ms).
3. Pasa el total con descuento y aplícale un impuesto del 19% de IVA (500ms). Devuelve el valor final formateado a dos decimales. */

/* function sumarPrecios(precios) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const suma = precios.reduce((acumulador, precio) => acumulador + precio, 0);
            resolve(suma)
        }, 1000);
    });
}

function aplicarDescuento(subtotal) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (subtotal > 100) {
                resolve(subtotal - (subtotal * 0.10))
            } else {
                resolve(subtotal)
            }
        }, 500);
    })
}

function aplicarIva(total) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const valorFinal = total + (total * 0.19)
            resolve(valorFinal.toFixed(2))
        }, 500);
    })
};

sumarPrecios([10, 25, 4.99, 99.90])
    .then((suma) => {
        console.log("Suma de todos los productos:", suma)
        return aplicarDescuento(suma)
    })
    .then((totalConDescuento) => {
        console.log("El subtotal es:", totalConDescuento)
        return aplicarIva(totalConDescuento)
    })
    .then((total) => {
        console.log("El total es: ", total)
    })
    .catch((error) => {
        console.log("Error", error)
    })

async function resultadoAsync(valor) {
    try {

        const suma = await sumarPrecios(valor)
        console.log("Suma de todos los productos", suma)

        const totalConDescuento = await aplicarDescuento(suma)
        console.log("El subtotal es:", totalConDescuento)

        const total = await aplicarIva(totalConDescuento)
        console.log("El total es:", total)

    } catch (error) {
        console.log("Error", error)

    }
}

resultadoAsync([10, 25, 4.99, 99.90]) */

/* Ejercicio 9. Login de Usuario con Re-verificación de Seguridad
Simula un Login. 
* Función 1: `autenticar(user, pass)`. Si las credenciales son correctas, 
devuelve un ID de usuario tras 1 segundo. Si no, rechaza.
* Función 2: `verificarIP(userId)`. Recibe el ID. Si la IP simulada 
(puedes usar un booleano aleatorio) es "sospechosa", exige un código OTP duplicando la seguridad. 
Si es segura, resuelve con `"Acceso Directo"`. */

/* function autenticar(user, pass) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (user === "admin" && pass === "1234") {
                resolve(1)
            } else {
                reject("Usuario o contraseña incorrectos")
            }
        }, 1000);
    })
};

function verificarIp(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const ipSospechosa = Math.random() > 0.5;
            if (ipSospechosa) {
                reject("Ingresa el código OTP")
            } else {
                resolve("Acceso Directo")
            }
        }, 1500);
    })
}

async function loginAsync(user, pass) {
    try {
        const datos = await autenticar(user, pass)
        console.log("Autenticación:", datos)

        const resultadoIp = await verificarIp(datos)
        console.log("Acceso usuario:", resultadoIp)

    } catch (error) {
        console.log("Error", error)

    }
}

loginAsync("admin", "1234") */

/* Ejercicio 10. Juego de Rol: El Daño del Personaje
Crea un flujo donde un personaje ataca a un monstruo que tiene 100 de vida:
* **Golpe 1 (500ms):** Genera un número crítico aleatorio entre 10 y 25. Réstalo a la vida del monstruo.
* **Golpe 2 (500ms):** Si la vida del monstruo bajó de 80, el segundo golpe hace el doble de daño (base 15). Si no, hace daño normal (base 10).
* Devuelve el estado de vida final del monstruo tras ambos impactos. */

/* function golpe1(vida) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const numeroAleatorio = Math.floor(Math.random() * (25 - 10 + 1)) + 10;
            resolve(vida - numeroAleatorio)
        }, 500);
    })
}

function golpe2(vida) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (vida < 80){
                resolve(vida - (15 * 2))
            } else {
                resolve(vida - 10)
            }
        }, 500);
    })
}

golpe1(100) 
    .then((vida) => {
        console.log("Vidas restantes golpe 1:", vida)
        return golpe2(vida)
    })
    .then((vida) => {
        console.log("vidas restantes golpe 2:", vida)
    })
    .catch((error) => {
        console.log("Error", error)
    }) */

/* Ejercicio 11. Tienes tres sucursales de una tienda. Crea tres funciones independientes que calculen las ventas del día: `ventasNorte()` (tarda 1s, genera $1500), `ventasSur()` (tarda 2s, genera $3200) y `ventasCentro()` (tarda 1.5s, genera $800).
* Usa `Promise.all` para obtener los tres resultados en paralelo.
* Suma los tres resultados y aplica un IF: si la suma total supera los $5000, calcula un bono del 5% para los empleados. */

/* function ventasNorte() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(1500)
        }, 1000);
    })
}

function ventasSur() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(3200)
        }, 2000);
    })
}

function ventasCentro() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(800)
        }, 1500);
    })
}

Promise.all([ventasNorte(), ventasSur(), ventasCentro()])
    .then((resultado) => {
        const total = resultado.reduce((acumulador, venta) => acumulador + venta, 0);
        if (total > 5000) {
            const bono = total * 0.05
            console.log("Total:", total)
            console.log("Bono:", bono)
        } else {
            console.log("Total", total)
            console.log("No hay bono")
        }
    })
    .catch((error) => {
        console.log("Error", error)
    })

async function ventasAsync() {
    try {
        const ventas = await Promise.all([ventasNorte(), ventasSur(), ventasCentro()]);
        const total = ventas.reduce((acumulador, venta) => acumulador + venta, 0);

        if (total > 5000) {
            const bono = total * 0.05
            console.log("Total:", total)
            console.log("Bono:", bono)
        } else {
            console.log("Total", total)
            console.log("No hay bono")
        }
    } catch (error) {
        console.log("Error", error)
    }
}

ventasAsync(); */

/* Ejercicio 12. Simula dos algoritmos buscando un elemento en una base de datos de manera asíncrona:
* `busquedaLineal()` tarda un tiempo aleatorio entre 500ms y 2000ms.
* `busquedaBinaria()` tarda un tiempo aleatorio entre 200ms y 1200ms.
* Usa `Promise.race()` para determinar cuál termina primero. El programa debe retornar el nombre del algoritmo ganador y el tiempo exacto que le tomó. */

/* function busquedaLineal() {
    return new Promise((resolve) => {
        const tiempo = Math.floor(Math.random() * (2000 - 500 + 1)) + 500;
        setTimeout(() => {
            resolve ({nombre: "Busqueda Lineal", tiempo: tiempo})
        }, tiempo);
    })
}

function busquedaBinaria() {
    return new Promise((resolve) => {
        const tiempo = Math.floor(Math.random() * (1200 - 200 + 1)) + 200;
        setTimeout(() => {
            resolve ({nombre: "Busqueda Binaria", tiempo: tiempo})
        }, tiempo);
    })
}

Promise.race([busquedaLineal(), busquedaBinaria()])
    .then((resultado) => {
        console.log(`Èl ganador es: ${resultado.nombre}, con un tiempo de ${resultado.tiempo}`)
    })
    .catch((error) => {
        console.log("Error", error)
    })

async function resultadoAsync() {
    try {
        const busqueda = await Promise.race([busquedaLineal(), busquedaBinaria()])
        console.log(`Èl ganador es: ${busqueda.nombre}, con un tiempo de ${busqueda.tiempo}`)
    } catch (error) {
        console.log("Error", error)
    }
}

resultadoAsync(); */

/* Ejercicio 13. Dado un array bidimensional (matriz de 3x3), procesa cada fila en paralelo de forma asíncrona. Cada fila debe multiplicar todos sus números entre sí (Ej: `[2, 3, 4]` -> `2*3*4 = 24`) tras 1 segundo.
* Usa `Promise.all` para obtener el array final de 3 resultados numéricos consolidados. */

/* function procesarFila(fila) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const resultado = fila.reduce((acumulador, numero) => acumulador * numero, 1);
            resolve (resultado)
        }, 1000);
    })
}

const matriz = [        // ← aquí
    [2, 3, 4],
    [1, 5, 2],
    [3, 3, 3]
];

Promise.all([
    procesarFila(matriz[0]),
    procesarFila(matriz[1]),
    procesarFila(matriz[2])
])
    .then((resultado) => {
        console.log("Resultados:", resultado)
    })
    .catch((error) => {
        console.log("Error", error)
    }) */

/* Ejercicio 14. Dado un array de 5 emails, crea una función asíncrona que verifique si contienen un `@` y terminan en `.com`.
* Procesa los 5 emails en paralelo.
* Devuelve un objeto con dos arrays coordinados: `{ validos: [...], invalidos: [...] }`. */

/* function verificarEmail(email) {
    return new Promise((resolve, reject) => {
        if (email.includes("@") && email.endsWith(".com")) {
            resolve(email)
        } else {
            reject(email)
        }
    })
}

const emails = ["juliana@gmail.com", "test@test", "prueba.com", "uno@gmail.com", "test.test"]

async function verificarEmails(emails) {
    try {
        const resultados = await Promise.allSettled(emails.map((email) => verificarEmail(email)));
        
        const validos = [];
        const invalidos = [];

        resultados.forEach((resultado) => {
            if (resultado.status === "fulfilled") {
                validos.push(resultado.value);
            } else {
                invalidos.push(resultado.reason);
            }
        });

        console.log({ validos, invalidos });

    } catch (error) {
        console.log("Error", error);
    }
}

verificarEmails(emails); */

/* Ejercicio 15. Recibes un array de objetos de productos: `[{nom: "A", stock: 5}, {nom: "B", stock: 12}, {nom: "C", stock: 2}]`.
* Procesa asíncronamente y en paralelo cada producto.
* Si el stock es menor a 5, genera automáticamente una orden de compra duplicando el stock actual.
* Devuelve el inventario final corregido. */

/* const productos = [
    { nom: "A", stock: 5 },
    { nom: "B", stock: 12 },
    { nom: "C", stock: 2 }
];

function procesarProducto(producto) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (producto.stock < 5) {
                resolve({ nom: producto.nom, stock: producto.stock * 2 })
            } else {
                resolve(producto)
            }
        }, 500);
    })
}

async function procesarInventario(productos) {
    try {
        const inventarioFinal = await Promise.all(productos.map((producto) => procesarProducto(producto)));
        console.log("Inventario final corregido:", inventarioFinal) 
    } catch (error) {
        console.log("Error", error);
    }
}

procesarInventario(productos); */

/* Ejercicio 16. Crea una función que simule procesar una tarjeta de crédito. La pasarela tiene un 50% de probabilidad de lanzar un error `"Error de conexión 503"`.
* Escribe el código usando `try/catch` para capturar el error. Si falla, el bloque `catch` debe desviar el flujo y ejecutar un método de pago alternativo (pago con saldo de puntos interno) para que la experiencia del usuario no se rompa. */

/* function procesarTarjeta() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const fallo = Math.random() > 0.5;
            if (fallo) {
                reject("Error de conexión 503")
            } else {
                resolve("Pago con tarjeta exitoso")
            }
        }, 1000)
    })
};

function pagarConPuntos() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Pago exitoso con puntos")
        }, 1000);
    })
};

async function pagoUsuarioAsync() {
    try {
        const pagoUsario = await procesarTarjeta()
        console.log(pagoUsario)
    } catch (error) {
        console.error("Error en pasarela de pago", error)
        const pagoAlternativo = await pagarConPuntos();
        console.log(pagoAlternativo)
    }
};

pagoUsuarioAsync(); */

/* Ejercicio 17. Crea una función asíncrona que ejecute una tarea matemática que falla la mayoría de las veces.
* Diseña un bucle `for` o `while` dentro de tu función `async`. 
* Si la tarea falla, el programa debe esperar y volver a intentar la tarea hasta un **máximo de 3 veces**.
* Si al tercer intento sigue fallando, lanza un error definitivo: `"Sistema totalmente caído"`. */

/* function tareaMatematica() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const fallo = Math.random() > 0.2
            if (fallo) {
                reject("Tarea fallida")
            } else {
                resolve("Tarea completada")
            }
        }, 1000)
    });
}

async function ejecutar() {
    for (let i = 0; i < 3; i++) {
        try {
            const intentos = await tareaMatematica();
            console.log(intentos)
        } catch (error) {
            console.error("Error en intento",i + 1,":",error)
        }
    }
}

ejecutar(); */

/* Ejercicio 18. Tienes tres tareas de auditoría corriendo en paralelo: `auditarFinanzas()` (éxito), `auditarRecursosHumanos()` (falla con error grave) y `auditarSeguridad()` (éxito).
* Si usas `Promise.all`, el error de RRHH romperá todo el proceso.
* Resuélvelo usando la herramienta correcta para que puedas imprimir en consola cuáles departamentos pasaron la auditoría con éxito y cuál falló de forma aislada, detallando el porqué. */

/* function auditarFinanzas() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("exito")
        }, 1000)
    })
}

function auditarRecursosHumanos() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject("Falla con error grave")
        }, 1000)
    })
}

function auditarSeguridad() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("exito")
        }, 1000)
    })
}

async function resultadoAuditorias() {
    try {
        const resultado = await Promise.allSettled([auditarFinanzas(), auditarRecursosHumanos(), auditarSeguridad()]);

        resultado.forEach((auditoria) => {
            if (auditoria.status === "fulfilled") {
                console.log("Passed:", auditoria.value);
            } else {
                console.error("Failed:", auditoria.reason);
            }
        });

    } catch (error) {
        console.error("Error:", error);
    }
}

resultadoAuditorias(); */

/* Ejercicio 19. Crea una función encargada de procesar una imagen muy pesada (simula que tarda 3.5 segundos en resolver).
* Crea un mecanismo de control de tiempo en paralelo (`setTimeout` en otra promesa). 
* Si la función de la imagen no ha respondido en **2 segundos**, detén la espera inmediatamente y lanza un error que diga: `"Tiempo de espera agotado: Operación cancelada"`. */

/* function procesarImagen() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Imagen procesada exitosamente")
        }, 1500);
    })
}

function timeOut() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject("Tiempo de espera agotado: Operación cancelada")
        }, 2000);
    })
}

async function imagenProcesada() {
    try {
        const imagen = await Promise.race([procesarImagen(), timeOut()]);
        console.log(imagen);
    } catch (error) {
        console.log("Error", error)
    } 
}

imagenProcesada(); */

/* Ejercicio 20. Diseña un flujo complejo de un checkout:
* **Paso 1:** Aplica un descuento en base a un código de cupón (1s).
* **Paso 2:** Cobra el dinero restando el descuento (1s).
* **Paso 3:** Actualiza la base de datos (1s).
* **Lógica especial:** Si el Paso 3 falla (simula un error aleatorio), el sistema debe capturar el error en el `catch` y ejecutar una función de reversión (*rollback*) que devuelva el dinero cobrado en el Paso 2 al usuario, imprimiendo un log de alerta. */
