//ここからts共通部分
export {};
const express = require('express');
const router = express.Router();
//ここまで共通部分
const mysql = require('mysql2');
    let connection:any;
    let result:any;
    connection = mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            multipleStatements: true
    });



// ルーティング

// ルート
router.get("/", (request:any, response:any, next:any) => {
    //(http://ulabeler.xxx/)という形でアクセスされた場合に、indexページを返す設定
    let data = {    //ここでデータをこさえて
        items: [
            {name: "<h1>リンゴ</h1>"},
            {name: "<h1>バナナ</h1>"},
            {name: "<h1>スイカ</h1>"}
        ]
    };
    // こさえたデータを渡して、レンダリングを行う。
    response.render("./index.ejs", data); //viewsディレクトリからの相対パス
});

router.get("/weather", (request:any, response:any, next:any) => {
    //train_ajax.htmlを返す
    response.render("./train_ajax.ejs");
});


module.exports = router;    