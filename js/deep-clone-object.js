// Make a deep copy of an object, without referencing the original
const deepClone = obj => JSON.parse(JSON.stringify(obj));