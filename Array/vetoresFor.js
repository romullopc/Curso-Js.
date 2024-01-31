
let mes = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez']

/*  PRIMEIRA OPÇÃO = MAIS COMPLEXA

for(let cont = 0; cont < mes.length; cont++) {                       //let cont = posição do contador.     
    console.log(`a posição ${cont} tem o valor ${mes[cont]}`);       //cont receberá +1 quando retornar um loop, contudo, o índice do Array será igual o contador.    
}
 
*/

for(let cont in mes) {           //let cont = posição do contador.
    console.log(`o índice ${cont} tem o valor ${mes[cont]}`);      //cont receberá +1 quando retornar um loop, contudo, o índice do Array será igual o contador.
    
}

let cont = mes.indexOf('out')                       //lembrar de atribuir o valor do elemento Array à uma variável; e procurar o índice pelo VALOR do elemento.

if(cont == -1) {                                            
    console.log(`Valor não encontrado!`);           //mensagem de erro imprime no console valor -1
 }
else {
    console.log(`o mês de ${mes[cont]} esta no índice ${cont}`);            // forma de descobrir VALOR e o ÍNDICE
}



