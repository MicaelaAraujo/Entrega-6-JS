function calcularPresupuesto() {
    const ingresoTotal = parseFloat(document.getElementById("ingresoTotal").value);

    if (isNaN(ingresoTotal)) {
        alert("Por favor, ingrese un valor numérico válido.");
        return;
    }

    const gastosNecesarios = ingresoTotal * 0.5;
    const gastosOpcionales = ingresoTotal * 0.3;
    const ahorroInversion = ingresoTotal * 0.2;

    document.getElementById("gastosNecesariosResultado").textContent = `$${gastosNecesarios.toFixed(2)}`;
    document.getElementById("gastosOpcionalesResultado").textContent = `$${gastosOpcionales.toFixed(2)}`;
    document.getElementById("ahorroInversionResultado").textContent = `$${ahorroInversion.toFixed(2)}`;
}
