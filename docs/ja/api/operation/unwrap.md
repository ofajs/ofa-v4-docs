# unwrap

`unwrap` メソッドは、ターゲット要素から外部のラップ要素を削除するために使用されます。

以下は例です：

<html-viewer>

```
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.min.js"></script>
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

## 注意

目標要素は親ノードを持っている必要があります。そうでない場合、包括操作は失敗します。

```javascript
const $el = $(`
<div>
    <div id="target"></div>
</div>
`);

$el.unwrap(); // ❌ エラー、親要素がないためunwrapできません
$el.$('#target').unwrap(); // ✅ 正しい、包まれた要素を取り除きます
```

その要素に他の兄弟要素がある場合、unwrap を実行することはできません。

```javascript
const $el = $(`
<div>
    <div id="target"></div>
    <div>私は兄弟です</div>
</div>
`);

$el.$('#target').unwrap(); // ❌ エラー、他の隣接ノードを持っているため
```

注意してください、テンプレートの文法が含まれている要素を操作しないでください。