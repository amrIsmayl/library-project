// const { auth } = require('../middleware/authentiction/auth');
const { addNews, allNews, userNews, update, deleteNews, searchByName, searchByTime, searchByLastDay, searches } = require('../services/news.service');

const app = require('express').Router();

app.post('/', addNews)
app.get('/', allBook)


// app.post('/', auth, addNews)
// app.get('/', auth, allNews)
//     .get('/userNews', auth, userNews)
//     .put('/', auth, update)
//     .delete('/', auth, deleteNews)
//     .get('/searches',auth,searches)
//     .get('/searchName',auth,searchByName)
//     .get('/searchByTime',auth,searchByTime)
//     .get('/searchByLastDay',auth,searchByLastDay)


module.exports = app;