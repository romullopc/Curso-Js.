var agora = new Date()
var mes = agora.getMonth()              //mês
var semana = agora.getDay()             //dia da semana
var dia = agora.getDate()               //dia do mês
var horas = agora.getHours()            //horas
var minutos = agora.getMinutes()        //minutos


console.log();
console.log(`Hoje é dia ${dia} de ${mes} Agora são ${horas}:${minutos} `);

if(horas == 0) {
    console.log (' meia noite')
} else if(horas < 5) {
    console.log(' da madrugada ');
} else if(horas < 12 ) {
    console.log(' da manhã ');
} else if(horas == 12){
    console.log(' meio dia ');
} else if(horas < 19) {
    console.log(' da tarde ');
} else if(horas <=24) {
    console.log(' da noite');
}