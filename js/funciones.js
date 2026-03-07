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