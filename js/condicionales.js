
/** tabla de la verdad
1 true
0 false
true && true = true
false && true = false
true || false = true
false || true = true 

CONDICIONALES - if - else - elseif - switch
if se usa para evaluar una condición

COMPARACIONES 
= asignar variables
== comparar 
=== compara estricto ya que evalúa también el tipo 
!= desigualdad
!== desigualdad estricta ya que evalúa también el tipo 

OPERADORES LÓGICOS  &&  || 
! Negacion **/

//  EJERCICIO CLASE: 
// si tengo dni y soy mayor de edad  y tengo nacionalidad imprimir en consola puedo votar
// si  tengo nacionalidad  y soy mayor de edad y no tengo dni imprimir debes ir a la registraduria
// en caso contrario imprimir en consola no puedes votar

/** const dni = false;
const años = 18;
const nacionalidad = false;

if (dni && años >= 18 && nacionalidad){
    console.log("puedo votar");
} else if (nacionalidad && edad >=18 && !dni){
    console.log("debes ir a la registraduria")
}
else 
    console.log("no puedes votar") **/

/** Ejercicio 21 — Login de usuario
Si el usuario es "jerel" Y la contraseña es "1234", imprimir "Sesión iniciada". Si el usuario es correcto pero la
contraseña no, imprimir "Contraseña incorrecta". Si el usuario tampoco es correcto, imprimir "Usuario no
encontrado".**/

/** const usuario = "jerel";
const contraseña  = 1234;

if (usuario === "jerel" && contraseña === 1234){
    console.log("Sesion iniciada")
}
else if(usuario === "jerel" && contraseña !== 1234){
    console.log("Contraseña incorrecta")
}
else 
    console.log("Usuario no encontrado") **/

/** Ejercicio 22 — Envío gratis
Si el total de compra es mayor a $50 O si el cliente tiene membresía premium, el envío es gratis. Si no
cumple ninguna de las dos condiciones, imprimir que el envío cuesta $5 */

/** const totalCompra = 60;
const membresia = "premium";

if (totalCompra >= 50 || membresia === "premium"){
    console.log("el envio es gratis")
}
else 
    console.log("el envio cuesta $5") **/

/** Ejercicio 23 — Puede adoptar una mascota
Para adoptar una mascota, la persona debe tener más de 18 años, NO vivir en apartamento Y tener
ingresos mayores a $1000. Si cumple todo, imprimir que puede adoptar. Si no, que no cumple los requisitos. */

/** const suEdad = 18;
const apartment = false;
const ingresos = 1000;

if (suEdad >= 18 && !apartment && ingresos >= 1000){
    console.log("Puede adoptar")
}
else {
    console.log("No cumple requisitos")
} **/

/** Ejercicio 24 — Calculadora básica
Según la operación indicada ("sumar", "restar", "multiplicar", "dividir"), calcular el resultado entre dos
números e imprimirlo. Si se intenta dividir entre cero, imprimir un mensaje de error. */  

/** const numeroUNo = 10;
const numeroDos = 2;
const operador = "multiplicar"

if (operador === "sumar") {
    const resultado = numeroUNo + numeroDos;
    console.log("el resultado es:", resultado)
} 
else if(operador === "restar"){
    const resultado = numeroUNo - numeroDos
    console.log("el resultado es ", resultado)
}
else if(operador === "multiplicar"){
    const resultado = numeroUNo * numeroDos
    console.log("el resultado es ", resultado)
}
else if(operador === "dividir"){
    const resultado = numeroUNo / numeroDos
    console.log("el resultado es", resultado)
}
else {
    console.log("operación no valida")
} **/


/** Ejercicio 25 — Estación del año
Dado un mes en número del 1 al 12, imprimir la estación del año correspondiente: Invierno (12, 1, 2),
Primavera (3–5), Verano (6–8), Otoño (9–11). Si el número no está entre 1 y 12, imprimir que no es un mes
válido.
 */

/** const mes = 0

if (mes === 12 || mes === 1 || mes === 2){
    console.log("invierno")
}
else if(mes === 3 || mes === 5){
    console.log("primavera")
}
else if(mes === 6 || mes === 8){
    console.log("verano")
}
else if (mes === 9 || mes === 11){
    console.log("otoño")
}
else {
    console.log("mes no valido")
} **/

/** Ejercicio 26 — Precio de entrada al cine
Niños menores de 12 pagan $3. Adultos mayores de 65 pagan $4. Todos los demás pagan $8. Además, si
es martes, todos pagan la mitad del precio. Imprimir el precio final. */


/* Ejercicio 27 — Nivel de batería
Si la batería es mayor a 80%, imprimir "Batería alta". Si está entre 20% y 80%, imprimir "Batería media". Si
es menor al 20%, imprimir "Batería baja, conecta el cargador" */

/** const nivelBateria = 7;

if (nivelBateria >=80){
    console.log("Bateria alta")
    
}
else if (nivelBateria >=20 && nivelBateria<80){
    console.log("Bateria media")
}
else {
    console.log("Bateria baja")
} **/

/* Ejercicio 28 — Sistema de puntos de juego
Si el jugador tiene más de 1000 puntos es "Leyenda", entre 500 y 1000 es "Experto", entre 100 y 499 es
"Principiante", menos de 100 es "Novato". Además, si tiene 500 puntos o más Y no ha perdido ninguna vida,
imprimir también "¡Partida perfecta!". */

/* const puntosJugador = 555

if(puntosJugador >= 1000){
    console.log("Leyenda")
}
else if(puntosJugador >= 500 && puntosJugador <1000){
    console.log("Experto")
}
else if(puntosJugador >=100 && puntosJugador <=499){
    console.log("Principiante")
}
else if(puntosJugador <100){
    console.log("Novato")
} */

/* Ejercicio 29 — Validar formulario
Validar que el nombre no esté vacío, que la edad sea mayor a 0, y que el email contenga "@". Si todo es
correcto, imprimir "Formulario enviado". Si algo falla, imprimir qué campo es el problema. */

/* Ejercicio 30 — Puede sacar un préstamo
Para aprobar un préstamo, el cliente debe tener más de 21 años, ingresos mayores a $2000 mensuales, NO
tener deudas pendientes, y llevar más de 6 meses en su empleo actual. Si cumple todo, imprimir "Préstamo
aprobado". Si no, imprimir "Préstamo denegado" e indicar cuáles condiciones no cumplió. */

/* const edadPrestamo = 25;
const ingresos = 3000;
const deudasPendiente = true;
const tiempoEmpleo = 8;

if (edadPrestamo >= 21 && ingresos >=2000 && !deudasPendiente && tiempoEmpleo >=6){
    console.log("Prestamo aprobado")
}
else {
    console.log("Prestamo denegado")
} */

/* Ejercicio 11 — Semáforo
Según el color del semáforo ("verde", "amarillo" o "rojo"), imprimir la instrucción que debe seguir el
conductor. Si el color no es ninguno de los tres, imprimir que no es un color válido */

/* const semaforo = "rojo";

if (semaforo === "verde"){
    console.log("Puede seguir")
}
else if (semaforo === "amarillo"){
    console.log("preparese")
}
else if (semaforo === "rojo"){
    console.log("pare")
}
else{
    console.log("color no valido")
} */

/* Ejercicio 12 — Calificación con letras
Convertir una nota numérica a letra: A (90–100), B (80–89), C (70–79), D (60–69), F (menos de 60). Imprimir
la letra correspondiente */

/* const calificación = 10;

if (calificación >=90 && calificación <=100){
    console.log("A")
}
else if(calificación >= 80 && calificación <= 89){
    console.log("B")
}
else if (calificación >=70 && calificación <= 79){
    console.log("C")
}
else if(calificación >=60 && calificación <= 69){
    console.log("D")
}
else if (calificación <60) {
    console.log("F")
}
else {
    console.log("nota no valida")
} */

/* Ejercicio 13 — Turno del día
Dada una hora en formato de 0 a 23, imprimir si es Madrugada (0–5), Mañana (6–11), Tarde (12–17) o
Noche (18–23).*/

/* onst hora = 24

if (hora >= 0 && hora <=5){
    console.log("Madrugada")
}
else if (hora >= 6 && hora <=11){
    console.log("Mañana")
}
else if (hora >=12 && hora <= 17){
    console.log("Tarde")
}
else if (hora >=18 && hora <= 23){
    console.log("Noche")
}
else {
    console.log("Hora no valida")
} */

/* Ejercicio 14 — Acceso al sistema con ||
Si el usuario es "admin" O si el usuario es "moderador", imprimir "Acceso permitido". Si no, imprimir "Acceso
denegado". */

/* const usuario = "moderador";

if (usuario === "admin" || usuario === "moderador"){
    console.log("acceso permitido")
}
else {
    console.log("acceso denegado")
} */

/* Ejercicio 15 — Día del fin de semana con ||
Si el día es sábado o domingo, imprimir "Es fin de semana". Si no, imprimir "Es día de semana".*/

/* const diaSemana = "domingo";

if (diaSemana === "domingo" || diaSemana === "sabado"){
    console.log("fin de semana")
}
else if(diaSemana === "lunes" || diaSemana === "martes" || diaSemana === "miercoles" || diaSemana === "jueves" || diaSemana === "viernes"){
    console.log("semana")
}
else {
    console.log("no es un día de la semana")
} */

/* Ejercicio 16 — Descuento por membresía con ||
Si el cliente tiene membresía "Gold" o "Platinum", imprimir que tiene un descuento del 20%. Si no, imprimir
que se cobra el precio normal. */

/* const membresia = "Platinum"

if (membresia === "Gold" || membresia === "platinum"){
    console.log("Tiene descuento del 20%")
}
else {
    console.log("Paga precio normal")
} */

/* Ejercicio 17 — Número entre rango con &&
Si un número es mayor a 10 Y menor a 20, imprimir "El número está dentro del rango". Si no, imprimir "El
número está fuera del rango". */

/* const rangoNumero = 2;

if (rangoNumero >= 10 && rangoNumero <=20){
    console.log("El numero esta en el rango")
}
else {
    console.log("El numero esta fuera del rango")
} */ 

/* Ejercicio 18 — Puede votar con &&
Para votar, la persona debe tener 18 años o más Y tener cédula. Si cumple ambas condiciones, imprimir
que puede votar. Si no, que no puede */

/* const edadVotar = 20;
const cedula = false;

if (edadVotar >= 18 && cedula){
    console.log("Puede votar")
}
else {
    console.log("No puede votar")
} */ 

/* Ejercicio 19 — Categoría de edad
Clasificar a una persona según su edad: Niño (0–12), Adolescente (13–17), Adulto (18–64), Adulto mayor
(65 en adelante). Imprimir la categoría correspondiente. */

/*const edades = 100;
if (edades >= 0 && edades <= 12){
    console.log("Niño")
}
else if (edades >= 13 && edades <= 17){
    console.log("Adolescente")
}
else if (edades >= 18 && edades<= 64){
    console.log("Adulto")
}
else {
    console.log("Adulto mayor")
} */

/* Ejercicio 20 — Velocidad en carretera
Si la velocidad es menor a 60, imprimir "Muy lento". Si está entre 60 y 120, imprimir "Velocidad normal". Si
supera los 120, imprimir "Exceso de velocidad" */

/* const velocidad = 59;

if (velocidad <60){
    console.log("muy lento")
}
else if (velocidad >=60 && velocidad <= 120){
    console.log("Velocidad normal")
}
else {
    console.log("Exceso de velocidad")
} */

