const bookModel = require("../models/book.model");



module.exports.addbook = async (req, res) => {
    const { title, desc, author } = req.body;
    let quantity = 0
    let book = await bookModel.findOne({ title, author })
    if (!book) {
        quantity = 1;
        await bookModel.insertMany({ author, title, desc, quantity, createdBy: req.id });
        res.json({ message: 'success2' });
    } else {
        quantity = book.quantity + 1;
        id = book.id
        await bookModel.findByIdAndUpdate(id, { quantity })
        res.json({ message: 'success1' });
    }
}



module.exports.updateBook = async (req, res) => {
    const { author, title, desc, id } = req.body;
    let book = await bookModel.findByIdAndUpdate({ _id: id }, { author, title, desc })
    res.json({ message: "update is done", book })
}



module.exports.getAllBooks = async (req, res) => {
    let books = await bookModel.find({})
    res.json({ message: "all of books", books })
}



module.exports.filterByAuthor = async (req, res) => {
    const { author } = req.body;
    let book = await bookModel.find({ author })
    res.json({ message: "success", book })
}



module.exports.deleteBook = async (req, res) => {
    const { author, title } = req.body;
    let book = await bookModel.deleteOne({ author, title })
    res.json({ message: "delete is done", book })
}
