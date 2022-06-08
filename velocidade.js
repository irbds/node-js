const { InputDadosCar: input } = require('./Serviços/inputs');
const { CalcMediaVel: calculos } = require('./Serviços/calculos');

const DadosUser = input();
const ResultMedia = calculos(DadosUser).toFixed(2);
console.log(`Velocidade Media: ${ResultMedia} m/min`);