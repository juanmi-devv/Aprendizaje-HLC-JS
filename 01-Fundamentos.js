// El archivo .js siempre tiene que ir al final del html para que cargue después de todo el contenido

// alert("Hola Mundo"); console.log("Hola Mundo"); formas de probar js en una web.

// Fundamentos de JavaScript

// Variables y Constantes
var nombre = "Juan"; // var es una forma antigua de declarar variables
let edad = 30; // let es la forma moderna de declarar variables
const PI = 3.1416; // const es para constantes, su valor no puede cambiar
console.log(nombre, edad, PI);

// Tipos de Datos primitivos.
let esAdulto = true; // booleano
let altura = 1.75;   // número
let apellido = "Pérez"; // cadena de texto
let hijos = null;    // nulo
let direccion; // indefinido
console.log(typeof esAdulto, typeof altura, typeof apellido, typeof hijos, typeof direccion);

// Tipos de datos compuestos
let frutas = ["Manzana", "Banana", "Cereza"]; // arreglo
let persona = { nombre: "Ana", edad: 25 }; // objeto
console.log(frutas, persona);
console.log(typeof frutas, typeof persona);

// Operadores
let suma = 5 + 3; // suma
let resta = 5 - 3; // resta
let multiplicacion = 5 * 3; // multiplicación
let division = 5 / 3; // división
let modulo = 5 % 3; // módulo
console.log(suma, resta, multiplicacion, division, modulo);

// Operadores de comparación
console.log(5 > 3); // mayor que
console.log(5 < 3); // menor que
console.log(5 >= 3); // mayor o igual que
console.log(5 <= 3); // menor o igual que
console.log(5 == 3); // igual que
console.log(5 != 3); // diferente que
console.log(5 === "5"); // estrictamente igual
console.log(5 !== "5"); // estrictamente diferente



// Operadores lógicos
console.log(true && false); // AND
console.log(true || false); // OR
console.log(!true); // NOT
// Estructuras de control
let numero = 10;
