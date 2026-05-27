// Ejercicio 1
/* function saludar(name) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Hola ${name}`);
        }, 1000);
    });
}

saludar("Juliana")
    .then((mensaje) => {
        console.log(mensaje);
    }); */

// Ejercicio 2
/* function validarEdad(age) {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            resolve("Acceso permitido")
        } else {
            reject("Acceso denegado: menor de edad")
        }
    })
}

validarEdad(20)
    .then((resultado) => {
        console.log("resultado de la promesa", resultado)
    })
    .catch((error) => {
        console.error("error de la promesa", error);
    });

async function obtenerDatosPromesa(age) {
    return validarEdad(age);    
}

async function ejecutar() {
    try {
        const resultado = await obtenerDatosPromesa(15);
        console.log("resultado", resultado);
    } catch (error) {
        console.error("error", error)
    }
}

ejecutar(); */

// Ejercicio 4
/* function uno() {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(5)
        }, 500) // resuelve cuando pasen los 500 ms
    });
};

function dos(n) {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(n * 2)
        }, 500)
    });
};

function tres(n) {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(n + 10)
        }, 500)
    })
};

uno()
    .then((resultadoUno) => {
        console.log("Resultado paso 1:", resultadoUno);
        return dos(resultadoUno)
    })
    .then((resultadoDos) => {
        console.log("Resultado paso 2:", resultadoDos);
        return tres(resultadoDos)
    })
    .then((resultadoFinal) => {
        console.log("Resultado Final", resultadoFinal);

    })
    .catch((error) => {
        console.error("Error en la cadena de promesas:", error)
    }); */

// Ejercicio 5
/* async function dividir(numeroUno, numeroDos) {
    try {
        if (numeroDos === 0) {
            throw new Error("No se puede dividir por cero"); // throw interrumpe el flujo normal y lanza un error. para que sea manejado por el catch
        }
        return numeroUno / numeroDos;
    } catch (error) {
        return error.message; // si ocurre un error se captura acá
    }
}

// Función para probar los casos
async function ejecutar() {
    const resultado1 = await dividir(10, 2);
    console.log("Resultado valido", resultado1);

    const resultado2 = await dividir(10, 0);
    console.log("Resultado invalido", resultado2);    
}

ejecutar(); */

// Ejercicio 6
/* async function obtenerUsuario() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const data = await response.json();
        console.log(`Datos usuario - Nombre: ${data.name}, Email: ${data.email}`)
    } catch (error) {
        console.error("error al obtener el usuario", error)
    }
}

obtenerUsuario(); */

// Ejercicio 7
/* async function obtenerPost(id) {
    try {
        const response = await fetch (`https://jsonplaceholder.typicode.com/posts/${id}`)
       
        if (!response.ok) {
            throw new Error("Post no encontrado");
        }

        const data = await response.json();
        console.log(`Titulo: ${data.title}`);
        console.log("Cuerpo: ", data.body)
    } catch (error) {
        console.error(error.message)
    }   
}

obtenerPost(9999); */

// Ejercicio 8

/* async function obtenerPostsDeUsuario(userId) {
    try {
        const response = await fetch (`https://jsonplaceholder.typicode.com/posts/`)
        const data = await response.json();

       data.filter(post.userId) {
        if (postUserId === userId) 
            const postFiltrados = 
       }
    }
} */

/* function validarEdad(number) {
    return new Promise((resolve, reject) => {
        if (number >= 18) {
            resolve("acceso permitido")
        } 
            reject("acceso denegado")
        
})
}

validarEdad(20)
    .then((resultado) => {
    console.log(resultado)
}) 
    .catch((error) => {
        console.log(error)
    }) */

/* function uno () {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(5)
        }, 500 )
    })
}; 

function dos (number) {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve (number * 2)
        }, 500)
    })
};

function tres (number) {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve (number + 10)
        }, 500)
    })
};

uno().then((resultado) => {
    console.log("resultado de la promesa 1", resultado)
    return dos(5)
}).then((resultado) => {
    console.log("resultado de la promesa 2", resultado)
    return tres(2)
}).then((resultado) => {
    console.log("resultado de la promesa 3", resultado)
})
*/

/* async function dividir(num1,num2){
    if(num2 === 0){
        throw new Error("No se puede dividir entre cero");
    }
    return num1 / num2;
};

async function consumirPromesa () {
    try {
        const resultado = await dividir (5, 0);
        console.log("el resultado es", resultado)
    } catch (error) {
        console.error(error.message)
    }
}

consumirPromesa(); */

// Ejercicio 9
/* Escribe una funcion asincrona llamada `crearPost` que reciba un objeto
con `title`, `body` y `userId`. Haz una peticion POST a `/posts` con ese
objeto en el body (JSON). Imprime en consola el objeto creado y el `id`
que retorna el servidor. */


async function crearPost(data) {
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(
            data
        ),
        headers: {
            "Content-Type": "application/json",
        },
    })
};

async function consumirPost() {
    const dataToSend = {
        title: "Juliana la manca",
        body: "Jerel el canson",
        userId: 1
    }

    const response = await crearPost(dataToSend);
    const dataProceced = await response.json();
    console.log(dataProceced.id)
}

consumirPost();