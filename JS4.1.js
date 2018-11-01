let lista = [];
let luku;
let i= 0;

while(i < 5){
    luku = prompt('Anna kokonaisluku');
    lista.push(luku);
    i++;
}
lista.reverse();
document.write(lista);