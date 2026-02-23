// Palindrome is a number that reads the same backward as forward, such as 121 or 12321.

let n = 12321;
let res = 0;

function isPalindrome(){
    while(n>0){
        let rem = n%10; // 12321%10 = 1 , 1232%10 = 2 , 123%10 = 3 , 12%10 = 2 , 1%10 = 1
        res = res*10 + rem; //0*10 + 1 = 1 , 1*10 + 2 = 12 , 12*10 + 3 = 123 , 123*10 + 2 = 1232 , 1232*10 + 1 = 12321
        n = Math.floor(n/10); //12321/10 = 1232.1 => 1232
    }

}
isPalindrome();
if(res == 12321){
    console.log("Palindrome");
}
else{
    console.log("Not a Palindrome");
}