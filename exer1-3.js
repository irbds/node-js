const SumMult = (a, b, c) => {
  const calculo = new Promise((resolve, reject) => {
    if(typeof a !== 'number'
    || typeof b !== 'number'
    || typeof c !== 'number') reject(new Error("por favor, insira apenas numeros"));

    const calculo = ((a+b)*c);

    if(calculo < 50) reject(new Error("Valor muito baixo"));

    resolve(calculo);
  })
  return calculo;
}

const Randomizer = () => Math.floor(Math.random() * 100 + 1);

const numRandom = async () => {
  const numRandom = Array.from({ length: 3}).map(Randomizer);
  try{
    const result = await SumMult(...numRandom)
    console.log(result);
  } catch (error) {
    console.log(`${error}`);
  }
}

numRandom();