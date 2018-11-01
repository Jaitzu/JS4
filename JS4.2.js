let lista = [];
let nimi;
let määrä;
i= 0;

lista.push('<ol>');
määrä = prompt('Anna nimien lukumäärä');
while(i < määrä){
    nimi = prompt('Anna nimi');
    lista.push('<li>' + nimi + '</li>');
    i++;
}
lista.push('</ol>');
document.write(lista.join(' '));