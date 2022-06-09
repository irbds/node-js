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

async function WriteFile(newFile, id) {
  try{
    fs.writeFile('./simpsons.json', JSON.stringify(newFile), 'utf-8')
    return (`apagado personagens com id: ${id}`)
  } catch (error) {
    console.log('não foi possivel gravar o arquivo com a nova informacao');
  }
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
    return error;
  }
}

async function DeletPerso(...id) {
  const readFile = await ReadFile();
  let newArray = readFile;

  readFile.map((all) => {
    if(id.some((delet) => delet === all.id)) newArray = newArray.filter((acc) => acc.id !== all.id);
  });

  return sendDelet = await WriteFile(newArray, id);
}

async function main() {
  const showFile = await ShowFile();
  showFile.forEach(acc => console.log(acc));

  const showFileId = await FilterById(1);
  console.log(showFileId);

  const DeletPerson = await DeletPerso(1, 2, 3);
  console.log(DeletPerson);
}

main();