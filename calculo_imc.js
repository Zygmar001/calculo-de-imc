//calculo de imc
const nome = 'josé';
const peso = 91;
const altura = 1.95;
const sexo = 'masculino';
const imc = peso / (altura * altura);
if (imc >= 30) {
    console.log("josé, você está acima do peso")
} else {
    console.log("josé, você está abaixo do peso")
}
