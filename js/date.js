console.log("date");

// El objeto Date es una funcion incorporada que se utiliza para trabajar con fechas y horas 

const fechaActual = new Date();
console.log(fechaActual); 

// Partes de la fecha 
const year = fechaActual.getFullYear();
const month = fechaActual.getMonth() + 1;
const day = fechaActual.getDate();
const hours = fechaActual.getHours();
const minutes = fechaActual.getMinutes();
const seconds = fechaActual.getSeconds(); 

console.log(`Año: ${year}`);
console.log(`mes: ${month}`);
console.log(`dia: ${day}`);
console.log(`horas: ${hours}`);
console.log(`minutos: ${minutes}`);
console.log(`segundos: ${seconds}`);

// Para traer una fecha especifica
const fechaEspecifica = new Date(2022, 11);
console.log(fechaEspecifica);

// Para convertir la fecha en string siguiendo la norma ISO 8601
const fechaIso = fechaActual.toISOString();
console.log(fechaIso)

console.log(fechaIso.split("-"));

// Comparar si una fecha es anterior o posterior a otra
const fecha1 = new Date(2025, 0, 1); // 1 de enero de 2025
const fecha2 = new Date(2025, 6, 15); // 15 de julio 2025