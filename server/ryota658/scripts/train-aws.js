/* eslint-disable @typescript-eslint/no-var-requires */
// import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
const S3Client = require("@aws-sdk/client-s3").S3Client;
const PutObjectCommand = require("@aws-sdk/client-s3").PutObjectCommand;
// const ListObjectsV2Command = require("@aws-sdk/client-s3").ListObjectsV2Command;

// import dotenv from "dotenv";
const dotenv = require("dotenv");
dotenv.config();

const accessKey = process.env.AWSACCESSKEYID || ""; // アクセスキー
const accessKeySecret = process.env.AWSSECRETKEY || ""; // アクセスキーのシークレット
const bucketName = process.env.AWSBUCKETNAME || "";
const mediaProxyPrefix = process.env.MEDIAPROXYPREFIX || "";

// const s3Region = "s3.ap-northeast-1.amazonaws.com";

const s3 = new S3Client({
  region: "ap-northeast-1",
  credentials: {
    accessKeyId: accessKey,
    secretAccessKey: accessKeySecret,
  },
});

// S3 バケットにオブジェクトを追加する
/**
 * @param {string} Key オブジェクト名
 * @param {any} Body 追加するオブジェクト。base64エンコードされた画像データをいい感じにして格納します。src/routes/api/media.tsに例があります。
 */
async function putObject(Key, Body) {
  // Bodyに画像データを指定
  try {
    const output = await s3.send(
      new PutObjectCommand({
        Bucket: bucketName,
        Key: Key,
        Body: Body,
      })
    );
    console.log("SUCCESS - Object added:", output.$metadata.httpStatusCode);
    return true;
  } catch (err) {
    console.error("ERROR:", err);
    return false;
  }
}

// const fileName = "media/training/.jpg";
// const getObjectUri = `${mediaProxyPrefix}${fileName}`; // プロキシを通して画像を取得するためのURI

// ./cat1s.pngをbase64エンコードしてS3に追加する
// const img = Buffer.from(fse.readFileSync("./scripts/cat1s.jpg"));

function putObjectImg(filename,img) {
  putObject(filename, img)
    .then(() => {
      const getObjectUri = `${mediaProxyPrefix}filename`;
      console.log(getObjectUri);
    })
    .catch((err) => {
        console.error(err);
    });
}

const ListObjectsV2Command = require("@aws-sdk/client-s3").ListObjectsV2Command;
// S3 バケット内のオブジェクトの一覧を取得する
/**
 * @param {string} bucketName バケット名
 * @return {any} obj 一覧を返す
 */
async function listObjects() {
  try {
    const output = await s3.send(
      new ListObjectsV2Command({
        Bucket: bucketName,
        MaxKeys: 100, // 最大10件まで取得
      })
    );
    for (const obj of output.Contents || []) {
      // return obj;
      console.log(obj.Key);
    }
  } catch (err) {
    console.error("ERROR:", err);
    return err;
  }
}

listObjects(bucketName);

module.exports = {
  // const { putObject, listObjects } = require("./train-aws");みたいな感じでやると他のファイルでも使えるでも使えるようになる。
  putObjectImg,
  listObjects,
};
