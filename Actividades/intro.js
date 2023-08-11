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

