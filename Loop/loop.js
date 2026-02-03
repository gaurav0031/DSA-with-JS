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