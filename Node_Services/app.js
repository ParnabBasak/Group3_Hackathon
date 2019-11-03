const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const expressValidator = require('express-validator');
const session = require('express-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');

var mongoose = require('mongoose');
require('dotenv').config();
require('./config/passportConfig');

const rtsIndex = require('./routes/index.router');

// Connect to the database
mongoose.connect(process.env.MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
})
  .then(() => console.log('DB Connected!'))
  .catch(err => {
    console.log(`DB Connection Error: ${err.message} `);
  });


var db = mongoose.connection;

var app = express();

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());

// Validator - populate the error array
app.use(expressValidator({
  errorFormatter: function (param, msg, value) {
    var namespace = param.split('.')
      , root = namespace.shift()
      , formParam = root;

    while (namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param: formParam,
      msg: msg,
      value: value
    };
  }
}));

// Routes
app.use('/api', rtsIndex);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  next(err);
});

module.exports = app;
