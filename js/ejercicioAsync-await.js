
// con then|catch -> es una forma de consumir promesas utilizando los metodos then y catch
function getPhoto() {
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then(function(response) {
        console.log("respuesta de la api con then y catch:", response);
        return response.json();
    }).then(function(data) {
        console.log("data de la api con then y catch:", data);
    }).catch(function(error) {
        console.error("error de la api con then y catch:", error);      
    }); 
}
getPhoto();

// con async-await -> es una forma de consumir promesas utilizando las palabras clave async y await


async function getPhotoAsync() {
    try {
        const response1 = await fetch("https://jsonplaceholder.typicode.com/photos");
        console.log("respuesta de la api con async-await", response1);
        const data1 = await response1.json();
        console.log("datos de la api con async-await:", data1);
    } catch (error) {
        console.error("error al consumir la api con async-await", error)
    }
}
getPhotoAsync();
