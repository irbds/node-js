const fs = require('fs').promises;

async function FilterById(idPersonagem) {
  
}

async function ReadFile(arquivoALer, idPersonagem) {
  try{
    const arquivo = await fs.readFile(arquivoALer, 'utf-8');
    const arquivoJson = JSON.parse(arquivo);
    (idPersonagem !== undefined) ? FilterById(idPersonagem) : console.table(arquivoJson);
  } catch (error) {
    console.log('nao foi possivel ler o arquivo');
  }
}

ReadFile('./simpsons.json', 1);