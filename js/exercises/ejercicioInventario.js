// Parte 1 — Productos

const productos = [
    {id: 1, nombre: "mouse", categoria: "accesorios", precio: 50000, stock: 10, disponible: true},
    {id: 2 , nombre: "mac", categoria: "Laptops", precio: 4000000, stock: 15, disponible: true},
    {id: 3 , nombre: "airpods", categoria: "audio", precio: 900000, stock: 1, disponible: false},
    {id: 4 , nombre: "iphone 16", categoria: "moviles", precio: 5000000, stock: 0, disponible: false},
    {id: 5 , nombre: "teclado", categoria: "accesorios", precio: 70000, stock: 7, disponible: true},
    {id: 6 , nombre: "iphone 15", categoria: "moviles", precio: 2800000, stock: 8, disponible: false},
];

console.log(`Total de productos registrados: ${productos.length}`);
console.log("Primer producto registrado: ", productos[0]);
console.log("Ultimo producto registrado: ", productos[productos.length - 1]);
console.log(`Nombre del primer producto registrado: ${productos[0].nombre}`);
console.log(`Nombre del ultimo producto registrado: ${productos[productos.length - 1].nombre}`)
console.log("---------------------------------------------")

//  Parte 2 — Estado de disponibilidad
const stockDisponible = (producto) => {
    if (producto.stock > 10) {
        return "■ Stock suficiente"
    }
    else if (producto.stock >=1){
        return "■ Stock bajo"
    }   
    return "■ Sin stock";
}

const productosEnCatalogo = (producto) => {
    return producto.disponible ? "■ En catálogo" : "■ Fuera de catálogo"
}

for(const producto of productos){
    console.log(`${producto.nombre} | ${stockDisponible(producto)} | ${productosEnCatalogo(producto)}`)
}
console.log("-------------------------------------------")
// Parte 3 — Valor del inventario por producto