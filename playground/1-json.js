const fs = require("fs");
const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
const user = JSON.parse(dataJSON);

user.name = "Mann";
user.age = 21;

const userJSON = JSON.stringify(user);
fs.writeFileSync("1-json.json", userJSON);

// const { json } = require("prune");

// const dataBuffer = fs.readFileSync("1-json.json");
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);
// const book = {
//   title: "Biography",
//   author: "Swami Vivekananda",
// };
// const bookJSON = JSON.stringify(book);
// fs.writeFileSync("1-json.json", bookJSON);

// console.log(bookJSON);

// JSON.parse(bookJSON);

// const parsedData = JSON.parse(bookJSON);
// console.log(parsedData.author);
