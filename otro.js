const nombre = "Juanillo";
let edad = 20;
let estudiante = true;
let hobbies = ["leer", "jugar", "viajar"];
let mascota = null;
let curso;

// Creación del objeto.

const persona = {
    nombre,
    edad,
    estudiante,
    hobbies,
    mascota,
    curso
};

//console.log(persona);

// Acceso a datos y mostrar su tipo.

console.log("nombre:", persona.nombre, typeof persona.nombre);
console.log("edad:", persona.edad, typeof persona.edad);
console.log("estudiante:", persona.estudiante, typeof persona.estudiante);
console.log("mascota:", persona.mascota, typeof persona.mascota); // En JS null devuelve 'object'
console.log("curso:", persona.curso, typeof persona.curso); // undefined




// Acceso especial al array de hobbies
console.log("hobbies (completo):", persona.hobbies, typeof persona.hobbies);
console.log("Hobby 1:", persona.hobbies[0]); // Acceso por índice 0
console.log("Hobby 2:", persona.hobbies[1]); // Acceso por índice 1
console.log("Hobby 3:", persona.hobbies[2]); // Acceso por índice 2


// Agregar datos a un objeto.

persona.pais = "España";
persona.peso = 70;

//console.log("Objeto persona actualizado:", persona);


// Eliminar datos.

delete persona.estudiante;
delete persona.curso;

console.log("Objeto persona después de eliminar propiedades:", persona);
