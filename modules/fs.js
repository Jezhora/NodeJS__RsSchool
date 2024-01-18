const fs = require('fs');
const path = require('path');

// creaate folder
// fs.mkdir(path.join(__dirname,'notes'), (err) => {
//   if (err) throw err;
//   console.log('folder was created')
// })

// create file .txt with text Hello World
// fs.writeFile(
//   path.join(__dirname, 'notes', 'mynotes.txt'),
//   'Hello World',
//   (err) => {
//     if (err) throw err;
//     console.log('file was created')
//   }
// )

// read info from created file
// fs.readFile(
//   path.join(__dirname, 'notes', 'mynotes.txt'),
//   'utf-8',
//   (err, data) => {
//     if (err) throw err;
//     console.log(data)
//   }
// )

// rename the file
// fs.rename(
//   path.join(__dirname, 'notes', 'mynotes.txt'),
//   path.join(__dirname, 'notes', 'notes.txt'),
//   (err) => {
//     if(err) throw err;
//     console.log('file renamed');
//   }
// )

// delete file from dir
// fs.unlink(path.join(__dirname, 'notes', 'notes.txt'),
// (err) => {
//   if (err) throw err;
//   console.log('file deleted');
// }
// )

// delete dir
// fs.rmdir(path.join(__dirname, 'notes'),
// (err) => {
//   if (err) throw err;
//   console.log('dir deleted');
// }
// )

// create  file to next module
fs.writeFile(
  path.resolve('modules','os.js'),
'',
(err) => {
  if (err) throw err;
  console.log('os.js created')
}
)

