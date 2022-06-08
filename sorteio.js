const {InputNumUser: input, InputContinue: continuar} = require('./Serviços/inputs');
const {RandomNum: numSort} = require('./Serviços/calculos');

const sorteio = () => {
  do {
    const numUser = input();
    const numRand = numSort();
    
    if( numUser === numRand ) {
      console.log(`Parabéns, número correto!`);
    } else {
      console.log(`Opa, não foi dessa vez. O número era ${numRand}`);
    }
  
  } while(continuar());
}

module.exports = sorteio;