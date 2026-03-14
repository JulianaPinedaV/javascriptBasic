// 🐛 EJERCICIO: Bug Report
// Vas a modelar un bug report como objeto de JavaScript.
// Usa todo lo que ya sabes: objetos, funciones, arrow functions.

// ── PARTE 1 ──────────────────────────────────
// Crea un objeto llamado bugReport con estas propiedades:
//   id, titulo, severidad ("alta" / "media" / "baja"), estado, reportadoPor

// ── PARTE 2 ──────────────────────────────────
// Agrega estas funciones DENTRO del objeto:

// describir()
//   Muestra en consola el id, severidad, estado y título del bug.

// cambiarEstado(nuevoEstado)
//   Recibe un nuevo estado y lo actualiza en el objeto.
//   Luego muestra: "Estado actualizado a: ..."

// esUrgente()
//   Retorna true si la severidad es "alta", false si no.
//   💡 ¿Qué operador ya conoces que te puede servir aquí?


// ── PARTE 3 ──────────────────────────────────
// Prueba tu objeto:

// 1. Llama a describir()
// 2. Cambia el estado a "en progreso" y llama a describir() de nuevo
// 3. Muestra en consola si el bug es urgente o no

console.log("------- bug report--------------")

const bugReport = {
    id: 232,
    titulo: "no se pueden agregar asientos",
    severidad: "alta",
    estado: "open",
    reportadoPor: "Juliana",

   describir(){
        return `${this.id}, ${this.severidad}, ${this.estado}, ${this.titulo}`
    },

    cambiarEstado(nuevoEstado){
            this.estado = nuevoEstado
            return `Estado actualizado a ${this.estado}`
    },

    esUrgente(){
        return this.severidad === "alta" ? "alta" : "false"
    }
}

console.log(bugReport.describir());
console.log(bugReport.cambiarEstado("in progress"));
console.log(bugReport.describir());
