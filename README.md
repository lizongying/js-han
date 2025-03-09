# 簡化字轉漢字

簡化字轉漢字，js實現

* 支持《通用規範漢字表》中的全部簡化字
* 對於一對多的簡化字，人工標註規則
* 支持運行時增加自定義規則
* 簡單快速

[doc](https://lizongying.github.io/js-han/)

[npm](https://www.npmjs.com/package/js-han)

[js](https://github.com/lizongying/js-han)

[python](https://github.com/lizongying/pyhan)

![](screenshots/img.png)

## 使用

### node

```
npm i js-han
```

### browser

```html
<!DOCTYPE html>
<html lang="zh-Hant">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>簡化字轉漢字</title>
    <script src="raw.githubusercontent.com/lizongying/js-han/refs/heads/main/docs/han.min.js"></script>
    <script>
        const hanInstance = Han.getInstance();
        console.log(hanInstance.toTraditional('汉字'));
    </script>
</head>
<body>
</body>
</html>
```

## 讚賞

![image](./screenshots/appreciate.png)