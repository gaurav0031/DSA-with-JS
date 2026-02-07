//Star Pattern n = 4

let n = 4;
for (let i = 0; i < n; i++){
    let row = "";
    for (let j = 0; j < n; j++){
        row = row + "*";
    }
    console.log(row);
}

//question 2
// *
// **
// ***
// ****
//Star Pattern m = 5
let m = 5;
for (let i = 0; i < m; i++){
    let row = "";
    for (let j = 0; j < i; j++){
        row = row + "*";
    }
    console.log(row);
}

//Star Pattern a = 4
let a = 4;
for (let i = 0; i < a; i++){
    let row = "";
    for (let j = 0; j < i+1; j++){
        row = row + "*";
    }
    console.log(row);
}


// star pattern n = 5
// 1
// 12
// 123
// 1234
// 12345

let b = 4;
for (let i = 0; i < b; i++){
    let row = "";
    for (let j = 0; j < i+1; j++){
        row = row + (j+1);
    }
    console.log(row);
} 

//star pattern n = 5
//12345
//1234
//123
//12
//1

let c = 5;
for (let i = 0; i < c; i++){
    let row = "";
    for (let j = 0; j < c-i; j++){
        row = row + (j+1);
    }
    console.log(row);
}

// star pattern b = 5

let d = 5;
for (let i = 0; i < d; i++){
    let row = "";
    for (j = 0; j< d-i; j++){
        row = row + "*"
    }
    console.log(row);
}

//star pattern x = 5
//    *
//   **
//  ***
// ****
//*****

let x = 5;
for (let i = 0; i < x; i++){
    let row = ""
    for (let j = 0; j < x - (i + 1); j++) {
        row = row + " ";
    }
        for (let k = 0; k < i+1; k++){
            row = row + "*"
        }
   
    console.log(row);
}
