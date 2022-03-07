# これはなに

na2na-p 視点での雑メモです。

# knex

- クエリのログ残す場合はこう

```
knex("hoge").drop("hoge")
    .then(() => {
        console.log("done");
    })
    .catch(err => {
        console.log(err);
    })
    .on("query", function (data: string[]) {
      console.log(data);
    });
})
```

# その他
- カートの横の数字は、quantityの合計
