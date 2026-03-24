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
        else if (this.cantidadPaginas >= 150 && this.cantidadPaginas < 400) {
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
        if (this.calificacion === 1) {
            return "muy malo"
        }
        else if (this.calificacion === 2) {
            return "malo"
        }
        else if (this.calificacion === 3) {
            return "regular"
        }
        else if (this.calificacion === 4) {
            return "bueno"
        }
        else if (this.calificacion === 5) {
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

    diagnostico() {
        const tempNormal = this.temperatura >= 36 && this.temperatura <= 37.5;
        const presionNormal = this.presionArterial >= 60 && this.presionArterial <= 120;
        if (tempNormal && presionNormal) {
            return `El paciente ${this.nombrePaciente} tiene temperatura y presión arterial normales`
        }
        else if (!tempNormal && presionNormal) {
            return `El paciente ${this.nombrePaciente} tiene temperatura anormal y presión arterial normal`
        }
        else if (tempNormal && !presionNormal) {
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

    precioTotal(precio) {
        if (this.estado === "Activo") {
            const descuento = (precio * this.porcentaje) / 100;
            const precioFinal = precio - descuento;
            return precioFinal.toFixed(2);
        }
        else {
            return "cupon invalido"
        }
    },

    codigoConvertido() {
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
        if (this.cantidadSeguidores < 1000) {
            return "cuenta nueva"
        }
        else if (this.cantidadSeguidores >= 1000 && this.cantidadSeguidores < 10000) {
            return "cuenta en crecimiento"
        }
        else if (this.cantidadSeguidores >= 10000 && this.cantidadSeguidores < 100000) {
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

    ingredientesLista() {
        const ingredientesLimpios = this.ingredientes.trim();
        return ingredientesLimpios.split(",");
    },

    tiempoReceta() {
        if (this.preparacion < 15) {
            return "rapida"
        }
        else if (this.preparacion >= 15 && this.preparacion < 45) {
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
console.log("---- ejercicio 22 ----------- ");
const estudiante = {
    nombre7: "juliana",
    carrera: "Administracion de EMPRESAS",
    promedio: 3.6,

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

/* 23. Creá un objeto que represente un producto de e-commerce con nombre, precio y categoría.
Agregale un método que use .includes() con un ternario para mostrar si pertenece a la sección de
ofertas: la categoría debe contener la palabra 'oferta' para que cuente. Agregale otro método que
muestre el nombre del producto con la primera letra en mayúscula usando .slice() y
.toUpperCase().
■ Investigá: ¿Qué hace .startsWith()? Usalo para verificar si la categoría empieza con la letra 'o' y compará
ese resultado con el de .includes(). */

const productoEcommerce = {
    nombre: "camisa",
    precio: 50000,
    categoria: "oferta verano",

    perteneceAOfertas() {
        return this.categoria.includes("oferta") ? "pertenece a la sección de ofertas" : "no pertenece a la sección de ofertas";
    },

    nombreConMayuscula() {
        return this.nombre.slice(0, 1).toUpperCase() + this.nombre.slice(1);

    },

    comparacionCategoria() {
        const empiezaConO = this.categoria.startsWith("o");
        const contieneO = this.categoria.includes("o");
        return `empieza con 'o'? ${empiezaConO} contiene 'o' ${contieneO}`;
    }
}

console.log(productoEcommerce.perteneceAOfertas());
console.log(productoEcommerce.nombreConMayuscula());
console.log(productoEcommerce.comparacionCategoria());

/* 24. Creá un objeto que represente un sistema de turnos con nombre del cliente, servicio y hora. La
hora se guarda como número (por ejemplo, 14 para las 14:00). Agregale un método que use .trim()
para limpiar el nombre antes de guardarlo. Agregale otro método con if/else para verificar si la hora
está dentro del horario de atención de 9 a 18: si está dentro mostrar 'Turno confirmado', si no
mostrar 'Fuera de horario de atención'.
■ Investigá: ¿Qué hace el operador ||? Usalo para que el método muestre 'Cliente sin nombre' si el campo
viene vacío después del .trim(). */

const sistemaTurnos = {
    nombreCliente: "",
    servicio: "cita odontologica",
    hora: 8,

    nombreLimpio() {
        const nombreLimpio = this.nombreCliente.trim()
        return nombreLimpio || "Cliente sin nombre";
    },

    horaAtencion() {
        if (this.hora >= 9 && this.hora <= 18) {
            return "cita confirmada"
        }
        else {
            return "fuera de horario de atención"
        }
    },
}

console.log(sistemaTurnos.nombreLimpio());
console.log(sistemaTurnos.horaAtencion());

/* 25. Creá un objeto que represente un vehículo de delivery con patente, nombre del repartidor y
cantidad de entregas del día. Agregale un método que use un ternario para mostrar si puede tomar
más pedidos: el límite diario es 20 entregas. Agregale otro método que muestre la patente siempre
en mayúsculas y sin espacios usando .toUpperCase() y .replace().
■ Investigá: ¿Cuál es la diferencia entre .replace() y .replaceAll()? Probá qué pasa si la patente tiene más
de un espacio y usá el que corresponda. */

const vehiculoDelivery = {
    patente: "abc  123  abc ",
    nombreRepartidor: "juan",
    cantidadEntregas: 21,

    pedidosAdicionales() {
        return this.cantidadEntregas <= 20 ? "puede tomar mas pedidos" : "no puede tomar mas pedidos"
    },

    patenteConver() {
        return this.patente.toUpperCase().replaceAll(" ", "")
    }
}

console.log(vehiculoDelivery.pedidosAdicionales());
console.log(vehiculoDelivery.patenteConver());

/* 26. Creá un objeto que represente un examen con materia, alumno, respuesta correcta y respuesta del
alumno. Agregale un método que use .trim() y .toLowerCase() para normalizar ambas respuestas
antes de compararlas. Usá if/else para mostrar 'Correcto' o 'Incorrecto' con el nombre del alumno y
la materia usando template literals.
■ Investigá: ¿Cuál es la diferencia entre == y ===? Explicá cuál usarías para comparar las respuestas y por
qué. */

const examen = {
    materia: "matematicas",
    alumno: "juliana",
    respuestaCorrecta: "FALSE",
    respuestaAlumno: "false",

    respuestas() {
        const respuestaCorrectaConvertida = this.respuestaCorrecta.trim().toLowerCase();
        const respuestaAlumnoConvertida = this.respuestaAlumno.trim().toLowerCase();

        if (respuestaCorrectaConvertida === respuestaAlumnoConvertida) {
            return (`${this.alumno}, ${this.materia} respuesta correcta`)
        }
        else {
            return (`${this.alumno}, ${this.materia} respuesta incorrecta`)
        }

    }
}

console.log(examen.respuestas())

/* 27. Creá un objeto que represente una notificación con título, mensaje y prioridad ('alta', 'media' o
'baja'). Agregale un método que use if/else para mostrar el título en mayúsculas si la prioridad es
alta, en formato normal si es media, y en minúsculas si es baja. Agregale otro método que use
.length con un ternario para recortar el mensaje si supera los 50 caracteres, mostrando solo los
primeros 50 seguidos de '...'.
■ Investigá: ¿Qué hace .substring()? Compará cómo funciona con .slice() para recortar el mensaje y usá el
que te parezca más claro. */

const notificacion = {
    titulo: "Cuenta de cobro",
    mensaje: "le informamos que en este momento tiene un saldo pendiente de pago de 200.000. POr favor porngase al día en los pagos",
    prioridad: "baja",

    tituloPrioridad() {
        if (this.prioridad === "alta") {
            return this.titulo.toUpperCase()
        }
        else if (this.prioridad === "media") {
            return this.titulo
        }
        else if (this.prioridad === "baja") {
            return this.titulo.toLowerCase()
        }
        else {
            return "La prioridad no existe"
        }
    },

    mensajeRecortado() {
        const longitudMensaje = this.mensaje.length
        return longitudMensaje > 50 ? `${this.mensaje.substring(0, 50)}...` : `${this.mensaje}`
    }
}

console.log(notificacion.tituloPrioridad());
console.log(notificacion.mensajeRecortado());

/* 28. Creá un objeto que represente una farmacia con nombre, dirección y turno (booleano que indica si
está de turno esa noche). Agregale un método con un ternario para mostrar si está de turno.
Agregale otro método que use .replace() para formatear la dirección reemplazando la abreviatura
'Av.' por 'Avenida'.
■ Investigá: ¿Qué hace .endsWith()? Usalo para verificar si la dirección termina con un número y mostrar un
mensaje distinto si no tiene numeración */

const farmacia = {
    nombre: "la rebaja",
    direccion: "av 37 # 50 20",
    turno: false,

    estaDeTurno() {
        return this.turno ? "esta de turno" : "no esta de turno"
    },

    direccionFormateada() {
        return this.direccion.replace("av", "avenida");
    },

    verificarDireccion() {
        if (this.direccion.endsWith("0") || this.direccion.endsWith("1") || this.direccion.endsWith("2") || this.direccion.endsWith("3") || this.direccion.endsWith("4") || this.direccion.endsWith("5") || this.direccion.endsWith("6") || this.direccion.endsWith("7") || this.direccion.endsWith("8") || this.direccion.endsWith("9")) {
            return "la direccion termina en un numero"
        }
        else {
            return "la direccion no tiene numeracion"
        }
    }
}

console.log(farmacia.estaDeTurno());
console.log(farmacia.direccionFormateada());
console.log(farmacia.verificarDireccion());

/* 29. Creá un objeto que represente una cancha de fútbol con nombre, superficie y precio por hora.
Agregale un método que reciba la cantidad de horas y use if/else para calcular el precio: si se
reservan más de 3 horas se aplica un 20% de descuento, si no se cobra el precio normal. Mostrá el
nombre de la cancha con .toUpperCase() en todos los mensajes.
■ Investigá: ¿Qué hace Math.round()? Usalo para redondear el precio final al número entero más cercano y
evitar decimales extraños. */

const canchaFutbol = {
    nombre: "uribe",
    superficie: "4000 m2",
    precioHora: 3.2,

    valorTotal(cantidadHoras) {
        const valorTotal = cantidadHoras * this.precioHora;

        if (cantidadHoras > 3) {
            const descuento = valorTotal * 0.20;
            const valorFinal = valorTotal - descuento;
            return `cancha ${this.nombre.toUpperCase()} valor reserva ${Math.round(valorFinal)}`
        }
        else {
            return `${this.nombre.toUpperCase()} valor reserva ${Math.round(valorTotal)}`
        }
    }
}

console.log(canchaFutbol.valorTotal(3));

/* 30. Creá un objeto que represente un certificado con nombre del participante, curso y fecha. Agregale
un método que use .toUpperCase() en el nombre y template literals para generar el texto oficial del
certificado. Agregale otro método que use .length con if/else para verificar que el nombre no supere
los 40 caracteres: si los supera mostrar 'Nombre demasiado largo para el certificado'.
■ Investigá: ¿Qué hace .padEnd()? Usalo para rellenar el nombre con puntos hasta llegar exactamente a 40
caracteres si es más corto, como se hace en los diplomas. */

const certificado = {
    nombreParticipante: "antonella marin",
    curso: "programacion",
    fecha: "2026-02-20",

    certificadoOficial() {
        return `El participante ${this.nombreParticipante.toUpperCase()} obtuvo el certificado al curso de ${this.curso} el dia ${this.fecha}`;
    },

    longitudCertificado() {
        const longitud = this.nombreParticipante.length
        console.log(longitud);

        if (longitud > 40) {
            return "Nombre demasiado largo para el certificado"
        }
        else {
            return this.nombreParticipante.padEnd(40, ".");
        }
    }
}

console.log(certificado.certificadoOficial());
console.log(certificado.longitudCertificado());

/* 31. Creá un objeto que represente una aplicación de delivery con nombre del local, categoría y tiempo
estimado de entrega en minutos. Agregale un método que use un ternario para mostrar si la
entrega es express (menos de 30 minutos) o normal. Agregale otro método con if/else para calcular
el costo de envío según la distancia que recibe como parámetro: hasta 3 km cuesta $500, entre 3 y
7 km cuesta $900, y más de 7 km cuesta $1.500.
■ Investigá: ¿Qué son los if/else anidados? Usá ese concepto para agregar un caso especial: si la distancia
supera los 15 km mostrar 'Zona sin cobertura' antes de calcular el costo. */

const delivery = {
    nombreLocal: "la estrella",
    categoria: "articulos para el hogar",
    tiempoEstimadoEntrega: 29,

    tipoDeEntrega() {
        return this.tiempoEstimadoEntrega < 30 ? "Entrega express" : "Entrega normal"
    },

    costoEnvio(distancia) {
        if (distancia <= 3) {
            return "El costo del envio es de $500"
        }
        else if (distancia > 3 && distancia <= 7) {
            return "El costo del envio es de $900"
        }
        else if (distancia > 7) {
            if (distancia > 15) {
                return "Zona sin cobertura"
            }
            return "El costo del envio es de $1500"
        }
    }

}

console.log(delivery.tipoDeEntrega());
console.log(delivery.costoEnvio(15));

/* 32. Creá un objeto que represente un ticket de soporte con número, descripción del problema y estado
('abierto', 'en progreso' o 'cerrado'). Agregale un método con if/else para cambiar el estado al
siguiente en la secuencia: 'abierto' pasa a 'en progreso', 'en progreso' pasa a 'cerrado', y si ya está
'cerrado' mostrar 'El ticket ya está cerrado'. Agregale otro método que use .slice() para mostrar solo
los primeros 30 caracteres de la descripción como resumen.
■ Investigá: ¿Qué pasa cuando reasignás una propiedad de un objeto con =? Verificá que el estado del
objeto cambia de verdad llamando al método dos veces seguidas. */

console.log("-----Ejercicio 32------")
const ticketSoporte = {
    numero: 930930,
    descripcion: "pc no enciende, la pantalla se queda negra ",
    estado: "abierto",

    cambiarEstado() {
        if (this.estado === "abierto") {
            return `El estado del ticket ahora es ${this.estado = "en progreso"}`
        }
        else if (this.estado === "en progreso") {
            return `El estado del ticket ahora es ${this.estado = "cerrado"}`
        }
        else if (this.estado === "cerrado") {
            return "El ticket ya esta cerrado"
        }
    },

    resumenDescripcion() {
        console.log(this.descripcion.length)
        return this.descripcion.slice(0, 30)

    }
}

console.log(ticketSoporte.cambiarEstado());
console.log(ticketSoporte.cambiarEstado());
console.log(ticketSoporte.resumenDescripcion());

/* 33. Creá un objeto que represente una playlist con nombre, género y canciones guardadas como string
separado por |. Agregale un método que use .split() para mostrar cuántas canciones tiene.
Agregale otro método con if/else para mostrar la recomendación de volumen según el género:
'rock' → 'Volumen alto, 80%', 'jazz' → 'Volumen medio, 50%', 'clasica' → 'Volumen bajo, 30%',
cualquier otro género → 'Volumen a gusto'.
■ Investigá: ¿Qué pasa si aplicás .trim() al string completo de canciones antes del .split()? Probá qué ocurre
si algún nombre de canción tiene un espacio antes o después del separador |. */

// Al aplica el .trim() y luego el .split() se borran los espacios del inicio y del final pero no los que estan en los separadores

const playlist = {
    nombre: "aventurero",
    genero: "rock",
    canciones: "   bendecida     |   vete | aventurero | hasta la madre | ni tengo ni necesito | tengo ganas | por que la envidia | ya no mi amor      ",

    totalCanciones() {
        return this.canciones.trim().split("|")
    },

    volumen() {
        if (this.genero === "rock") {
            return "Volumen alto, 80%"
        }
        else if (this.genero === "jazz") {
            return "Volumen medio, 50%"
        }
        else if (this.genero === "clasica") {
            return "Volumen bajo, 30%"
        }
        else {
            return "Volumen a gusto"
        }

    }
}


console.log(playlist.totalCanciones())
console.log(playlist.volumen())

/* 34. Creá un objeto que represente un hotel con nombre, categoría en estrellas y precio por noche.
Agregale un método que reciba la cantidad de noches y use if/else para aplicar descuento: menos
de 3 noches sin descuento, entre 3 y 6 noches 10% de descuento, 7 o más noches 20% de
descuento. Agregale otro método que use template literals y .repeat() para mostrar las estrellas del
hotel visualmente con el símbolo de estrella.
■ Investigá: ¿Qué hace .repeat()? Ya lo usás para las estrellas. Ahora investigá si podés usarlo para
generar una barra visual con el carácter # según el porcentaje de descuento. */

const hotel = {
    nombre: "la estrella",
    categoria: "4",
    precioNoche: 100000,

    descuento(cantidadNoches) {
        if (cantidadNoches < 3) {
            return "sin descuento"
        }
        else if (cantidadNoches >= 3 && cantidadNoches <= 6) {
            const barra = "#".repeat(5)
            return (`Obtuvo un descuento del 10 %: ${barra} ${this.precioNoche * cantidadNoches * 0.10}`)
        }
        else
            return (`Obtuvo un descuento del 20 %: ${"#".repeat(10)} ${this.precioNoche * cantidadNoches * 0.20}`)
    },

    estrellasHotel() {
        return `El hotel ${this.nombre} tiene ${this.categoria} estrellas ${"⭐".repeat(this.categoria)} `
    }

}

console.log(hotel.descuento(2));
console.log(hotel.descuento(3));
console.log(hotel.descuento(7));
console.log(hotel.estrellasHotel());

/*35. Creá un objeto que represente un contrato con cliente, servicio y duración en meses. Agregale un
método que reciba los meses restantes como parámetro y use if/else para mostrar si el contrato
está vigente (más de 2 meses restantes), por vencer (1 o 2 meses restantes) o vencido (0 meses o
menos). Mostrá todos los datos con template literals y el nombre del cliente siempre en
mayúsculas.
■ Investigá: ¿Qué hace el operador <=? Usalo en tus condiciones y explicá la diferencia con <. */

const contrato = {
    cliente: "Luis Arias",
    servicio: "arreglo fachada",
    duracion: 5,

    vigenciaContrato(mesesRestantes) {
        if (mesesRestantes > 2) {
            return `El contrato del señor ${this.cliente.toUpperCase()} para el servicio de ${this.servicio} con una duracion de ${this.duracion} meses, se encuentra en estado VIGENTE con ${mesesRestantes} meses faltantes`
        }
        else if (mesesRestantes >= 1 && mesesRestantes <= 2) {
            return `El contrato del señor ${this.cliente.toUpperCase()} para el servicio de ${this.servicio} con una duracion de ${this.duracion} meses, se encuentra en estado POR VENCER con ${mesesRestantes} meses faltantes`
        }
        else {
            return `El contrato del señor ${this.cliente.toUpperCase()} para el servicio de ${this.servicio} con una duracion de ${this.duracion} meses, se encuentra en estado VENCIDO con ${mesesRestantes} meses faltantes`
        }
    }

}

console.log(contrato.vigenciaContrato(3))

/* 36. Creá un objeto que represente un chatbot con nombre y cuatro respuestas guardadas como un
string separado por |. Agregale un método que use .split() e if/else para seleccionar una respuesta
según el número que recibe como parámetro (1, 2, 3 o 4). Si el número está fuera de ese rango,
mostrar 'Opción inválida'. Agregale otro método que muestre el nombre del bot con .toUpperCase()
y la cantidad de respuestas disponibles.
■ Investigá: ¿Qué hace el operador && dentro de un if? Usalo para validar dos condiciones a la vez: que el
número recibido sea mayor a 0 Y menor o igual a 4 */
console.log("---- ejercicio 36 ----------- ");
const chatbot = {
    nombre: "ana",
    respuestas: "Si | Claro | Fue un placer | Con gusto",
    arrayRespuestas: [],

    inicializador() {
        this.arrayRespuestas = this.respuestas.split("|");
    },

    seleccionarRespuesta(numeroRespuesta) {
        if (numeroRespuesta > 0 && numeroRespuesta <= 4) {
            return `Tu respuesta es: ${this.arrayRespuestas[numeroRespuesta - 1]}`
        }
        else {
            return "Opcion invalida"
        }
    },

    nombreBot() {
        return `${this.nombre.toUpperCase()} tiene ${this.arrayRespuestas.length} respuestas disponibles`
    }
}

chatbot.inicializador();
console.log(chatbot.seleccionarRespuesta(4));
console.log(chatbot.nombreBot());

/* 37. Creá un objeto que represente un equipo de desarrollo con nombre, tecnología principal y cantidad
de integrantes. Agregale un método que use .includes() con un ternario para mostrar si el equipo
trabaja con JavaScript. Agregale otro método que use if/else para mostrar si el equipo es pequeño
(menos de 4 integrantes), mediano (entre 4 y 8 integrantes) o grande (más de 8 integrantes).
■ Investigá: ¿Por qué es importante usar .toLowerCase() antes de .includes()? Probá qué pasa si la
tecnología está guardada como 'javascript', 'JavaScript' o 'JAVASCRIPT'. */

const equipoDesarrollo = {
    nombre: "lannister",
    tecnologia: "JavaScript",
    cantidadIntegrantes: 9,

    tecnologiaEquipo() {
        return this.tecnologia.toLowerCase().includes("javascript") ? "El equipo trabaja con JavaScript" : "el equipo no trabaja con JavaScript"
    },

    tamanoEquipo() {
        if (this.cantidadIntegrantes < 4){
            return `El equipo ${this.nombre} es pequeño`;
        }
        else if (this.cantidadIntegrantes >= 4 && this.cantidadIntegrantes <= 8){
            return `El equipo ${this.nombre} es mediano`
        }
        else {
            return `El equipo ${this.nombre} es grande`
        }
    }
}

console.log(equipoDesarrollo.tecnologiaEquipo());
console.log(equipoDesarrollo.tamanoEquipo());

/* 38. Creá un objeto que represente un evento con nombre, fecha, lugar y si tiene cupos disponibles.
Agregale un método que use .replace() y .toLowerCase() para generar un slug del nombre del
evento reemplazando espacios por -. Agregale otro método con un ternario para mostrar si se
puede inscribir al evento o si está agotado.
■ Investigá: ¿Cuál es la diferencia entre .replace() y .replaceAll()? Probá con un nombre de evento que
tenga más de un espacio y usá el método correcto. */

const evento = {
    nombre: "Fiesta Fin de año",
    fecha: "2026-12-10",
    lugar: "hotel carretero",
    tieneCuposDisponibles: false,

    nombreEvento() {
        return `Nombre del evento ${this.nombre.replaceAll(" ","-").toLowerCase()}`
    },
 
    incripcion() {
        return this.tieneCuposDisponibles ? "Se puede inscribir al evento" : "El evento esta agotado";
    }

}

console.log(evento.nombreEvento());
console.log(evento.incripcion());

/* 39. Creá un objeto que represente un perfil de CV con nombre, profesión y habilidades en un string
separado por comas. Agregale un método que use .split() y .length para mostrar cuántas
habilidades tiene listadas. Agregale otro método que use .includes() con if/else para mostrar 'Perfil
compatible con la búsqueda' o 'Perfil no compatible' según si tiene o no la habilidad que recibe
como parámetro. Todos los mensajes deben usar template literals.
■ Investigá: ¿Qué hace .includes() cuando el string buscado tiene espacios? Probá buscar ' JavaScript' con
espacio al principio y usá .trim() para evitar ese problema. */

const perfilCv = {
    nombre: "ana castro",
    profesion: "contadora",
    habilidades: "  responsable, puntual, organizada, trabaja en equipo",

    cantidadHabilidades() {        
        const habilidadesLimpias = this.habilidades.trim();
        console.log("habilidades limpias:",habilidadesLimpias);
        return `Cantidad de habilidades: ${habilidadesLimpias.split(",").length}`
    },

    perfilCompatible(habilidad) {
        const habilidadBuscada = habilidad.trim(); 
        if (this.habilidades.includes(habilidadBuscada)){
            return `La habilidad ${habilidadBuscada} es compatible con la busqueda`
        }
        else {
            return `La habilidad ${habilidadBuscada} no es compatible`
        }

    }

}

console.log(perfilCv.cantidadHabilidades())
console.log(perfilCv.perfilCompatible("    responsable"))

/* Creá un objeto que represente un sistema de facturación con nombre del cliente, lista de items
como string separado por ; y descuento en porcentaje. Cada item tiene el formato 'nombre:precio'.
Agregale un método que use .split() para separar los items, variables internas para sumar los
precios y calcular el subtotal, y if/else para aplicar el descuento solo si el subtotal supera $5.000.
Mostrá la factura completa con template literals incluyendo subtotal, descuento aplicado y total
final.
■ Investigá: ¿Qué hace Number()? Lo vas a necesitar porque después del .split() los precios van a ser
strings y no vas a poder sumarlos directamente. */

const facturacion = {
    nombreCliente: "Juliana Pineda",
    listaItems: "panela:3000; arroz:4000; aceite:10000; azucar:2000; leche:4000; chocolate:9000; carne:40000; pollo:30000; verduras:15000",
    descuento: 10,

    itemsSeparados() {
        const listaDeProductos = this.listaItems.split(";");
        let subtotal = 0;
        for (const producto of listaDeProductos) {
            let p = producto.split(":");
            subtotal += Number(p[1])
    }

    let descuentoAplicado = 0;
    if (subtotal > 5000){
        descuentoAplicado = (subtotal * this.descuento) / 100;
    }

    const totalAPagar = subtotal - descuentoAplicado;

    console.log(`sub total= ${subtotal}`);
    console.log(`descuento aplicado = ${descuentoAplicado}`);
    console.log(`Total a pagar: ${totalAPagar}`);

}
}

facturacion.itemsSeparados();