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

// Math.abs()  sirve para obtener el valor sin signo, si es positivo se queda igual y si es negativo se convierte en positivo

const cuentaBancaria = {
    titular: "Julina Pineda",
    saldo: 1000,

    depositar(monto) {
        this.saldo = this.saldo + monto;
        return `se deposito ${monto}. El nuevo saldo es ${this.saldo}`
    },

    retirar(monto) {
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

// operador || también se usa mucho para dar valores por defecto cuando la primer parte es vacia toma la segunda
const empleado = {
    nombre6: "Juliana",
    puesto: "",
    salario: 99000,

    mostrarPuesto() {
        const nombrePuesto = this.puesto || "developer";
        return `su puesto es ${nombrePuesto.toUpperCase()}`;
    },

    salarioConver() {
        if (this.salario > 200000) {
            return `su salario es de ${this.salario} y es un salario Alto`
        }
        else if (this.salario >= 100000 && this.salario <= 200000) {
            return `su salario es de ${this.salario} y es un salario Medio`
        }
        else {
            return `su salario de es ${this.salario} y es un salario Bajo`
        }

    }
};

console.log(empleado.mostrarPuesto());
console.log(empleado.salarioConver());

/* 6. Creá un objeto que represente un formulario de registro con nombre de usuario y contraseña.
Agregale un método que use .trim() y .length con if/else para validar que el nombre de usuario
tenga entre 4 y 12 caracteres. Agregale otro que valide que la contraseña tenga al menos 8
caracteres.
■ Investigá: ¿Qué hace .padStart()? Usalo para mostrar el largo de la contraseña relleno con ceros a la
izquierda, por ejemplo '08' en lugar de '8'. */

// .trim() para eliminar los espacios en blanco al inicio y al final de una cadena de texto.
// .padStart(longitudDeseada, caracterDeRelleno) sirve para rellenar una cadena de texto al inicio hasta alcanzar una longitud determinada.

const formularioRegistro = {
    nombreUsuario: "   july    ",
    contraseña: "    july12   ",
    
    validarUsuario() {
        const nombreLimpio = this.nombreUsuario.trim();
        const longitud = nombreLimpio.length;

        if (longitud >= 4 && longitud <= 12) {
            return `El nombre de usuario ${nombreLimpio} es valido con ${longitud} caracteres`;
        }
        else {
            return `El nombre de usuario ${nombreLimpio} NO es valido con ${longitud} caracteres`;
        }
    },

    validarContraseña() {
        const contraseñaLimpia = this.contraseña.trim();
        const longitudContraseña = contraseñaLimpia.length;

        if (longitudContraseña >= 8){
            return `La contrasena ${contraseñaLimpia} es valida con ${longitudContraseña} caracteres`
        }
        else {
            return `La contraseña ${contraseñaLimpia} No es valida con ${longitudContraseña} caracteres`
        }

    },

    mostrarContraseñaFormateada() {
        const limpia = this.contraseña.trim();
        return limpia.padStart(10, "*");
    }
};

console.log(formularioRegistro.validarUsuario());
console.log(formularioRegistro.validarContraseña());
console.log(`la contraseña formateada es, ${formularioRegistro.mostrarContraseñaFormateada()}`);

/* 7. Creá un objeto que represente una canción con título, artista y duración en segundos. Agregale un
método que use variables internas para convertir la duración a minutos y segundos y la muestre
con template literals. Agregale otro método que use un ternario para mostrar si la canción dura más
o menos de 3 minutos (180 segundos).
■ Investigá: ¿Qué hace Math.floor()? Necesitás usarlo para obtener los minutos enteros al convertir
segundos. */

// Math.floor() Para obtener los minutos enteros

const cancion = {
    titulo: "destino final",
    artista: "Yeison Jimenez",
    duracion: 280,

    convertirCancion() {
        const minutosEnteros = Math.floor(this.duracion / 60)
        return `La duración de la cancion es de ${minutosEnteros} en minutos y ${minutosEnteros} en segundos`
    },

    duracionCancion() {
        return this.duracion > 180 ? "la cancion dura mas de 3 minutos" : "La cancion dura menos de 3 minutos"
    }
}

console.log(cancion.convertirCancion());
console.log(cancion.duracionCancion());

