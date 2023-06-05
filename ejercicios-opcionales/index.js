const multiply = (a,b) => {
    return a*b
}

const prompt = window.prompt('Que edad tienes?');

const edad = (prompt) =>{
    if(edad >= 18) {
        console.log('eres mayor de edad')
    } else console.log('eres menor de edad')
}

const array =[1,2,3]
const sumaTresNumeros =(array) => {
    for(let suma of array) {
    if(suma == NaN ) {
        console.log("Debo ser ejecutada con números")
    } else return suma += 1  
    } 
}


 const primerosTresCaracteres = (str) =>{
    if(str != 'string') {
        console.log("Debo ser ejecutada con un string")
    } else if (str.length <= 3) {
        return str
    } else return str.slice(0,3)
 }

 

let precio= '';
let porcentaje = 21; 
const getPrecioMostrarIVA =(precio, porcentaje) => {
    if(precio = NaN) {
        console.log('no es un formato correcto')
    } else return precio +(precio * 100)/ porcentaje
} 



let str = ''      
const penultimoCaracter = (str) => {
    if(str != 'string') {
        console.log("Debo ser ejecutada con un string")
    } else if (str.length < 2) {
        return str.slice(0,1)
    } else return str.substr(-2,1)
}



      

const palabra = 'abracadabra';

const cuentaVocales = (palabra) => {
    let cuenta = 0;
    const vocales = ['a','e','i','o','u']
    for( let caracter of palabra) {
        if (vocales.includes(caracter)) {
            cuenta++
        }else if( vocales != 'string') {
            console.log("Debo ser ejecutada con un string")
        }  
    }
}
    

const potencia = (a,b) => {
    return a**b
}

const boton = document.getElementById('#boton');
console.log(boton)

const alert = () => {
    alert("Hola");
}
