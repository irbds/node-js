const fs = require('fs').promises;

async function writeFile(arquivo, texto) {
  try {
    if(!arquivo || !texto)  throw('funcao chamada sem argumentos');
    await fs.writeFile(arquivo, texto);

    return 'ok';
  } catch (error) {
    return error;
  }
}

module.exports = writeFile;