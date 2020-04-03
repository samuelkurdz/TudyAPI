const createError = require('http-errors');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

require('./app_api/models/db');
// load in mongoose data models
const { List, Task } = require('./app_api/models/fullSchema');


const apiRouter = require('./app_api/routes/index');

//MiddleWares
const app = express();

app.use(cors());
app.use(bodyParser.json());


//CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, x-Requested-With, Content-Type, Accept");
  next();
})


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
