const successInput = require('./input/success.json');
const {simulate} = require('./simulator');

const output = simulate(successInput);

console.log(output);
