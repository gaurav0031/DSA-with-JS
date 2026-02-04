// Loops 

// For Loop
for (let i = 0; i < 10; i++) {
    console.log("Hello World");
} 

for (let i = 0; i <= 10; i++) {
    console.log("Hello World");
} 

for (let i = 3; i < 10; i++) {
    console.log("Hello World");
} 

for (let i = 2; i < 10; i=i+2) {
    console.log(i);
} 

for (let i = 5; i > 0; i--) {
    console.log("Hello World");
} 

//infinite loop
for (let i =1; i > 0 ; i++) {
    console.log("Hello World");
}

// Function in loop 

function greet() {
    console.log("Hello, World!");
}

for (let i = 0; i < 5; i++) {
    greet();
}

// How arrays work with loops

let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

let length = fruits.length;

for (let i=1; i<fruits.length; i++) {
    console.log(fruits[i]);
}

// While Loop

let i = 0;

while (i < 5) {
    console.log("hello");
    i++;
}

// Do-While Loop

let j = 0;

do {
    console.log("hello");
    j++;
} while (j < 5);

// Loop through an array using while loop

let colors = ["Red", "Green", "Blue", "Yellow"];
let index = 0;

while (index < colors.length) {
    console.log(colors[index]);
    index++;
}

// Loop through an array using do-while loop

let animals = ["Dog", "Cat", "Elephant", "Giraffe"];
let idx = 0;

do {
    console.log(animals[idx]);
    idx++;
} while (idx < animals.length);

