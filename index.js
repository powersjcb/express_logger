'use strict'

var express = require('express');
var app = express();
var apiRouter = express.Router();


function logger(req, res, next) {
  console.log(new Date(), req.method, req.url);
  next();
}

function hello(req, res, next) {
  res.write('Hi there \n');
  next();
}

function bye(req, res, next) {
  res.write('Bye \n ');
  res.end();
}

// app.use(logger);

// app.get('/hello', hello, bye);



apiRouter.use(logger);
apiRouter.get('users', function() {
  res.write({users: 'test'});
  res.end();
});

app.use('/api', apiRouter);
app.use(hello, bye);



var server = app.listen(3000);
