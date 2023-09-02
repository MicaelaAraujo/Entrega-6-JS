function calcularPuntoEquilibrio() {
   
    const costosFijos = parseFloat(document.getElementById("costosFijos").value);
    const precioVenta = parseFloat(document.getElementById("preciodeVenta").value);
    const costosVariables = parseFloat(document.getElementById("costosVariables").value);
    
    if (isNaN(costosFijos) || isNaN(precioVenta) || isNaN(costosVariables)) {
        alert("Por favor, ingrese valores numéricos válidos.");
        return;
    }
  
    const puntoEquilibrio = costosFijos / (preciodeVenta - costosVariables);

   
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.textContent = `El Punto de Equilibrio es: ${puntoEquilibrio.toFixed(2)}`;
}

