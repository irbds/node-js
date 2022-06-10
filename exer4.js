const fs = require('fs').promises;

async function ReadFile(file) {
  try{
    const arquivo = await fs.readFile(file, 'utf-8');
    const arquivoJson = JSON.parse(arquivo);

    return arquivoJson;
  } catch (error) {
    console.log('nao foi possivel ler o arquivo');
  }
}

async function WriteFile(file, data, id) {
  try{
    fs.writeFile(file, JSON.stringify(data), 'utf-8');
    if(id) return (`apagado personagens com id: ${id}`);
    return (`Gravado com sucesso`);
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
  
    return await WriteFile('./simpsons.json', newArray, id);
  } catch (error) {
    console.log(error);
  }
}

async function CreatFile(...id) {
  try{
    const readFile = await ReadFile('./simpsons.json');
    let newArray = readFile;
  
    newArray = newArray.filter((acc) => id.includes(acc.id));
  
    return await WriteFile('./simpsonFamily.json', newArray);
  } catch (error) {
    console.log(error);
  }
}

async function AddNewPers(newPers) {
  try {
    const readFile = await ReadFile('./simpsonFamily.json');
    const addPerson = [...readFile, newPers];

    return await WriteFile('./simpsonFamily.json', addPerson);
  } catch (error) {
    console.log(error);
  }
}

async function main() {
  // const showFile = await ShowFile();
  // showFile.forEach(acc => console.log(acc));

  // const showFileId = await FilterById(3);
  // console.log(showFileId);

  // const DeletPerson = await DeletPerso(10, 6);
  // console.log(DeletPerson);

  // const creatFile = await CreatFile(1);
  // console.log(creatFile);

  const addNewPers = await AddNewPers({ "id": 8, "name": "Nelson Muntz" });
  console.log(addNewPers);
}

main();