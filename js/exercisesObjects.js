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
    stock: true,
    stockDisponible() {
        return this.stock ? "stock disponible" : "sin stock";
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

        if (longitudContraseña >= 8) {
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

const cancion = {
    titulo: "destino final",
    artista: "Yeison Jimenez",
    duracion: 200,

    convertirCancion() {
        const minutosEnteros = Math.floor(this.duracion / 60);
        const segundos = this.duracion % 60;
        return `La duración de la cancion es de ${minutosEnteros} minutos y ${segundos} segundos`
    },

    duracionCancion() {
        return this.duracion > 180 ? "la cancion dura mas de 3 minutos" : "La cancion dura menos de 3 minutos"
    }
}

console.log(cancion.convertirCancion());
console.log(cancion.duracionCancion());

/* 8. Creá un objeto que represente un auto con marca, modelo y kilometraje. Agregale un método que
use if/else para mostrar si el auto necesita service urgente (más de 10.000 km), service próximo
(entre 7.500 y 10.000 km) o está al día (menos de 7.500 km). Agregale otro método que muestre la
descripción completa del auto usando template literals con el modelo siempre en mayúsculas.
■ Investigá: ¿Qué es el operador % (módulo)? Usalo para mostrar cuántos km le faltan al auto para llegar al
próximo múltiplo de 2.500 km. */

const auto = {
    marca: "nissan",
    modelo: "march",
    km: 2499,

    service() {
        if (this.km > 10000) {
            return "service urgente"
        }
        else if (this.km >= 7500 && this.km <= 10000) {
            return "service proximo"
        }
        else {
            return "esta al dia"
        }
    },

    descripcion() {
        return `auto ${this.marca.toUpperCase()} modelo ${this.modelo.toUpperCase()} con ${this.km} km`
    },

    kmFaltantes() {
        const resto = this.km % 2500;
        const falta = 2500 - resto;
        return `le faltan ${falta} para llegar a 2500`
    }
};

console.log(auto.service()),
    console.log(auto.descripcion()),
    console.log(auto.kmFaltantes())

/* 9. Creá un objeto que represente un mensaje de chat con remitente, texto y leído (booleano).
Agregale un método que use un ternario para mostrar el estado del mensaje como 'leído' o 'no
leído'. Agregale otro método que use .length con if/else para avisar si el mensaje es demasiado
largo (más de 140 caracteres).
■ Investigá: ¿Qué hace el operador ! (negación)? Usalo para cambiar el estado de leído a no leído y
viceversa dentro de un método. */

const mensajeChat = {
    remitente: "asados jp",
    texto: "Bienvenidos a asados jp",
    leido: true,

    estadoMensaje() {
        return !this.leido ? "no leido" : "leido"
    },

    longitudMensaje() {
        const longitud = this.texto.length;
        if (longitud > 140) {
            return "mensaje demasiado largo";
        }
        else {
            return "mensaje cumple"
        }
    },

    cambiarEstado() {
        this.leido = !this.leido;
        return `El estado ahora es: ${this.estadoMensaje()}`
    }
}

console.log(mensajeChat.estadoMensaje()),
    console.log(mensajeChat.longitudMensaje());
console.log(mensajeChat.cambiarEstado());

/* 10. Creá un objeto que represente un empleado con nombre y lista de habilidades guardadas como un
string separado por comas. Agregale un método que use .split() para mostrar cuántas habilidades
tiene. Agregale otro método que use .includes() con if/else para verificar si tiene una habilidad
específica que reciba como parámetro.
■ Investigá: ¿Qué diferencia hay entre .includes() en un string y en el resultado de .split()? Probá buscar
una habilidad con espacios antes o después y fijate qué pasa si no usás .trim() primero. */

const empleado1 = {
    nombre1: "Antonella",
    habilidades: "amorosa, cariñosa, juiciosa, juguetona, inteligente, hermosa",

    cantidadHabilidades() {
        const lista = this.habilidades.split(",");
        console.log(lista);
        return `El empleado ${this.nombre1} tiene ${lista.length} habilidades`
    },

    habilidadEspecifica(habilidad) {
        const habilidadesProcesadas = habilidad.trim();
        if (this.habilidades.includes(habilidadesProcesadas)) {
            return `el empleado ${this.nombre1} tiene la habilidad ${habilidad}`
        }
        else {
            return `el empleado ${this.nombre1} no tiene la habilidad`
        }
    }
}

console.log(empleado1.cantidadHabilidades());
console.log(empleado1.habilidadEspecifica("  cariñosa   "));

/* 11. Creá un objeto que represente una tienda con nombre, dirección y si está abierta. Agregale un
método que use .toUpperCase() para mostrar el nombre de la tienda. Agregale otro método que
use un ternario para mostrar si la tienda está abierta o cerrada.
■ Investigá: ¿Qué es la concatenación de métodos (method chaining)? Intentá escribir .trim().toUpperCase()
en una sola línea sobre el nombre de la tienda. */

const tienda = {
    nombre: "  stop tienda   ",
    direccion: "centro comercial fundadores",
    isOpen: false,

    nombreTienda() {
        const nombreConver = this.nombre.trim().toUpperCase();
        return `El nombre de la tienda es ${nombreConver}`;
    },

    tiendaAbierta() {
        return this.isOpen ? "La tienda esta abierta" : "La tienda esta cerrada"
    }
}

console.log(tienda.nombreTienda());
console.log(tienda.tiendaAbierta());

/* 12. Creá un objeto que represente un pasajero con nombre, número de asiento y peso del equipaje en
kilos. Agregale un método que use template literals para mostrar los datos del pasajero. Agregale
otro método que use if/else para calcular el cargo extra: el equipaje es gratuito hasta 23 kg, y por
cada kilo extra se cobran $15.
■ Investigá: ¿Qué hace Math.max()? Usalo para calcular los kilos de exceso sin necesitar un if/else para
ese cálculo puntual. */

const pasajero = {
    nombre2: "juliana",
    asiento: 20,
    pesoEquipaje: 30,
    pesoPermitido: 23,

    datosPasajero() {
        return `El pasajero ${this.nombre2}, ocupa el asiento ${this.asiento} y lleva un equipaje de ${this.pesoEquipaje} kg`
    },

    cargoExtra() {
        const costoPorKiloExtra = 15;

        if (this.pesoEquipaje >= this.pesoPermitido) {
            const exceso = this.pesoEquipaje - this.pesoPermitido
            return `tiene ${exceso} kilos de mas, el cargo extra es de ${exceso * costoPorKiloExtra} $`
        }
        else {
            return "no hay cargo extra"
        }
    },

    exceso() {
        return Math.max(0, this.pesoEquipaje - this.pesoPermitido)
    } 
}

console.log(pasajero.datosPasajero());
console.log(pasajero.cargoExtra());
console.log("kilos de mas", pasajero.exceso()); 

/* 13. Creá un objeto que represente un libro con título, autor y cantidad de páginas. Agregale un método
que use .slice() para mostrar solo los primeros 10 caracteres del título seguidos de '...' si el título es
más largo. Agregale otro método con if/else para clasificarlo como lectura corta (menos de 150
páginas), media (entre 150 y 400 páginas) o larga (más de 400 páginas).
■ Investigá: ¿Qué hace .charAt(0)? Usalo para mostrar la inicial del autor junto al apellido, por ejemplo 'J.
Rowling'. */

const libro = {
    titulo: "romper el circulo",
    autor: "colleen hoover",
    cantidadPaginas: 200,

    caracteresTitulo() {
        return `${this.titulo.slice(0, 10)}....`
    },

    clasificacion() {
        if (this.cantidadPaginas < 150) {
            return "lectura corta"
        }
        else if (this.cantidadPaginas >= 150 && this.cantidadPaginas < 400){
            return "lectura media"
        }
        else {
            return "lectura larga"
        }
    }, 
    
    inicial() {
        const inicialAutor = this.autor.charAt(0).toUpperCase();
        const apellidoAutor = this.autor.split(" ")[1];
        return `${inicialAutor}. ${apellidoAutor}`;
    }
    }

console.log(libro.caracteresTitulo());
console.log(libro.clasificacion());
console.log(libro.inicial());

/* 14. Creá un objeto que represente un jugador con nombre, nivel y puntos. Agregale un método que
reciba puntos ganados y los sume. Usá variables internas y if/else para verificar si los puntos
alcanzan para subir de nivel: se necesitan 1.000 puntos por nivel. Si se sube de nivel, los puntos
vuelven a 0. Mostrá todos los mensajes con template literals.
■ Investigá: ¿Cómo funciona el operador % (módulo) para calcular el resto? Usalo para que los puntos que
sobran después de subir de nivel no se pierdan sino que queden acumulados. */



/* 15. Creá un objeto que represente un restaurante con nombre, tipo de cocina y calificación del 1 al 5.
Agregale un método que use .replace() para cambiar espacios por guiones en el nombre y pasarlo
a minúsculas, mostrándolo como si fuera una URL. Agregale otro método con if/else para mostrar
la calificación en texto: 1 es 'muy malo', 2 es 'malo', 3 es 'regular', 4 es 'bueno' y 5 es 'excelente'.
■ Investigá: ¿Cuál es la diferencia entre .replace() y .replaceAll()? Probá qué pasa si el nombre del
restaurante tiene más de un espacio */

const restaurante = {
    nombre: "DOÑA ABUELA ",
    tipoCocina: "gourmet",
    calificacion: 0,

    nombreReplace() {
        return `${this.nombre.replaceAll(" ", "_").toLowerCase()}`;
    },

    calificacionTexto() {
        if (this.calificacion === 1){
            return "muy malo"
        }
        else if (this.calificacion === 2){
            return "malo"
        }
        else if (this,this.calificacion === 3){
            return "regular"
        }
        else if (this.calificacion === 4){
            return "bueno"
        }
        else if (this.calificacion === 5){
            return "excelente"
        }
        else {
            return "la calificacion no es valida"
        }
    },
    
}

console.log(restaurante.nombreReplace());
console.log(restaurante.calificacionTexto());

/* 16. Creá un objeto que represente un paciente con nombre, temperatura y presión arterial. Agregale un
método que use if/else con variables internas para diagnosticar: la temperatura normal es entre 36
y 37.5 grados, y la presión normal es entre 60 y 120. Si algún valor está fuera del rango, mostrá
cuál es el problema. Mostrá el diagnóstico completo usando template literals.
■ Investigá: ¿Qué hace el operador && dentro de un if? Usalo para verificar ambas condiciones
(temperatura Y presión) en una sola línea. */

const paciente = {
    nombrePaciente: "ana",
    temperatura: 37,
    presionArterial: 120,

    diagnostico(){
        const tempNormal = this.temperatura >= 36 && this.temperatura <= 37.5;
        const presionNormal = this.presionArterial >= 60 && this.presionArterial <= 120;        
        if (tempNormal && presionNormal){
            return `El paciente ${this.nombrePaciente} tiene temperatura y presión arterial normales`
        }       
        else if (!tempNormal && presionNormal){
            return `El paciente ${this.nombrePaciente} tiene temperatura anormal y presión arterial normal`
        }
        else if (tempNormal && !presionNormal){
            return `El paciente ${this.nombrePaciente} tiene temperatura normal y presión arterial anormal`
        }
        else {
            return `El paciente ${this.nombrePaciente} tiene temperatura y presión arterial anormales`
        }
        
    }
}

/* 17. Creá un objeto que represente un cupón de descuento con código, porcentaje y si está activo.
Agregale un método que reciba un precio y use if/else para aplicar el descuento solo si el cupón
está activo y mostrar el precio final. Si no está activo, mostrar 'Cupón inválido'. Agregale otro
método que muestre el código siempre en mayúsculas con .toUpperCase().
■ Investigá: ¿Qué hace .toFixed(2)? Usalo para que el precio final siempre muestre dos decimales aunque
el resultado sea exacto. */

const cuponDescuento = {
    codigo: "descuento10",
    porcentaje: 10,
    estado: "Activo",

    precioTotal(precio){
        if (this.estado === "Activo"){
            const descuento = (precio * this.porcentaje) / 100;
            const precioFinal = precio - descuento;
            return precioFinal.toFixed(2);
        }
        else {
            return "cupon invalido"
        }
    },

    codigoConvertido(){
        return this.codigo.toUpperCase();
    }
}

console.log(cuponDescuento.precioTotal(100000));
console.log(cuponDescuento.codigoConvertido());

/* 18. Creá un objeto que represente un perfil de red social con nombre de usuario, cantidad de
seguidores y verificado (booleano). Agregale un método que use un ternario para mostrar el
nombre con o sin el simbolo de verificado. Agregale otro método con if/else para clasificar la
cuenta: menos de 1.000 seguidores es 'cuenta nueva', entre 1.000 y 10.000 es 'cuenta en
crecimiento', entre 10.000 y 100.000 es 'influencer', y más de 100.000 es 'cuenta masiva'.
■ Investigá: ¿Qué es la igualdad estricta === y en qué se diferencia de ==? Usá === en todas tus
comparaciones y explicá por qué es mejor. */

const perfil = {
    nombreUsario: "julianaPineda",
    cantidadSeguidores: 50000,
    verificado: false,

    usuarioVerificado() {
        return this.verificado ? `${this.nombreUsario} ✔` : this.nombreUsario
    },

    clasificacionCuenta() {
        if (this.cantidadSeguidores < 1000){
            return "cuenta nueva"
        }
        else if (this.cantidadSeguidores >= 1000 && this.cantidadSeguidores < 10000){
            return "cuenta en crecimiento"
        }
        else if (this.cantidadSeguidores >= 10000 && this.cantidadSeguidores < 100000){
            return "influencer"
        }
        else {
            return "cuenta masiva"
        }
    }
}

console.log(perfil.usuarioVerificado());
console.log(perfil.clasificacionCuenta())

/* 19. Creá un objeto que represente un vuelo con origen, destino, hora de salida y si está retrasado.
Agregale un método que use template literals para mostrar la información del vuelo. Agregale otro
método que use un ternario para mostrar el estado como 'a tiempo' o 'retrasado'. Agregale un
tercer método con if/else para mostrar la zona horaria del origen: si es 'Buenos Aires' mostrar
'GMT-3', si es 'Madrid' mostrar 'GMT+1', si es 'Nueva York' mostrar 'GMT-5', y para cualquier otro
origen mostrar 'zona horaria desconocida'.
■ Investigá: ¿Para qué sirve la cláusula else if? Es lo que necesitás para manejar los tres casos de zona
horaria en un solo bloque. */

const vuelo = {
    origen: "Madrid",
    destino: "manizales",
    horaSalida: "12:50",
    retrasado: true,

    informacionVuelo() {
        return `vuelo ${this.origen} ${this.destino} ${this.horaSalida}`
    },

    estadoVuelo() {
        return !this.retrasado ? "a tiempo" : "retrasado" 
    },

    zonaHoraria() {
        if (this.origen === "Buenos Aires") {
            return "GMT-3"
        }
        else if (this.origen === "Madrid") {
            return "GMT+1"
        }
        else if (this.origen === "Nueva York") {
            return 'GMT-5'
        }
        else { 
            return "zona horaria desconocida"
        }
    }
}

console.log(vuelo.informacionVuelo());
console.log(vuelo.estadoVuelo());
console.log(vuelo.zonaHoraria())

/* 20. Creá un objeto que represente una receta con nombre, ingredientes como string separado por
comas y tiempo de preparación en minutos. Agregale un método que use .split() para mostrar los
ingredientes uno por uno. Agregale otro método con if/else para clasificar la receta como rápida
(menos de 15 minutos), normal (entre 15 y 45 minutos) o elaborada (más de 45 minutos).
■ Investigá: ¿Qué hacen .trimStart() y .trimEnd()? Probá aplicar .trim() al string de ingredientes completo
antes del .split() para limpiar espacios accidentales. */

const receta = {
    nombre: "arroz con pollo",
    ingredientes: "  arroz, pollo, pimenton, zanahoria, arveja, salchichas, salsa de tomate    ",
    preparacion: 120,

    ingredientesLista(){
        const ingredientesLimpios = this.ingredientes.trim();
        return ingredientesLimpios.split(",");
    },

    tiempoReceta(){
        if (this.preparacion < 15){
            return "rapida"
        }
        else if (this.preparacion >= 15 && this.preparacion < 45){
            return "normal"
        }
        else {
            return "elaborada"
        }
    }
}

console.log(receta.ingredientesLista());
console.log(receta.tiempoReceta())

/* 21. Creá un objeto que represente un gimnasio con nombre, precio mensual y si tiene pileta. Agregale
un método que use un ternario para mostrar si incluye pileta en el plan. Agregale otro método que
reciba la cantidad de meses y calcule el costo total mostrándolo con template literals.
■ Investigá: ¿Qué hace Number()? Usalo dentro del método para asegurarte de que el parámetro de meses
sea siempre tratado como número. */

const gimnasio = {
    nombre: "muscle center",
    precioMensual: 100000,
    tienePileta: true,

    incluyePileta() {
        return this.tienePileta ? "incluye pileta" : "no incluye pileta"
    },

    cantidadMeses(meses) {
        const parametroMeses = Number(meses);
        const precioMeses = this.precioMensual * parametroMeses;
        return `El costo total es de ${precioMeses}`
    }
}

console.log(gimnasio.incluyePileta());
console.log(gimnasio.cantidadMeses(5));

/* 22. Creá un objeto que represente un estudiante con nombre, carrera y promedio. Agregale un método
que use .toLowerCase() para normalizar el nombre de la carrera antes de mostrarlo. Agregale otro
método con if/else para mostrar el estado académico: promedio menor a 4 es 'en riesgo
académico', entre 4 y 5.9 es 'puede rendir con previa', y 6 o más es 'habilitado para rendir el final'.
■ Investigá: ¿Qué hace Math.round()? Usalo para redondear el promedio antes de mostrarlo. */

const estudiante = {
    nombre7: "juliana",
    carrera: "Administracion de EMPRESAS",
    promedio: 4.2,

    carreraConver() {
        const carreraConver = this.carrera.toLowerCase();
        return `nombre carrera: ${carreraConver}`
    },

    estadoAcademico() {
        const promedioRedondeado = Math.round(this.promedio);

        if (promedioRedondeado < 4) {
            return "en riesgo academico"
        } 
        else if (promedioRedondeado >= 4 && this.promedio < 5.9) {
            return "puede rendir con previa"
        }
        else {
            return "habilitado para rendir el final"
        }
    }
}

console.log(estudiante.carreraConver());
console.log(estudiante.estadoAcademico());

