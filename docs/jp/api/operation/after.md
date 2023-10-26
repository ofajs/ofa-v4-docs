# after

`after` メソッドは、対象の要素の後ろに要素を追加するために使用されます。`after` メソッドを実行する前に、自動的に [$ メソッド](../instance/dollar.md) の初期化が行われるため、具体的な要素の文字列またはオブジェクトを直接指定することができます。

**注意：テンプレートの構文が含まれる要素を操作しないでください。**

<html-viewer>

```
<!-- ofa.js をプロジェクトに読み込む -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<ul>
    <li>I am 1</li>
    <li id="target">I am 2</li>
    <li>I am 3</li>
</ul>

<script>
    setTimeout(()=>{
        $('#target').after(`<li style="color:red;">new li</li>`);
    }, 500);
</script>
```

</html-viewer>