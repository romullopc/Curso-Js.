
 function parimpar(n) {          // A função só retornará um valor quando houver uma CHAMADA (parâmetro)

    if(n%2 == 0) {
        return 'par'            
    }
    else {
        return 'ímpar'       // pode Haver mais de um RETURN; porém só retornará 1 valor
    }
}

 let resp = parimpar(1);    //forma com mais "SUJA"; precisa atribuir fuma função com o parâmetro desejado como valor de uma variável.
 console.log(resp);         //retorna o valor gerada pela função como uma 'var' manipulavel.

/* console.log(parimpar(4));  */    //forma SIMPLIFICADA; imprime no console o resultado da função já com parâmetro selecionado  



