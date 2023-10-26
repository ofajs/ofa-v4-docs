# unwrap

`unwrap` メソッドは、対象要素から外部のラップされた要素を削除するために使用されます。

下面是一个示例：

<html-viewer>

```
<!-- ofa.js をプロジェクトに読み込む -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<style> div{border: #aaa solid 1px; margin:8px; padding:8px;} </style>
<div style="color:red;border-color:red;">
    <div id="target">I am target</div>
</div>

<script>
    setTimeout(()=>{
        $('#target').unwrap();
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

$el.unwrap(); // ❌ エラー、親要素がないためunwrapすることができません
$el.$('#target').unwrap(); // ✅ 正し��、包装された要素を削除します
```

当拥有其他兄弟元素时，也不可以执行 unwrap；

```javascript
const $el = $(`
<div>
    <div id="target"></div>
    <div>I am siblings</div>
</div>
`);

$el.$('#target').unwrap(); // ❌ エラー、他の隣接ノードが存在するため
```

**注意：テンプレートの構文が含まれる要素を操作しないでください。**