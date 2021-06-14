let condicion=true;
while (condicion){
    nombre=prompt("ingrese nombre del alumno");
    if (isNaN(nombre)){
        condicion=false;
    }else{
        alert("El nombre que usted ingreso no es válido, por favor ingreselo nuevamente");
    }
}

let notas =[];
let condicion2=true;

for(let i=0; i<3 ; i++){
    condicion2=true;
    while (condicion2){
        let nota=parseFloat(prompt("Ingrese su nota N°"+(i+1)));
        if (isNaN(nota)){        
            alert("La nota que usted ingreso no es válida, por favor ingresela nuevamente");     
            }else{
              notas.push(nota);
              condicion2=false;
            }
    }  
}

let suma = notas[0]+notas[1]+notas[2];
let promedio = suma/3;
alert("El promedio de "+nombre+" es el siguiente:  "+ promedio);