# wrap

`wrap` 方法用于在目标元素的外部包裹一层元素。在执行 `wrap` 操作之前，会自动执行 [$ 方法](../instance/dollar.md) 的初始化操作，因此可以直接填写具体的元素字符串或对象。

下面是一个示例：

<html-viewer>

```
<!-- ofa.js をプロジェクトに読み込む -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
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

注意事項

目标元素必须拥有父节点，否则包裹操作会失败。

```javascript
const $el = $(`
<div>
    <div id="target"></div>
</div>
`);

$el.wrap("<div>new div</div>"); // ❌ エラー、親要素が存在しないため、ラップできません
$el.$('#target').wrap("<div>new div</div>"); // ✅ 正しい、親要素が存在するため
```

**注意：テンプレートの構文が含まれる要素を操作しないでください。**