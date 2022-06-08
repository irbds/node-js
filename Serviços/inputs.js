const readlineSync = require('readline-sync');

const InputDadosIMC = () => {
  const altura = readlineSync.questionInt("Qual sua altura? (centimetros)\n", {limitMessage: "Insira sua altura em cm ex: '170'"});
  const peso = readlineSync.questionFloat("Qual seu peso?\n");

  return {
    altura,
    peso
  }
}

const InputDadosCar = () => {
  const distancia = readlineSync.questionInt("Qual distância o carro andou? (metros)\n");
  const tempo = readlineSync.questionInt("Em quanto tempo ele fez o trajeto? (minutos)\n");

  return {
    distancia,
    tempo
  }
}

const InputNumUser = () => readlineSync.questionInt("Escolha um numero de 1 a 10\n");

module.exports = {
  InputDadosIMC,
  InputDadosCar,
  InputNumUser
} 