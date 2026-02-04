//Write a funtction that seaches an element in an array and returns its index.


function searchElement(arr, x ) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == x) {
            return i;
        }
        
    }
return -1;

}
let arr = [1, 2, 3, 4, 5, 6, 7];

let res = searchElement(arr, 4);


console.log(res);

// Write a function that counts the negative numbers in an array

function findNegativeNo(arr) {
    let count = 0;
    for (let i = 0; i < arr1.length; i++){
        if (arr1[i] < 0) {
            count = count + 1;
        
        }
    }
    return count;
      
}

let arr1 = [-2, -4, -6, 0, -8, -2, 2, 5];

let neg = findNegativeNo(arr1);

console.log(neg);


// Write a number that returns a largest in an array

function findLargest(arr2) {
    let largestNumber = -Infinity;
    for (let i = 0; i < arr2.length; i++){
        if (arr2[i] > largestNumber){
            largestNumber = arr2[i]

        }
    }
    return largestNumber;
}


let arr2 = [2, 4, 5, 6, 8, 98];

let res1 = findLargest(arr2);

console.log(res1);


// Write a number that returns a smallest number in an array

function findSmallest(arr3) {
    let smallest = Infinity;
    for (let i = 0; i < arr3.length; i++){
        if (arr3[i] < smallest){
            smallest = arr3[i]

        }
    }
    return smallest;
}


let arr3 = [2, 4, 5, 6, 8, 98, -7, -5, -33]

let res3 = findSmallest(arr3);

console.log(res3);