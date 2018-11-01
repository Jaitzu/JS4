let koira;
let i = 1;

let lista=[];


while(i<=6){
    koira = prompt('Anna 6 koiran nimeä. ');
    lista [i] = koira;
    i ++;
}

 lista.sort();
 i = 6;
while(i>0) {
    i--;
    document.write('<ul>' + '<li>' + lista[i] + '</li>' + '</ul>');
}

