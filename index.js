const { exit } = require("process");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function validaNota(nota) {
    if (isNaN(nota)) {
        console.log('nota informada não é um numero, digite um numero entre 0 e 10.');
        process.exit(1);
    }
    if (nota < 0 || nota > 10) {
        console.log('Nota invalida, digite um numero entre 0 e 10.');
        process.exit(1);
    }
}
rl.question("qual foi a sua primeira nota?", function (nota1) {
    const notaNumero1 = +nota1;
    validaNota(notaNumero1);
    //console.log("a sua ultima nota é " + nota1Numero);

    rl.question("qual foi a sua segunda nota?", function (nota2) {
        const notaNumero2 = +nota2
        validaNota(notaNumero2)
        //console.log("a sua penultima nota é " + nota2Numero);

        rl.question("qual foi a sua terceira nota ?", function (nota3){
            const notaNumero3 = +nota3
            validaNota(notaNumero3)

            rl.question("qual foi a sua quarta nota ?", function (nota4){
                const notaNumero4 = +nota3
                validaNota(notaNumero4)
            
            const soma = notaNumero1 + notaNumero2 + notaNumero3 + notaNumero4;
            console.log("A soma das suas notas é: " + soma);
            //console.log("type: " + typeof soma);
            const media = (soma) / 4;
            console.log(`A média das suas notas é: ${media}`);
            
            rl.close();
        }) 
    })

    })
})
