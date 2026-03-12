console.log("-------------Ejercicios objetos------------------");

/* tipos de funciones:
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
}; */

/* 1. Creá un objeto que represente un usuario con nombre, apellido y email. Agregale un método que
use template literals para mostrar la presentación completa. Agregale otro método que convierta el
email a minúsculas antes de mostrarlo.
■ Investigá: ¿Qué es typeof y para qué sirve? Usalo para mostrar qué tipo de dato es cada propiedad del
objeto.  */

const usuario = {
    nombre4: "Antonella",
    apellido: "Marin",
    email: "ANTONELLA@gmail.com",
    edad: 3,
    presentacion() {
        return `Hola, soy ${usuario.nombre4}, mi apellido es ${this.apellido}, mi email es ${this.email}`
    },
    emailConvertido() {
        return this.email.toLowerCase();
    }
}

console.log(usuario.presentacion());
console.log("email en minuscula", usuario.emailConvertido());
console.log("tipo de dato nombre", typeof usuario.nombre4)
console.log("tipo de dato apellido", typeof usuario.apellido)
console.log("tipo de dato email", typeof usuario.email)
console.log("tipo de dato edad", typeof usuario.edad)
console.log("tipo de dato presentación", typeof usuario.presentacion)

/* 2. Creá un objeto que represente un producto con nombre, precio y stock. Agregale un método que
use un ternario para mostrar si hay stock disponible o no. Agregale otro método que muestre el
nombre del producto siempre en mayúsculas.
■ Investigá: ¿Qué hace .toFixed(2)? Usalo para mostrar el precio siempre con dos decimales. */

const product = {
    nombre: "arroz",
    precio: 2000,
    stock: false,
    stockDisponible() {
        return this.stock === true ? "stock disponible" : "sin stock";
    },
    productoMayuscula() {
        return this.nombre.toUpperCase();
    },
    precioDecimales() {
        return this.precio.toFixed(2);
    }

}

console.log(product.stockDisponible());
console.log(product.productoMayuscula());
console.log(product.precioDecimales());

/* 3. Creá un objeto que represente un alumno con nombre, apellido y nota. Agregale un método que
use if/else para mostrar si aprobó o desaprobó. La nota mínima para aprobar es 6. El mensaje
debe incluir el nombre completo armado con template literals.
■ Investigá: ¿Qué es el operador &&? Usalo para validar que la nota sea un número mayor o igual a 0 antes
de evaluar si aprobó. */

const alumno = {
    nombre5: "Juliana",
    apellido5: "Pineda",
    nota: 6,
    resultadoNota() {
        if (this.nota >= 0 && this.nota >= 6) {
            return `${this.nombre5} ${this.apellido5} con ${this.nota}, "aprobó`;
        }
        else {
            return `${this.nombre5} ${this.apellido5} con ${this.nota}, "desaprobó`;
        }
    }
}

console.log(alumno.resultadoNota());

/* 4. Creá un objeto que represente una cuenta bancaria con titular y saldo. Agregale un método que
reciba un monto y lo deposite. Agregale otro método que use if/else para retirar dinero solo si hay
saldo suficiente. Todos los mensajes deben usar template literals.
■ Investigá: ¿Qué hace Math.abs()? Usalo para mostrar la diferencia entre el monto solicitado y el saldo
disponible cuando no haya fondos. */

const cuentaBancaria = {
    titular: "Julina Pineda",
    saldo: 1000,
    
    depositar(monto){
        this.saldo = this.saldo + monto;
        return `se deposito ${monto}. El nuevo saldo es ${this.saldo}`
    },

    retirar(monto){
        if (monto > this.saldo) {
            // Math.abs para calcular cuanto falta
            const diferencia = Math.abs(this.saldo - monto)
            return `Su saldo es ${this.saldo} y desea retirar ${monto}, no es posible realizar la transaccion. Le faltan ${diferencia} para completar el retiro`
        
        }
        else {
            return `Su saldo es ${this.saldo} y desea retirar ${monto}, transaccion aprobada`
        }
    }
}   

console.log(cuentaBancaria.depositar(100));
console.log(cuentaBancaria.retirar(2000));

/* 5. Creá un objeto que represente un empleado con nombre, puesto y salario. Agregale un método
que use .toUpperCase() para mostrar el puesto en mayúsculas. Agregale otro método que use
if/else para mostrar si el salario es alto (más de $200.000), medio (entre $100.000 y $200.000) o
bajo (menos de $100.000).
■ Investigá: ¿Qué es el operador ||? Usalo para mostrar un puesto por defecto si la propiedad puesto está
vacía */

