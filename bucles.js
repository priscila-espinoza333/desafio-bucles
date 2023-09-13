/* 1.- Imprimir numeros impares del 1 al 20 */
for(let i = 1; i <= 20; i++){
    if(i % 2 !== 0)
    console.log(i);
}
console.log("-----------------")

/* 2.- disminuir multiplos de 3 */ 
for(let i = 100; i>= 0; i--){
    if(i % 3 === 0)
    console.log(i);
}
console.log("-----------------")

/* 3.- imprimir secuencia 4,2.5,1,-05,-02,-3.5*/

  
for (let i = 4; i >= -3.5; i -= 1.5) {
  console.log(i);
}
console.log("-----------------")

/* 4.- sumar todos los valores del 1 al 100*/
var sum = 0

for(let i= 1; i <= 100; i++){
    sum += i ;
    console.log(sum)
}
console.log("-----------------")

/* 5.- multiplicar todos los valores del 1 al 12 */

var product = 1

for(let i = 1; i<=12; i++){
    product *= i;
    console.log(product)
}





