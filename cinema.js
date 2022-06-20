const catalago = require('./database/catalago.json');
const fs = require('fs');
const diretorio = '/database/catalago.json';

let json = JSON.stringify(catalago);
let filmesArray = JSON.parse(json);

const listarTodosOsFilmes = () => {
  filmesArray.forEach((filme) => {
    for (let prop in filme) {
      console.log(`${prop}: ${filme[prop]}`);
    }
  });
}

const listarFilmesEmCartaz = () => {
  filmesArray.forEach((filme) => {
    if (filme.cartaz === 'Sim') {
      for (let prop in filme) {
        console.log(`${prop}: ${filme[prop]}`);
      }
    }
  });
}

function save(content) {
  const contentString = JSON.stringify(content);
  return fs.writeFile(diretorio, contentString, { enconding: 'utf-8', flag: 'a' }, function (err) {
    if (err) throw err;
    console.log('Arquivo salvo!');
  });
};


const alterarStatusEmCartaz = (index) => {
  if (filmesArray[index].cartaz === 'Sim') {
    filmesArray[index].cartaz = 'Não';
  } else {
    filmesArray[index].cartaz = 'Sim';
  }
  return filmesArray;
}
alterarStatusEmCartaz(2);
listarFilmesEmCartaz();
listarTodosOsFilmes();

save(filmesArray);