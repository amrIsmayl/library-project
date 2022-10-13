const { auth } = require('../middleware/authentiction/auth');
const { addInvoice, updateInvoice, deleteInvoice } = require('../services/invoice.service');

const app = require('express').Router();



app.post('/', auth, addInvoice)
    .post('/updateInvoice', auth, updateInvoice)
    .post('/deleteInvoice', auth, deleteInvoice);


module.exports = app;