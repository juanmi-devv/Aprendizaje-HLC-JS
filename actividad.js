//  Nombre variable     "Mensaje que aparece en la ventana"
let datoDelUsuario = prompt("Pásame los datos")

//   Cadena de texto a mostrar en la ventana
alert("El dato es: " + datoDelUsuario)

// Pedir dato par o imparr.

let num = Number(prompt("Dame un número y sabrás si es par o impar:"))

if (num % 2 === 0) {
    alert("El número " + num + " es PAR.");
} else {
    alert("El número " + num + " es IMPAR.");
}