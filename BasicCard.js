
function BasicCard(front, back) {
		if ( this instanceof BasicCard) {
		this.front = front,
		this.back = back
	} else {
		return new BasicCard(front, back);
	}
}

module.exports = BasicCard;


// const BasicCard = function(front, back) {
// 	this.front = front,
// 	this.back = back
// };

// const firstPresident = new BasicCard("Who is the first president of United states?", "George Washington");
// console.log(firstPresident.front);
// console.log(firstPresident.back);
