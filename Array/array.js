
// let num --- variável composta, Array ou vetor.

// [5, 8, 2, 9, 3] --- elementos que são ordenados por um 'índice' ou 'chave Key'.

// key -- é a ordem que separa os valores em índices.

// valores --- é cada valor armazenado dentro dos índices.

let num =   [6, 5, 8, 2, 9, 3]   //total de 6 Key -- números entre (0 e 9)
num[4]= 7       //  var'num'   está atribuindo      valor '10'    ao  índice [5].  !! começa do '0' !!
num.push(1, 0)     //  O método push() adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array.
num.sort()      // organiza os valores em ordem crescente.






console.log(`o Vetor tem ${num.length} índices.`); // imprimindo no console a quantidade de índices do vetor.

console.log(` o primeiro índice é = ${num[0]}`);  // imprimindo no console o 'valor' da var 'num'    índice[0]
console.log(` o segundo índice é = ${num[1]}`);
console.log(` o terceiro índice é = ${num[2]}`);
console.log(` o quarto índice é = ${num[3]}`);
console.log(` o quinto índice é = ${num[4]}`);
console.log(` o sexto índice é = ${num[5]}`);
console.log(` o setimo índice é = ${num[6]}`);

