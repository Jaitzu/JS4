let luku;
let lista =[];

do{
    luku =prompt('Anna luku. Ohjelma jatkuu vasta kun annat luvun 0.');
    if(luku !=0) {
        lista.push(luku);
    }
}while(luku != 0);

lista.sort(function(a, b){return a-b});
lista.reverse();
document.write(lista);