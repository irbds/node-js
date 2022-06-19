const fs = require('fs').promises;
const readline = require('readline');

async function QuestionFile(message) {
  const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    readlineInterface.question(message, (answer) => {
      readlineInterface.close();
      resolve(answer);
    });
  })
}

async function start() {
  const fileName = await QuestionFile('Digite o caminho do arquivo que deseja ler: ');
  try {
    const fileContent = await fs.readFile(fileName, 'utf-8');
    console.log(fileContent);
  } catch (err) {
    console.log('Arquivo inexistente');
  }
}

start();