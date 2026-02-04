// Find the second largest number from an array

function secondLargest() {
    let firstLargest = -Infinity
    let secondLargest = -Infinity
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = arr[i];
        }
        else if (arr[i] > secondLargest) {
            secondLargest = arr[i];
            
        }
    }
    return secondLargest;
}

let arr = [1, 2, 3, 7, 12, 4, 5, 55]

let res = secondLargest(arr);

console.log(res);


// Find the second largest number from an array but if array have less then two elements.

function secondLargest(arr1) {
    if (arr1.length < 2) {
        return "array should have at least 2 elemnets"
    }

let firstLargest = -Infinity
let secondLargest = -Infinity
    
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > firstLargest) {
        secondLargest = firstLargest;
        firstLargest = arr1[i];
    }
    else if (arr1[i] > secondLargest) {
        secondLargest = arr1[i];

    }
}
        return secondLargest;
}
 
let arr1 = [1, 2, 3, 7, 12, 4, 5, 55]

let res1 = secondLargest(arr1);
console.log(res1);



// Find the second largest number from an array but if array have less then two elements.

function secondLargest(arr2) {
    if (arr2.length < 2) {
        return "array should have at least 2 elemnets"
    }

let firstLargest = -Infinity
let secondLargest = -Infinity
    
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] > firstLargest) {
        secondLargest = firstLargest;
        firstLargest = arr2[i];
    }
    else if (arr2[i] > secondLargest && arr2[i] != firstLargest) {
        secondLargest = arr2[i];

    }
}
        return secondLargest;
}
 
let arr2 = [1, 2, 3, 7, 12, 4, 5, 55,44, 43, 55]

let res2 = secondLargest(arr2);
console.log(res2);