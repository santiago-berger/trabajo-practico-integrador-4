## Trabajo Práctico Integrador IV

### Materia: Taller de Programación II

### Profesores: Centurión Agustín, Britos Diego, Franco Marcos

### Alumno: Berger Santiago Christian

# Investigación en TypeScript

## Cómo ejecutar el proyecto

Requisito: Node.js 24 o 26.

~~~
npm install
npm run tema3
npm run check
npm run build
~~~

Cada tema se ejecuta con su script: tema3, tema4, tema5, tema6.

## Tema 1: ¿Qué es TypeScript?

### ¿Qué es TypeScript y quién lo desarrolla?

TypeScript es un superconjunto de JavaScript desarrollado por Microsoft que agrega tipado estático opcional. Un superconjunto es un lenguaje que incluye todas las características de otro lenguaje, además de características adicionales. Es decir, todo código JavaScript válido es también TypeScript válido. Antes de ejecutarse, el código TypeScript se convierte en JavaScript puro. 

Fuentes: 
- Material de la cátedra.
- https://www.epicweb.dev/what-is-a-superset-in-programming

### ¿Qué diferencias tiene con JavaScript?

Sistema de tipos: 
- JavaScript es dinámico ya que los tipos pertenecen a los valores y solo se conocen en tiempo de ejecución, mientras que TypeScript es estático ya que los tipos se declaran o se infieren y se comprueban al compilar.
Inferencia de tipos: Mecanismo por el que el compilador determina automáticamente el tipo de una variable a partir del valor asignado o del contexto, reduciendo lo que hay que escribir mientras se conservan los beneficios del tipado estático.

Cuando aparecen los errores de tipo: 
- En JavaScript aparecen cuando se ejecuta la línea, mientras que en TypeScript aparecen en el editor mientras se escribe y al compilar.

Donde se ejecuta: 
- En JavaScript se ejecuta en navegadores, Node.js, etc., y en TypeScript se ejecuta en los mismos lugares después de quitar los tipos.

Paso de build:
- En JavaScript no hace falta, mientras que en TypeScript se necesita tsc o un bundler (resultado de agrupar, procesar y combinar múltiples archivos de código en uno o varios archivos optimizados listos para ejecutarse en el navegador o en un entorno de producción), o un runtime que quita los tipos por si mismo.
tsc: compilador de TypeScript. Toma código TypeScript (archivos .ts o .tsx) y lo compila en código JavaScript (archivos .js) que puede ser ejecutado por un entorno de ejecución de JavaScript.
budler: 

Fuentes:
- https://keepcoding.io/blog/tipos-de-tipado-en-programacion/
- https://coddy.tech/docs/es/typescript/typescript-vs-javascript
- https://yuyoka.com/es/terms/programacion-inferencia-de-tipos
- https://medium.com/@seanbridger/typescript-basics-1-10-typescript-compiler-tsc-and-tsconfig-f9bf0134c5eb

### ¿Qué ventajas ofrece?

- Menos bugs en producción: el tipado estático detecta incongruencias en tiempo de desarrollo.
- Mejor DX (Developer Experience): autocompletado, inferencia de tipos, documentación inline y refactors más seguros en editores modernos.
- Mantenibilidad: los contratos (interfaces, tipos) mejoran la comunicación entre módulos y equipos.
- Escalabilidad: ideal para proyectos y bases de código grandes con múltiples contributors.
- Ecosistema compatible: convive con librerías JS existentes; se compila a JS estándar y soporta frameworks populares (React, Vue, Angular, Node.js).

Fuente: https://www.coderhouse.com/ar/coderlibrary/que-es-typescript-y-por-que-es-clave-en-desarrollo-web-moderno

### ¿Cuál es su versión actual?

La versión actual es TypeScript 7.0.2, que salió el 8 de julio de 2026. Es una reescritura completa del compilador en Go, unas 10 veces más rápida.

Fuente: 
- Material de la cátedra.

## Tema 2: Crear y ejecutar un proyecto

### ¿Cómo se instala TypeScript en un proyecto?

Se instala de forma local:

~~~
npm init -y
npm i -D typescript @types/node@24 tsx
~~~

La opción -D lo guarda en devDependencies, porque es una herramienta para desarrollar y no algo que el programa necesite para funcionar. Se recomienda la instalación local en lugar de la global porque cada proyecto queda con su propia versión, y quien clone el repositorio obtiene la misma con npm install.

Fuentes:
- Material de la cátedra.

### ¿Para qué sirve el archivo tsconfig.json?

Es el archivo de configuración del proyecto. Le indica a TypeScript qué archivos forman parte del proyecto (include), qué tan estricta debe ser la verificación de tipos (strict y opciones relacionadas) y cómo generar el JavaScript: la versión (target), el sistema de módulos (module) y la carpeta de salida (outDir). Sin este archivo, tsc no sabe qué compilar y muestra la pantalla de ayuda. Lo leen tsc y el editor.

Este comando crea un tsconfig con la configuración que recomienda el equipo de TypeScript.
~~~
npx tsc --init
~~~

Fuentes:
- Material de la cátedra.

### ¿Qué hace el comando tsc?

~~~
npx tsc
~~~

Cuando se ejecuta el comando tsc sin argumentos, este busca el tsconfig.json en la carpeta actual, toma los archivos indicados en include, verifica los tipos de todo el código y muestra los errores, y genera los archivos .js en la carpeta outDir.
~~~
npx tsc --noEmit
~~~
Con --noEmit verifica tipos, no genera archivos.
~~~
npx tsc --watch
~~~
Con watch recompila cada vez que se guarda un archivo.

Con ambos argumentos verifica tipos en vivo, sin generar archivos.

Fuentes: 
- Material de la cátedra.


### ¿Qué diferencia hay entre ejecutar un archivo con tsc, tsx y node?

tsc verifica tipos y genera JavaScript (compilar), tsx genera JavaScript sin verificar tipos (transpilar), node archivos.js solo borra las anotaciones de tipos (type stripping).

- tsc verifica los tipos y genera JavaScript, pero no ejecuta nada. Es la única que revisa los tipos.

- tsx ejecuta el archivo .ts directamente, sin compilarlo antes y sin verificar los tipos. Soporta toda la sintaxis de TypeScript, incluidos los enums. Se usa para desarrollar.

- node ejecuta el JavaScript ya compilado en la carpeta dist. Las versiones 24 y 26 pueden ejecutar un .ts borrando las anotaciones de tipos, pero no verifican, no generan código nuevo y no soportan sintaxis como los enums.

Se usa tsx para desarrollar, tsc para verificar y compilar, y node para ejecutar la versión compilada.

Fuentes:
- Material de la cátedra.

## Tema 3: Tipos básicos

### ¿Qué son los tipos string, number y boolean?

Son tipos primitivos. 
-string representa texto
-number representa cualquier número (entero o decimal)
-boolean representa un valor verdadero o falso.

### ¿Cómo se declara un array con tipo?

Para especificar el tipo de un array como [1, 2, 3], se puede usar la sintaxis number[]; esta sintaxis funciona para cualquier tipo (por ejemplo, string[]es un array de cadenas, etc.). También se puede ver escrito como Array<number>, que significa lo mismo.
El array solo acepta elementos de ese tipo. Si se necesita una cantidad fija de elementos con un tipo distinto en cada posición, se usa una tupla, por ejemplo [string, number].

Fuentes:
- https://www.typescriptlang.org/docs/handbook/2/everyday-types.html

### ¿Qué es un tipo unión?

El sistema de tipos de TypeScript permite crear nuevos tipos a partir de los existentes mediante operadores.
Un tipo de unión es un tipo formado por dos o más tipos, que representan valores que pueden ser cualquiera de esos tipos. Se refiere a cada uno de estos tipos como los miembros de la unión.
Es decir, permite que un valor sea de uno u otro tipo. Se escribe separando los tipos con |, por ejemplo string | number. Para usar métodos propios de uno de los tipos primero hay que comprobar cuál es, por ejemplo con typeof.

Fuentes: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types

### ¿Por qué se recomienda evitar any?

Con any TypeScript no valida, por lo que todo parece que funciona, pero cuando se cambia el tipo de dato puede causar errores y estos se muestran recien al ejecutar. Usando unknown cuando no se conoce el tipo de un valor, por ejemplo los datos que llegan de una API, TypeScript obliga a validar el tipo de datos antes de usarlo, librando de errores y haciendo el código más seguro.

Ejemplo en código: src/03-tipos-basicos.ts

## Tema 4: Funciones

Una función de TypeScript es una función de JavaScript con tipos en sus parámetros y, opcionalmente, en su valor de retorno. Cada parámetro lleva una anotación, el tipo de retorno va después de la lista de parámetros y el compilador comprueba cada llamada contra ambos.

Fuentes: 
- https://coddy.tech/docs/es/typescript/functions

### ¿Cómo se indican los tipos de los parámetros?

Cada parámetro se escribe name: Type. Con strict, que en TypeScript 7 está activado por defecto. En la práctica se anotan todos los parámetros de una función independiente.
Cualquier tipo sirve como tipo de parámetro: primitivos, arrays, tipos objeto, uniones, otras funciones.

~~~
function saludar(nombre: string, edad: number) {
  return `Hola ${nombre}, tienes ${edad} años.`;
}
~~~

Fuentes: 
- https://coddy.tech/docs/es/typescript/functions

### ¿Cómo se indica el tipo de retorno?

El tipo de retorno va después del paréntesis de cierre: function f(): Type. Es opcional. Sin él, TypeScript infiere el tipo a partir de cada return del cuerpo.

~~~
function sumar(a: number, b: number): number {
  return a + b;
}
~~~

Fuentes: 
- https://coddy.tech/docs/es/typescript/functions

### ¿Qué es un parámetro opcional?

Un parámetro opcional significa que no es necesario proporcionar un valor para esos parámetros al llamar a la función.

Para hacer un parámetro opcional, se agrega un signo de interrogación (?) después del nombre del parámetro.

~~~
function saludar(nombre: string, edad?: number): void {
    if (edad) {
        console.log(`Hola ${nombre}, tienes ${edad} años.`);
    } else {
        console.log(`Hola ${nombre}.`);
    }
}
~~~

Fuentes: 
- https://www.luisllamas.es/typescript-parametros-funciones/

### ¿Qué es un parámetro por defecto?

Un parámetro por defecto significa que si no se proporciona un valor para un parámetro, se utilizará el valor por defecto especificado.

Para asignar un valor por defecto a un parámetro, se utliza el operador de asignación (=) después del tipo de dato.

~~~
function saludar(nombre: string, edad: number = 18): void {
    console.log(`Hola ${nombre}, tienes ${edad} años.`);
}
~~~

Fuentes: 
- https://www.luisllamas.es/typescript-parametros-funciones/

Ejemplo en código: 


## Tema 5: Interfaces y type

En TypeScript hay dos opciones para definir tipos: type e interfaces.

Para describir la forma de un objeto, interface y type hacen el mismo trabajo, y los valores de uno se pueden asignar al otro cuando las formas coinciden. La diferencia está en que type puede nombrar cosas que una interfaz no puede (uniones, tuplas, tipos calculados), y una interfaz puede hacer algunas cosas que un alias de tipo no puede (fusionarse).

Fuentes: 
- https://coddy.tech/docs/es/typescript/interface-vs-type

### ¿Qué es una interfaz y para qué sirve?

Las Interface son una herramienta que permite definir la estructura y el comportamiento de un objeto, especificando los nombres y los tipos de sus propiedades y métodos.

Las clases pueden implementar este interface (en este caso, deben definir todas las variables y métodos que incluya el interfaz).

Para declarar una interfaz, se utiliza la palabra clave interface seguida del nombre de la interfaz y las propiedades y métodos que queremos definir.

~~~
interface Persona {
  nombre: string;
  edad: number;
  saludar(): void;
}
~~~

Fuentes:
- https://www.luisllamas.es/interfaces-en-typescript/

### ¿Qué es un type?

Un type es una palabra clave que se puede usar para definir la estructura de los datos. Los tipos básicos incluyen: string, boolean, number, array, tuple, enum y tipos avanzados.

~~~
type MyNumber = number;
type User = {
  id: number;
  name: string;
  email: string;
}
~~~

Fuentes: 
- https://blog.logrocket.com/types-vs-interfaces-typescript/

### ¿Cómo se declara una propiedad opcional?

Para declarar una propiedad opcional se debe agregar un signo de interrogación (?) justo después del nombre de la propiedad.

~~~
interface Usuario {
  nombre: string;
  edad?: number;
}
~~~

### ¿Cuándo conviene usar cada uno?

- interface se usa cuando se esté definiendo la estructura de un objeto y clases

- type se usa cuando se necesite uniones (|), intersecciones (&), tipos literales ("ADMIN" | "USER"), alias de tipos primitivos, tuplas o lógica avanzada de tipos.

Fuentes:
- Material de la cátedra.

## Tema 6: Enums y tipos literales

### ¿Qué es un enum?

Un enum es una característica de TypeScript que permite definir un conjunto de valores constantes bajo un mismo nombre.

Para definir un enum, se utiliza la palabra clave enum seguida del nombre del enum y un bloque de llaves que contiene los valores del enum.

~~~
enum NombreEnum {
    VALOR1,
    VALOR2,
    VALOR3
}
~~~

Los valores del enum son automáticamente asignados a números enteros, comenzando desde 0.

- enums numéricos: se pueden personalizar los valores numéricos asignados a cada miembro del enum.

~~~
enum Estado {
    Inactivo = 0,
    Activo = 1,
    Pausado = 2
}
let estadoActual: Estado = Estado.Activo;
console.log(estadoActual);
~~~

- enums de string: se pueden definir enums de string, donde cada miembro del enum se asigna a una cadena de texto.

~~~
enum Color {
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul"
}
let colorFavorito: Color = Color.Verde;
console.log(colorFavorito);
~~~

Fuentes: 
- https://www.luisllamas.es/typescript-enums/

### ¿Qué es un tipo literal?

Los tipos literales son tipos que permiten definir variables con valores específicos y prefijados en lugar de tipos amplios como string o number.
El motivo principal es permitir un mayor control y seguridad sobre los valores que puede tomar una variable, limitando las opciones disponibles.

- tipos literales de cadena: permiten definir una variable que solo puede tener uno de varios valores específicos de cadena.

~~~
type Direccion = "norte" | "sur" | "este" | "oeste";

let direccion: Direccion;

direccion = "norte"; // Correcto
direccion = "sur";   // Correcto
// direccion = "noreste"; // Error: El tipo '"noreste"' no se puede asignar al tipo 'Direccion'.
~~~

- tipos literales numéricos: permiten que una variable tenga solo ciertos valores numéricos específicos.

~~~
type UnoADiez = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

let numero: UnoADiez;

numero = 1;  // Correcto
numero = 5;  // Correcto
// numero = 11; // Error: El tipo '11' no se puede asignar al tipo 'UnoADiez'.
~~~

Fuentes:
- https://www.luisllamas.es/typescript-literales/

### ¿En qué se parecen y en qué se diferencian?

Entre sus aspectos en común se encuentra que:
- Ambos permiten definir un grupo específico y cerrado de opciones permitidas para una variable o parámetro.
- Ambos ayudan a evitar errores o valores inválidos en tiempo de desarrollo.

Entre sus aspectos que hacen que se diferencien entre sí se encuentra que:
- Los enum generan un objeto real en JavaScript tras la compilación, mientras que los tipos literales desaparecen por completo al compilar, sirviendo únicamente para que el editor muestre errores durante el desarrollo sin añadir peso al código final.
- Los enum permiten la búsqueda inversa, lo que significa que en variaciones numéricas se puede obtener el nombre de la clave pasando su valor, mientras que los tipos literales usan valores primitivos directos (cadenas o números), por lo que no se necesita importar un objeto de TypeScript para asignarles un valor.
- Los enum se comportan como variables en tiempo de ejecución, permitiendo la interacción con ellos mediante métodos como Object.keys() o Object.values(), mientras que los tipos literales aceptan texto directo, por lo que, por ejemplo, si una API envía "ADMIN", se lo puede asignar directamente a la variable sin transformar nada. Con un enum, se debería usar la sintaxis del objeto (Rol.Admin) para validar el valor.

### ¿En qué situaciones se puede usar cada uno?

- Se debe usar enums siempre que se necesite representar un conjunto fijo y logicamente cerrado de constantes que requiera existir en tiempo de ejecución. Es decir, conjuntos de datos donde se conocen todos los valores posibles en tiempo de compilación. En otras palabras, deberían usarse en situaciones donde existan valores distintos que puedan considerarse constantes.

Conviene evitar las enumeraciones al trabajar con conjuntos de valores extensos o de tamaño variable. Utilizar una enumeración puede no ser la mejor opción si los valores que se van a representar provienen de una fuente de datos externa.

~~~
enum Days {
  Sunday = 1,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday
}
~~~

- Se deben utilizar cuando se necesita restringir una variable, propiedad o parámetro a un grupo exacto de valores primitivos (strings o números), pero no se requiere la infraestructura de un objeto en tiempo de ejecución. Son ideales para validar datos externos de forma directa e interactuar con texto plano de APIs.

~~~
type CardinalDirection = "North" | "South" | "East" | "West";
let heading: CardinalDirection = "North";
~~~

Fuentes:
- https://blog.logrocket.com/typescript-enums-vs-types/