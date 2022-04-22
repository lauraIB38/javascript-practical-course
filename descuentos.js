// const precioOriginal = 120;
// const descuento = 15;


function calcularPrecioConDescuento(precio, descuento) {
    const porcentagePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentagePrecioConDescuento)/100;
    
    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
   const inputPrice= document.getElementById("inputPrecio");
   const preciovalue = inputPrice.value;
   const inputDiscount= document.getElementById("inputDescuento");
   const descuentovalue = inputDiscount.value;

   const precioConDescuento = calcularPrecioConDescuento(preciovalue, descuentovalue);
   const resultP = document.getElementById("ResultP");
   resultP.innerText = "El precio con descuento es " + precioConDescuento;
}

function onClickButtonPrecioTrasCupon() {
    const inputPrice= document.getElementById("inputPrecio");
    const preciovalue = inputPrice.value;
    const inputcupon= document.getElementById("inputCupon");
    const cuponvalue = Number(inputcupon.value);
    const cupones = [
        222,
        223,
        224,
    ];
    let descuento;
    
    if (!cupones.includes(cuponvalue)) {
        alert("El cupón " + cuponvalue + " no es válido");
     } else if (cuponvalue ===222) {
        descuento = 5;
     } else if (cuponvalue ===223) {
        descuento = 10;
     } else if (cuponvalue ===224) {
        descuento = 15;
     }
     const preciotrasCupon= parseInt(preciovalue-descuento);
     const resultP = document.getElementById("ResultP");
     resultP.innerText = "El precio tras el cupon es " + preciotrasCupon;
}




// console.log({
//     precioOriginal,
//     descuento,
//     porcentagePrecioConDescuento,
//     precioConDescuento
    
// })
