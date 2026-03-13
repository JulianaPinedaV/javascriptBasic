/* Que es una función= Es una acción que hace algo concreto, que se hace constantemente
Es un bloque de código reutilizable que lo puedo llamar cuantas veces quiera 
Parametros son datos que le pasamos a la funcion
Argumentos son los valores que le pasamos a los datos cuando se llama a la función
El return se utizar si quiero que el return devuelva algo 

 function saludar (){
    console.log("hola a todos")
 }

 
/* function saludar(name){
    console.log("hola", name)
}
saludar("Juliana") */

/* function sumar(a,b){
    return a + b;
}
sumar(1,2)
console.log(sumar(1,2)) */

 /** Ejercicio 26 — Precio de entrada al cine
Niños menores de 12 pagan $3. Adultos mayores de 65 pagan $4. Todos los demás pagan $8. Además, si
es martes, todos pagan la mitad del precio. Imprimir el precio final. */

function precioEntrada (edad, dia){
    if(edad < 12){
        const valor = 3;
        if(dia.toLowerCase() === "martes"){
            return valor / 2;
        }
        return valor;
    }
    if(edad >65){
        const valor = 4;
        if (dia.toLowerCase() === "martes"){ 
            return valor / 2
        }
        return valor;
    }
    const valor1 = 8;
        if(dia.toLowerCase() === "martes"){
            return valor1 / 2
        }
    return "Paga 8"

}

const precioFinal = precioEntrada(50, "MarTES")
console.log(precioFinal)

/* Ejercicio 1 — Saludo personalizado
Crea una función llamada `saludar` que reciba un nombre como parámetro e imprima en consola: "Hola,
[nombre], bienvenido a la clase". Llámala tres veces con nombres diferentes. */

function saludar (nombre){
    console.log("hola " + nombre + " bienvenido a la clase" )
}

saludar("Juliana");
saludar("Antonella");
saludar("Leo");

/* Ejercicio 2 — Doble de un número
Crea una función llamada `doble` que reciba un número y retorne el doble de ese número. Guarda el
resultado en una variable e imprímelo. */

function doble (numero){
    return numero * 2;
}

const resultado = doble(4);
console.log("El doble del numero es", resultado)

/* Ejercicio 3 — Área de un rectángulo
Crea una función llamada `calcularArea` que reciba el ancho y el alto de un rectángulo y retorne el resultado
de multiplicarlos. Imprímelo en consola. */

function calcularArea (ancho, alto){
    return ancho * alto
}

console.log(calcularArea(10, 2));

/* Ejercicio 4 — Presentación completa
Crea una función llamada `presentar` que reciba nombre, edad y ciudad como parámetros. La función debe
retornar una frase que diga: "Me llamo [nombre], tengo [edad] años y vivo en [ciudad]". Imprímela en
consola. */

function presentar (nombre, edad, ciudad){
    return ("Me llamo " + nombre + " tengo " + edad + " años" + " y vivo en " + ciudad);
}

const mensaje = presentar("Juliana", 35, "Manizales");
console.log(mensaje); 

/* Ejercicio 5 — Convertir grados
Crea una función llamada `celsiusAFahrenheit` que reciba una temperatura en Celsius y retorne su
equivalente en Fahrenheit. La fórmula es: (celsius * 9/5) + 32. Pruébala con 100 grados. */

function celsiusAFahrenheit(celsius){
    return (celsius * 9/5) + 32;
}

const fahrenheit = celsiusAFahrenheit(100);
console.log(fahrenheit)

/* Ejercicio 6 — Mayor de edad
Crea una función llamada `verificarEdad` que reciba una edad y retorne "Mayor de edad" si tiene 18 o más,
o "Menor de edad" si no. Imprimir el resultado. */

function verificarEdad(edad){
    if(edad >= 18){
        return("mayor de edad")
    }
    else {
        return("menor de edad")
    }
};

const result = verificarEdad(1);
console.log(result);

/* Ejercicio 7 — Número par o impar
Crea una función llamada `parOImpar` que reciba un número y retorne si es "Par" o "Impar". Pista: un
número es par si el residuo de dividirlo entre 2 es igual a 0 (usa el operador `%`). */

function parOImpar(numero){
    if (numero % 2 === 0){
        return "Es par"
    }
        return "Es impar"
    }

console.log(parOImpar(4));
console.log(parOImpar(7));

/* Ejercicio 8 — Aprobado o reprobado
Crea una función llamada `evaluarNota` que reciba una nota numérica. Si es mayor o igual a 60, retornar
"Aprobado". Si es menor, retornar "Reprobado". Probarla con distintos valores. */ 

function evaluarNota(nota){
    if (nota >=60){
        return "Aprobado"
    }
        return "Reprobado"
}

console.log(evaluarNota(59))

/* Ejercicio 9 — Temperatura del clima
Crea una función llamada `describirClima` que reciba la temperatura. Si es menor a 10, retornar "Hace
mucho frío". Si está entre 10 y 25, retornar "Clima agradable". Si es mayor a 25, retornar "Hace calor". */

function describirClima(temperatura){
    if (temperatura <10){
        return "Hace mucho frio"
    }
    else if (temperatura >=10 && temperatura <=25){
        return ("Clima agradable")
    }
    return ("Hace calor")
}

console.log(describirClima(38));

/* Ejercicio 10 — Descuento de precio
Crea una función llamada `aplicarDescuento` que reciba el precio de un producto y el porcentaje de
descuento. Si el descuento es mayor a 0, retornar el precio con el descuento aplicado. Si no, retornar el
precio original. */

function aplicarDescuento(precio, porcentaje){
    if (porcentaje > 0){
        return precio - (precio * porcentaje / 100);
    }
    return precio
}
console.log(aplicarDescuento(100000, 5))

/* Ejercicio 11 — Acceso al sistema
Crea una función llamada `verificarAcceso` que reciba usuario y contrasena. Si el usuario es "admin" Y la
contrasena es "1234", retornar "Acceso concedido". Si el usuario es correcto pero la contrasena no, retornar
"Contrasena incorrecta". Si ninguno es correcto, retornar "Usuario no encontrado */

function verificarAcceso (usuario, contraseña){ 
    if (usuario === "admin" && contraseña === 1234){
                return "Acceso concedido";
    } 
    if (usuario === "admin"){
            return "Contraseña incorrecta";
        }
        return "Usuario no encontrado";
    }

console.log(verificarAcceso("admin", 1234))

/* Ejercicio 12 — Clasificar número
Crea una función llamada `clasificarNumero` que reciba un número y retorne: "Positivo" si es mayor a 0,
"Negativo" si es menor a 0, o "Cero" si es exactamente 0. */

function clasificarNumero (numero){
    if (numero > 0){
        return "Positivo";
    }
    else if (numero < 0){
        return "Negativo"
    }
        return "Cero";
}

console.log(clasificarNumero(-6));

/* Ejercicio 13 — Calcular envío
Crea una función llamada `calcularEnvio` que reciba el total de una compra y si el cliente tiene membresía
premium. Si el total es mayor a $50 O tiene membresía, el envío es gratis. Si no, el envío cuesta $5.
Retornar el costo del envío. */

function calcularEnvio (totalCompra, membresia){
    if (totalCompra >50 || membresia === "premium"){
        return ("gratis")
    }
    return "$5"
} 

const totalMembresia = calcularEnvio(60, "premium")
console.log("El costo del envio es:", totalMembresia)

/* Ejercicio 14 — Categoría de usuario
Crea una función llamada `categorizarUsuario` que reciba los puntos de un usuario. Si tiene más de 1000
puntos es "VIP", entre 500 y 1000 es "Premium", entre 100 y 499 es "Regular", menos de 100 es "Nuevo".
Retornar la categoría. */

function categorizarUsuario (puntos){
    if (puntos > 1000){
        return "VIP";
    }
    else if (puntos >= 500 && puntos <= 1000){
        return "Premium";
    }
    else if (puntos >= 100 && puntos <= 499){
        return "Regular";
    }
    return "Nuevo";
}

console.log(categorizarUsuario(9999));

/* Ejercicio 15 — Validar contraseña
Crea una función llamada `validarContrasena` que reciba una contrasena. Si tiene 8 o más caracteres Y NO
es "12345678", retornar "Contrasena válida". Si no, retornar "Contrasena débil". Pista: usa
`contrasena.length` para saber cuántos caracteres tiene. */

/* function validarContraseña (contraseña){
    if (contraseña.length >= 8 && contraseña !== "12345678"){
        return "contraseña valida"
    }
    return "contraseña débil"
} */

console.log(validarContraseña("12342210001"));

/* Ejercicio 16 — Calcular impuesto
Crea una función llamada `calcularImpuesto` que reciba un salario mensual. Si el salario es menor a $1000,
no paga impuesto. Si está entre $1000 y $3000, paga el 10%. Si es mayor a $3000, paga el 20%. Retornar
el monto del impuesto. */

function calcularImpuesto (salario){
    const impuesto0 = 0
    const impuesto10 = 0.10
    const impuesto20 = 0.20

    if (salario < 1000){
        return impuesto0
    }
    else if (salario >= 1000 && salario <= 3000){
        return salario * impuesto10;
    }
    return salario * impuesto20;
}
 const impuesto = calcularImpuesto(4000);
console.log("El impuesto es: "+ impuesto)

/* Ejercicio 17 — Ticket de compra
Crea una función llamada `generarTicket` que reciba el nombre del producto, la cantidad y el precio unitario.
La función debe retornar una frase con el resumen de la compra, por ejemplo: "Producto: Café | Cantidad: 3
| Total: $9". */

function generarTicket (nombreProducto, cantidad, precioUnitario){
    const totalProducto = cantidad * precioUnitario
    return "Producto: " + nombreProducto + " Cantidad: " + cantidad + " Total: " + totalProducto;
}

const precioFinal1 = generarTicket("azucar ", 2, 5);
console.log(precioFinal1)

/* Ejercicio 18 — Puede conducir
Crea una función llamada `puedeConducir` que reciba edad, si tiene licencia y si ha consumido alcohol.
Para poder conducir debe tener 18 o más años, tener licencia Y NO haber consumido alcohol. Retornar
"Puede conducir" o el motivo por el que no puede */

function puedeConducir (edad, tieneLicencia, alcohol){
    if (edad >= 18 && tieneLicencia && !alcohol){
        return "Puede conducir cumple con los requisitos"
    }
    if (edad <= 18 && tieneLicencia && !alcohol){
        return "No puede conducir no tiene la edad"
    }
    if (edad >= 18 && !tieneLicencia && !alcohol){
        return "No puede conducir no tiene licencia"
    }
    if (edad >= 18 && tieneLicencia && alcohol){
        return "No puede conducir por consumo de alcohol"
    }
}

console.log(puedeConducir(18, true, false));
console.log(puedeConducir(17, true, false));
console.log(puedeConducir(18, false, false));
console.log(puedeConducir(18, true, true));

/* Ejercicio 19 — Conversor de divisas
Crea una función llamada `convertirDivisa` que reciba una cantidad en dólares y el tipo de moneda de
destino: "EUR", "MXN" o "COP". Usar tasas aproximadas: 1 USD = 0.92 EUR, 1 USD = 17 MXN, 1 USD =
4000 COP. Retornar el valor convertido. */

function convertirDivisa (cantidadDolares, tipoMoneda){
    if (tipoMoneda === "EUR"){
        return (cantidadDolares * 0.92 + " EUR")
    }
    else if (tipoMoneda === "MXN"){
        return (cantidadDolares * 17 + " MXN ")
    }
    else if (tipoMoneda === "USD"){
        return (cantidadDolares * 4000 + " COP")
    }
    return "Moneda no disponible"
}

console.log(convertirDivisa(2, "EUR"));
console.log(convertirDivisa(2, "MXN"));
console.log(convertirDivisa(2, "USD"));
console.log(convertirDivisa(1, "COP"));

/* Ejercicio 20 — Calculadora completa
Crea una función llamada `calcular` que reciba dos números y una operacion como texto: "sumar", "restar",
"multiplicar" o "dividir". Retornar el resultado de la operación correspondiente. Si la operación es "dividir" y
el segundo número es 0, retornar "Error: no se puede dividir entre cero". Si la operación no existe, retornar
"Operación no válida". */


// solución 1
function calcular (numero1, numero2, operacion){
    
    if (numero2 === 0 && operacion === "dividir"){
        return "Error no se puede dividir entre 0"
        
    }
    if (operacion === "sumar"){
        const suma = numero1 + numero2
        return suma
    }
    else if (operacion === "restar"){
        const resta = numero1 - numero2
        return resta
    }
    else if (operacion === "multiplicar"){
        const multiplicar = numero1 * numero2
        return multiplicar
    }
    else if (operacion === "dividir"){
        const dividir = numero1 / numero2
        return dividir
    }
    return "operacion no existe"
}

console.log(calcular(10, 2, "dividir"))

// solución mejorada
function calcular(numero1, numero2, operacion) {
  if (operacion === "sumar") {
    return numero1 + numero2;
  } else if (operacion === "restar") {
    return numero1 - numero2;
  } else if (operacion === "multiplicar") {
    return numero1 * numero2;
  } else if (operacion === "dividir") {
    if (numero2 === 0) {
      return "Error: no se puede dividir entre cero";
    }
    return numero1 / numero2;
  } else {
    return "Operación no válida";
  }
}

