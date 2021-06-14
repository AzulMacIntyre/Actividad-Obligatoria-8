//alert('Bienvenidos c2111')

var contador = 0

while(contador<4){
    console.log('hola a todos while')

    contador += 1
}

/*
for(var i=0; i<3; i++){
 
    var notas1 = Number(prompt('ingrese una nota: ' + i))
    //sumar las notas...acumulador       
    //formula que es el promedio ../3        
    console.log('valor fr i: ' + i)              

}

//programa para mostrar los numeros pares ...0 a 200
for(var i = 0; i<=200;i++){
    i=300
    if(i==100){
        console.log('es para:' +i)
        break
    }else{
        console.log('este no es par: '+i)
    }
  
}
*/

//arrays.. vectores
//                0         1        2       3
var nombres = ['carla','carolina','guido','alejo'] //tipo string

var edades = ['10',15,'20',120,'44',28,'18',35,'24',50]

var apellidos = ['sanchez','martinez','zapata','galliotti','becker']

var numeros = [15,22,27,18,7,99,8,73,11,71]

var booleanos = [true,false,false,true]

var pasapalabra = ['e','l','f','a']

var animal = 'elefante'

console.log('total de datos en apellidos: '+apellidos.length)

//hardcodeado.... no hardcodeareas

for(var i=0;i<pasapalabra.length;i++){
     var ingreseUsuario = prompt('ponga la letra')

     if(pasapalbra[i]==ingreseUsuario){
         console.log('acerto una letra')
     }
}

//jose.zapata@bue.edu.ar