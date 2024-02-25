// last item of array
const lastItem = arr => arr[arr.length - 1];

// Check if all array items are the same
const allSame = arr => arr.every(val => val === arr[0]);

// Remove duplicate items in array
const deduplicate = arr => [...new Set(arr)];

// Check if array has a value
const hasValue = arr => arr.includes("Value");