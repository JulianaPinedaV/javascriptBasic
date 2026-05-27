// Parte 1 — Productos

const productos = [
    { id: 1, nombre: "Mouse", categoria: "Accesorios", precio: 50000, stock: 10, disponible: true },
    { id: 2, nombre: "Mac", categoria: "Laptops", precio: 4000000, stock: 15, disponible: true },
    { id: 3, nombre: "Airpods", categoria: "Audio", precio: 900000, stock: 1, disponible: true },
    { id: 4, nombre: "Iphone 16", categoria: "Moviles", precio: 5000000, stock: 0, disponible: true },
    { id: 5, nombre: "Teclado", categoria: "Accesorios", precio: 70000, stock: 7, disponible: true },
    { id: 6, nombre: "Iphone 15", categoria: "Moviles", precio: 2800000, stock: 8, disponible: false },
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
    else if (producto.stock >= 1) {
        return "■ Stock bajo"
    }
    return "■ Sin stock";
}

const productosEnCatalogo = (producto) => {
    return producto.disponible ? "■ En catálogo" : "■ Fuera de catálogo"
}

for (const producto of productos) {
    console.log(`${producto.nombre} | ${stockDisponible(producto)} | ${productosEnCatalogo(producto)}`)
}


// Parte 3 — Valor del inventario por producto
console.log("-------------------------------------------")
const valorProducto = (producto) => {
    const descuentoLaptops = 5;
    const descuentoMoviles = 3;

    if (producto.categoria === "Laptops") {
        const descuento = (producto.precio * descuentoLaptops) / 100
        return descuento
    }
    else if (producto.categoria === "Moviles") {
        const descuento = (producto.precio * descuentoMoviles) / 100
        return descuento
    }
    return 0;
}

const precioFinal = (producto) => {
    const descuento = valorProducto(producto)
    return producto.precio - descuento
}

for (const producto of productos) {
    console.log(`${producto.nombre} | Valor bruto: ${producto.precio.toLocaleString()} | Descuento: ${valorProducto(producto).toLocaleString()} | Precio neto: ${precioFinal(producto).toLocaleString()}`)
}

// Parte 4 — Reporte general
console.log("=================================================");
console.log("■ Inventario StoreTrack — Reporte completo");
console.log("==================================================");

const imprimirReporte = (productos) => {
    for (const producto of productos) {
        console.log(`
■ ${producto.nombre}
Categoria: ${producto.categoria}
Precio: $${producto.precio.toLocaleString()}
Stock: ${producto.stock} unidades → ${stockDisponible(producto)} 
Catalogo: ${productosEnCatalogo(productos)}
Valor neto: $${precioFinal(producto).toLocaleString()}           `)
    }

}

imprimirReporte(productos);

console.log("===================================================")
console.log("■ RESUMEN")
console.log(`Total productos: ${productos.length}`)

const valorNeto = (productos) => {
    let contadorSumaTotal = 0;
    for (const producto of productos) {
        contadorSumaTotal += precioFinal(producto)
    }
    return contadorSumaTotal;
    
}

console.log(`Total valor neto: $${valorNeto(productos).toLocaleString()}`)
console.log("====================================================")

// Parte 5 (Reto) — Productos críticos
const productosCriticos = (productos) => {
    const productosCriticos= [];

    for (const producto of productos) {
        if (producto.stock < 5 && producto.disponible) {
            productosCriticos.push(producto);    
            console.log(`- ${producto.nombre} | Stock: ${producto.stock}`)
            
        }      
    }
    
    console.log(`■ ■ Productos críticos (bajo stock y activos): ${productosCriticos.length}`)  
}

productosCriticos(productos);