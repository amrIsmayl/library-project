const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express()
const port = 3000


app.use(express.json());
app.use('/users', require('./api/user.api'));
app.use('/book', require('./api/book.api'));
app.use('/invoice', require('./api/invoice.api'));



mongoose
    .connect('mongodb://127.0.0.1:27017/library')
    .then(() => {
        console.log("database connented");
    })
    .catch((err) => {
        console.log(err);
    });


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))