/* Ejercicio 1:
Crea una funcion llamada `obtenerNombre` que retorne una promesa que
resuelva inmediatamente con tu nombre completo. Consomela con `.then()`
e imprime en consola: `"El nombre es: [nombre]"`. */

/* function obtenerNombre() {
    return new Promise((resolve) => {
        resolve("Juliana Andrea Pineda Vasquez")
    });
}

obtenerNombre()
    .then((respuesta) => {
        console.log("El nombre es: ", respuesta)
    }); */

/* Ejercicio 2:
Crea una funcion llamada `esperarYSaludar` que retorne una promesa que,
despues de 2 segundos, resuelva con el mensaje `"Buenos dias!"`.
Consomela con `.then()` e imprime el mensaje cuando llegue. */

/* function esperarYSaludar() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Buenos días!");
        }, 2000)
    });
} 

esperarYSaludar()
    .then((mensaje) => {
        console.log(mensaje)
    }); */

/* Ejercicio 3:
Crea una funcion llamada `verificarStock` que reciba un numero de
unidades. Si las unidades son mayores a 0, la promesa resuelve con
`"Producto disponible"`. Si son 0 o menos, rechaza con
`"Sin stock disponible"`. Maneja ambos casos con `.then()` y `.catch()`.
Prueba con los valores 5 y 0. */
/* Ejercicio 4:
Toma el ejercicio anterior y agrega `.finally()` al final de la cadena.
Dentro de `.finally()` imprime `"Consulta de stock finalizada"`.
Verifica que ese mensaje aparezca tanto cuando hay stock como cuando no. */

/* function verificarStock(unidades) {
    return new Promise((resolve, reject) => {
        if (unidades > 0) {
            resolve("Producto disponible");
        }
        else {
            reject("Sin stock disponible")
        }
    });
}

verificarStock(5)
    .then((mensaje) => {
        console.log(mensaje)
    })
    .catch((error) => {
        console.log("Error", error)
    })
    .finally(() => {
        console.log("Consulta de stock finalizada")
    });

verificarStock(0)
    .then((mensaje) => {
        console.log(mensaje)
    })
    .catch((error) => {
        console.error("Error", error)
    })
    .finally(() => {
        console.log("Consulta de stock finalizada")
    }); */

/* Ejercicio 5:
Crea una funcion llamada `calcularDescuento` que reciba un precio y un
porcentaje. Si el porcentaje es mayor a 100 o menor a 0, la promesa
debe rechazarse con `"Porcentaje invalido"`. Si no, debe resolver con
el precio final despues del descuento. Prueba con (200, 15) y con (200, 110). */

/* function calcularDescuento(precio, porcentaje) {
    return new Promise((resolve, reject) => {
        if (porcentaje > 100 || porcentaje < 0) {
            reject("Porcentaje invalido")
        }
        else {
            const precioFinal = precio - (precio * porcentaje / 100)
            resolve(precioFinal) 
        }
    });
}

calcularDescuento(200, 110)
    .then((resultado) => {
        console.log("El precio final es", resultado)
    })
    .catch((error) => {
        console.log("Error:", error)
    }); */

/* Ejercicio 6:
Crea una funcion llamada `procesarNumero` que retorne una promesa que
resuelva con el numero 10. Encadena tres `.then()` consecutivos:
- El primero multiplica el valor por 3
- El segundo le suma 5
- El tercero lo convierte al string `"Resultado: [valor]"`
Imprime el resultado final. */

/* function  procesarNumero() {
    return new Promise ((resolve) => {
        resolve(10)
    })
}

procesarNumero()
    .then((resultado) => {
        return resultado * 3;        
    })
    .then((resultado) => {
        return resultado + 5;
    })
    .then((resultado) => {
        console.log(`Resultado: ${resultado}`)
    }); */

/* Ejercicio 7:
Crea tres funciones separadas que retornen promesas:
- `convertirAMayusculas(texto)` resuelve con el texto en mayusculas
- `eliminarEspacios(texto)` resuelve con el texto sin espacios al inicio y al final
- `contarCaracteres(texto)` resuelve con la cantidad de caracteres

Encadenalas con `.then()` pasando el resultado de una a la siguiente.
Prueba con el string `"  hola mundo  "`. */

/* function convertirAMayusculas(texto) {
    return new Promise ((resolve) => {
        resolve(texto.toUpperCase())
    })
};

function eliminarEspacios(texto) {
    return new Promise ((resolve) => {
        resolve(texto.trim())
    })
};

function contarCaracteres(texto) {
    return new Promise ((resolve) => {
        resolve(texto.length)
    })
};

convertirAMayusculas("  hola mundo  ")
    .then((resultado) => {
        console.log("Convertir a mayusculas:", resultado)
        return eliminarEspacios(resultado);
    })
    .then((resultado) => {
        console.log("Eliminar espacios:", resultado)
        return contarCaracteres(resultado);
    })
    .then((resultado) => {
        console.log("Contar caracteres", resultado)
    }); */

/* Ejercicio 8:
Crea una funcion `paso` que reciba un mensaje y un tiempo en ms, y
retorne una promesa que resuelva con ese mensaje despues del tiempo dado.
Encadena cuatro llamadas a `paso` para simular los estados de un pedido:
`"Pedido recibido"` -> `"En preparacion"` -> `"En camino"` -> `"Entregado"`.
Cada paso debe esperar 800ms. Imprime cada estado cuando llegue. */

/* function paso(mensaje, tiempo) {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(mensaje)
        }, tiempo) 
    })
}

paso("Pedido recibido", 800)
    .then((resultado) => {
        console.log(resultado)
        return paso("En preparación", 800);
    })
    .then((resultado) => {
        console.log(resultado)
        return paso("En camino", 800);
    })
    .then((resultado) => {
        console.log(resultado)
        return paso ("Entregado", 800);
    })
    .then((resultado) => {
        console.log(resultado)
    }); */

/*  Ejercicio 9 
Crea una funcion `obtenerIdUsuario` que resuelva con el numero 42 despues
de 500ms. Encadena un `.then()` que, con ese id, retorne una NUEVA promesa
que resuelva con el objeto `{ id: 42, nombre: "Ana", rol: "QA" }` despues
de otros 500ms. Encadena otro `.then()` que imprima el objeto completo. */

/* function obtenerIdUsuario() {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(42)
        }, 500)        
    });
}

obtenerIdUsuario()
    .then((id) => {
        console.log("id usuario:", id);
        return new Promise ((resolve) => {
            setTimeout(() => {
                resolve ({id: id, nombre: "Ana", rol: "QA"})                
            }, 500);        
        });
    })
    .then((usuario) => {
        console.log("Objeto completo", usuario)
    }); */

/* Ejercicio 10 
Crea una cadena de cuatro `.then()` donde el tercero lanza un error con
`throw new Error("Fallo en el paso 3")`. Agrega un `.catch()` al final
que capture el error e imprima `"Cadena interrumpida: [mensaje del error]"`.
Verifica que el cuarto `.then()` NO se ejecute. */

 /* Promise.resolve("Inicio") // Crea una promesa ya resuelta con el valor Inicio
    .then((resultado) => {
        console.log("Paso 1: ", resultado);
        return "Paso 2: Completado"
    })
    .then((resultado) => {
        console.log(resultado);
        return "Paso 3: En proceso"
    })
    .then((resultado) => {
        console.log(resultado)
        throw new Error ("Fallo en el paso 3")
    })
    .then((resultado) => {
        console.log("Paso 4: ", resultado)
    })
    .catch((error) => {
        console.log("Cadena interrumpieda: ", error.message)
    }); */

/* Ejercicio 11 - Promise.all basico
Crea tres promesas que resuelvan en tiempos diferentes (300ms, 600ms y
100ms) con los valores `"resultado A"`, `"resultado B"` y `"resultado C"`.
Usa `Promise.all` para esperar las tres y muestra el array completo de
resultados en un solo `.then()`.*/

/* const promesaA = new Promise((resolve) => {
    setTimeout(() => {
        resolve("resultado A")
    }, 300)
});

const promesaB = new Promise((resolve) => {
    setTimeout(() => {
        resolve("resultado B")
    }, 600)
});

const promesaC = new Promise((resolve) => {
    setTimeout(() => {
        resolve("resultado C")
    }, 100)
});

Promise.all([promesaA, promesaB, promesaC])
    .then((resultado) => {
        console.log("Array completo de los resultados", resultado)
    })
    .catch((error) => {
        console.error("Error en alguna promesa", error);
    }); */

/* Ejercicio 12 Promise.all con fallo
Repite el ejercicio anterior pero haz que la segunda promesa se rechace
con `"Error en B"`. Agrega un `.catch()` y observa que pasa con las otras
promesas. En un comentario explica por que `Promise.all` se comporta asi. */

/* const promesaA = new Promise((resolve) => {
    setTimeout(() => {
        resolve("resultado A")
    }, 300)
});

const promesaB = new Promise((_, reject) => {
    setTimeout(() => {
        reject("Error en B")
    }, 600)
});

const promesaC = new Promise((resolve) => {
    setTimeout(() => {
        resolve("resultado C")
    }, 100)
});

Promise.all([promesaA, promesaB, promesaC])
    .then((resultado) => {
        console.log("Array completo de los resultados", resultado)
    })
    .catch((error) => {
        console.error("Error en alguna promesa", error);
    }); */

// Promise.all espera a que todas las promesas se resuelvan, si una sola promesa se rechaza,
// Promise.all rechaza con ese error, así las demás promesas hayan teminado bien

/* Ejercicio 13 - Promise.allSettled
Crea cuatro promesas donde dos resuelven y dos rechazan con distintos
mensajes. Usa `Promise.allSettled` en un `.then()` para recorrer los
resultados e imprimir para cada uno: si fue `"exitoso"` o `"fallido"`
y el valor o razon correspondiente. */

/* const primerPromesa = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Primer promesa Resuelta")
    },100);
});

const segundaPromesa = new Promise((_, reject) => {
    setTimeout(() => {
        reject("Segunda promesa Rechazada")
    }, 200);    
});

const tercerPromesa = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Tercer promesa Resuelta")
    }, 300);
});

const cuartaPromesa = new Promise((_, reject) => {
    setTimeout(() => {
        reject("Cuarta promesa Rechazada")
    }, 400);
});

const promesas = [primerPromesa, segundaPromesa, tercerPromesa, cuartaPromesa]

Promise.allSettled(promesas)
    .then((result) => {
        console.log("Resultados de las promesas con Promise.allSettled:", result)
    }); */

// Promise.allSettled Es un método que recibe un array de promesas.
// A diferencia de Promise.all, no falla si alguna promesa se rechaza.
// Devuelve un array con el estado de cada promesa:
// "fulfilled" si se resolvió bien.
// "rejected" si falló.

/* Ejercicio 14 - Promise.race
Crea tres funciones que retornen promesas con distintos tiempos:
`lenta` (2000ms), `media` (800ms) y `rapida` (200ms). Todas resuelven
con su propio nombre como string. Usa `Promise.race` y en el `.then()`
imprime cual gano la carrera. En un comentario describe un caso real de
testing donde usarias este patron. */

/* function lenta () {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve ("lenta")
        }, 2000);
    });
};

function media () {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve("media")
        }, 800)
    });
};

function rapida () {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("rapida")
        }, 200)
    });
};

Promise.race([lenta(), media(), rapida()])
    .then((resultado) => {
        console.log("Gano la promesa:", resultado)
    })
    .catch((error) => {
        console.log("Error en alguna promesa", error)
    }) */

// Promise.race es útil cuando quieres obtener el resultado más rápido entre varias promesas,  solo importa la primera que termine, sea éxito o error.
// Devuelve la promesa que primero termine

/* Ejercicio 15 - Promise.any
Crea tres promesas: la primera se rechaza, la segunda tambien, y la
tercera resuelve con `"Datos encontrados"`. Usa `Promise.any` y en el
`.then()` imprime el resultado. Agrega un `.catch()` para el caso en que
todas fallen. En un comentario explica la diferencia entre `Promise.any`
y `Promise.race`*/

/* const promesaUno = new Promise((_, reject) => {
    reject("Promesa uno rechazada")    
});

const promesaDos = new Promise((_, reject) => {
    reject("Promesa dos rechazada")
});

const promesaTres = new Promise((resolve) => {    
        resolve("Promesa tres, Datos encontrados")    
});


Promise.any([promesaUno, promesaDos, promesaTres])
    .then((resultado) => {
        console.log("resultado de las promesas con Promise.any:", resultado)
    })
    .catch((error) => {
        console.error("error en la promesa", error)
    }) */

// Promise.race → devuelve el resultado de la primera promesa que termine, sea éxito o error.
// Promise.any → devuelve el resultado de la primera promesa que se cumpla con éxito. Ignora las que fallan.

/* Ejercicio 16 - Simulador de login
Crea una funcion `login` que reciba `usuario` y `contrasena`. Si el
usuario es `"admin"` y la contrasena es `"1234"`, la promesa resuelve
con `{ token: "abc123", rol: "administrador" }`. Si no, rechaza con
`"Credenciales incorrectas"`. Encadena un `.then()` que imprima
`"Bienvenido, [rol]"` y un `.catch()` que imprima el error. */

/* function login (usario, contraseña) {
    return new Promise ((resolve, reject) => {
        if (usario === "admin" && contraseña === "1234"){
            resolve ({token: "abc123", rol: "administrador"})
        } else {
            reject ("Credenciales incorrectas")
        }
    });
}

login("admin", "123")
    .then((resultado) => {
        console.log(`Bienvenido, ${resultado.rol}`)
    })
    .catch((error) => {
        console.error(error)
    }); */

/* Ejercicio 17 - Pipeline de validaciones
Crea una funcion `validarFormulario` que reciba un objeto con `nombre`,
`email` y `edad`. Encadena tres `.then()` donde cada uno valide un campo:
- Primero: el nombre no puede estar vacio
- Segundo: el email debe contener `"@"`
- Tercero: la edad debe ser mayor a 0
Si alguna validacion falla, lanza un error con un mensaje claro.
Si todas pasan, imprime `"Formulario valido"`. */

/* function validarFormulario(formulario) {
  return new Promise((resolve, reject) => {
    if (!formulario.nombre || formulario.nombre.trim() === "") {
      reject("El nombre no puede estar vacío");
    } else {
      resolve(formulario);
    }
  })
  .then((form) => {
    if (!form.email.includes("@")) {
      throw new Error("El email debe contener '@'");
    }
    return form;
  })
  .then((form) => {
    if (form.edad <= 0) {
      throw new Error("La edad debe ser mayor a 0");
    }
    return form;
  })
  .then(() => {
    console.log("Formulario válido");
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });
}

validarFormulario({ nombre: "Juliana", email: "juliana@gmail.com", edad: 10}); */

/* Ejercicio 18 - Cola de tareas asincronas
Tienes un array de nombres: `["Ana", "Luis", "Maria", "Carlos"]`.
Crea una funcion `procesarNombre` que reciba un nombre y retorne una
promesa que resuelva con `"[nombre] procesado"` despues de 400ms.
Usa `.then()` encadenados para procesar los nombres uno por uno en
orden, sin usar bucles. Imprime cada resultado cuando llegue y al final
imprime `"Todos procesados"`. */

/* const nombres = ["Ana", "Luis", "Maria", "Carlos"];

function procesarNombre (nombre){
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve (`${nombre} procesado`)
        }, 400);
    });
}

procesarNombre(nombres[0])
    .then((resultado) => {
        console.log(resultado);
        return procesarNombre(nombres[1])
    })
    .then((resultado) => {
        console.log(resultado)
        return procesarNombre(nombres[2])
    })
    .then((resultado) => {
        console.log(resultado)
        return procesarNombre(nombres[3])
    })
    .then((resultado) => {
        console.log(resultado)
        console.log("Todos procesados")
    })
    .catch((error) => {
        console.error("Error", error)
    }) */

/* Ejercicio 19 - Reintento manual
Crea una funcion `intentarConexion` que lleve un contador interno.
Los primeros 2 intentos deben rechazar con `"Conexion fallida"`. El
tercer intento debe resolver con `"Conexion exitosa"`. Escribe una
funcion `conectarConReintentos` que use `.then()` y `.catch()` para
reintentar hasta 3 veces antes de rendirse. Imprime cada intento y el
resultado final. */

/* let contador = 0;

function intentarConexion() {
    return new Promise((resolve, reject) => {
        contador++;
        console.log(`Intento ${contador}`);

        if (contador < 3) {
            reject("Conexion fallida");
        } else {
            resolve("Conexion exitosa");
        }
    });
}

function conectarConReintentos() {
    intentarConexion()
        .catch(() => intentarConexion())
        .catch(() => intentarConexion())
        .then((resultado) => console.log(resultado))
        .catch((error) => console.log(error));
}

conectarConReintentos(); */

/* Ejercicio 20 - Flujo de prueba simulado
Simula el siguiente flujo de pruebas usando solo promesas encadenadas
con `.then()` y `.catch()`:
1. `autenticar()` resuelve con un token despues de 300ms
2. Con el token, `obtenerPermisos(token)` resuelve con el array
   `["leer", "escribir"]` despues de 300ms
3. Con los permisos, `verificarAcceso(permisos, "escribir")` resuelve
   con `"Acceso concedido"` si el permiso existe, o rechaza con
   `"Permiso denegado"` si no
4. Imprime el resultado final o el error con un mensaje de contexto

Prueba el flujo con `"escribir"` (debe pasar) y con `"eliminar"`
(debe fallar en el paso 3). */

const autenticar = () => new Promise((resolve) => {
    setTimeout(() => {
        resolve("token123");
    }, 300);
});

const obtenerPermisos = (token) => new Promise((resolve) => {
    setTimeout(() => {
        resolve(["leer", "escribir"]);
    }, 300);    
});

const verificarAcceso = (permisos, accion) => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (permisos.includes(accion)) {
            resolve("Acceso concedido");
        } else {
            reject("Permiso denegado");
        }
    }, 300);
}); 

autenticar()
    .then((token) => {
        console.log("Token obtenido:", token);  
        return obtenerPermisos(token);
    })
    .then((permisos) => {
        console.log("Permisos obtenidos:", permisos);
        return verificarAcceso(permisos, "leer");
    })
    .then((resultado) => {
        console.log("Resultado de verificación de acceso:", resultado);
    })
    .catch((error) => {
        console.error("Error en el flujo de pruebas:", error);
    }); 

