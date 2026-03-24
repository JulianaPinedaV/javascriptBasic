
// Parte 1 — Registrar un empleado (Objetos)
const empleado1 = {
    id: 1,
    nombre: "Juliana Pineda",
    departamento: "QA",
    salarioBAse: 2000000,
    horasExtra: 0,
    activo: true,
};

const empleado2 = {
    id: 2,
    nombre: "Pedro Arias",
    departamento: "Desarrollo",
    salarioBAse: 5000000,
    horasExtra: 20,
    activo: false,
};

const empleado3 = {
    id: 3,
    nombre: "Juan Castro",
    departamento: "Ventas",
    salarioBAse: 3000000,
    horasExtra: 5,
    activo: true,
};

console.log(empleado1);
console.log(empleado2);
console.log(empleado3);
console.log(`Empleado #${empleado1.id} | ${empleado1.nombre} | Departamento: ${empleado1.departamento}`);
console.log(`Empleado #${empleado2.id} | ${empleado2.nombre} | Departamento: ${empleado2.departamento}`);
console.log(`Empleado #${empleado3.id} | ${empleado3.nombre} | Departamento: ${empleado3.departamento}`);

// Parte 2 — Lista de empleados (Arrays)
const empleados = [
    { id: 1, nombre: "Juliana Pineda", departamento: "QA", salarioBase: 2000, horasExtra: 0, activo: true },
    { id: 2, nombre: "Pedro Arias", departamento: "Desarrollo", salarioBase: 3500, horasExtra: 15, activo: false },
    { id: 3, nombre: "Juan Castro", departamento: "Ventas", salarioBase: 3000, horasExtra: 5, activo: true },
    { id: 4, nombre: "Camilo Cifuentes", departamento: "Administracion", salarioBase: 2500, horasExtra: 0, activo: true },
    { id: 5, nombre: "Pablo Perez", departamento: "QA", salarioBase: 3500, horasExtra: 10, activo: false },
]

console.log(`Numero total de empleados: ${empleados.length}`);

for (const empleado of empleados) {
    console.log(`Nombre de cada empleado: ${empleado.nombre}`)
};

// Parte 3 — Calcular salario con if/else
const calcularSalario = (empleado) => {
    if (empleado.departamento === "QA" || empleado.departamento === "Desarrollo") {
        return empleado.salarioBase + (empleado.horasExtra * 25)
    }
    else if (empleado.departamento === "Ventas") {
        return empleado.salarioBase + (empleado.horasExtra * 20)
    }
    else if (empleado.departamento === "Administracion") {
        return empleado.salarioBase + (empleado.horasExtra * 15)
    }
    else {
        return empleado.salarioBase + (empleado.horasExtra * 10)
    }
};

for (const empleado of empleados) {
    console.log(`${empleado.nombre} - Salario total: $${calcularSalario(empleado).toLocaleString()}`);
};

// Parte 4 — Estado con operador ternario
const getEstado = (empleado) => {
    return empleado.activo ? "Activo" : "Inactivo"
}

for (const empleado of empleados) {
    console.log(`#${empleado.id} | ${empleado.nombre} - ${getEstado(empleado)}`);
};

// Parte 5 - Reporte de nómina
const imprimirNomina = (empleados) => {
    for (const empleado of empleados) {
        console.log("===============================")
        console.log(`■ Empleado #${empleado.id}`)
        console.log(`■ Nombre: ${empleado.nombre}`)
        console.log(`■ Departamento: ${empleado.departamento}`)
        console.log(`■ Estado: ${getEstado(empleado)}`)
        console.log(`■ Salario base: ${empleado.salarioBase.toLocaleString()}`)
        console.log(`■ Horas extra: ${empleado.horasExtra}`)
        console.log(`■ Salario total: ${calcularSalario(empleado).toLocaleString()}`)
    }


}

imprimirNomina(empleados);
console.log("----------------------------")

// Parte 6 (Reto opcional) — Empleados con horas extra
const getEmpleadosConExtra = (empleados) => {
    const EmpleadosConHoraExtra = []

    for (const empleado of empleados) {
        if (empleado.horasExtra > 0) {
            EmpleadosConHoraExtra.push(empleado);
            console.log(`${empleado.nombre}, horas extras: ${empleado.horasExtra}`);

        }
    }

    console.log(`Empleados con horas extra: ${EmpleadosConHoraExtra.length}`)
}

getEmpleadosConExtra(empleados)