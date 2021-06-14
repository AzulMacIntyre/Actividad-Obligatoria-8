let edades=[]
let mayorusuario=0
let mayoredad=0

for(let i=0 ; i<3 ; i++){
    let edad=parseFloat(prompt("Usuario N°"+(i+1)+", por favor ingrese su edad:"));
    edades.push(edad);
    if(edades[i]>=18){
        alert("Usted es mayor de edad.");
    }else{
        alert("Usted no es mayor de edad.");
    }



    if(edades[i]>mayoredad){
        mayorusuario=i+1
        mayoredad=edades[i]
    }
}

alert("El usuario N°"+mayorusuario +" es mayor de edad con "+mayoredad+" años.");