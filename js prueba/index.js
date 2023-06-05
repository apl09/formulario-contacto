//1
const theBridge = 'The Bridge 2023';
console.log(theBridge.length);
console.log(theBridge.slice(0,10))

//2

const culpable = true;
if(culpable== true) {
    console.log('Es culpable')
} else console.log('No es culpable')

//3
const nombre = 'pepe'
const saludar = (nombre) =>{
    if(nombre === 'string')
    console.log(`Hola soy ${nombre}`) 
        else console.log('Debo ser ejecutada con un string')
    };

//4    

const array = [1,2,3,4,5,6,7,8,9,10];

const pares = (array) => {
    for(let par of array) {
        if(par %2== 0) {
            return par
        }
    }
}

//6

const parrafo = document.getElementById('#miParrafo');
parrafo.innerText = "codigo HTML";

const color = document.getElementById("#miParrafo").style.color = "red";
const fontWeight = document.getElementById("#miParrafo").style.fontWeight = "900";

function addLi() {
    const ul = document.getElementById("miLista");
    const li = document.createElement("li");
    li.appendChild(document.createTextNode( "Nuevo elemento de lista"
    ));
    ul.appendChild(li);
  }

  document.getElementById('#miBoton').onclick = function() {
    alert("¡Has hecho clic en el botón!");
  };