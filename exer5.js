const fs = require('fs').promises;


async function promisesWriteFile() {
  // const mensagem = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];
  // const arrayWriteFile = mensagem.map((acc, index) => fs.writeFile(`file${index}.txt`, acc));
  // await Promise.all(arrayWriteFile);

  const arquivosCriados = [
    'file0.txt',
    'file1.txt',
    'file2.txt',
    'file3.txt',
    'file4.txt'
  ]

  const arrayReadFile = arquivosCriados.map((acc) => fs.readFile(acc));
  const readArray = await Promise.all(arrayReadFile, 'utf-8');


  const newFileContent = readArray.join(' ');
  await fs.writeFile('./fileAll.txt', newFileContent);
}

promisesWriteFile();