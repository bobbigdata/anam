// parseModule.js
function parse(input) {
  // Your parsing logic here
  return JSON.parse(input);
}

module.exports = {
  parse,
  // Other exports if necessary
};

// Usage in another file
const parser = require('./parseModule');
const jsonString = '{"name": "Alice", "age": 22}';
const parsedData = parser.parse(jsonString);
console.log(parsedData); // Output: { name: 'Alice', age: 22 }
