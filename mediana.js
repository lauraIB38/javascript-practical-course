const lista1 = [
    200,300,500,6000000
];

function calcularMediaAritmetica2(lista) {
    const sumalista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    
    const promediolista = sumalista/lista.length;
    return promediolista;
}
function esPar(num) {
    if(num % 2 === 0) {
        return true;
    }else {
        return false;
    }
}

/* const mitadLista1 = parseInt(lista1.length/2);
let mediana;
if(esPar(lista1.length)) {
    const elemento1 = lista1[mitadLista1-1];
    const elemento2 = lista1[mitadLista1];
    const promedio = calcularMediaAritmetica2 ([
            elemento1, elemento2
        ]);
    mediana= promedio;
    
}else {
    mediana = lista1[mitadLista1];
} */

function calcularMediana(lista1) {
    const lista = lista1.sort(function(primerElemento, segundoElemento){
        return primerElemento - segundoElemento;
    });
    const mitadLista1 = parseInt(lista.length/2);
    let mediana;
    if(esPar(lista.length)) {
        const elemento1 = lista[mitadLista1-1];
        const elemento2 = lista[mitadLista1];
        const promedio = calcularMediaAritmetica2 ([
                elemento1, elemento2
            ]);
        mediana= promedio;
        
    }else {
        mediana = lista[mitadLista1];
    }
    return mediana;
}