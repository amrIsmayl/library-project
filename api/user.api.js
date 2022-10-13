// const { uservalidation } = require('../middleware/validation/user.validation');
const { auth } = require('../middleware/authentiction/auth');
const { signup, signin, changePass, updateAccount, deleteAccount } = require('../services/user.service');


const app = require('express').Router();


app.post('/signup', signup);
app.post('/signin', signin);
app.post('/changePass', auth, changePass);
app.post('/updateAccount', auth, updateAccount);
app.post('/deleteAccount', auth, deleteAccount);

module.exports = app
