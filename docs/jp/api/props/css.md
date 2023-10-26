# css

`css`メソッドは、対象要素のスタイルを取得または設定するためのものです。

## 直接使用

直接に`css`メソッドを使用して、要素のスタイルを取得または設定することができます。以下は例です：

<html-viewer>

```
<!-- 引入 ofa.js 到你的项目 -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div id="target">origin text</div>
<br>
<h4>logger</h4>
<div id="logger" style="border:#aaa solid 1px;padding:8px;"></div>

<script>
    $("#logger").text = $("#target").css.color;
    setTimeout(()=> {
        $('#target').css.color = 'red';
        $("#logger").text = $("#target").css.color;
    }, 1000);
</script>
```

</html-viewer>

# 全量設定

取得した `css` オブジェクトを使用すると、直接要素に設定されたスタイル値を取得できます。以下は例です：

<html-viewer>

```
<!-- 引入 ofa.js 到你的项目 -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div id="target" style="color:red">元のテキスト</div>
<br>
<h4>ロガー</h4>
<div id="logger" style="border:#aaa solid 1px;padding:8px;"></div>

<script>
    $("#logger").text = Object.keys($("#target").css);
   
    setTimeout(()=>{
        // 既存のスタイルを置き換える
        $("#target").css = {
            color: "blue",
            lineHeight: "5em"
        };
        $("#logger").text = Object.keys($("#target").css);
    }, 500);
</script>
```

</html-viewer>

使用 `css` 对象的特性，你可以快速地调整目标元素的样式。

## 模板语法方式使用

目標の要素のスタイルを設定するために、テンプレート構文を使用することもできます。以下は例です：

<comp-viewer comp-name="css-demo">

```html
<template component>
  <div :css.color="txt">I am target</div>
  <script>
    export default {
      tag: "css-demo",
      data: {
        txt: "red"
      },
      ready(){
        setTimeout(()=>{
          this.txt = "blue";
        }, 500);
      }
    };
  </script>
</template>
```

</comp-viewer>

CSSの設定技巧

あなたは `$ele.css = {...$ele.css, color:'red'}` の方法を使って、要素の特定のスタイルプロパティを変更することができます。これにより、他のスタイルプロパティに影響���与えることなく、スタイル全体を書き換えることなく、1つのプロパティのみを変更することができます。

### 示例

```html
<div id="myElement" style="color: blue; font-size: 18px;">Hello World</div>
<script>
  const myElement = $("#myElement");

  // 要素の色スタイルを変更し、他のスタイル属性を変更しないで保持する
  myElement.css = { ...myElement.css, color: 'red' };
</script>
```

上記の例では、`{ ...myElement.css, color: 'red' }`を使用することで、要素の色のスタイルのみを変更し、他のスタイル属性を保持しています。これは要素のスタイルを柔軟に変更する便利なテクニックです。