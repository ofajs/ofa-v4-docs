# wrap

`wrap` 方法用於在目標元素的外部包裹一層元素。在執行 `wrap` 操作之前，會自動執行 [$ 方法](../instance/dollar.md) 的初始化操作，因此可以直接填寫具體的元素字符串或對象。

下面是一個示例：

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

## 注意事項

目標元素必須擁有父節點，否則包裹操作會失敗。

```javascript
const $el = $(`
<div>
    <div id="target"></div>
</div>
`);

$el.wrap("<div>new div</div>"); // ❌ 錯誤，沒有父元素，無法包裹
$el.$('#target').wrap("<div>new div</div>"); // ✅ 正確，有父元素
```

**請注意，在具有模板語法的元素上不要操作元素。**