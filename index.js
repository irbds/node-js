const { InputPick: input } = require('./Serviços/inputs');
const imc = require('./imc');
const sorteio = require('./sorteio');
const velMedia = require('./velocidade');

switch (input()) {
  case 1:
    imc();
    break;
  case 2:
    velMedia();
    break;
  case 3:
    sorteio();
    break;
  default:
    console.log('escolha um numero entre 1 e 3');
    break;
}