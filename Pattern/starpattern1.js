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
//Star Pattern n = 5
let m = 5;
for (let i = 0; i < m; i++){
    let row = "";
    for (let j = 0; j < i; j++){
        row = row + "*";
    }
    console.log(row);
}

//Star Pattern n = 4
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