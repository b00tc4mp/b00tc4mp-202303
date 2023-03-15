//Para hacer comentario
/* Esto también para hacer comentarios */
//Crear valores
var a;
//Asignar un número a un valor
a = 7;
var b;
b = a; //Para igualar valores el segunda va primero
var c = 9;
//Asignación de palabras a una variable
var myName = "Manuel David";
//Otra de formade poner variables que solo se pude poner una vez
let d = "Bocadillo de chorizo";
//Una variable de solo lectura que no debe cambiar, se pone entera en mayúsculas
const nameDog = "Milka";
//Se pueden usar sumas y otras operaciones para definir una variable
const numberOfKissForVentura = 100 + 100;
//Poner ++ detrás de una variable es como sumarle 1, igual con --.
c++;
c--;
//Para variables decimales, poner el número en decimal
var myDecimal = 3.5;
//Se pueden multiplicar decimales
var myDecimal2 = 2.5 * 3.5;
//Con el elemento % se saca el resto de una división, es util para saber si los números son pares o impares.
const remainder = 11 % 3; //El resto sería 2.
//Para sumar valores, igual con restas u otras operacines.
var e = 1;
e += 2; //Ahora vale 3.
//Si ponemos la barras esta \ invertida delante de un elemento como comillas las pondrá ignorando su significado
const myStr = 'I am a "double quoted" string inside "double quotes".'; //Se leería "I am a "double quoted" string inside "double quotes".
//Se pueden combinar comilas simples y comillas dobles par aque node error.
//Importante conocer las Escape Secuences(\n,\t...)
const myStr1 = "FirstLine\n\t\\SecondLine\nThirdLine";
//También se pude utlizar + para unir cadenas.
const myStr2 = "This is the start. " + "This is the end.";
//También se pude utilizar += para unir cadenas.
//Se puden construir cadenas metiendo la variable en medio
const myName = "Manuel David ";
const myStr3 = "My name is" + myName + "and I am well";
const someAdjective = "cool, funny and hard";
let myStr4 = "Learning to code is ";
myStr4 += someAdjective;
//El .length me da el número de caracteres que tiene mi variable string
const lastName = "Lovelace";
lastNameLength = lastName.length;
/* Con los corchetes "[]" puede sacar el primer valor de una string, también pudes
obtener otro valor de la cadena poniendo otros números teniendo en cuenta que empieza desde 0 */
const lastName2 = "Lovelace";
firstLetterOfLastName = lastName2[0]; /* El valor que tiene es "L" */
/* No se puede cambiar el valor de la cadena con con los corchetes, debes de reasignar un valor a esa cadena */
let myStr5 = "Jello World";
myStr5 = "Hello World";
/* También se puede utilzar para encontrar la letra del final con esto,
u otra letra empezando por el final, en este caso la primera por el final se obtiene -1 */
const lastName3 = "Lovelace";
const lastLetterOfLastName = lastName3[lastName.length - 1];
/* Formas de crear concataciones de cadena */
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";
const wordBlanks =
  "My " +
  myNoun +
  " is very " +
  myAdjective +
  " moreover it " +
  myVerb +
  " " +
  myAdverb;
/* Lo de arriba la crea y lo de abajo me la muestra en pantalla */
const str1 = "Hello";
const str2 = "World";
console.log(str1.concat(" my great Ventura, enjoy of the ", str2));

/* Explicación de var, let y const. */
var variable =
  "hola"; /* VAR Asigna el valor en el espacio de memoria global, no lo guarda en ningún epacio de memoria completo */
console.log(variable); // expected output: "hola"
{
  var variable = "adios";
  console.log(variable); // expected output: "adios"
}

console.log(variable); // expected output: "adios"
/* LET Si asigna el valor a un espacio de memoria concreto, como por ejmplo algo entre llaves"{}", lo busca dentro de ese espacio. */
let variable = "hola";
console.log(variable); // expected output: "hola"
variable = "23";
{
  let variable = "adios";
  console.log(variable); // expected output: "adios"
}

console.log(variable); // expected output: "23"
/* Con CONST además de establecer la variable en un espacio de memoria no se puede sobreescribir */
const variable = "hola";
console.log(variable); // expected output: "hola"
{
  const variable = "adios";
  console.log(variable); // expected output: "adios"
}

variable = "23"; // Error

console.log(variable); // expected output: "23"

/* Puedo poner entre corchetes una variable para poner string y number, 
también puedes poner entre corchetes otros corchetes */
const myArray = ["my dog", 4];
/* Puedo darle un valor a una variable indicando en que posición del array se encuentra */
const myData = myArray[0]; /* Ahora myData vale "my dog" */
/* Para modificar variables  */
myArray[0] = 45; /* Ahora el primer valor de myArray es 45 */
/* En el caso de que tengamos array más complejas, los sucesivos corchetes te hacen elegir dentro del array */
const myArray2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData2 = myArray2[2][1];
/* Para añadir elementos al final del array usamos .push */
const myArray3 = [
  ["John", 23],
  ["cat", 2],
];
myArray3.push(["dog", 3]); /* Ahora se lee con el elemento nuevo al final */
/* Para eliminar el último elemento del array se utiliza .pop */
const myArray4 = [
  ["John", 23],
  ["cat", 2],
];
const removedFromMyArray = myArray4.pop();
/* Con .shift eliminamos el primer elemento del array */
const myArray5 = [
  ["John", 23],
  ["dog", 3],
];
const removedFromMyArray2 =
  myArray5.shift(); /* Ahora ["John", 23] está borrado */
/* Para añadir array al principio de otra se usa .unshift */
const myArray6 = [
  ["John", 23],
  ["dog", 3],
];
myArray6.shift();
myArray6.unshift(["Paul", 35]);
/* Se puden crear array con valores string y number */
const myList = [["Chocolate Bar", 15]];
/* Las funciones hacen que se ejecute todo el código de dentro una vez las llamas */
function reusableFunction() {
  console.log("Hi World");
}
reusableFunction(); /* En la consola se vería "Hi World" */
/* Puedes crear function con varios parametros que se relacionan entre si cuando los llamas */
function functionWithArgs(param1, param2) {
  console.log(param1 + param2);
}
functionWithArgs(1, 2); /* En consola nos sale 3 */
functionWithArgs(7, 9); /* En consola nos sale 16 */
/* La función con el elemento return nos devolverá el número metido cuando se le aplica la operación definida en la función */
function timesFive(num) {
  return num * 5;
}
timesFive(5); /* Nos da 25 */
timesFive(2); /* Nos da 10 */
timesFive(0); /* Nos da 0 */

/* Las variables declaradas dentro de la función no existen fuera, en el espacio global */
function myLocalScope() {
  var myVar = "dog";
  console.log("inside myLocalScope", myVar);
}
myLocalScope(); /* Al llamar a la función se vería "inside myLocalScope dog" */
/* Una función sin valor return devolverá el valor "undefined" */
/* Podemos cambiar el valor de una variable a través de una función */
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}
processed = processArg(7); /* Se aplica la operación y nos da 2 */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* Contador de cartas de blackjack con switch*/
let count = 0;

function cc(card) {
  // Only change code below this line
  switch (card) {
    case 2:
      count++;
      break;
    case 3:
      count++;
      break;
    case 4:
      count++;
      break;
    case 5:
      count++;
      break;
    case 6:
      count++;
      break;
    case 10:
      count--;
      break;
    case "J":
      count--;
      break;
    case "Q":
      count--;
      break;
    case "K":
      count--;
      break;
    case "A":
      count--;
      break;
  }
  if (count <= 0) {
    return count + " Hold";
  } else {
    return count + " Bet";
  }
  // Only change code above this line
}

cc(2);
cc(3);
cc(7);
cc("K");
cc("A");

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* Contador de cartas de blackjack con else...if */
let count2 = 0;

function cc(card) {
  // Only change code below this line
  if (card === 2 || card === 3 || card === 4 || card === 5 || card === 6) {
    count2++;
  } else if (
    card === 10 ||
    card === "J" ||
    card === "Q" ||
    card === "K" ||
    card === "A"
  ) {
    count2--;
  }
  if (count2 <= 0) {
    return count2 + " Hold";
  } else {
    return count2 + " Bet";
  }
  // Only change code above this line
}

cc(2);
cc(3);
cc(7);
cc("K");
cc("A");

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const lookup = {
  alpha: "Adams",
  bravo: "Boston",
  charlie: "Chicago",
  delta: "Denver",
  echo: "Easy",
  foxtrot: "Frank",
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* Comprobación de propiedades en objetos */
function checkObj(obj, checkProp) {
  // Only change code below this line
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  }
  return "Not Found";
  // Only change code above this line
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* Acceso a objetos anidados */
const myStorage = {
  car: {
    inside: {
      "glove box": "maps",
      "passenger seat": "crumbs",
    },
    outside: {
      trunk: "jack",
    },
  },
};

const gloveBoxContents =
  myStorage.car.inside["glove box"]; /* Ahora tiene el valor "maps" */
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* Pruebas para el Record Collection */
function updateRecords(records, id, prop, value) {
  if (prop.hasOwnProperty(value)) {
    delete records.id
      .prop; /* Con esta función hago que cuando ya exista un valor para el prop se
  elimine el prop que se de en la función */
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* PROYECTO DE ALBUM DE DISCOS */
const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (prop !== "tracks" && value !== "") {
    records[id][prop] = value;
  }
  if (prop === "tracks" && !records[id]["tracks"]) {
    records[id][prop] = [value];
  }
  if (prop === "tracks" && value !== "") {
    records[id][prop].push(value);
  }
  if (value === "") {
    delete records[id][prop];
  }
  return records;
}

updateRecords(recordCollection, 5439, "artist", "ABBA");
/* PROYECTO DE ALBUM DE DISCO CORREGIDO Y PERFECTO SEGÚN EL TUTORIAL */
function updateRecords(records, id, prop, value) {
  if (value === "") {
    delete records[id][prop];
  } else if (prop === "tracks") {
    records[id][prop] = records[id][prop] || [];
    records[id][prop].push(value);
  } else {
    records[id][prop] = value;
  }
  return records;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* Ejemplo de loop(for) de número pares */
function contarNumeros(array) {
  let total = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      total++;
    }
  }
  return total;
}
console.log(
  contarNumeros([87, 78, 34, 35, 98, 8347, 7254, 2957, 7, 7, 8])
); /* La consola me da 5 */
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* Ejemplo de función recursiva */
function sum(arr, n) {
  // Only change code below this line
  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
  // Only change code above this line
}
sum(
  [2, 3, 4, 5],
  3
); /* El resultado es 9, porque se suman los 3 primeros valores */
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* LISTA DE CONTACTOS HECHA CON FOR */
// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i]["firstName"] !== name && i === contacts.length - 1) {
      return "No such contact";
    } else if (contacts[i]["firstName"] === name && !contacts[i][prop]) {
      return "No such property";
    } else if (contacts[i]["firstName"] === name && contacts[i][prop]) {
      return contacts[i][prop];
    }
  }
  // Only change code above this line
}
lookUpProfile("Akira", "likes");
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* LISTA DE COBTACTOS HECHA CON WHILE */

function lookUpProfile(name, prop) {
  let i = 0;
  let shouldContinue = true;
  let response = "No such contact";
  // Only change code below this line
  // cuando no quieras dar más vueltas cambias la variable a false, por otro lado es más corrrecto un do while porque siempre querremos correr una vez el código
  do {
    if (contacts[i]["firstName"] === name && !contacts[i][prop]) {
      response = "No such property";
      shouldContinue = false;
    } else if (contacts[i]["firstName"] === name && contacts[i][prop]) {
      response = contacts[i][prop];
      shouldContinue = false;
    }
    i++;
  } while (i < contacts.length && shouldContinue === true);
  // Only change code above this line
  return response;
}

lookUpProfile("Akira", "likes");
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////7
/* EJEMPLO CON WHILE UTIIZANDO EL CONTACTS.LENGTH COMO CONDICIÓN DE PARADA */
function lookUpProfile(name, prop) {
  let i = 0;
  let response = "No such contact";
  // Only change code below this line
  // cuando no quieras dar más vueltas cambias la variable a false, por otro lado es más corrrecto un do while porque siempre querremos correr una vez el código
  do {
    if (contacts[i]["firstName"] === name && !contacts[i][prop]) {
      response = "No such property";
      i = contacts.length;
    } else if (contacts[i]["firstName"] === name && contacts[i][prop]) {
      response = contacts[i][prop];
      i = contacts.length;
    }
    i++;
  } while (i < contacts.length);
  // Only change code above this line
  return response;
}

lookUpProfile("Akira", "likes");
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* Función recursiva, se llama a si misma */
function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countdown(n - 1);
    countArray.unshift(n);
    return countArray;
  }
}
debugger;
console.log(countdown(5)); /* Esto nos dará [5, 4, 3, 2, 1] */
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* Función recursiva que hace una lista de números acotada */
function rangeOfNumbers(startNum, endNum) {
  if (startNum === endNum) {
    return [endNum];
  } else {
    const countArray = rangeOfNumbers(startNum, endNum - 1);
    countArray.push(endNum);
    return countArray;
  }
}
debugger;
console.log(rangeOfNumbers(1, 5)); /* Esto nos dará [1, 2, 3, 4, 5] */
/* Para entenderla usa el debugger */
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////7
function repeatStr(n, s) {
  if (n <= 0) return "";
  else if (n === 1) return s;
  else {
    const charge = repeatStr(n - 1, s);
    return charge + s;
  }
}
debugger;
console.log(repeatStr(4, "hello"));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
