/*let nombre =prompt("Ingresa tu nombre");
let apellido = prompt('Ingresa tu apellido');


Operadores lógicos para comparar
if(nombre ==""){
    alert("Epa no colocaste nungún nombre");
}else{
    console.log("Hola " + nombre +" "+ apellido);
    console.log (nombre.length);
}
*/
/*
let numero = parseInt(prompt("Ingresa un número"));
let numero2 = parseInt(prompt('Ingresa otro número'));
if(numero == true && numero2 == true){
    console.log (numero + numero2)
}
if(isNaN(numero)){
    alert("El primer valor no es un número.");
}
if(isNaN(numero2)){
    alert("El segundo valor no es un número.");
}*/
/*
let edad = parseInt(prompt("Introduce tu edad"));

if(edad < 18 && edad >0){
    alert( "No eres mayor aún");
}else if(edad >= 18){
    alert("Excelente! Eres mayor de edad");
}
*/
/*
if(45>36 || 36 > 25){
    console.log("Se cumple alguna de las dos");
}
*/

let menu = parseInt(prompt("Menú del día \n 1. Milanesa sola\n 2. Milanesa a la napolitana\n 3. Milanesa con fritas"));
/*
if(menu == 1){
    alert("Disfruta tu Mila!");
}else if(menu == 2){
    alert("Excelente te gusta la Napo!");
}else if(menu == 3){
    alert("La milanesa con fritas es la mejor!");
}
*/

switch (menu) {
    case 1:
        alert("Disfruta tu Mila!");
        break;

    case 2:
        alert("Excelente te gusta la Napo!");
        break;

    case 3:
        alert("La milanesa con fritas es la mejor!");
        break;

    default:
        alert("Debes ingresar un dato valido");
        break;
}