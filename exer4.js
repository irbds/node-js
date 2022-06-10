const fs = require('fs').promises;

async function ReadFile(arquivo) {
  try{
    const arquivo = await fs.readFile(arquivo, 'utf-8');
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
    const result = await ReadFile('./simpsons.json');
    const arrayFile = result.map((acc) => `${acc.id} - ${acc.name}`);

    return arrayFile;
  } catch (error) {
    console.log(error);
  }
}

async function FilterById(idPersonagem) {
  try{
    const result = await ReadFile('./simpsons.json');
    const filter = result.find((acc) => acc.id === idPersonagem);
    if (filter === undefined) throw "id não encontrado";

    return (`${filter.id} - ${filter.name}`);
  } catch (error) {
    return error;
  }
}

async function DeletPerso(...id) {
  try{
    const readFile = await ReadFile('./simpsons.json');
    let newArray = readFile;
  
    readFile.map((all) => {
      newArray = newArray.filter((acc) => !id.includes(acc.id));
    });
  
    return sendDelet = await WriteFile(newArray, id);
  } catch (error) {
    console.log(error);
  }
}

async function CreatFile(...id) {
  const readFile = await ReadFile('./simpsons.json');
  let newArray = readFile;

  newArray = newArray.filter((acc) => id.includes(acc.id));

  fs.writeFile('./simpsonFamily.json', JSON.stringify(newArray), 'utf-8')

  return newArray;
}

function AddNewPers(newPers) {
  
}

async function main() {
  // const showFile = await ShowFile();
  // showFile.forEach(acc => console.log(acc));

  // const showFileId = await FilterById(1);
  // console.log(showFileId);

  // const DeletPerson = await DeletPerso(10, 6);
  // console.log(DeletPerson);

  // const creatFile = await CreatFile(1, 2, 3, 4);
  // console.log(creatFile);


}

main();