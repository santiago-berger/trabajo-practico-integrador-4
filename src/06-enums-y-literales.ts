// tema 6: enums y tipos literales
// los enum se ejecutan con tsx o tsc, no con node directamente
export {};

console.log("tema 6: enums y tipos literales\n");

// enum: conjunto de valores constantes bajo un mismo nombre
// si no se indican valores, se numeran solos desde 0
enum NombreEnum {
    VALOR1,
    VALOR2,
    VALOR3,
}

console.log("enum con valores automáticos:", NombreEnum.VALOR1, NombreEnum.VALOR2, NombreEnum.VALOR3);

// enum numérico: se pueden elegir los números de cada miembro
enum Estado {
    Inactivo = 0,
    Activo = 1,
    Pausado = 2,
}

let estadoActual: Estado = Estado.Activo;
console.log("enum numérico:", estadoActual);

// enum de string: cada miembro tiene un texto
enum Color {
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul",
}

let colorFavorito: Color = Color.Verde;
console.log("enum de string:", colorFavorito);

// tipo literal de cadena: solo acepta esos textos exactos
type Direccion = "norte" | "sur" | "este" | "oeste";

let direccion: Direccion = "norte";
console.log("\ntipo literal de cadena:", direccion);
direccion = "sur";
console.log("tipo literal de cadena:", direccion);
// direccion = "noreste"; 
// error: "noreste" no está en la lista

// tipo literal numérico: solo acepta esos números exactos
type UnoADiez = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

let numero: UnoADiez = 5;
console.log("tipo literal numérico:", numero);
// numero = 11;
// error: 11 no está en la lista

// en qué se parecen: los dos limitan una variable a un grupo cerrado de opciones
// let otroEstado: Estado = 5;
// error: 5 no es un valor del enum

// let otraDireccion: Direccion = "";
// error: "" no es un valor permitido

// en qué se diferencian:
// 1. el enum existe al ejecutar, es un objeto de JavaScript que se puede recorrer
console.log("\nel enum Color al ejecutar es un objeto:", Color);
console.log("claves del enum con Object.keys():", Object.keys(Color));

// 2. los enum numéricos permiten la búsqueda inversa: del valor se obtiene el nombre
console.log("búsqueda inversa, Estado[1] es:", Estado[1]);

// 3. el tipo literal acepta el texto directo, el enum necesita su sintaxis
const datoDeApi = "sur";
const direccionDeApi: Direccion = datoDeApi; // se asigna directamente
const colorElegido: Color = Color.Azul;      // con enum se usa Color.Azul
console.log("tipo literal con texto directo:", direccionDeApi);
console.log("enum con su sintaxis:", colorElegido);
// console.log(Direccion);
// error: el tipo literal no existe al ejecutar

// cuándo usar enum: constantes fijas que se necesitan al ejecutar
enum Days {
    Sunday = 1,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
}

console.log("\nenum Days, Monday vale:", Days.Monday);

// cuándo usar tipo literal: opciones simples o datos que llegan como texto
type CardinalDirection = "North" | "South" | "East" | "West";
let heading: CardinalDirection = "North";
console.log("tipo literal CardinalDirection:", heading);