// 24. Hacer un algoritmo en JavaScript para realizar la suma de todos los números pares hasta el 1000.


let sumaPares = 0;

for (let i = 2; i <= 1000; i += 2) {
  sumaPares += i;
}

console.log(`La suma de todos los números pares hasta 1000 es: ${sumaPares}`);
