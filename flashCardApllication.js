const BasicCard = require("./basicCard.js");
const ClozeCard = require("./clozeCard.js");


const firstPresident = new BasicCard("Who is the first president of United states?", "George Washington");
console.log("Question: " + firstPresident.front);//Who is the first president of United states?
console.log("Answer is: " + firstPresident.back);//George Washington
console.log("------------------------------------------");

const firstPresidentCloze = new ClozeCard("George Washington was the first president of the United States.", "George Washington");

console.log("Answer is: " + firstPresidentCloze.cloze);//George Washington
console.log("Partial text is: " + firstPresidentCloze.partial);//--------- was the first president of the United States.
console.log("Full text is: " + firstPresidentCloze.fullText);//George Washington was the first president of the United States.
console.log("--------------------------------------------")

const brokenCloze = new ClozeCard("This doesn't work", "oops");
console.log("If error: " + brokenCloze.fullText);//This doesn't work
console.log(brokenCloze.cloze);//oops