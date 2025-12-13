//  Nombre variable     "Mensaje que aparece en la ventana"
//let datoDelUsuario = prompt("Pásame los datos")

//   Cadena de texto a mostrar en la ventana
//alert("El dato es: " + datoDelUsuario)

// Pedir dato par o impar.
/*
let num = Number(prompt("Dame un número y sabrás si es par o impar:"))

if (num % 2 === 0) {
    alert("El número " + num + " es PAR.");
} else {
    alert("El número " + num + " es IMPAR.");
}




// Pedir dos numeros y decir cual es el mayor o si son iguales.

let num1 = Number(prompt("Dame el primer numero"))
let num2 = Number(prompt("Dame el segundo numero"))

if (num1 > num2) {
    alert("El numero primer numero es mayor que el segundo")
}   else if (num2 > num1) {
        alert("El segundo número es mayor que el primero")
}
    else (num1 === num2);{
        alert("Los dos números son iguales")
    }








// Pedir un numero y mostrar todas las iteraciones desde 1 hasta ese numero por consola.

let x = Number(prompt("Introduce un número"));

for (let i = 1; i <= x; i++) {
    console.log(i);
}







// Pedir numero y mostrar tabla de multiplicar.

let numero = Number(prompt("Introduce un numero del 1 al 10 para que se muestre su tabla de multiplicar"))

for (let i = 1; i <= 10; i++) {
    let resultado = numero * i
    console.log(numero + " x " + i + " = " + resultado)
}
*/




/*
// Pedir un número y calcular la suma de todos los números desde 1 hasta dicho número.

let numero = Number(prompt("Introduce un número:"));

// Variable para acumular la suma
let suma = 0;

// Bucle para sumar desde 1 hasta el número dado
for (let i = 1; i <= numero; i++) {
    suma += i;
}

// Mostrar el resultado
alert("La suma desde 1 hasta " + numero + " es: " + suma);
*/





// Generar un numero aleatorio del 1 al 20 y que el usuario intente adivinarlo. El usuario puede rendirse poniendo 0.
let numeroSecreto = Math.floor(Math.random() * 20) + 1; // Aquí se genera el número aleatorio entre 1 y 20.
let intento; // Variable para almacenar el intento del usuario.
do {
    intento = Number(prompt("Adivina el número secreto (entre 1 y 20). Pon 0 para rendirte:")); // Pedir el número.
    if (intento === 0) { // El usuario se rinde.
        alert("Te has rendido. El número secreto era: " + numeroSecreto);
        break;
    }
    if (intento < numeroSecreto) { // Comparar el intento con el número secreto.
        alert("Demasiado bajo. Intenta de nuevo.");
    } else if (intento > numeroSecreto) { // Comparar el intento con el número secreto siendo este mayor.
        alert("Demasiado alto. Intenta de nuevo.");
    }
} while (intento !== numeroSecreto); // Repetir hasta que el usuario adivine el número o se rinda.

if (intento === numeroSecreto) { // El usuario ha adivinado el número.
    alert("¡Felicidades! Has adivinado el número secreto: " + numeroSecreto);
}
