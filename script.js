function calcularSuma(n) {
    let suma = 0;
    for (let i = 0; i <= n; i++) {
      suma += i;
    }
    return suma;
  }
  
  // Función para manejar el evento submit del formulario
  document.getElementById("sumForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe
  
    const n = parseInt(document.getElementById("numberInput").value);
    const resultado = calcularSuma(n);
  
    // Mostrar el resultado en el elemento con id "result"
    document.getElementById("result").textContent = `La suma hasta ${n} es: ${resultado}`;
  });