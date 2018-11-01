let ehdo;
let lista = [];
let i = 1;
let max = 0;
let freq = 0;
let luku;

ehdo = prompt('Anna ehdokkaiden määrä.');

do{
    lista.push(i);
    i++

}while( i <=ehdo);

document.write('Valitakaa vaalinumeronne tästä listasta. ' + lista);
i = 1;
do{
    luku =  prompt('Anna vaalinumero');
    if(luku != 0) {
        lista.push(luku);
    }
    i++;
}while(i <= ehdo);
i = 0;
lista.sort(function(a, b){return a-b});
while(i < lista.length){
    if(lista[i]===lista[i+1]){
        freq++;
    }
    else {
        freq=0;
    }
    if(freq>max){
        result = lista[i];
        max = freq;
    }
    i++;
}
document.write('<br>'  + 'voittaja on nro. ' + result);