//write a function that reverses the digits of an integer. If the the intger is negative, the reversed integer should also be negative.

var reverse = function(x) {
    let rev = 0;
    let sign = x < 0 ? -1 : 1; // Determine the sign of the input number
    x = Math.abs(x); // Work with the absolute value of the number

    while (x > 0) {
        let rem = x % 10; // Get the last digit
        rev = rev * 10 + rem; // Append the last digit to the reversed number
        x = Math.floor(x / 10); // Remove the last digit from the original number
    }

    rev *= sign; // Apply the original sign to the reversed number

    // Check for overflow and return 0 if it occurs
    if (rev < -Math.pow(2, 31) || rev > Math.pow(2, 31) - 1) {
        return 0;
    }

    return rev;
};

let num = -123;
let result = reverse(num);
console.log(result); // Output: -321


// Leetcode solution
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let rev = 0;

    while (x !== 0) {
        let last = x % 10;
        x = Math.trunc(x / 10);

        rev = rev * 10 + last;

        if (rev > 2147483647 || rev < -2147483648) {
            return 0;
        }
    }

    return rev;
};