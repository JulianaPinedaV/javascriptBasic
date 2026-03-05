console.log("Variables in JavaScript");

// ¿ Que es una variable? Es una cajita donde se guardan valores 
// string, number, booleanos, 
// let - const
// let cuando el valor de la variable puede cambiar
// const cuando el valor nunca cambia en el tiempo 

let age = 10;
console.log("age", age);

const firstName = "Juliana"
console.log("mi nombre es :", firstName);

// firstName = "ana";

//Declarar variables que describan a una persona e imprimir en consola

const nombre = "Juliana";
const apellido = "Pineda";
// let edad = 25;
let peso = 65;
const estatura = 1.55;
let isMarried = true;
const esFemenino = true;
let esSoltero = false; 
let nombreHija = "Antonella";
console.log("Mi nombre es:", nombre, " mi edad es:", edad, " mi peso es:", peso , "mi estatura es:", estatura, "estoy casada?", isMarried + " " + "Soy mujer:", esFemenino + " Soy soltera:", esSoltero, "nombre hija:", nombreHija);

//  si tengo dni y soy mayor de edad  y tengo nacionalidad
// imrimir en consola puedo votar
//  si  tengo nacionalidad  y sy mayor de edad y no tengo dni
// imprimir debes ir a la registraduria
// en caso contrario imprimir en consola no puedes votar

const tengoDni = true;
const edad = 18;
const nacionalidad = true;

if (tengoDni && edad >= 18 && nacionalidad){
    console.log("puedo votar");
} if (nacionalidad && edad >=18 && !tengoDni){
    console.log("debes ir a la registraduria")
}
else (
    console.log("no puedes votar")
)
