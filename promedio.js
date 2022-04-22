const lista1 = [
    100,
    200,
    300,
    400,
    500,
];




function calcularMediaAritmetica(lista) {
    let sumalista = 0;
    for(let i = 0; i< lista.length; i++) {
        sumalista+=lista[i];
    }
    const promediolista = sumalista/lista.length;
    return promediolista;
}

function calcularMediaAritmetica2(lista) {
    const sumalista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    
    const promediolista = sumalista/lista.length;
    return promediolista;
}


