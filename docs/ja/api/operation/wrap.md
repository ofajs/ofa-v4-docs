# wrap

`wrap` メソッドは、対象の要素の外側に要素をラッピングするために使用されます。`wrap` 操作の前に、自動的に [$ メソッド](../instance/dollar.md) の初期化操作が実行されるため、具体的な要素文字列またはオブジェクトを直接指定することができます。

以下は例です：

<html-viewer>

```
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.min.js"></script>
```

```html
<style> div{border: #aaa solid 1px; margin:8px; padding:8px;} </style>
<div>
    <div>I am 1</div>
    <div id="target">I am 2</div>
    <div>I am 3</div>
</div>

<script>
    setTimeout(()=>{
        $('#target').wrap(`<div style="border-color:red;">wrap</div>`);
    }, 500);
</script>
```

</html-viewer>

## 注意

目標要素は親ノードを持っている必要があります。そうでない場合、包括操作は失敗します。

```javascript
const $el = $(`
<div>
    <div id="target"></div>
</div>
`);

$el.wrap("<div>新しいdiv</div>"); // ❌ エラー、親要素がないのでラップできません
$el.$('#target').wrap("<div>新しいdiv</div>"); // ✅ 正しい、親要素があるのでラップできます
```

注意してください、テンプレートの文法が含まれている要素を操作しないでください。