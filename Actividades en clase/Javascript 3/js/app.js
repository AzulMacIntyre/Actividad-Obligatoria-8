let nombreAlumno=prompt("Ingresá el nombre del Alumno/a");
/*
let nota=parseFloat(prompt("Ingresa la nota 1"));
let nota2=parseFloat(prompt("Ingresa la nota 2"));
let nota3=parseFloat(prompt("Ingresa la nota 3"));
let accNot =nota+nota2+nota3;
let promedioNotas =accNot/3;
let notas=[];
for(let i=0; i < 3; i++){
    let nota=parseFloat(prompt("Ingresa la nota " + (i+1)));
    notas.push(nota);
}

let suma = notas[0]+notas[1]+notas[2];
let promedioNotas =suma/3;
alert(promedioNotas);
*/
/*Declaración de un arreglo */
const alumnos=["Daiana","José","Pablo"];
console.log(alumnos);
alumnos[3]="Luis";
console.log(alumnos);
alumnos.push("Jorge");
console.log(alumnos);

for(let a=0; a < alumnos.length; a++){
    console.log(alumnos[a]);
}
function mostrarDatos(){
    let datosLuis=["Luis","Navas",48,true];
    datosLuis.forEach(dato => {
        console.log(dato);   
    });
}
let letra =" ";
while (letra ==" ") {
    console.log("estamos dentro del while "); 
    letra=prompt("ingresa una letra");  
}









