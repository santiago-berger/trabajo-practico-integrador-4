// tema 5: interfaces y type
// npm run tema5
export {};

console.log("tema 5: interfaces y type\n");

// interfaz: define la estructura de un objeto, es decir sus propiedades y métodos
interface Persona {
    nombre: string;
    edad: number;
    saludar(): void;
}

const persona: Persona = {
    nombre: "Santiago",
    edad: 19,
    saludar() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    },
};

console.log("objeto que cumple la interfaz Persona:");
persona.saludar();
// const otraPersona: Persona = { nombre: "Santiago" }; 
// error: faltan edad y saludar

// una clase puede implementar una interfaz: debe tener todo lo que la interfaz pide
class Alumno implements Persona {
    constructor(public nombre: string, public edad: number) {}

    saludar(): void {
        console.log(`Hola, soy ${this.nombre}, alumno de ${this.edad} años.`);
    }
}

console.log("\nclase que implementa la interfaz Persona:");
const alumno = new Alumno("Mateo", 24);
alumno.saludar();

// type: le da un nombre a un tipo
type MyNumber = number;
type User = {
    id: number;
    name: string;
    email: string;
};

const cantidad: MyNumber = 35;
const user: User = { id: 1, name: "Santiago", email: "santiago@gmail.com" };

console.log("\ntype como alias de un primitivo:", cantidad);
console.log("type como estructura de un objeto:", user);

// propiedad opcional: con ? la propiedad puede no estar
interface Usuario {
    nombre: string;
    edad?: number;
}

const usuario1: Usuario = { nombre: "Santiago", edad: 19 };
const usuario2: Usuario = { nombre: "Santiago" }; // sin edad

console.log("\nusuario con edad:", usuario1);
console.log("usuario sin edad (es opcional):", usuario2);

// cuándo usar type: uniones, tipos literales y tuplas, ya que una interfaz no puede hacerlo
type Id = string | number;
type Rol = "ADMIN" | "USER";
type Coordenada = [number, number];

const id: Id = "IPF-01";
const rol: Rol = "ADMIN";
const ubicacion: Coordenada = [-26.18, -58.17];

console.log("\nunión con type:", id);
console.log("tipo literal con type:", rol);
console.log("tupla con type:", ubicacion);