var data = new Date()
var diaSem = data.getDay()

console.log(diaSem);

switch(diaSem) {                        //!!Escolha muito importante para dados pontuais!! não usar para !!intervalos!! , quando desejar escolher qual bloco de código deseja executar

    case 0:                             //diferentes casos para escolher, quando executar a tarefa, finalizará o SWITCH, e continuará o código a partir do final deste evento.
        console.log('Domingo!');
        break;                          // finaliza bloco de instrução;

    case 1:
        console.log('Segunda-Feira');
                                        // caso não houver BREAK, executará o proxímo caso até encontrar o cujo dito.

    case 2:
        console.log('Terça-Feira');
        break;                          // <-----

    case 3:
        console.log('Quarta-feira');
        break;

    case 4:
        console.log('Quinta-feira');
        break;

    case 5:
        console.log('Sexta-Feira');
        break;

    case 6:
        console.log('Sabado');
        break;

    case 7:
        console.log('Domingo');
        break;

    default:
        console.log('Não existe este dia da semana')          //caso não encontrar um valor que satisfaça o SWITCH, executará o Default.
        break;

}          //finalizar Switch

console.log('continua...');