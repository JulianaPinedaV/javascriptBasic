console.log("------------EJERCICIO GUIADO-----------------")

// Paso 1 - Crear el primer ticket como objeto
const ticket = {
    id: "TKT-001",
    titulo: "Login no responde",
    prioridad: "alta",
    estado: "abierto",
    categoria: "auth",

    // Paso 2 - Agregar un metodo al objeto
    resumen() {
        return `"[${this.id}] ${this.titulo} - Estado: ${this.estado} - Prioridad: ${this.prioridad}"`
    }
}

console.log(ticket.id);
console.log(ticket.titulo);
console.log(ticket.estado);
console.log(ticket.resumen());

// Paso 3 - Crear el array de tickets
const tickets = [
    { id: "TKT-001", titulo: "Login no responde", prioridad: "alta", estado: "abierto", categoria: "auth" },
    { id: "TKT-002", titulo: "Productos no cargan", prioridad: "media", estado: "en progreso", categoria: "productos" },
    { id: "TKT-003", titulo: "Error al procesar el pago", prioridad: "alta", estado: "abierto", categoria: "pagos" },
    { id: "TKT-004", titulo: "Filtro de búsqueda roto", prioridad: "baja", estado: "cerrado", categoria: "productos" },
    { id: "TKT-005", titulo: "Sesión expira muy rápido", prioridad: "media", estado: "abierto", categoria: "auth" },
    { id: "TKT-006", titulo: "Email de confirmación no llega", prioridad: "alta", estado: "en progreso", categoria: "notificaciones" },
    { id: "TKT-007", titulo: "Precio incorrecto en carrito", prioridad: "alta", estado: "abierto", categoria: "pagos" },
    { id: "TKT-008", titulo: "Botón de logout no funciona", prioridad: "baja", estado: "cerrado", categoria: "auth" },
]

console.log("Total de tickets: ", tickets.length);

// Paso 4 - Recorrer el array con for...of
console.log("-----Paso 4------ ")
for (const ticket of tickets) {
    console.log(`${ticket.id} | ${ticket.titulo}`)
}

// Paso 5 - clasificar tickets con if/else
const clasificarPrioridad = (ticket) => {
    if (ticket.prioridad === "alta") {
        console.log(`🔴 ${ticket.id} | ${ticket.titulo}`);
    }
    else if (ticket.prioridad === "media") {
        console.log(`🟡 ${ticket.id} | ${ticket.titulo}`);
    }
    else if (ticket.prioridad === "baja") {
        console.log(`🟢 ${ticket.id} | ${ticket.titulo}`);
    }
    else {
        console.log(`El ticket no contiene un valor esperado en la propiedad prioridad o sus propiedades estan mal escritas`)
    }
}

for (const ticket of tickets) {
    (clasificarPrioridad(ticket))
}

// Paso 6 Mostar estado con ternario
const mostrarEstado = (ticket) => {
    const etiqueta = ticket.estado === "cerrado" ? console.log(`[CERRADO] ${ticket.id} | ${ticket.titulo}`) : console.log(`[ACTIVO] ${ticket.id} | ${ticket.titulo}`)
}

for (const ticket of tickets) {
    (mostrarEstado(ticket))
}

// Paso 7 - contar tickets por estado
let abierto = 0;
let enProgreso = 0;
let cerrados = 0;

for (const ticket of tickets) {
    if (ticket.estado === "abierto") {
        abierto++;
    }
    else if (ticket.estado === "en progreso") {
        enProgreso++;
    }
    else if (ticket.estado === "cerrado") {
        cerrados++
    }
}

console.log("Abiertos:", abierto);
console.log("En progreso:", enProgreso);
console.log("Cerrados:", cerrados);

// Paso 8 - Verificar categorias con .includes()

const categorias = ["auth", "pagos", "productos", "notificaciones"];

const verificarCategoria = (cat) => {
    if (categorias.includes(cat)) {
        console.log(`✅ La categoria "${cat}" esta registrada`)
    }
    else {
        console.log(`❌ La categoria "${cat}" no esta registrada`)
    }
}

verificarCategoria("pagos");
verificarCategoria("envios");
verificarCategoria("auth");
verificarCategoria("reportes");

// Paso 9 - Buscar un ticket con .find()

const buscarTicket = (idBuscado) => {
    const resultado = tickets.find(ticket => ticket.id === idBuscado);
    if (resultado !== undefined) {
    // otra opcion mas sencilla if (resultado) { // Hay algo en resultado?
        console.log(`Ticket encontrados: ${resultado.id} ${resultado.titulo} ${resultado.prioridad} ${resultado.categorias}`)
    }
    else {
        console.log(`No existe ningun ticket con el id ${idBuscado}`)
    }
}

buscarTicket("TKT-003");
buscarTicket("TKT-007");
buscarTicket("TKT-099");

// Paso 10 - Reporte final
console.log("------Paso 10------------")

    let contadorPrioridad = 0;
    let contadorEstado = 0;
    let contadorPrioridadEstado = 0;

const reporteFinal = () => {
    for (const reporte of tickets) {

        if (reporte.prioridad === "alta") {
            contadorPrioridad = contadorPrioridad +1
        }
        if (reporte.estado === "abierto") {
            contadorEstado = contadorEstado +1;
        }
        if (reporte.prioridad === "alta" && reporte.estado === "abierto") {
            contadorPrioridadEstado = contadorPrioridadEstado + 1;
        }
    }
console.log(`Total de tickets: ${tickets.length}`);
console.log("Prioridad alta: ", contadorPrioridad);
console.log((`Tickets abiertos: ${contadorEstado}`));
console.log(contadorPrioridadEstado)

    if(contadorPrioridadEstado >= 3){
        console.log(`Estado del sistema: CRITICO`)
    }
    else if(contadorPrioridadEstado >= 1 && contadorPrioridadEstado <=2){
        console.log(`Estado del sistema: ATENCION`)
    }
    else{
        console.log("Estado del sistema: ESTABLE")
    }
} 

reporteFinal();