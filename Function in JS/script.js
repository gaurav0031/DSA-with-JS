// Function in JS

function printHelloWorld() {
    console.log("Hello, World!");
}
printHelloWorld();

// Function with parameters

function greet(name) {
    console.log("Hello, " + name + "!");
}
greet("Alice");

// Function with return value

function add(a, b) {
    return a + b;
}
let sum = add(5, 10);
console.log("Sum:", sum);

// Arrow function

const multiply = (x, y) => x * y;
let product = multiply(4, 5);
console.log("Product:", product);

// Function expression

const divide = function(x, y) {
    return x / y;
};
let quotient = divide(20, 4);
console.log("Quotient:", quotient);

// Recursive function

function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
let fact = factorial(5);
console.log("Factorial:", fact);

// Immediately Invoked Function Expression (IIFE)

(function() {
    console.log("This is an IIFE!");
})();

// Function with default parameters

function power(base, exponent = 2) {
    return Math.pow(base, exponent);
}
let result = power(3);
console.log("Power:", result);

// Function with rest parameters

function sumAll(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
let total = sumAll(1, 2, 3, 4, 5);
console.log("Total Sum:", total);

// Callback function

function fetchData(callback) {
    setTimeout(() => {
        const data = "Sample Data";
        callback(data);
    }, 1000);
}

fetchData(function(data) {
    console.log("Fetched Data:", data);
}); 

// Async function

async function fetchAsyncData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Async Data");
        }, 1000);
    });
}

fetchAsyncData().then(data => {
    console.log("Fetched Async Data:", data);
});

// Function with try-catch

function safeDivide(x, y) {
    try {
        if (y === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return x / y;
    } catch (error) {
        console.error(error.message);
    }
}
let safeQuotient = safeDivide(10, 0);   

console.log("Safe Quotient:", safeQuotient);

// Funtion for voting eligibility

function canVote(age) {
    if (age < 0) {
        console.log("Invalid Input.");
    } else if (age >= 18) {
        console.log("Eligible to vote.");
    }
    else {
        console.log("Not eligible to vote.");
    }
}
canVote(20);
canVote(16);
canVote(18);

//Funtion to check even or odd

function checkEvenOdd(num){
    let rem = num % 2;
    if (rem == 0){
        console.log("Even Number");
    } else {
        console.log("Odd Number");
    }    

}
checkEvenOdd(7);
checkEvenOdd(12);
checkEvenOdd(0);
