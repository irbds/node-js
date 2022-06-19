function start(params) {
  const fizzBuzz = new Promise((resolve, reject) => {
    if(params%3 === 0 && params%5 === 0) resolve('FizzBuzz');
    if(params%3 === 0) resolve('Fizz');
    if(params%5 === 0) resolve('Buzz');
    reject(params)
  })

  return fizzBuzz;
}
const callStart = async () => {
  try {
    const result = await start(4);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

callStart();