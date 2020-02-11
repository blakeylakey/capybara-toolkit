var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// local config stuff
const local = require('./local');

/* DB Connection */
var pgp = require('pg-promise')();
global.db = (global.db ? global.db : pgp(local.elephantSql.connectionString));

// routers
var pdbRouter = require('./routes/pdb');
var nicheRouter = require('./routes/niche');
var laRouter = require('./routes/la');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'build')));

app.use('/tools/pdb', pdbRouter);
app.use('/tools/niche', nicheRouter);
app.use('/tools/la', laRouter);
app.use('/img', express.static(__dirname + '/screenshots'));
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

module.exports = app;