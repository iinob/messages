const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.json());



// yes ik this isn't very good and I was supposed to make it good but um shutup this is still leagues better than it was

module.exports = {
	read: function(filename) { // returns file formatted as json
		if (!fs.existsSync(filename)) {
			fs.writeFileSync(filename);
			return false;
		}
		return JSON.parse(fs.readFileSync(filename));
	},

	write: function(filename, object) { // adds new object to file
		let data = this.read(); // finally I harness the power of this
		data.push(object);
		fs.writeFileSync(filename, JSON.stringify(data, null, 2)); // null, 2 for readable formatting
	},

	update: function(filename, username, targetValue, newData) { // targetValue is the name (string) to be changed
		let data = this.read(filename);
		let user = data.find(user => user.name === username); // userids suck so I'm not using them
		
		if (user) {
		user[targetValue] = newData;

		fs.writeFileSync(filename, JSON.stringify(data, null, 2));
		} else {
			console.log(`failed to find user: ${username}`);
		}
		
	}
};
