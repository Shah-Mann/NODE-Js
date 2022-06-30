const chalk = require("chalk");
const yargs = require("yargs");
//const validator = require("validator");
const notes = require("./notes");

// const command = process.argv[2];

// console.log(process.argv);

//customize yargs version
yargs.version("1.1.1");

// Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

// Create list command
yargs.command({
  command: "list",
  describe: "List your notes",
  handler() {
    notes.listNotes();
  },
});

// Create read command
yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

yargs.parse();

// if (command === "add") {
//   console.log("Adding notes");
// } else if (command === "remove") {
//   console.log("Removing notes");
// }

// const msg = getNotes();

// console.log(msg);

// const greenMsg = chalk.blue.bold.inverse("Sucess");
// console.log(greenMsg);

// console.log(process.argv[2]);

// console.log(validator.isURL("https://mann.io"));

// const add = require("./utlis");

// // const name = "Mann";

// const sum = add(4, -2);

// console.log(sum);

// // const fs = require("fs");

// // fs.writeFileSync("notes.txt", "my name is mann");
