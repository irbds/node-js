const fs = require('fs').promises;

async function ReadFile() {
  try{
    const arquivo = await fs.readFile('./simpsons.json', 'utf-8');
    const arquivoJson = JSON.parse(arquivo);

    return arquivoJson;
  } catch (error) {
    console.log('nao foi possivel ler o arquivo');
  }
}

async function WriteFile(pwd_file, newFile) {
  fs.writeFile('./simpsons.json', 'ola', 'utf-8')
}

async function ShowFile(filePWD) {
  try{
    const result = await ReadFile();
    const arrayFile = result.map((acc) => `${acc.id} - ${acc.name}`);

    return arrayFile;
  } catch (error) {
    console.log(error);
  }
}

async function FilterById(idPersonagem) {
  try{
    const result = await ReadFile();
    const filter = result.find((acc) => acc.id === idPersonagem);
    if (filter === undefined) throw "id não encontrado";

    return (`${filter.id} - ${filter.name}`);
  } catch (error) {
    console.log(error);
  }
}

async function DeletPerso(...id) {
  console.log(id);
}

async function main() {
  // const showFile = await ShowFile();
  // showFile.forEach(acc => console.log(acc));

  // const showFileId = await FilterById(1);
  // console.log(showFileId);

  console.log(WriteFile());
}

main();