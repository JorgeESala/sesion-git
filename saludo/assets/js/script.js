function agregarNombre(){
    const nombre = document.getElementById("input-name").value;
    document.getElementById("saludo").innerHTML= `¡Hola ${nombre}!`;
    document.getElementById("shrek-img").src = "./assets/img/saludando-modificado.png"
}

function reiniciarSaludo(){
    document.getElementById("saludo").innerHTML= `¿Quién eres?`;
    document.getElementById("shrek-img").src = "./assets/img/asustando.png"
}