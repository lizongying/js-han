# 簡化字轉漢字

簡化字轉漢字，js實現

* 支持《通用規範漢字表》中的全部簡化字
* 對於一對多的簡化字，人工標註規則
* 支持運行時增加自定義規則
* 簡單快速

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
    <title>漢字示例</title>
    <style>
        .container {
            height: 600px;
        }
    </style>
    <script src="raw.githubusercontent.com/lizongying/js-gua64/refs/heads/main/docs/zi.min.js"></script>
    <script>
        window.addEventListener('DOMContentLoaded', () => {
            const zi = new Zi({
                container: '.container',
                mode: 'V',
                columnNum: 6,
                count: 30,
            });
            zi.show('漢字示例漢字示例漢字示例漢字示例漢字示例漢字示例');
            zi.show('我的世界');
        })
    </script>
</head>
<body>
<h1>漢字示例</h1>
<div class="container"></div>
</body>
</html>
```

## 讚賞

![image](./screenshots/appreciate.png)