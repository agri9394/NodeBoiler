const express = require('express');
const app = express();
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');
// const indexRouter = require('./router/index');
const morgan = require('morgan');
const port = 3000;

app.use(helmet());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan('dev'));
app.use(expressValidator());

/* Application modules routing **/

// app.use('/', indexRouter);
// app.use('/customer', customerRouter);

// catch 404 and forward to error handler

app.get('/check', function (req, res, next) {
    res.send('IT is working');
});

app.get('*', function (req, res, next) {
    res.status(404).send('404 Not found');
});

app.listen(port, () => {
    console.log(`App Started on port: ${port}`);
});