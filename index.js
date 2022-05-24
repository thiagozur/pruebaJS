function checkTempNumber(temperatura) {
    var check = isNaN(temperatura)
    return check
}

var temperatura = prompt("Ingrese una temperatura","")

var numero = checkTempNumber(temperatura)

var texto = (parseFloat(temperatura) < 0) ? "El arte es morirse de frío" :
    (0 <= parseFloat(temperatura) && parseFloat(temperatura) <= 16) ? "Está fresco para pasear en jaula" :
    (16 < parseFloat(temperatura) && parseFloat(temperatura) < 35) ? "Maldición, va a ser un día hermoso" :
    (parseFloat(temperatura) >= 35) ? "Muerte instantánea" : "Por favor, ingrese un número";

var mensaje = document.getElementById("inputted")

mensaje.innerText = texto

var met = document.getElementById("temp")

if (numero) {
    met.innerText = ""
} else {
    met.innerText = temperatura
}