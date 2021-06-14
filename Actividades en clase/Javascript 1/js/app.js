// alert("Hola soy un archivo  externo");
/* 

var nombre; */
let nombre = "Azul";
let apellido = "Mac Intyre Asurey"; //String
let numero = 18; //Numerico
let llueve = true; //booleano
let arreglo = ["Azul", "Ludmila", "Mac Intyre", 18, true];

console.log(apellido);
apellido = "Mac Intyre Asurey";
console.log(numero);
numero = 3.5;
console.log(numero);
console.log(llueve);
console.log(apellido);
console.log(arreglo);
console.log(parseFloat(" "));
console.log(Number(" "));

let numero1 = 26;
let numero2 = 30;
let totalsuma = (numero1 + numero2);
console.log(totalsuma);

document.getElementById("resultado").innerHTML +=  totalsuma ;

let ape = document.getElementById("texto_nav1");
ape.innerHTML = apellido;
ape.style.backgroundColor = "red";

let res = document.getElementById('resultado2');
res.innerHTML = numero;

