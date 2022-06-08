const readlineSync = require('readline-sync');

const {InputNumUser: input} = require('./Serviços/inputs');
const {RandomNum: numSort} = require('./Serviços/calculos');

do {
  const numUser = input();
  const numRand = numSort();
  
  if( numUser === numRand ) {
    console.log(`Parabéns, número correto!`);
  } else {
    console.log(`Opa, não foi dessa vez. O número era ${numRand}`);
  }

} while( readlineSync.keyInYN("deseja continuar?\n", ) );