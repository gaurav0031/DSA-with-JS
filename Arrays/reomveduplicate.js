//Write a function that removes the duplicates from a sorted array in non-decreasing order.We don't a new array to be created, we need to do this in place with O(1) extra memory. Return the length of the array after duplicates have been removed.

var removeDuplicates = function(nums) {
    if (nums.length === 0) {
        return 0; // If the array is empty, return 0
    }

    let uniqueIndex = 1; // Start from the second element

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) { // Check if the current element is different from the previous one
            nums[uniqueIndex] = nums[i]; // Move the unique element to the uniqueIndex position
            uniqueIndex++; // Increment the uniqueIndex
        }
    }

    return uniqueIndex; // Return the length of the array with unique elements

}