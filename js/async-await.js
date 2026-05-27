console.log("hola mundo desde async-await");

// codigo sincrono -> se ejecuta de manera secuencial, una linea despues de la otra

console.log("primera linea");
console.log("segunda linea");
console.log("tercera linea");   

// codigo asincrono -> se ejecuta de manera no secuencial, una linea de codigo puede ejecutarse antes que otra, aunque esta ultima este escrita antes
// dentro del codigo asincrono, se tienen promesas
// Las promesas son objetos que representan la eventual finalización o el fracaso de una operación asincrónica y su valor resultante.
// Las promesas pueden estar en uno de los siguientes estados:
// - Pendiente (pending): La promesa está en proceso de resolverse o rechazarse.
// - Cumplida (fulfilled): La promesa se resolvio exitosamente.
// - Rechazada (rejected): La promesa ha sido rechazada por algún motivo...

const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        const exito = true; // simular el resultado de una operación asincrona, puede ser true o false
        if (exito) {
            resolve("La operación fue exitosa");
        } else {
            reject("La operación falló");
        }
    }, 3000);
});

// Consumir la promesa utilizando then y catch
promesa.then((resultado) => {
    console.log("resultado de la promesa:", resultado); // "La operación fue exitosa"
})
.catch((error) => {
    console.error("error de la promesa:", error); // "La operación falló"
}); 

// async-await -> es una forma de escribir codigo asincrono de manera mas legible y facil de entender, utilizando las palabras clave async y await
// async -> se utiliza para declarar una funcion asincrona, esta funcion siempre devuelve una promesa
// await -> se utiliza para esperar a que una promesa se resuelva o se rechace, solo puede ser utilizado dentro de una funcion asincrona

async function consumirPromesa() {
    try {
        const resultado = await promesa; // esperar a que la promesa se resuelva o se rechace
        console.log("resultado de la promesa con async-await:", resultado); // "La operación fue exitosa"
    } catch (error) {
        console.error("error de la promesa con async-await:", error); // "La operación falló"
    } 
}

consumirPromesa();

async function funcionAsincrona2() {
    console.log("antes del await");
    const resultado = await new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = false; // simular el resultado de una operacion asincrona  
            if (exito) {
                resolve("La operacion se resolvio exitosamente");
            } else {
                reject("La operacion se rechazo por algun motivo");
            }  
        }, 3000);
    });
 
    try {
        console.log("resultado de la promesa con async-await:", resultado);
    } catch (error) {
        console.log("error de la promesa con el llamado a la funcion asincrona con async-await:", error);
    }
}
 
funcionAsincrona2();
 
await // hasta que devuelva información la base de datos, no se ejecuta la siguiente linea de codigo, aunque esta ultima este escrita antes, esto es lo que hace el await, esperar a que una promesa se resuelva o se rechace para continuar con la ejecucion del codigo.

// consumir la api con fetch, fetch es una funcion que permite hacer peticiones http a una api, esta funcion devuelve una promesa
// consumir el endpoint de la api de la manera antigua then y cath

function getUserInfo() {
    fetch("https://jsonplaceholder.typicode.com/users/1") // hacer una peticion http a la api para obtener la informacion del usuario con id 1
    .then(function(response) {
        console.log("respuesta de la api con then y catch:", response); // respuesta de la api con then y catch
        return response.json(); // convertir la respuesta a formato json
    }).then(function(data) {
        console.log("datos del usuario con then y catch:", data); // data de la api con then y catch
    }).catch(function(error) {
        console.error("error al consumir la api con then y catch:", error); // error de la api con then y catch: Error: Network Error
    });
}
getUserInfo();

// consumir el endpoint de la api con async-await
// es la forma mas moderna de consumir una api, es mas legible y facil de entender, utilizando las palabras clave async y await

async function getUserInfoAsync() { 
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/2"); // hacer una peticion http a la api para obtener la informacion del usuario con id 1
        console.log("respuesta de la api con async-await:", response); 
        const data = await response.json(); // convertir la respuesta a formato json
        console.log("datos del usuario con async-await:", data); 
    } catch (error) {
        console.error("error al consumir la api con async-await:", error); 
    }
}
getUserInfoAsync();

// Ambas funciones getUserInfo y getUserInfoAsync hacen exactamente lo mismo, pero la segunda es mas legible y facil de entender, utilizando async-await en lugar de then y catch.

// reglas o consideraciones al usar async-await:
// 1. la palabra clave async se utiliza para declarar una funcion asincrona, esta funcion siempre devuelve una promesa
// 2. la palabra clave await solo se puede utilizar dentro de una funcion asincrona, y se utiliza para esperar a que una promesa se resuelva o se rechace
// 3. El manejo de errores en async-await se realiza utilizando try-catch, el bloque try se ejecuta cuando la promoesa se resuelve exitosamente, 
// y el bloque catch se ejecuta cuando la promesa es rechazada por algun motivo

// Ejemplo con multiple await

async function getMultipleUserInfo() {
    console.log("antes de los await");

    // el primer await espera a que se resuelva la promesa de la primera peticion fetch, y luego se ejecuta la segunda peticion fetch
    const respustaUsuario = await fetch("https://jsonplaceholder.typicode.com/users/3");
    const dataUsuario = await respustaUsuario.json();
    console.log("datos del usuario con async-await:", dataUsuario);


    // el segundo await espera a que se resuelva la promesa de la segunda peticion fetch, y luego se ejecuta la tercera peticion fetch
    const respustaPosts = await fetch("https://jsonplaceholder.typicode.com/posts?userId=3");
    const dataPosts = await respustaPosts.json();
    console.log("datos de los posts del usuario con async-await:", dataPosts);


    // el tercer await espera a que se resuelva la promesa de la tercera peticion fetch, y luego se ejecuta la cuarta peticion fetch
    const respustaComments = await fetch("https://jsonplaceholder.typicode.com/comments?postId=25");
    const dataComments = await respustaComments.json();
    console.log("datos de los comentarios del post con async-await:", dataComments);
}

