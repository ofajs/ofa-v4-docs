# text

`text` メソッドは、要素のテキスト内容を取得または設定するために使用されます。

## 直接使用する

あなたは要素のテキストコンテンツを直接取得または設定することができます。以下は例です：

<html-viewer>

```
<!-- Include ofa.js in your project -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div id="target1">target 1</div>
<div id="target2">origin text</div>
<br>
<div id="logger" style="color:red;"></div>

<script>
    setTimeout(()=> {
        $('#target2').text = `<b style="color:blue;">new text</b>`; // 設定できるのはテキストのみで、ラベルを有効にしたい場合はhtml属性を設定する。

        console.log($("#target1").text) // => 'target 1';
        $("#logger").text = $("#target1").text;
    }, 500);
</script>
```

</html-viewer>

## テンプレート構文の使用方法

以下は、モデル内で `:text` 属性を使用して、ターゲット要素に対応する属性値を設定する方法です。これは、コンポーネントのレンダリングに特に便利です。以下はサンプルです：

<comp-viewer comp-name="text-demo">

```html
<template component>
  <div>Rendered text: 
    <span :text="txt" style="color:red;"></span>
  </div>
  <script>
    export default {
      tag: "text-demo",
      data: {
        txt: "I am txt"
      },
      ready(){
        setTimeout(()=>{
          this.txt = "change txt";
        }, 500);
      }
    };
  </script>
</template>
```

</comp-viewer>