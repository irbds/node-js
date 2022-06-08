const readlineSync = require('readline-sync');

const categoriaIMC = (IMC) => {
  console.log(IMC);
  switch (true) {
    case IMC < 18.5:
      console.log('Abaixo do peso (magreza)');
      break;
    case IMC < 24.9:
      console.log('Peso normal');
      break;
    case IMC < 29.9:
      console.log('Acima do peso (sobrepeso)');
      break;
    case IMC < 34.9:
      console.log('Obesidade grau I');
      break;
    case IMC < 39.9:
      console.log('Obesidade grau II');
      break;
    default:
      console.log('Obesidade graus III e IV');
  }
}

const CalculoIMC = (altura, peso) => {
  const IMC = peso/Math.pow((altura)/100, 2);

  categoriaIMC(IMC);
} 

const InputDados = () => {
  const altura = readlineSync.questionInt("Qual sua altura em centimetros?\n", {limitMessage: "Insira sua idade em cm ex: '170'"});
  const peso = readlineSync.questionFloat("Qual seu peso ?\n");
  
  CalculoIMC(altura, peso)
}

InputDados();