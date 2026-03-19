console.log("------------EJERCICIO GUIADO-----------------")

// Paso 1 - Crear el primer ticket como objeto
const ticket = {
    id: "TKT-001",
    titulo: "Login no responde",
    prioridad: "alta",
    estado: "abierto",
    categoria: "auth",

// Paso 2 - Agregar un metodo al objeto
    resumen(){
        return `"[${this.id}] ${this.titulo} - Estado: ${this.estado} - Prioridad: ${this.prioridad}"`
    }
}

console.log(ticket.id);
console.log(ticket.titulo);
console.log(ticket.estado);
console.log(ticket.resumen());

// Paso 3 - Crear el array de tickets
const tickets = [
    {id: "TKT-001", titulo: "Login no responde", prioridad: "alta", estado: "abierto", categoria: "auth"},
    {id: "TKT-002", titulo: "Productos no cargan", prioridad: "media", estado: "en progreso", categoria: "productos"},
    {id: "TKT-003", titulo: "Error al procesar el pago", prioridad: "alta", estado: "abierto", categoria: "pagos"},
    {id: "TKT-004", titulo: "Filtro de búsqueda roto", prioridad: "baja", estado: "cerrado", categoria: "productos"},
    {id: "TKT-005", titulo: "Sesión expira muy rápido", prioridad: "media", estado: "abierto", categoria: "auth"},
    {id: "TKT-006", titulo: "Email de confirmación no llega", prioridad: "alta", estado: "en progreso", categoria: "notificaciones"},
    {id: "TKT-007", titulo: "Precio incorrecto en carrito", prioridad: "alta", estado: "abierto", categoria: "pagos"},
    {id: "TKT-008", titulo: "Botón de logout no funciona", prioridad: "baja", estado: "cerrado", categoria: "auth"},
]

console.log("Total de tickets: ", tickets.length);

// Paso 4 - Recorrer el array con for...of
for(const ticket of tickets){
    console.log(`${ticket.id} | ${ticket.titulo}` )
}

// Paso 5 - clasificar tickets con if/else
const clasificarPrioridad = (ticket) => {
    if (ticket.prioridad === "alta"){
        console.log(`🔴 ${ticket.id} | ${ticket.titulo}`);
    }
    else if (ticket.prioridad === "media"){
        console.log(`🟡 ${ticket.id} | ${ticket.titulo}`);
    }
    else if (ticket.prioridad === "baja"){
        console.log(`🟢 ${ticket.id} | ${ticket.titulo}`);
    }
    else {
        console.log(`El ticket no contiene un valor esperado en la propiedad prioridad o sus propiedades estan mal escritas`)
    }
 }

for(const ticket of tickets){
    (clasificarPrioridad(ticket))
}

// Paso 6 Mostar estado con ternario
 const mostrarEstado = (ticket) => {
    const etiqueta = ticket.estado === "cerrado" ? console.log(`[CERRADO] ${ticket.id} | ${ticket.titulo}`) : console.log(`[ACTIVO] ${ticket.id} | ${ticket.titulo}`)}

for(const ticket of tickets){
    (mostrarEstado(ticket))
}

// Paso 7 - contar tickets por estado
let abierto = 0;
let enProgreso = 0;
let cerrados = 0;

for (const ticket of tickets){
    if (ticket.estado === "abierto"){
        abierto++;
    }
    else if (ticket.estado === "en progreso"){
        enProgreso++;
    }
    else if (ticket.estado === "cerrado"){
        cerrados++
    }
}

console.log("Abiertos:", abierto);
console.log("En progreso:", enProgreso);
console.log("Cerrados:", cerrados);