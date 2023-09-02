document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const mensaje = document.getElementById("mensaje");

    const loginButton = document.getElementById("loginButton");

    loginButton.addEventListener("click", function() {
        const usuario = document.getElementById("usuario").value;
        const clave = document.getElementById("clave").value;

        if (usuario === "admin" && clave === "1234") {
            mensaje.textContent = "Inicio de sesión exitoso. Bienvenido!";
        } else {
            mensaje.textContent = "Credenciales incorrectas. Inténtalo de nuevo.";
        }

        // Limpia el formulario
        document.getElementById("usuario").value = "";
        document.getElementById("clave").value = "";
    });
});
