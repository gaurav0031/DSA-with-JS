//Loop in Loop
for (let i =0; i<3; i++){
    for (let j =0; j<3; j++){
        console.log(`i: ${i}, j: ${j}`);
    }
}

//Loop in Loop with condition
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < i; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}

//Loop in Loop with condition and break statement
for (let i = 0; i < 5 ; i++) {
    for (let j = 0; j <= i; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}

//Loop in Loop with condition and break statement
for (let i = 0; i < 5; i++) {
    for (let j = i; j > 0; j--) {
        console.log(`i: ${i}, j: ${j}`);
    }
}

//Loop in Loop with condition and break statement
for (let i = 0; i < 5; i++) {
    for (let j = i; j >= 0; j--) {
        console.log(`i: ${i}, j: ${j}`);
    }
}

//Loop in Loop in reverse order
for (let i = 5; i > 0; i--) {
    for (let j = 0; j < i; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}