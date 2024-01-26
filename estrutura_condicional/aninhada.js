var idade = 65

console.log(`você tem ${idade} anos`);  //só pode contatenar string com 'var' quando usamos `CRASE`

if(idade < 16) {
    console.log('menor da idade, não vota!');  //   observe aspas simples.
} else if(idade < 18 || idade > 64) {           //  || --- conjunção de condicionais
    console.log('voto opcional.');              //  console.log() --- uso para fins de testes em Node.js; não registra mensagem no HTML
} else {
    console.log('voto obrigatório!');           //  observar identação de uma estrutura condicional aninhada. e usar a lógica para não repetir códigos desnecessários.
}


