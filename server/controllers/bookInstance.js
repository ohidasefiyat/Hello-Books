const BookInstance = require('./bookInstance');

module.exports = {
	create(req, res) {
		return BookInstance
			.create({
				bookTitle: req.body.bookTitle,
				bookid: req.params.bookid,
			})
			.then(bookInstance => res.status(201).send(bookInstance))
			.catch(error => res.status(400).send(error));
	},
};