const express = require('express');
// View EngineにEJSを指定。
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const mysql = require('mysql');
const session = require('express-session');
const { query } = require('express');
const Buffer = require('buffer/').Buffer
const { check, validationResult } = require('express-validator');
const render = require('ejs');
const base64 = require("urlsafe-base64")
const { buffer } = require('stream/consumers');
const { putObjectImg, listObjects } = require("./scripts/train-aws");
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));
app.use(bodyParser.urlencoded({extended:true, limit: '50mb'  }));
app.use(cookieParser())
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false,
  cookie:{
  httpOnly: true,
  secure: false,
  maxage: 1000 * 60 * 600
}
}));
require('date-utils');
let now = new Date();
var connect = mysql.createConnection({
  host     : "localhost",
  user     : 'ulabeler',
  password : 'ulabeler',
  database : 'ulabeler_dev'
});
connect.connect(function(err) {
  if (err) throw err;
  console.log('Connected');
});

app.get('/', function(req, res) {
  // ログインしたと課程してsessionにID詰めてる
  req.session.name = "user1";
  res.render('top');
});
app.post('/', function(req, res) {
  res.redirect("/customize/select_object");
});

// オブジェクト選択
app.get('/customize/select_object', function(req, res) {
  res.render('select_object');
});
app.post('/customize/select_object', function(req, res) {
  const object_id = req.body.object;
  let sql= "SELECT name_category FROM base_category WHERE id = ?";
  connect.query(sql,[object_id], function (err, results) {
    if (err) {
      throw err
    }else {
      const object = results[0]["name_category"];
      if(object == "スマホケース") {
        res.redirect("/customize/select_object_sub");
        return;
      }else {
        res.cookie('object_name', object, {maxAge:100*60*100, httpOnly:false});
        res.cookie('object_id', object_id, {maxAge:100*60*100, httpOnly:false});
        res.redirect('/customize/select_color');
        return;
      }
    }
  });
});

// Ipthon選択
app.get('/customize/select_object_sub', function(req, res) {
  res.render("select_object_sub");
});
app.post("/customize/select_object_sub", function(req,res) {
  const object_id = req.body.object;
  let sql= "SELECT * FROM base_category WHERE id = ?";
  connect.query(sql,[object_id], function (err, results) {
    if (err) {
      throw err
    }else {
      const object_name = results[0]["name_subcategory"];
      res.cookie('object_name', object_name, {maxAge:100*60*100, httpOnly:false});
      res.cookie('object_id', object_id, {maxAge:100*60*100, httpOnly:false});
      res.redirect("/customize/select_color");
      return;
    }
  });
})

// カラー選択
app.get('/customize/select_color',function(req, res) {
  const object_name = req.cookies.object_name;
  res.render('select_color', {object_name: object_name});
});
app.post('/customize/select_color', function(req, res) {
  const color = req.body.color;
  res.cookie('color', color, {maxAge:100*60*100, httpOnly:false});
  res.redirect('/customize/customize_editing');
  return
});

// カスタマイズ画面
app.get('/customize/customize_editing', function(req, res) {
  // console.log( req.cookies.color);
  const color = req.cookies.color;
  const object_name = req.cookies.object_name;
  res.render('customize_editing2', {color: color, object_name: object_name});
});
app.post('/customize/customize_editing', function(req, res) {
  let base = req.body.base;
  // console.log(base);
  const id = req.session.name;
  const imagename = uuidv4();
  const rawUUID = uuidv4();
  const uuid = rawUUID.substring(rawUUID.length - 12);
  const object_id = req.cookies.object_id;
  res.cookie('image_path', imagename, {maxAge:100*60*100, httpOnly:false});
  // const decode_data = base64.decode(base);
  fs.writeFile( `public/images/${imagename}.png` , base,'base64' ,  (err) => {
      // 書き出しに失敗した場合
      if(err){
        console.log("エラーが発生しました。" + err);
        throw err;
      }else{
        console.log("ファイルが正常に書き出しされました")
      }
  });
  // putObjectImg(imagename,decode_data); // コメント解除すればAWSに保存可能
  // AWSに挿入したpathの取り出し方わかってない。
  let sql = "INSERT INTO work(id, created_by_user_id, base_category_id,work_tex_path,purchase_flg) VALUES (?, ?, ?,?,1)";
  connect.query(sql,[uuid, id, object_id, imagename], function (err, results) {
    if (err) {
      throw err
    }else {
      console.log("挿入");
      let sql = "INSERT INTO favorited_work_number(favorited_to_id,number) VALUES (?,0)";
      connect.query(sql,[uuid]);
      res.cookie('work_id', uuid, {maxAge:100*60*100, httpOnly:false});
      res.redirect("/workSet/work_setting");
      return;
    }
  });
});

// 作品設定
app.get('/workSet/work_setting', function(req, res) {
  const object_name = req.cookies.object_name;
  const work_id = req.cookies.work_id;
  console.log(work_id);
  const id = req.session.name;
  let queryarray = req.query;
  let date = now.toFormat('YYYY/MM/DD');
  let sql= "select id,name from user where id = ?";
	connect.query(sql,[id], function (err, results) {
    if (err) {
      throw err
    }else {
      let sql= "select work_tex_path from work where id = ?";
      connect.query(sql,[work_id], function (err, result_w) {
        if (err) {
          throw err
        }else {
          res.render('work_setting', {date: date, queryarray: queryarray, object_name: object_name, results: results,result_w: result_w })
          // res.send(result_w);
        }
      });
    }
	});
});
app.post('/workSet/work_setting',(req, res) => {
  let data = req.body;
  const splits = data.example2.split(" ");
  let split = [];
  for(let i = 0; i < splits.length; i++) {
    split = splits[i].split("\r\n");
  }
  for(let i = 0; i < splits.length; i++) {
    if(split[i].charAt(0) != "#") {
      split[i] = "";
    }
  }
  let sp = [];
  for(let i = 0; i < split.length; i++) {
    if(split[i] != "") {
      sp.push(split[i].split("#"));
    }
  }
  let moji = "";
  for (let i = 0; i < sp.length; i++) {
    for (let j = 0; j < sp[0].length; j++) {
      if(sp[i][j] != "") {
        moji += sp[i][j] + ",";
      }
    }
  }
  res.cookie('hashtag', moji, {maxAge:100*60*100, httpOnly:false});
  res.cookie('dataName', data.name, {maxAge:100*60*100, httpOnly:false});
  res.cookie('dataExample2', data.example2, {maxAge:100*60*100, httpOnly:false});
  return res.redirect('/workSet/work_setting_confirmation');
  // res.send(moji);
});

// 作品設定確認
app.get('/workSet/work_setting_confirmation', function(req, res) {
  const object_name = req.cookies.object_name;
  const work_id = req.cookies.work_id;
  const id = req.session.name;
  const date = now.toFormat('YYYY/MM/DD');
  const name=req.cookies.dataName;
  const hashtag = req.cookies.hashtag;
  let hashtagarray = (hashtag.split(","));
  const example2=req.cookies.dataExample2;
  let sql= "select * from user where id = ?";
	connect.query(sql,[id], function (err, results) {
    if (err) {
      throw err
    }else {
      let sql= "select work_tex_path from work where id = ?";
      connect.query(sql,[work_id], function (err, result_w) {
        if (err) {
          throw err
        }else {
          res.render("work_setting_confirmation", {
            date: date, 
            name: name , 
            hashtagarray : hashtagarray,
            example2: example2, 
            object_name: object_name, 
            results: results,
            result_w: result_w
          })
          // res.send(result_w);
        }
      });
    }
	});
});
app.post('/workSet/work_setting_confirmation', function(req, res) {
  const work_id = req.cookies.work_id;
  const name=req.cookies.dataName;
  const hashtag = req.cookies.hashtag;
  const example2=req.cookies.dataExample2;
  let flg = req.body.check;
  if(flg == "check") {
    flg = true;
  }else {
    flg = false;
  }
  let sql= "UPDATE work SET name=? ,flag_public = ?, hashtag=?, introduction=? WHERE id = ?";
	connect.query(sql,[name,flg, hashtag, example2, work_id], function (err, results) {
    if (err) {
      throw err
    }else {
      // console.log("挿入");
      res.redirect('/purchase/purchase_confirmation');
      return;
    }
	});
});

// 購入確認
app.get('/purchase/purchase_confirmation', function(req, res) {
  const cookie = req.cookies;
  if(typeof cookie.pay == "undefined") {
    res.cookie('pay', "card", {maxAge:100*60*100, httpOnly:false});
  }
  const date = new Date();
  const year= date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate() + 3;
  if(typeof cookie.day == "undifind") {
    res.cookie('day', `${month}/${day} 18時～20時` , {maxAge:100*60*100, httpOnly:false});
  }
  const id = req.session.name;
  let sql = "SELECT w.name,w.work_tex_path,w.unit_price,b.name_subcategory as total FROM work as w INNER JOIN base_category as b ON b.id = w.base_category_id WHERE created_by_user_id = ? and purchase_flg = 1";
	connect.query(sql,[id], function (err, result_r) {
    if (err) {
      throw err
    }else {
      // res.json(result_r);
      let sql = "SELECT * FROM delivery_address WHERE user_id = ? ORDER BY updated_at desc limit 1";
      connect.query(sql,[id], function (err, result_c) {
        if (err) {
          throw err
        }else {
          let sql = "select * from user where id = ?";
          connect.query(sql,[id], function (err, result_d) {
            if (err) {
              throw err
            }else {
              res.render('purchase_confirmation', {result_r: result_r, result_c:result_c , result_d:result_d ,cookie:cookie, year:year, month:month,day:day})
              // res.json(result_c);
            }
          });
        }
      });
          // res.send(result_r);
    }
	});
});

app.post('/purchase/purchase_confirmation', function(req, res) {
  let purchase_id = uuidv4();
  purchase_id = purchase_id.substring(purchase_id.length - 12);
  const date = now.toFormat('YYYY/MM/DD HH24:MI:SS');
  const payment_method = req.cookies.pay;
  const day = req.cookies.day;
  const work_id = req.cookies.work_id;
  const user_id = req.session.name;
  // 購入したフラグを0にする。
  let sql1 = "UPDATE work SET purchase_flg = 0 WHERE created_by_user_id = ?";
  connect.query(sql1,[user_id]);
  let sql = "SELECT * FROM delivery_address WHERE user_id = ? ORDER BY updated_at desc limit 1";
  connect.query(sql,[user_id], function (err, result_c) {
    if (err) {
      throw err
    }else {
      let sql= "INSERT INTO purchase_history(id,user_id,purchased_at,payment_method) VALUES (?,?,?,?)";
      connect.query(sql,[purchase_id, user_id, date, payment_method], function (err, results) {
        if (err) {
          throw err
        }else {
          let sql= "INSERT INTO delivery_status(purchase_record_id,datetime_scheduled,current_status	,zip_code, address,familyname,firstname,familyname_furigana,firstname_furigana) VALUES (?,?,?,?,?,?,?,?,?)";
          connect.query(sql,[purchase_id, day, "未発送", result_c[0]["zip_code"],result_c[0]["address"],result_c[0]["familyname"],result_c[0]["firstname"],result_c[0]["familyname_furigana"],result_c[0]["firstname_furigana"]], function (err, results) {
            if (err) {
              throw err
            }else {
              let sql = "INSERT INTO purchased_history_item (purchase_history_id,work_id,quantity) VALUES (?,?,1)";
              connect.query(sql,[purchase_id,work_id], function (err, results) {
                if (err) {
                  throw err
                }else {
                  res.redirect("/purchase/purchase_confirmation"); // 遷移先わからない
                  return;
                }
              })
            }
          });
        }
      });
    }
  });
});

// 住所選択
app.get('/select_address', function(req, res) {
  const id = req.session.name;
  let sql = "SELECT * FROM delivery_address WHERE user_id = ? ORDER BY updated_at desc limit 1";
  connect.query(sql,[id], function (err, results) {
    if (err) {
      throw err
    }else {
      res.render('select_address', {results: results});  
      // res.json(results);  
    }
  });
});

app.post('/select_address', function(req, res) {
  const array = req.body;
  const address = array.address1 + array.address2 + array.address3; 
  const id = req.session.name;
  const date = now.toFormat('YYYY:MM:DD HH24:MI:SS');
  console.log("check",array.check);
  if(array.check === "check") {
    res.redirect("/purchase/purchase_confirmation")
    return;
  }else {
    let sql = "INSERT INTO delivery_address(user_id,updated_at,zip_code,address,familyname,firstname,familyname_furigana,firstname_furigana) VALUES (?,?,?,?,?,?,?,?)"
    connect.query(sql,[id,date,array.zip_code,address,array.familyname,array.firstname,array.familyname_furigana,array.firstname_furigana], function (err, results) {
      if (err) {
        throw err
      }else {
        // console.log("挿入");
        res.redirect('/purchase/purchase_confirmation');
        return;
      }
    });
  }
});

// 日付選択
app.get("/select_delivery_date", (req,res) => {
  const date = new Date();
  const year= date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  res.render("select_delivery_date",{year:year, month:month,day:day})
})

app.post("/select_delivery_date", (req,res) => {
  const day = req.body.a;
  console.log(day);
  if(day == "day") {
    let body = req.body.day;
    let time = req.body.time;
    res.cookie('day', `${body} ${time}` , {maxAge:100*60*100, httpOnly:false});
  }else {
    res.cookie('day', `${day} 18時～20時` , {maxAge:100*60*100, httpOnly:false});
  }
  res.redirect("/purchase/purchase_confirmation")
});

// 会計選択
app.get("/select_payment", (req,res) => {
  const id = req.session.name;
  console.log(id);
  let sql= "select * from user where id = ?";
	connect.query(sql,[id], function (err, results) {
    if (err) {
      throw err
    }else {
      res.render("select_payment", {results:results});
      // res.json(results);
    }
	});
});
app.post("/select_payment", (req,res) => {
  const id = req.session.name;
  const array = req.body;
  if(array.pay == "paypay") {
    res.cookie('pay', "paypay", {maxAge:100*60*100, httpOnly:false});
    res.redirect("/purchase/purchase_confirmation");
    return;
  }else {
    res.cookie('pay', "クレジットカード", {maxAge:100*60*100, httpOnly:false});
    if(array.a === "check") {
      res.redirect("/purchase/purchase_confirmation");
      return;
    }else {
      const cardnumber = array.number1 + array.number2 + array.number3 + array.number4;
      let sql= "UPDATE user SET cardnumber = ?, name_card = ? , expiration=? WHERE id = ?";
      connect.query(sql,[cardnumber,array.name,array.expiration, id], function (err, results) {
        if (err) {
          throw err
        }else {
          res.redirect("/purchase/purchase_confirmation")
        }
      });
    }
  }
});


app.listen(3000, () => console.log('Example app listening on port 3000!'));