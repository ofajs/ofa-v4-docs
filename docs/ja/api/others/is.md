# is

要素が式に合致するかどうかを検出するために使用されます。

<html-viewer>

```html
<!-- ofa.jsをプロジェクトにインポートする -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<ul>
    <li>I am 1</li>
    <li id="target">I am target</li>
    <li>I am 3</li>
</ul>
<div id="logger">logger</div>

<script>
  setTimeout(() => {
    const target = $("#target");
    $("#logger").html = `
    Is li: ${target.is('li')} <br>
    Is div: ${target.is('div')} <br>
    Have id: ${target.is('[id]')} <br>
    Have class: ${target.is('[class]')} <br>
    `;
  }, 500);
</script>
```

</html-viewer>
