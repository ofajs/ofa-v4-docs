# 常用方法

## attr

`attr` 方法允許您獲取或設置元素的屬性。

```html
<div id="example" name="i am hello word">Hello World</div>
<script>
    const $div = $('#example');
    console.log($div.attr('name')); // 輸出: "i am hello word"
    $div.attr('title', "change title");
</script>
```

在上面的示例中，我們首先選擇了一個具有 `id` 為 "example" 的 `div` 元素。然後，我們使用 `attr` 方法來獲取該元素的 `name` 屬性，並將其打印到控制台。接下來，我們使用 `attr` 方法來設置該元素的 `title` 屬性為 "change title"。