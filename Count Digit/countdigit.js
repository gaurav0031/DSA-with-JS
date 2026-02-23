//Write a function that returns the digit count of a number.

function countDigit(n){
    // Handle the case when n is 0, as it has 1 digit.
    if(n === 0){
        return 1;
    }
    n = Math.abs(n); // Handle negative numbers by taking the absolute value.
    let count = 0;
    while(n>0){

        n = Math.floor(n/10);
        count++;
    
    }
    return count;
}

let num = 12345;
let result = countDigit(num);
console.log(result);
