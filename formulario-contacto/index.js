const getName = document.querySelector('#nombre')
const getEmail = document.querySelector('#email')
const text = document.querySelector('#texto')
const send = document.querySelector('#enviar')
const clear = document.querySelector('#clear')
    
send.addEventListener('click', function(e) {
    e.preventDefault()
    console.log(getName.value, getEmail.value, text.value)
    const user = {Nombre: getName.value,Email: getEmail.value,Mensaje: text.value}
    localStorage.setItem("user", JSON.stringify(user));
    let data = JSON.parse(localStorage.getItem("user"))
    imprimir.innerHTML = `Nombre: ${data.Nombre} <br> Email: ${data.Email} <br> Mensaje: ${data.Mensaje}`    

}) 

clear.addEventListener('click', function() {
    imprimir.remove() 

})









