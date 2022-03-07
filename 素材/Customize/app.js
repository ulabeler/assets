require('dotenv').config();
const express = require('express');
const app = express();
// View EngineにEJSを指定。
app.set('view engine', 'ejs');
const mysql = require('mysql');
const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
const session = require('express-session');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

var indexRouter = require('./routes/index');
app.use('/hello', indexRouter);

app.get("/", function(req,res) {
    res.render("select_color");
});
app.listen(3000, () => console.log('Example app listening on port 3000!'));

