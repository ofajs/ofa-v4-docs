# unwrap

`unwrap` 方法用於在目標元素的移除一層外部包裹的元素。

下面是一個示例：

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

## 注意事項

目標元素必須擁有父節點，否則包裹操作會失敗。

```javascript
const $el = $(`
<div>
    <div id="target"></div>
</div>
`);

$el.unwrap(); // ❌ 錯誤，沒有父元素，無法unwrap
$el.$('#target').unwrap(); // ✅ 正確，去除包裹的元素
```

當擁有其他兄弟元素時，也不可以執行 unwrap；

```javascript
const $el = $(`
<div>
    <div id="target"></div>
    <div>I am siblings</div>
</div>
`);

$el.$('#target').unwrap(); // ❌ 錯誤，因為擁有其它相鄰節點
```

**請注意，在具有模板語法的元素上不要操作元素。**