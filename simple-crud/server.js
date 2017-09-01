var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var user = require('./routes/user');
var post = require('./routes/post');
var port = 3000;
var app = express();
const fallback = require('express-history-api-fallback');

app.set('views', path.join(__dirname, 'dist'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/api', user);
app.use('/post', post);

app.use(fallback(__dirname + '/dist/index.html'));

app.listen(port, function () {
    console.log('SERVER RUNNING PORT ' + port);
});