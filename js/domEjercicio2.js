const h2 = document.querySelector('h2');
const boton =  document.querySelector('button');
const parrafo = document.querySelector('#stock');

console.log("titulo:", h2.textContent);
console.log("boton:", boton.textContent);
console.log("parrafo:", parrafo.textContent);

boton.addEventListener('click', () => {
    h2.textContent = "Compra realizada";
});

// .textContent Sirve para leer o cambiar el texto interno de un elemento HTML.