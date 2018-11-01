let luku;
let lista = [];
var arvo;

do{
luku =  prompt('anna luku');
arvo = lista.includes(luku);
    if(arvo != true) {
        lista.push(luku);
    }
}while(arvo != true);