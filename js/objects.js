console.log("Bienvenido a objetos");

// Un OBJETO es un conjunto de propiedades y metodos
// requiere de clave, valor
// acceder a las propiedades de un objeto ej carro.color

const persona = {
    nombre: "Juliana",
    apellido: "pineda",
    edad: 18
};

// renderizar el objeto completo
console.log("console.log desde un objeto ", persona);

// renderizar una propiedad del objeto
console.log("console.log desde la propiedad nombre del objeto",persona.nombre);
console.log("console.log desde la propiedad apellido del objeto",persona.apellido);
console.log("console.log desde la propiedad edad del objeto",persona.edad);
console.log("quiero entrar al nombre y apellido de la persona",persona.nombre, persona.apellido);

// acceder a las propiedades del objeto mediante con notación de corchetes
console.log("--------acceder a las propiedades del objeto mediante con notación de corchetes--------------")
console.log("console.log desde la propiedad nombre del objeto con notación de corchetes",persona["nombre"]);
console.log("console.log desde la propiedad apellido del objeto con notación de corchetes",persona["apellido"]);
console.log("console.log desde la propiedad edad del objeto con notación de corchetes",persona["edad"]);

const carro = {
    marca: "nissan",
    modelo: "corolla",
    ano: 2020,
    color: "blanco",
    precio: 200000
};

console.log("console.log desde un objeto carro", carro);

// Para modificar la propiedad de un objeto
carro.precio = 250000;
console.log("console.log desde un objeto carro con precio modificado", carro);

// Un METODO en una función que esta dentro de un objeto
const persona1 = {
    nombre: "Juliana",
    apellido: "pineda",
    edad: 18,
    sumar: function (a, b){
        return a + b;

    },
    saludar(){
        return persona1.nombre + persona1.apellido
    },
    multiplicar: (a, b) => {
        return a * b

    }
}; 

console.log(persona1.saludar());
console.log("la suma de dos numeros es: ", persona1.sumar(2,3));
console.log("la multiplicación de dos numeros es: ", persona1.multiplicar(2,3))

// Ejercicio: Creá un objeto que represente un producto con nombre y precio. Agregale un método que muestre el precio con un 21% de IVA incluido.
 
const producto = {
    nombre: "arroz",
    precio: 2000,
    precioIva(){
        const iva = 0.21
        return producto.precio * iva;
        // return this.precio * iva // el this se usa para llamar al objeto 
    }
}

console.log(producto.precioIva())

// MANIPULACIÓN DE STRINGS

let nombre3 = "Juliana";
let apellido3 = "Gomez";

// toUpperCase - Convierte todo a mayuscula 
console.log("procesar string upperCase", nombre3.toUpperCase())

// toLowerCase - Convierte todo a minuscula
console.log("procesar string lower case", apellido3.toLowerCase())

// lenght - Longitud del string
console.log("longitud del string", nombre3.length)

// Para saber si una palabra o letra esta incluida en el string
console.log(nombre3.includes("a"));

const concatenado = nombre3.concat(" ", apellido3);
console.log(concatenado);