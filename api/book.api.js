const { auth } = require('../middleware/authentiction/auth');
const { addbook, updateBook, getAllBooks, filterByAuthor, deleteBook } = require('../services/book.service');

const app = require('express').Router();



app.post('/', auth, addbook)
    .post('/updateBook', auth, updateBook)
    .get('/getAllBooks', getAllBooks)
    .post('/filterByAuthor',auth, filterByAuthor)
    .post('/deleteBook', deleteBook)

module.exports = app;