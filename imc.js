const calculos = require('./Serviços/calculos');
const inputs = require('./Serviços/inputs');
const categoriaIMC = require('./Serviços/categoriaIMC');

const DadosUser = inputs();
const ResultIMC = calculos(DadosUser).toFixed(2);
const Categoria = categoriaIMC(ResultIMC);
console.log(`IMC: ${ResultIMC}\nCategoria: ${Categoria}`);