const readlineSync = require('readline-sync');

const InputDados = () => {
  const altura = readlineSync.questionInt("Qual sua altura em centimetros?\n", {limitMessage: "Insira sua idade em cm ex: '170'"});
  const peso = readlineSync.questionFloat("Qual seu peso ?\n");

  return {
    altura,
    peso
  }
}

module.exports = InputDados;