const booksControllers = require('./controllers/books');

module.exports = (app) => {
	app.get('/api/books', (req, res) => res.status(200).send({
		message: 'Welcome to the books api'
	}));

	app.post('/api/books/:bookid/books', booksControllers.create);
	//app.put('/api/books', booksControllers.list);

	//app.put('api/books<id>', );
}