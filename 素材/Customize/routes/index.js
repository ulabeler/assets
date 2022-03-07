const express = require('express');
const router = express.Router();
const app = express();
// View EngineにEJSを指定。
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
const cookieParser = require('cookie-parser');
const fs = require('fs');
const mysql = require('mysql');
// データベース定義
const connect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sample'
});

router.get('/', function(req, res) {
    res.render('index');
});

router.post('/', function(req, res) {
    res.render('index');
});

module.exports = router;