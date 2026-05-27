const input1 = document.querySelector("#campo1");
const input2 = document.querySelector("#campo2");
const boton = document.querySelector("#btnMostrar");

boton.addEventListener("click", () => {
    const nombre = input1.value;
    const edad = input2.value;

    console.log(`Nombre: ${nombre} | Edad: ${edad}`);
});
