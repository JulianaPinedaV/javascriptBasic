console.log("------------------ARRAYS-----------------------")

const names = ["ana", "maria", "pedro", "luisa"];

console.log(names);
console.log(names.length);
console.log("posicion 0: ",names[0]);
console.log("posicion 1: ",names[1]);
console.log("posicion 2: ",names[2]);
console.log("posicion 3: ",names[3]);
console.log("posicion 4: ",names[4]);

// Para acceder el ultimo elemento del array
// con el length puedo saber el tamaño del array
console.log("acceder al ultimo elemento del array ",names[names.length -1]);

// Se pueden agregar o quitar elmentos

// .push() añadir un elemento al final del array
console.log("nuevo tamaño del array: ", names.push("Antonella"));
console.log(names)

// .pop() quita el ultimo elemento del array y lo devuelve
console.log("el elemento eliminado es: ", names.pop());
console.log(names)

// .unshift agrega un elemento al inicio del array
names.unshift("maria jose"),
console.log(names);

// .shift para quitar el primer elemento del array
names.shift("maria jose"),
console.log(names);


const metodosHTTP = ["GET", "POST", "PUT", "DELETE", "PATCH"]

// .include() devuelve true o false si encuentra el elemento en el array
console.log(metodosHTTP.includes("GET"));

// .indexof() busca la primera coincidencia y devuelve la posición, si no encuentra coincidencia devuelve -1
console.log(metodosHTTP.indexOf("GET"));

/* COMO ITERAR EN UN ARRAY
for .... of permite pasar por cada elemento del array uno en uno */

for(const statusCode of metodosHTTP){
    console.log(("cada codigo:" , statusCode))
}

const personas = [
    {nombre: "ana", apellido: "marin", edad: 20},
    {nombre: "maria", apellido: "soto", edad: 20},
    {nombre: "pedro", apellido: "castro", edad: 20,},
]

for(const persona of personas){
    console.log("nombre de la persona: ", persona.nombre);
    console.log("apellido de la persona: ", persona.apellido); 
}
 
// este bloque de código es lo mismo que el de la linea 70
for(const persona of personas){
    if (persona.edad > 19){
        console.log("la primera persona que cumple la condición es: ", persona);
        break;
    }
}

const finEdad = personas.find(p => p.edad >19);
console.log(finEdad);

// array de objetos
const products = [
    {id:102, nombre:"laptop",precio:2000},
    {id:103, nombre:"celular",precio:1000},
    {id:104, nombre:"tablet",precio:1500},
    {id:105, nombre:"monitor",precio:500},
]

//Ejercicio clase: Recorrer el array de productos y mostrar el nombre y el precio de cada produdcto 

for (const product of products){
    console.log((`nombre del producto: ${product.nombre}, precio $${product.precio}`))
}