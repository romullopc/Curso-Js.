/* 

4! =  4 x 3 x 2 x 1 = 24 

4x3 = 12
12 x 2 = 24
24 x 1 = 24




 function fator(n1, n2) {
    n2 = n1-1
    console.log(`${n1}! = ${n1}`);
    for (let c = n2; c > 0; c--) {

        console.log(` * ${c}`);
        fat = n1 * c 
        n1 = fat
        
    }   
    return fat;  
}  

 console.log(` = ${fator(5)}`);
 */

 function fator(n1){
    let fat = 1                                       //declarar 'fat = 1'; pois qualquer número multuplicado por 1 é ele mesmo.
    for(let cont = n1; cont > 0; cont--) {            // contador começará com o valor da chamada do parâmetro.
         fat *= cont;                                 // 'fat' irá começar a multiplicar com o parâmetro.
        
    }
    return fat;                                       // fora do Loop, 'fat', retornará o valor para o console.
 }

 console.log(fator(5));