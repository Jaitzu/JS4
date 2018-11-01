let luku;
let lista = [];
let a, b;

do{
    luku =  prompt('anna luku');
    if(luku != 0) {
        lista.push(luku);
    }
}while(luku!=0);



lista.sort(function(a, b){return a-b});
document.write(lista + '<br>');
document.write((lista.length + 'pituus' + '<br>' ));

if(lista.length %2 != 0){
    a = + Math.floor((lista.length)/2);
    document.write('Mediaani = ' + lista[a]);
}

else{
    document.write( 'pariton' );
    a =Math.floor((lista.length)/2);
    b =Math.floor((lista.length)/2 + 1);
     document.write((a + b) / 2);
    document.write( 'pariton' );
}