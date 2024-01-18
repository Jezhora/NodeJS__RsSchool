const fs = require('fs');

// const readableStream = fs.createReadStream('source.txt');
// // sure that the data is coming in chunks
// readableStream.on('data', (chunk) => console.log(chunk.length))

const stream = fs.createReadStream("source.txt", "utf-8");
let data = '';
stream.on('data', (chunk) => (data += chunk));
stream.on('end', () => console.log('End', data.length));
stream.on('error', (error) => console.log('Error', error.message))
