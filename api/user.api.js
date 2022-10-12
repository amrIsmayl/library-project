// const { uservalidation } = require('../middleware/validation/user.validation');
const { auth } = require('../middleware/authentiction/auth');
const { signup, signin, changePass, updateAccount, deleteAccount } = require('../services/user.service');


const app = require('express').Router();


app.post('/signup', signup);
app.post('/signin', signin);
app.post('/changePass', auth, changePass);
app.post('/updateAccount', auth, updateAccount);
app.post('/deleteAccount', auth, deleteAccount);



// app.post('/signup/:id', uservalidation, signup);
// app.post('/signin', signin);
// app.post('/deleteUser', auth, deleteUser);
// app.get('/allUsers', auth, allUsers);
// app.get('/userAndHisNotes', auth, userAndHisNotes);
// app.get('/searchByNameOrEmail', auth, searchByNameOrEmail);
// app.get('/userThan', auth, userThan);
// app.get('/userLessThan',auth, userLessThan);
// app.get('/userLessThanEqual', userLessThanEqual);

module.exports = app
