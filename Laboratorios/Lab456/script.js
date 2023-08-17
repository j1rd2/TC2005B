

// Pregunta 2

// Function to generate random numbers from 0 to 100
function randomNumbers() {
    return Math.floor(Math.random() * 100);
}

// Variables to store num1 and num2
var num1 = randomNumbers();
var num2 = randomNumbers();
var correctAnswer = num1 + num2; // Variable to verify the correct answer

var question2 = document.getElementById("question2"); //Get element by Id from index
question2.textContent = num1 + " + " + num2;

// Variables to get elemnts by Id from index
var answer2 = document.getElementById("answer2"); 
var button2 = document.getElementById("button2");
var result2 = document.getElementById("result2");

// Variable to measure time
var startTime = new Date().getTime();

// Function add to button2
button2.addEventListener("click", function() {
    var userAnswer2 = parseInt(answer2.value); 
    var endTime = new Date().getTime(); // Function to get time by Id from index
    var elapsedTime = (endTime - startTime) / 1000; // Variable to get the elapsed time

// Condition to verify if the answer is correcr
    if (userAnswer2 == correctAnswer) {
        result2.innerHTML = "Respuesta correcta!" + elapsedTime + "segundos";
    } else {
        result2.innerHTML = "Respuesta incorrecta :( ";
    }

});

// Ejercicio 3

// counter function
function contador(arr) {
    let negativos = 0;
    let ceros = 0;
    let mayoresCero = 0;
  
// For loop to go through array elements
    for (const num of arr) { 
      if (num < 0) { // Condition to verify if the counter can count negative numbers
        negativos++;
      } else if (num === 0) { // Condition to verify if the counter can count ceros
        ceros++;
      } else { // Condition to verify if the counter can count positive numbers
        mayoresCero++;
      }
    }
  
    return {
      negativos: negativos,
      ceros: ceros,
      mayoresCero: mayoresCero
    };
  }
  
// Array
  const arreglo1 = [-1, -3, 9, 1, 9, 5, -8]; 
  const resultado = contador(arreglo1);

// Console output
  console.log("El array es: " + arreglo1);
  console.log("Cantidad de números negativos:", resultado.negativos);
  console.log("Cantidad de ceros:", resultado.ceros);
  console.log("Cantidad de valores mayores a cero:", resultado.mayoresCero);

// Ejercicio 4

// average function
function promedios(matriz) { 
    const promediosArr = [];
  
    for (const fila of matriz) { // For loop to go through the array of arrays
      const suma = fila.reduce((acumulador, valor) => acumulador + valor, 0);
      const promedio = suma / fila.length;
      promediosArr.push(promedio);
    }
  
    return promediosArr;
  }
  
  const matrizNumeros = [
    [2, 4, 6],
    [1, 3, 5],
    [0, 0, 0]
  ];
  
  const promediosResultantes = promedios(matrizNumeros); // Call the function with the array as parameter
  console.log("Promedios por fila:", promediosResultantes);

// Ejercicio 5

// Function to get the reverse of a number  
function inverso(numero) { 
    const numeroComoString = numero.toString();
    const numeroInversoComoString = numeroComoString.split('').reverse().join('');
    const numeroInverso = parseInt(numeroInversoComoString, 10);
    return numeroInverso;
  }

// Note: parseInt is used to convert a character string in integer values
  
const numeroOriginal = 12345;
const numeroInverso = inverso(numeroOriginal);
console.log("Número inverso:", numeroInverso);

// Ejercicio 6
