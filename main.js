const result = document.querySelector("#result");
let table = document.createElement("table");

var misure_originali = [

    {id:100,aula:"mm1",giorno:'2024-01-23',ora:"12:35",valore:16.5},
    {id:101,aula:"mm1",giorno:'2024-01-23',ora:"12:35",valore:18.5},
    {id:102,aula:"mm1",giorno:'2024-01-23',ora:"12:35",valore:17.5},
    {id:103,aula:"mm1",giorno:'2024-01-23',ora:"12:35",valore:18.5},
    {id:104,aula:"mm1",giorno:'2024-01-23',ora:"12:35",valore:19.5},
    {id:105,aula:"mm1",giorno:'2024-01-23',ora:"12:35",valore:18.5},
    {id:106,aula:"mm1",giorno:'2024-01-23',ora:"12:35",valore:18.5},
];

var misurazioni=[];

var misure_convertite = [];



function fetchElenco() {
    let url = "http://localhost:5000";
    fetch(url)
    .then(response => response.csv())
    .then(data =>  {
        misurazioni = data;
        result.append(Tabella(misurazioni.length, 5));
        console.log(misurazioni);
      });
  }



function conv(){
    let l = misurazioni.length;
    for(let i = 0; i < l; i++){
        misure_convertite[i] = {
            id : misurazioni[i].id,
            aula : misurazioni[i].aula,
            giorno : crea_data(misurazioni[i].giorno),
            ora : crea_data(misurazioni[i].ora),
            valore : misurazioni[i].valore,
        };    
    }
}



function crea_data(input){
    let dat=new Date(input);
    return dat;
}



function Tabella(rows, cols){
    conv();
    for(let i = 0; i < rows; i ++){
        let tr = document.createElement("tr");
        for(let j = 0; j < cols; j++){
            let td = document.createElement("td");
            if(j==0){
                td.append(misure_convertite[i].id);
            }
            if(j==1){
                td.append(misure_convertite[i].aula);
            }
            if(j==2){
                td.append(misure_convertite[i].giorno);
            }
            if(j==3){
                td.append(misure_convertite[i].ora);
            }
            if(j==4){
                td.append(misure_convertite[i].valore);
            }
            tr.append(td);
        }
        table.append(tr);
    }
    return table;
}

result.append(fetchElenco());