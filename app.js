var express = require("express");
var bodyParser = require("body-parser");

const PORT = process.env.PORT || 5000;
var app = express();


app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine','ejs');
app.set('views','./app/views');
app.use(express.static('./app/public'));


app.get('/', function(req, res){
    res.render('home');
})


app.get('/regulamento', function(req, res){
    res.render('regulamento');
})

app.use(function(req, res, next){
    res.status(404);
  
    if (req.accepts('html')) {
      res.redirect('/');
      return;
    }

    if (req.accepts('json')) {
      res.send({ error: 'Not found' });
      return;
    }

    res.type('txt').send('Not found');
  });

app.listen(PORT);
console.log("Servidor Online em http://127.0.0.1:5000");