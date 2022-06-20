const fs = require('fs').promises;

async function writeFile(arquivo, texto) {
  try {
    await fs.writeFile(arquivo, texto);
    
    return 'ok';
  } catch (error) {
    console.log(error);
  }
}

module.exports = writeFile;