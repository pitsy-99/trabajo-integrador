document.getElementById("boton2").addEventListener("click", myFunction);

function myFunction() {
    
    const nombre = document.getElementById("floatingNombre").value;
    console.log(nombre);
    const cel = document.getElementById("floatingCel").value;
    console.log(cel);
    const mail = document.getElementById("floatingEmail").value;
    console.log(mail);
    const consulta = document.getElementById("floatingTextarea").value;
    console.log(consulta);
    console.log(nombre+" "+cel+" "+mail+" "+consulta);

}



