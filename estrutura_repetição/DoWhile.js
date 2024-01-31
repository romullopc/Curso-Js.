

    //DoWhile FAZ TESTE LÓGICO NO FINAL DO BLOCO!!

var cont = 9

do {            //  faça!, o código não verifica nenhuma condição, apenas continua analizando normalmente...
    
    console.log(`contador = ${cont}`);

    cont--      //contador com abreviação --

} while (cont > 0)      //condição é analizada no final. Caso seja  FALSO!, não repetirá e seguirá normalmente...

console.log(`valor final de cont = ${cont}`);