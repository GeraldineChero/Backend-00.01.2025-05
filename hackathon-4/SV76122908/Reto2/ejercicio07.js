//Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) y devuelva una cadena en forma de un número de teléfono.
//formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"

function formatPhoneNumber(numeros) {
    const telefono = `(${numeros[0]}${numeros[1]}${numeros[2]}) ${numeros[3]}${numeros[4]}${numeros[5]}-${numeros[6]}${numeros[7]}${numeros[8]}${numeros[9]}`;
    return telefono;
  }
 
console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // ➞ "(123) 456-7890"