const { error } = require('console');
const fs = require('fs');

const [command, title, content] = process.argv.slice(2);

switch (command) {
  case 'list':
    list();
    break;
  case 'view':
    view(title);
    break;
  case 'create':
    create(title, content);
    break;
  case 'remove':
    remove(title);
    break;
  default:
    console.log('Unknown command');
}

function create(title, content) {
  fs.readFile('notes.json', (error, data) => {
    if (error) return console.error(error.message);
    const notes = JSON.parse(data);
    notes.push({ title, content })
    const json = JSON.stringify(notes);

    fs.writeFile('notes.json', json, (error) => {
      if (error) return console.error(error.message);
      console.log('Note Created');
    })
  })
}

function list() {
  fs.readFile('notes.json', (error, data) => {
    if (error) return console.error(error.message);
    const notes = JSON.parse(data);
    notes.forEach((note, index) => console.log(`${index + 1} ${note.title}`));
  });
}

function view(title) {
  fs.readFile('notes.json', (error, data) => {
    if (error) return console.error(error.message);
    const notes = JSON.parse(data);
    const note = notes.find(note => note.title === title);
    if (!note) {
      console.log("Note not found");
    } else {
      console.log(note.content);
    }
  })
}

function remove(title) {
  fs.readFile('notes.json', (error, data) => {
    if (error) return console.error(error.message);
    const notes = JSON.parse(data);
    const note = notes.filter(note => note.title !== title);
    const json = JSON.stringify(note);
    fs.writeFile('notes.json', json, (error) => {
      if (error) return console.error(error.message);
      console.log('Note deleted');
    })
  })
}
