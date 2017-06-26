
function ClozeCard(text, cloze) {
	if ( this instanceof ClozeCard) {
		this.fullText = text,
		this.cloze = cloze,
		this.partial = text.replace(cloze, "------")
	} 

	else {
		return new ClozeCard(text, cloze);
	}
}	
module.exports = ClozeCard;


// const ClozeCard = function(text, cloze) {
// 	this.fullText = text,
// 	this.cloze = cloze,
// 	this.partial = text.replace(cloze, "----------  ----------");
// };

// const firstPresidentCloze = new ClozeCard("George Washington was the first president of the United States.", "George Washington");
// const brokenCloze = new ClozeCard("This doesn't work", "oops");


// console.log(firstPresidentCloze.cloze);
// console.log(firstPresidentCloze.partial);
// console.log(firstPresidentCloze.fullText);
// console.log(brokenCloze.fullText);
// console.log(brokenCloze.cloze);

