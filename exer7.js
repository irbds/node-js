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
  const fileName = await QuestionFile('Qual arquivo deseja utilizar?\n');
  try {
    const fileContent = await fs.readFile(fileName, 'utf-8');
    console.log(fileContent);
    const oldPalavra = await QuestionFile('Qual palavra deseja substituir?\n');
    const newPalavra = await QuestionFile('Qual sera a nova palavra?\n');
    const newString = fileContent.replace(new RegExp(oldPalavra, 'g'), newPalavra);
    console.log(`Novo texto: ${newString}`);
    const fileSave = await QuestionFile('Onde sera salvo?\n');
    await fs.writeFile(fileSave, newString);
  } catch (err) {
    console.log('Arquivo inexistente');
  }
}

start();