
function Message(type, author, content, color) {
	this.type = type;
	this.author = author;
	this.content = content;
	this.color = color;

	const date = new Date();
	this.time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

module.exports = { Message };
