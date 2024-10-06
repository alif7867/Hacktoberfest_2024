// JavaScript program to find the maximum number in an array

function findMax(arr) {
  // Check if the array is empty
  if (arr.length === 0) {
    return "Array is empty.";
  }

  // Initialize max with the first element
  let max = arr[0];

  // Iterate through the array
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

// Example usage
const numbers = [3, 7, 1, 9, 4, 5];
console.log("The maximum number in the array is:", findMax(numbers));
