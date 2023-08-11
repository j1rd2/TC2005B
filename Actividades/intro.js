// variables, constantes, consola (log, info, warn, error, assert)

//Variable decalration with var
var best_seller = "Barbie";

//Variable decalration with let (moder)
let best_movie = "Oppenheimer";

//Print the best movie variable
console.log(best_movie);

//Declare variables with cons
const price = 50;
console.log(price);

// Console messages

console.error("This is an error message");
console.warn("This is a warning");
console.info("This is an info message");
console.assert(price === 55); // assert continue the execution if the value is true

// = Assign a value
// == Equals to
// === strictly equals to

// Alcance de las variables


if(price > 50) {
    var answer = "Too expensive";
    console.log(answer)
} else {
    var answer = "It's okay"
    console.log(answer);
}

// Var lives inside and outside the function/loop/etc...
for (var i = 1; i <= 10; i++){
    console.log(i);
}
console.log(i)

// let lives just inside the function/loop/etc...It makes it more safe to protect info
for(let j = 1; j <= 5; j++) {
    console.log(j);
}
// console.log(j); 

// alert, prompt, confirm

alert("Hello World");

const is_hungry = confirm("Tienes hambre");
console.log(is_hungry);

const nombre = prompt("Your name");
console.log("Hello" + nombre);

// Functions

function vamonos() {
    console.log("Vamonos");
}

vamonos();

//Function with no name (anonymous function)

() => {
    console.log("This is an anonymous function");
}

// => Opertador

// You can call a anonymous functions by two ways

// In a function
// JS let you save a anonymous function in a normal function

const anonymous_function = () => {
    console.log("This is a anonymous function");
}

anonymous_function();

// To manipulate HTML with JS we use the id tag

const Oppenheimerid = document.getElementById("Oppenheimer");

console.log(Oppenheimerid);

const show_rating = () => {
    const rating = "10/10 Excelente";
    Oppenheimerid.innerHTML = rating;
    Oppenheimerid.onclick = show_name;
}

const show_name = () => {
    const nombre = "Oppenheimer";
    Oppenheimerid.innerHTML = nombre;
    Oppenheimerid.onclick = show_rating;
}

Oppenheimerid.onclick = () =>  {
    console.log("You click on Oppenheimer");
    show_rating();
    Oppenheimerid.onclick = show_name;
}

// Arrays

const arreglo = ["Element"] // Array size 1 that contains "Element"

arreglo.push("New elemeng"); // Method push to add a new element as a pile

arreglo[10] = "Another one"; // Crate new slots but they are empty exept the 10

// Arrays in JS are also dictionaries (associative arrays)

arreglo["Eleven"] = "Other one";

// Through arrays

// Traditional

for (let i = 0; i < arreglo.length; i++) {
    console.log(arreglo[i]);
}

// Alternative way

for (let position in arreglo) { // Show the value in position
    console.log(position)
}

for (let value of arreglo) { // Show the value 
    console.log(value)
}

// Objects (json Java Script Object Notation)

const objeto = {
    atribute_1: "value_1",
    atribute_2: "value_2",
    atribute_3: "value_3"
}

console.log(objeto);
console.log(objeto.atribute_1);