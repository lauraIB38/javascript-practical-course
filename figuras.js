// Codigo del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden " + ladoCuadrado + " cm");

function perimetroCuadrado(lado) {
  return lado * 4;
} 

// console.log("El perímetro del cuadrado es " + perimetroCuadrado+ " cm");


function areaCuadrado(lado) {
    return lado * lado;
  } 
 
// console.log("El área del cuadrado es " + areaCuadrado + " cm^2");
console.groupEnd();

// Codigo del triángulo
console.group("Triangulos");
const ladoTrianulo1 = 6;
const ladoTrianulo2 = 6;
const baseTrianulo = 4;

/* console.log("Los lados del triangulo miden " 
+ ladoTrianulo1 + ", " 
+ ladoTrianulo2 + " y " 
+ baseTrianulo + " cm");

const perimetroTriangulo = ladoTrianulo1 + ladoTrianulo2 + baseTrianulo;
console.log("El perímetro del triángulo es " 
+ perimetroTriangulo + " cm");

const alturaTriangulo = 5.5;
console.log("La altura del triángulo es de " + alturaTriangulo + " cm");
const areaTriángulo = (baseTrianulo *alturaTriangulo)/2;
console.log("El área del triángulo es " + areaTriángulo + " cm^2"); */

function perimetroTriangulo(lado1, lado2, base) {
    const perimetro = parseInt(lado1) + parseInt(lado2) + parseInt(base);
    return perimetro;
}

function areaTriangulo(altura, base) {
    const area = (altura * base)/2;
    return  area;
}
console.groupEnd();

// Código del círculo
// console.group("Círculos");

// Radio
// const radio = 4;
// console.log("El radio del círculo mide " + radio + " cm");

// Diámetro
// const diametro = radio * 2;
// console.log("El diámetro del círculo mide " + diametro + " cm");
function diametroCirculo (radio) {
  return radio * 2;
}
// PI
const PI = Math.PI;
console.log("PI es " + PI );

// Circunferencia
// const perimetroCirculo = diametro * PI;
// console.log("El perímetro del círculo es " + perimetroCirculo + " cm");
function perimetroCirculo(radio) {
    const  diametro = diametroCirculo(radio);
    return  PI * diametro;
}

// Área

function areaCirculo(radio) {
    return (radio * radio) * PI;
}
// console.log("El área del círculo es " + areaCirculo + " cm^2");
console.groupEnd();


// Aqui interactuamos con HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("InputTriangulo1");
    const base = input1.value;
    const input2 = document.getElementById("InputTriangulo2");
    const lad = input2.value;


    const perimetro = perimetroTriangulo(lad, lad, base);
    alert(perimetro);
}



function alturaTriangulo(ladoA, ladoB, base) {
    if(ladoA!=ladoB) {
        console.error("Los lados A y B no son iguales")
    } else {
        const lado1 = ladoA;
        const lado2 = base/2;
        const alturaAlCuadrado = parseInt(lado1*lado1) - parseInt(lado2*lado2);
        const altura = Math.sqrt(alturaAlCuadrado);
        return altura;
    }
}

function calcularAreaTriangulo() {
    const inputBase = document.getElementById("InputTriangulo1");
    const base = inputBase.value;
    const inputLado = document.getElementById("InputTriangulo2");
    const lado = inputLado.value;
    const altura= alturaTriangulo(lado, lado, base);
    const area = areaTriangulo(altura, base);
    alert(area);
}
