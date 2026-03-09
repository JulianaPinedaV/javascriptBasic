// Es lo mismo que una función tradicional pero con una sintaxis más corta,

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