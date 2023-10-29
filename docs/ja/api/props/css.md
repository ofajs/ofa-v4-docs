# css

cssメソッドは、対象の要素のスタイルを取得または設定するために使用されます。

## 直接使用

cssメソッドを使用して、要素のスタイルを取得または設定することができます。以下は例です。

<html-viewer>

```
<!-- ofa.jsをプロジェクトにインポートする -->
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

## グローバル設定

取得した `css` オブジェクトを使用して、要素に直接設定されたスタイル値を取得することができます。以下は例です：

<html-viewer>

```
<!-- ofa.jsをプロジェクトにインポートする -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div id="target" style="color:red">origin text</div>
<br>
<h4>logger</h4>
<div id="logger" style="border:#aaa solid 1px;padding:8px;"></div>

<script>
    $("#logger").text = Object.keys($("#target").css);
   
    setTimeout(()=>{
        // 既存のスタイルを上書きする
        $("#target").css = {
            color: "blue",
            lineHeight: "5em"
        };
        $("#logger").text = Object.keys($("#target").css);
    }, 500);
</script>
```

</html-viewer>

css オブジェクトの特性を使用すると、ターゲット要素のスタイルを簡単に調整することができます。

## テンプレート構文の使用方法

あなたはテンプレートの文法を使用して、ターゲット要素のスタイルを設定することもできます。以下は例です。

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

## css設定のヒント

`$ele.css = {...$ele.css, color:'red'}`という方法を使用して、要素の特定のスタイルプロパティを変更することができます。他のスタイルプロパティに影響を与えることはありません。この方法は、全体のスタイルを書き換えることなく、1つのプロパティのみを変更することがでます。

### サンプル

```html
<div id="myElement" style="color: blue; font-size: 18px;">Hello World</div>
<script>
  const myElement = $("#myElement");

  // 要素の色のスタイルを変更し、他のスタイルプロパティを変更せずに保持する
  myElement.css = { ...myElement.css, color: 'red' };
</script>
```

上記の例では、`{ ...myElement.css, color: 'red' }`を使用して、要素の色のスタイルのみを変更し、他のスタイルプロパティを変更しないようにしました。これは要素のスタイルを柔軟に変更するための便利なテクニックです。