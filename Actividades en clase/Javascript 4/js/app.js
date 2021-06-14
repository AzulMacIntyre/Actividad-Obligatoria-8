let alumnos =[
    ["Elsa","Pablo","Alejo"],
    ["José","Jimena","Milton"]
];

let elemento = document.querySelector(".container");
/*
for(let a=0; a < alumnos.length; a++){
    for(let b=0; b < alumnos[a].length;b++){
    elemento.innerHTML+=`
    <p>
        ${alumnos[a][b]}
    </p>
    `;
}
}

elemento.innerHTML+=`${alumnos[0][0]}<br>`;
elemento.innerHTML+=`${alumnos[0][1]}<br>`;
elemento.innerHTML+=`${alumnos[0][2]}<br>`;
elemento.innerHTML+=`${alumnos[1][0]}<br>`;
elemento.innerHTML+=`${alumnos[1][1]}<br>`;
elemento.innerHTML+=`${alumnos[1][2]}<br>`;
alumnos[0][3]="Luis";
*/

function calcular(ev){
    ev.preventDefault();
    let valor =parseFloat(prompt("Ingresa un número"));
    let valor2 =parseFloat(prompt("Ingresa otro número"));
    let operacion =prompt("Ingresa el tipo de operación\n + para sumar\n - para restar\n * para multiplicación\n / para división");

    let resultado;
    if(operacion==="+"){
        resultado= valor + valor2;
    }else if(operacion==="/"){
        resultado= valor / valor2;
    }else if(operacion==="*"){
        resultado= valor * valor2;
    }else if(operacion==="-"){
        resultado= valor - valor2;
    }else{
        operacion=prompt("Indica la operación");
    }
    elemento.innerHTML=`<button class="btn btn-primary">Calcular</button>`;
    elemento.innerHTML+=resultado;
    document.querySelector("button")
.addEventListener('click', calcular);
}
document.querySelector("button")
.addEventListener('click', calcular);

document.getElementById("calcular").addEventListener('click',(event)=>{
    event.preventDefault();
    console.log(event);
});

const mostrarValores=(a = 0,b = 0)=>{
    return a+b;
};

console.log(mostrarValores(8,56));







