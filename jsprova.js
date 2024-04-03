


const result = document.querySelector("#result");
let table = document.createElement("table");

var misurazioni = [];

function fetchElenco() {
  let url = "http://localhost:5000";
  fetch(url)
    .then(response => response.json())
    .then(data => {
      misurazioni = data;
      result.append(Tabella());
      console.log(misurazioni);
    });
}

fetchElenco();

var misure_convertite = [];

function conv() {
  let l = misurazioni.length;
  for (let i = 0; i < l; i++) {
    misure_convertite[i] = {
      id: misurazioni[i].id,
      aula: misurazioni[i].aula,
      giorno: crea_data(misurazioni[i].giorno),
      ora: crea_data(misurazioni[i].ora),
      valore: misurazioni[i].valore
    };
  }
  return 0;
}


function crea_data(input) {
  let dat = new Date(input);
  return dat;
}

function Tabella() {
  conv();
  for (let i = 0; i < 7; i++) {
    let tr = document.createElement("tr");
    for (let j = 0; j < 4; j++) {
      let td = document.createElement("td");
      if (j == 0) {
        td.append(misure_convertite[i].id);
      }
      if (j == 1) {
        td.append(misure_convertite[i].aula);
      }
      if (j == 2) {
        td.append(misure_convertite[i].giorno.toLocaleDateString());
      }
      if (j == 3) {
        td.append(misure_convertite[i].valore);
      }
      tr.append(td);
    }
    table.append(tr);
  }
  return table;
}
