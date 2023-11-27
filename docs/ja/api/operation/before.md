# before

`before` メソッドは、対象の要素の前に要素を追加するためのものです。`before` 操作を実行する前に、自動的に [$ メソッド](../instance/dollar.md) の初期化操作が実行されるため、具体的な要素の文字列やオブジェクトを直接入力することができます。

注意してください、テンプレートの文法が含まれている要素を操作しないでください。

<html-viewer>

```
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.min.js"></script>
```

```html
<ul>
    <li>I am 1</li>
    <li id="target">I am 2</li>
    <li>I am 3</li>
</ul>

<script>
    setTimeout(()=>{
        $('#target').before(`<li style="color:red;">new li</li>`);
    }, 500);
</script>
```

</html-viewer>