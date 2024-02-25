// Truncate a string to a specific length. If string exceeds a certain length, truncate it and append "..."
const truncate = (str, len) => str.length > len ? str.slice(0, len) + "..." : str;