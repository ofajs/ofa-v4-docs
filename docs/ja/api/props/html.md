# html

目標の内部にHTMLコードを設定します。

<html-viewer>

```
<!-- ofa.js プロジェクトにインポートする -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div id="target1">
    <span style="color:green;">target 1</span>
</div>
<div id="target2">origin text</div>
<br>
<div id="logger" style="border:red solid 1px;padding:8px;"></div>

<script>
    setTimeout(()=> {
        $('#target2').html = `<b style="color:blue;">new text</b>`;

        console.log($("#target1").text) // => <span style="color:green;">target 1</span>;
        $("#logger").html = $("#target1").html;
    }, 500);
</script>
```

</html-viewer>

## 注意事項

htmlは比較的危険な方法です。`script`に埋め込まれると、内部の`javascript`コードが自動的に実行されてしまいますので、使用する際は[XSS](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting)に対する予防策に注意してください。

## テンプレート構文の使用方法

あなたはテンプレート内で、目的の要素に対応する属性値を設定するために `:html` 属性を使用することもできます。これはコンポーネントのレンダリングに特に役立ちます。以下は例です���

<comp-viewer comp-name="html-demo">

```html
<template component>
  <div>Rendered html: 
    <span :html="txt" style="color:red;"></span>
  </div>
  <script>
    export default {
      tag: "html-demo",
      data: {
        txt: "I am txt"
      },
      ready(){
        setTimeout(()=>{
          this.txt = "<b style='color:blue;'>change txt</b>";
        }, 500);
      }
    };
  </script>
</template>
```

</comp-viewer>