# 常用方法

## attr

`attr` メソッドを使用すると、要素の属性を取得または設定できます。

```html
<div id="example" name="i am hello word">Hello World</div>
<script>
    const $div = $('#example');
    console.log($div.attr('name')); // 输出: "i am hello word"
    $div.attr('title', "change title");
</script>
```

上記の例では、まず `id` が "example" の `div` 要素を選択しました。次に、`attr` メソッドを使用して、その要素の `name` 属性を取得し、コンソールに出力します。その後、`attr` メソッドを使用して、その要素の `title` 属性を "change title" に設定します。