const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({ title, body });
    saveNotes(notes);
    console.log(chalk.green.inverse('New note added!'));
  } else {
    console.log(chalk.red.inverse('Note title already taken!'));
  }
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (err) {
    return [];
  }
};

const readNote = (title) => {
  const notes = loadNotes();
  const foundNote = notes.find((note) => note.title === title);

  if (foundNote) {
    console.log(chalk.inverse(foundNote.title));
    console.log(foundNote.body);
  } else {
    console.log(chalk.red.inverse('No note found!'));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.title !== title);

  if (notes.length > notesToKeep.length) {
    saveNotes(notesToKeep);
    console.log(chalk.green.inverse(`Removed ${note.title} note!`));
  } else {
    console.log(chalk.red.inverse('No note found!'));
  }
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.underline('Your Notes'));
  notes.forEach((note) => {
    console.log(note.title);
  });
};

const saveNotes = (notesArr) => {
  const notesJSON = JSON.stringify(notesArr);
  fs.writeFileSync('notes.json', notesJSON);
};

module.exports = {
  addNote,
  removeNote,
  listNotes,
  readNote,
};
