- Tipado estático: asignación de tipos de datos durante la compilación del programa. El tipo de dato de una variable se define en tiempo de diseño y no puede cambiar durante la ejecución del programa. Ayuda a detectar errores en una etapa temprana y a mejorar la robustez del código. Ej. TypeScript.

- Tipado dinámico: permite que el tipo de dato de una variable se determine en tiempo de ejecución. Los lenguajes de programación con tipado dinámico son flexibles y permiten cambiar el tipo de dato de una variable durante la ejecución del programa. Sin embargo, esto puede llevar a errores difíciles de depurar si no se manejan con cuidado. Ej. JavaScript.

Paso de build: es un proceso automatizado que transforma el código fuente en JavaScript estándar y otros archivos listos para ejecutarse en un entorno de producción como un navegador web o un servidor Node.js

~~~
npm run build  # genera dist/03-tipos-basicos.js
~~~

- Compilar: traducir código de un lenguaje a otro.

~~~
npx tsc  # revisa los tipos y genera el JavaScript
~~~

- Transpilar: traducir entre dos lenguajes de nivel similar.

~~~
// TypeScript: const nombre: string = "texto";
// JavaScript: const nombre = "texto";
~~~

- NPX: herramienta incluida automáticamente con NPM al instalar Node.js que permite ejecutar paquetes sin instalarlos de forma global. A diferencia de NPM, que instala y gestiona paquetes de forma permanente, NPX los ejecuta temporalmente. Busca el paquete en node_modules, luego en las instalaciones globales y, si no lo encuentra, lo descarga, ejecuta y elimina.

- src: carpeta que contiene el código fuente, específicamente los archivos de TypeScript.

- dist: carpeta donde se guardarán los archivos de JavaScript que se generarán a partir de los archivos de TypeScript. Aparece recién al compilar con npm run build.

- tipo void: ausencia de un valor de retorno en una función. Se utiliza cuando una función realiza una acción o efecto secundario (como imprimir en la consola), pero no devuelve ningún dato útil.

~~~
function mostrar(mensaje: string): void {
  console.log(mensaje);
}
~~~

- Tiempo de ejecución (Runtime): Periodo en el que la aplicación se encuentra corriendo activamente en el navegador o servidor tras haber sido compilada. Un elemento que existe en tiempo de ejecución se traduce en código JavaScript real, consume memoria y puede ser manipulado o consultado mientras el usuario interactúa con el programa.

- Inferencia de tipos: es una función que permite al compilador de TypeScript deducir automáticamente el tipo de una variable o expresión. Esto significa que no es necesario especificar explícitamente el tipo de cada variable y expresión en el código.

~~~
const x = 10 ; 
const y = x + 2 ; 

console.log ( y); // 12
~~~

En este código, el compilador de TypeScript puede inferir que el tipo de xes number. Esto se debe a que xse le está asignando un valor numérico. El compilador también puede inferir que el tipo de yes number, porque yes el resultado de sumar dos números.

- Tipo unión: permite que una variable acepte valores de más de un tipo. Los tipos se separan con |, y para usar métodos propios de uno de ellos primero hay que comprobar de qué tipo es el valor.

~~~
let legajo: string | number = 1001;
~~~

- Type: palabra clave que permite darle un nombre propio a un tipo, para reutilizarlo en distintas partes del código. Puede representar una unión, un tipo literal o la forma de un objeto. Solo existe durante el desarrollo, al compilar se borra.

~~~
type Legajo = string | number;
~~~

- Tipo literal: tipo que solo acepta un valor exacto en lugar de cualquier valor de ese tipo. Combinado con una unión, limita una variable a una lista cerrada de opciones.

~~~
type Rol = "alumno" | "docente" | "admin";
~~~
