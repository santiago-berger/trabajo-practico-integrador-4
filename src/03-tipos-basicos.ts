// tema 3: tipos básicos
// npm run tema3
export {};

console.log("Tema 3: Tipos básicos\n");

// 1. string, number y boolean
console.log("1. Tipos primitivos");

const nombreAlumno: string = "Santiago";
const edadAlumno: number = 19;
const promedio: number = 6; // number incluye enteros y decimales
const esRegular: boolean = true;

console.log(`Alumno: ${nombreAlumno}, Edad: ${edadAlumno}, Promedio: ${promedio}, Regular: ${esRegular}`);

// const edadMal: number = "diecinueve";
// error: el tipo 'string' no se puede asignar al tipo number

// 2. arrays con tipo
console.log("\n2. Arrays con tipo");

// forma 1: tipo[]
const materias: string[] = ["TLP II", "Big Data", "Ingeniería de Software I"];
// forma 2: Array<tipo>
const notas: Array<number> = [8, 9, 7, 10];

materias.push("Base de Datos II");
// notas.push("seis");
// error: el argumento de tipo string no se puede asignar al parámetro de tipo number

console.log("Materias:", materias);
console.log("Notas:", notas);

// tupla: cantidad y tipo fijos en cada posición
const alumnoTupla: [string, number] = ["Santiago", 19];
console.log("Tupla [nombre, edad]:", alumnoTupla);

// 3. tipo unión: un valor puede ser de uno u otro tipo
console.log("\n3. Tipo unión");

let legajo: string | number = "IPF-2026-015";
console.log("Legajo como texto:", legajo);
legajo = 2026015;
console.log("Legajo como número:", legajo);

// tipo unión: el legajo puede ser un texto o un número
// antes de usar un método hay que verificar el tipo,
// porque toUpperCase() existe en los string pero no en los number
function mostrarLegajo(legajo: string | number): string {
    // legajo.toUpperCase(); // error: no se sabe si legajo es un string

    if (typeof legajo === "string") {
        // dentro del if, TypeScript ya sabe que legajo es un string
        return `legajo en texto: ${legajo.toUpperCase()}`;
    }

    // si no entró al if, TypeScript sabe que legajo es un number
    return `legajo en número: ${legajo + 1000}`;
}

console.log(mostrarLegajo("ipf-123"));
console.log(mostrarLegajo(456));

// también se puede combinar con null
let email: string | null = null;
email = "santiago@gmail.com";
console.log("Email cargado:", email ?? "sin email");
if (email !== null) {
    console.log("Largo del email:", email.length);
}

// 4. comparación de any con unknown
console.log("\n4. any vs unknown");

// any desactiva la verificación
const datoAny: any = 42;
console.log("datoAny es un número:", datoAny);
// datoAny.toUpperCase();
// sin error al escribir, pero falla al ejecutar
// TypeError: datoAny.toUpperCase is not a function

// unknown acepta cualquier valor, pero obliga a verificar antes de usarlo
const datoUnknown: unknown = "texto recibido de una API";
// datoUnknown.toUpperCase();
// error: "datoUnknown" es de tipo "unknown"

if (typeof datoUnknown === "string") {
    console.log("datoUnknown verificado:", datoUnknown.toUpperCase());
}