const { error } = require("console");
const fs = require("fs");
const input = fs.createReadStream('source.txt', 'utf-8');
const output = fs.createWriteStream('destination.txt');

input.on('data', (chunk) => output.write(chunk));
input.on('error', (error) => console.log('Error', error.message))