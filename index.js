function checkTempNumber(temperatura) {
    let check = isNaN(temperatura)
    return check
}

var temperatura = prompt("Ingrese una temperatura","")

let numero = checkTempNumber(temperatura)

let texto = (parseFloat(temperatura) < 0) ? "El arte es morirse de frío" :
    (0 <= parseFloat(temperatura) && parseFloat(temperatura) <= 16) ? "Está fresco para pasear en jaula" :
    (16 < parseFloat(temperatura) && parseFloat(temperatura) <= 35) ? "Maldición, va a ser un día hermoso" : "Por favor, ingrese un número";

var mensaje = document.getElementById("inputted")

mensaje.innerText = texto

var met = document.getElementById("temp")

if (numero) {
    met.innerText = ""
} else {
    met.innerText = temperatura
}