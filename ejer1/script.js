function validarEdad() {
   
    const edad = parseInt(document.getElementById("edad").value);

  
    if (edad > 18) {
        
        document.getElementById("mensaje").textContent = "Bienvenido, eres mayor de 18 años.";
    } else {
        
        document.getElementById("mensaje").textContent = "Lo sentimos, debes ser mayor de 18 años para continuar.";
    }
}
