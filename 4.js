// Pregunta 4 – Palíndromo

// Crea un programa que determine si una palabra es palíndromo.

// Ejemplo:

// reconocer → true
// perro → false

function esPalindromo(palabra) {
  let invertida = "";

  for (i = palabra.length - 1; i >= 0; i--) {
    invertida += palabra[i];
  }
  if (invertida === palabra) {
    return true;
  } else {
    return false;
  }
}

console.log(esPalindromo("perro"));
console.log(esPalindromo("rata"));
console.log(esPalindromo("ana"));
