const { InputDadosIMC: input } = require('./Serviços/inputs');
const { CalcIMC: calculos } = require('./Serviços/calculos');
const categoriaIMC = require('./Serviços/categoriaIMC');

const DadosUser = input();
const ResultIMC = calculos(DadosUser).toFixed(2);
const Categoria = categoriaIMC(ResultIMC);
console.log(`IMC: ${ResultIMC}\nCategoria: ${Categoria}`);