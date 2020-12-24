const chalk = require('chalk');

const getNotes = require('./notes.js');

const msg = getNotes();
const green = chalk.red.inverse;

console.log(msg);

console.log(green('Success!'));
