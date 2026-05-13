// Pregunta 2 – Factorial

// Crea un programa que calcule el factorial de un número ingresado por el usuario.
// Ejemplo:
// 5 → 120

function calcularFactorial() {
  let numero = 5;
  let resultado = 1;

  for (let i = 1; i <= numero; i++) {
    resultado *= i;
  }
  console.log(resultado);
}

calcularFactorial();
