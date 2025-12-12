// Estrucutras de control y bucles en JavaScript.

// Bloque switch (otra forma de hacer condicionales múltiples).

// El ejemplo siguiente evalúa la variable 'nota' y asigna una calificación según su valor.
let fruta = 'manzana';

let nota = 8;

console.log("El resultado del examen es el siguiente");

switch (nota) {
    case 10:
        calificacion = 'Excelente';
        break;
    case 9:
        calificacion = 'Sobresaliente';
        break;
    case 8:
        calificacion = 'Notable';
        break;
    case 7:
        calificacion = 'Bien';
        break;
    case 6:
        calificacion = 'Suficiente';
        break;
    case 5:
        calificacion = 'Aprobado';
        break;
    default:
        calificacion = 'Suspenso';
        calificacion = "nota erronea";
}       

    

console.log("Tu calificación es:", calificacion);


// Operador ternario.

// ANIDACIÓN DE OPERADOR TERNARIO.

let edad = 20;
let mensaje = (edad < 13) ? "Niño" :
               (edad < 20) ? "Adolescente" :
               (edad < 65) ? "Adulto" :
                             "Anciano";

console.log("Eres un:", mensaje);

// BUCLES

// fucle finito.
let i = 0;
while (i < 5) {
    console.log("Valor de i en while:" + i);
    i = i + 1;
}

// la iteración es el valor que se muestra en pantalla cuando se ejecuta el bucle y se cumple la condición hasta que finaliza.

// bucle infinito.
i = 0;
while (true) {
    console.log("Valor de i en bucle infinito:" + i);
}
// Este bucle nunca termina porque la condición siempre es verdadera.

// blucle do while.
let i = 0;

do {
    console.log("Valor de i en do while:" + i);
    i = i + 1;
} while (i < 5);
// En este caso, el bloque de código se ejecuta al menos una vez antes de verificar la condición.

// bucle for.
for (let i = 0; i < 5; i++) { // para que vaya de 2 en 2 se usa i = i + 2 o i += 2.
    console.log("Valor de i en for:" + i);
}
