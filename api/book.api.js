const { auth } = require('../middleware/authentiction/auth');
const { addbook, updateBook, getAllBooks, filterByAuthor, deleteBook } = require('../services/book.service');

const app = require('express').Router();



app.post('/', auth, addbook)
    .post('/updateBook', auth, updateBook)
    .get('/getAllBooks', getAllBooks)
    .get('/filterByAuthor', filterByAuthor)
    .post('/deleteBook', deleteBook)
// // app.get('/', auth, allNews)
// //     .get('/userNews', auth, userNews)
// //     .put('/', auth, update)
// //     .delete('/', auth, deleteNews)
// //     .get('/searches',auth,searches)
// //     .get('/searchName',auth,searchByName)
// //     .get('/searchByTime',auth,searchByTime)
// //     .get('/searchByLastDay',auth,searchByLastDay)


module.exports = app;