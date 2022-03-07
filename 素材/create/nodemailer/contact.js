const nodemailer = require('nodemailer');
require('dotenv').config(); // 追加
const smtpConfig = nodemailer.createTransport({
    service: 'gmail', //サービス名
    port: 46, // ポート番号
    secure: true, // 認証するかしないか
    auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD
    }
});

const message = {
    from: process.env.EMAIL_ADDRESS,
    to: "ryota05142001@outlook.jp",
    subject: 'テストです',
    text: 'サンプルメール送ってみたよ',
}

smtpConfig.sendMail(message, (error, data) => {
    if(error) console.log(error)
    console.log(data);
});