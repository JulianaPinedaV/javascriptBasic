// ARROW FUNCTION: Es lo mismo que una función tradicional pero con una sintaxis más corta,

console.log("Bienvenidos arrow functions")

function verifyIsMayor(age) {
    if (age >= 18) {
        return true
    } else {
        return false
    }
}

// arrow function
const verifyIsMajor = (age) => {
    if(age >= 18){
        return true;
    } else {
        return false;
    }
    
}

console.log("console.log desde funcion", verifyIsMayor(19));
console.log("console.log desde arrow funcion", verifyIsMajor(19));

// OPERADOR TERNARIO: Es el mismo if else con otra sintaxis
// Se usa cuando son validaciones pequeñas para las validaciones grandes se usan el if y el else

// expresion ? console.log("true"): console.log("aqui");

const verifyedad = (age) => {
    return age >= 18 ? "es mayor de edad" : "es menor de edad"
}

console.log(verifyedad(19));





