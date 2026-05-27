const campoTexto = document.querySelector("#campoTexto");
const contador = document.querySelector("#contador");

campoTexto.addEventListener("input", () => {
    const cantidad = campoTexto.value.length;
    // .value Sirve para obtener lo que hay escrito en el input.
    // .length Sirve para contar cuántos caracteres tiene ese texto.

    contador.textContent = `caracteres escritos: ${cantidad}`
    // contador Es la variable donde se guardo el párrafo con document.querySelector("#contador").
    // .textContent Sirve para leer o cambiar el texto interno de un elemento HTML.
});

