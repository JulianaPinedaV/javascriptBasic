
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
    console.log("no puedes votar")
) **/

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

let edad = 66;
const dia = "martes";
let precio = 0;

if(edad <12){
    precio = 3;
}
else if(edad >65){
    precio = 4;
} else {
    precio = 8;
}

if(dia === "martes"){
    precio = precio / 2
} 

console.log("el precio final es ", precio)




/** let edad = 10;
const dia = "lunes";
const precioNiño = 3;
const precioMayores = 4;
const precioDemas = 8;

if(edad<12 && dia === "martes"){
    console.log(precioNiño / 2)
}else {
    console.log("paga 3")
}
if(edad >65 && dia === "martes")
    console.log(precioMayores / 2)
else {
    console.log("paga 4")
}
else{
    console.log("el precio es", precioDemas)
} **/
