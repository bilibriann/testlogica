//Pregunta 1 – Números pares Solicita un número N y muestra todos los números pares desde 1 hasta N.

function mostrarNumerosPares() {
  let resultado = [];
  let numero = 10;

  for (let i = 1; i <= numero; i++) {
    if (i % 2 === 0) {
      resultado.push(i);
    }
  }
  console.log(resultado);
}

mostrarNumerosPares();

function MostrarNumerosPares() {
  let resultado = [];
  let numero = 40;

  for (let i = 2; i <= numero; i += 2) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}
MostrarNumerosPares();
