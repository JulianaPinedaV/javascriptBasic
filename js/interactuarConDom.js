const tituloPrincipal = document.querySelector('h1'); // capturar del DOM el elemento h1
const subtitulo = document.querySelector('.claseH2'); // capturar del DOM la clase se hace anteponiendo un punto .
const subtitulo2 = document.querySelector('#H3'); // capturar del DOM el id se hace anteponiendo un numeral #
const subtituloConQuerySelector = document.querySelectorAll('.claseH2'); // capturar del DOM todos los elementos h2 con querySelectorAll

// Siempre se llama al primer elemento que encuentra, 
// Si hay más de uno con la misma clase o id, se puede usar querySelectorAll para obtener una lista de elementos y luego acceder a cada uno por su índice.

// getElementById metodo antiguo para capturar un elemento

const tituloPrincipalConGet = document.getElementsByTagName('h1')[0]; 
const subtituloConGet = document.getElementsByClassName('claseH2')[0];
const subtitulo2ConGet = document.getElementById('idH3'); 

// addEventListener sirve para escuchar eventos en un elemento HTML y ejecutar una función cuando ese evento ocurre. (click, mouseover, keydown)