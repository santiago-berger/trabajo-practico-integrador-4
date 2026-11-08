// tema 4: funciones
// npm run tema4
export {};

console.log("Tema 4: Funciones\n");

// tipos de los parámetros: cada parámetro se escribe nombre: tipo
function saludar(nombre: string, edad: number) {
    return `Hola ${nombre}, tienes ${edad} años.`;
}

console.log("parámetros con tipo:", saludar("Santiago", 19));
// saludar("Santiago", "diecinueve"); 
// error: edad tiene que ser un number

// tipo de retorno: va después del paréntesis de cierre
function sumar(a: number, b: number): number {
    return a + b;
}

console.log("retorno de tipo number:", sumar(4, 6));

// parámetro opcional: con ? se puede omitir al llamar a la función
function saludarConEdadOpcional(nombre: string, edad?: number): void {
    if (edad) {
        console.log(`Hola ${nombre}, tienes ${edad} años.`);
    } else {
        console.log(`Hola ${nombre}.`);
    }
}

console.log("\nparámetro opcional:");
saludarConEdadOpcional("Santiago", 19); // con la edad
saludarConEdadOpcional("Santiago"); // sin la edad

// parámetro por defecto: si no se pasa, usa el valor indicado con =
function saludarConEdadPorDefecto(nombre: string, edad: number = 19): void {
    console.log(`Hola ${nombre}, tienes ${edad} años.`);
}

console.log("\nparámetro por defecto:");
saludarConEdadPorDefecto("Mateo", 24); // usa la edad que se pasa
saludarConEdadPorDefecto("Santiago");     // usa la edad por defecto