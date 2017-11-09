
module.exports={
	create(req, res) {
		return books
			.create({
				bookTitle: req.body.bookTitle,
				author: req.body.author,
				published: req.body.published,
				bookid: req.body.bookid  
			})
			.then(books => res.status(201).json({
				status: 'success',
				bookTitle: books.bookTitle,
				message: 'book added successfully',
				books: { bookid: books.bookid, author: books.author}
			}))
			.catch((error) => {
				console.log('error =>', error);
				res.status(400).json(error);
			});
	},

	update(req, res){
		return books
			findById(req.params.bookid,  {
				include: [{
					model: BookInstance,
					as: 'BookInstance',
				}],
			})
			.then(books => res.status(201).json({
				status: 'success',
				message: 'successfully'

			}))
			.catch((error)=>{
				console.log('error =>', error);
				res.status(400).json(error);
			});
	},


};