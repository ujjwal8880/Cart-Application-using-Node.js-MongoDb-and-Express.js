var express=require('express');
var controller=require('./controller/controller')

var app=express();
app.set('view engine','ejs')

app.use(express.static('./public'));
controller(app);
app.listen(3000);
console.log('Server Listening ... ');