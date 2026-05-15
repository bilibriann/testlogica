// Pregunta 3 – Mayor de un arreglo

// Dado el siguiente arreglo:

// [12, 5, 99, 23, 1]

// Encuentra el número mayor sin usar Math.max().

function encontrarMayor() {
  let arreglo = [12, 5, 99, 23, 1];
  let mayor = arreglo[0];

  for (let i = 1; i < arreglo.length; i++) {
    if (arreglo[i] > mayor) {
      mayor = arreglo[i];
    }
  }
  return mayor;
}
console.log(encontrarMayor());

//Como comparo el primero numero del array con los siguientes?
//Puedo usar un ciclo for para recorrer el arreglo y comparar cada elemento con el número mayor actual.
//Inicializo la variable "mayor" con el primer elemento del arreglo y luego comparo cada elemento siguiente con "mayor".
//Si encuentro un número mayor, actualizo la variable "mayor" con ese número. Al final del ciclo, "mayor" contendrá el número más grande del arreglo.
