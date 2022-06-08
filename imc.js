const readlineSync = require('readline-sync');

const CalculoIMC = (altura, peso) => peso/Math.pow((altura)/100, 2);

const PedeInformacao = () => {
  const altura = readlineSync.questionInt("Qual sua altura em centimetros?\n", {limitMessage: "Insira sua idade em cm ex: '170'"});
  const peso = readlineSync.questionFloat("Qual seu peso ?\n");

  return CalculoIMC(altura, peso)
}

console.log(PedeInformacao());