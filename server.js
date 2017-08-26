var express = require('express');
var morgan = require('morgan');
var path = require('path');
var crypto = require('crypto');// Hash Function
var Pool = require('pg').Pool; // DB CONNCECTION
var bodyParser = require('body-parser'); //User creation
var session = require('express-session'); //session creation
var app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());  //User creation
app.use(session({
    secret : 'somerandom secret value',
    cookie : {maxAge : 1000*60*60*24*30
}}));

var config = {
    user : 'madhusudhanarava9',
    database : 'madhusudhanarava9',
    host : 'db.imad.hasura-app.io',
    port : '5432',
    password : process.env.DB_PASSWORD
};  // DB CONNCECTION

var articleOne = {
title: 'Article one | madhusudhan',
heading : 'Heading 1',
date : 'Aug 14, 2017',
content : '<p>This is content of my first article</p><p>This is content of my first article</p><p>This is content of my first article</p>'
};

function createTemplate(data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    var htmlTemplate = `
    <html>
    <head><title>${title}</title><link href ="ui/style.css" rel="stylesheet"/></head>
    <body><h3>${heading}</h3><div>${date}</div><div>${content}</div></body>
    </html>`;
    return htmlTemplate;
}

var counter = 0;

function hash (input, salt)
{
var hashed = crypto.pbkdf2Sync(input, salt, 10000, 512, 'sha512');
//return hashed.toString('hex');
return ["pbkdf2","10000",salt,hashed.toString('hex')].join('$');
} //  Hash Function

app.get('/hash/:input', function(req,res){
var hashedString = hash(req.params.input,'this-is-a-random-string');
    res.send(hashedString);
    }); // Password hash response
    
app.post('/create-user', function(req,res){
    var username = req.body.username;
    var password = req.body.password;
  // var salt = crypto.getRandomBytes(128).toString('hex');
  var salt = crypto.randomBytes(128).toString('hex'); // DB Credentials storgare
    var dbString = hash(password,salt);
   pool.query('INSERT INTO "users" (username, password) VALUES ($1, $2)',[username, dbString], function(err, result){
   if(err){res.status(500).send(err.toString());}
   else {res.send('user successfully created :' + username);}
});
});// User Creation and Credentials Storaage in user table

app.post('/login', function(req,res){
    var username = req.body.username;
    var password = req.body.password;
      pool.query('select * from  "users" where username = $1',[username], function(err, result){
        });
});// DB CONNCECTION

app.get('/check-login', function(req,res){
    if(req.session && req.session.auth && req.session.auth.userId)
    {res.send('you are logged in:'+req.session.auth.userId.toString());}
    else
    {res.send('you are not logged in');}
});// To check if session is authenticated

app.get('/logout', function(req,res){
    delete req.session.auth;
       res.send('logged out');
});// To check if session is logged out

var pool = new Pool(config);// DB CONNCECTION

app.get('/test-db', function(req,res){
pool.query('select * from test', function(err, result){
    if(err){res.status(500).send(err,toString());}
    else {res.send(JSON.stringify(result));}
});
});// DB CONNCECTION

app.get('/counter', function(req,res){
    counter = counter + 1; 
    res.send(counter.toString());
    });

app.get('/index.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/indexAPI.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'indexAPI.html'));
});


app.get('/article-five', function (req, res) {
  res.send(createTemplate(articleOne));
});

app.get('/article-one', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});


app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/article-four', function (req, res) {
  res.send('Article four requested here and will be served here');
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/mainAPI.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'mainAPI.js'));
});


var names = [];
app.get('/submit-name/:name', function (req, res) {
    var name = req.params.name;
   names.push(name);
   res.send(JSON.stringify(names));
});

app.get('/submit-name', function (req, res) {
    var name = req.query.name;
   names.push(name);
   res.send(JSON.stringify(names));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
