# 子要素

子要素のインスタンスの取得は非常に簡単です。インスタンスを配列のように扱い、番号で子要素のインスタンスを取得するだけです。

<html-viewer>

```
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.min.js"></script>
```

```html
<ul>
    <li>I am 1</li>
    <li>I am 2</li>
    <li>I am 3</li>
</ul>
<div id="logger1" style="color:red;"></div>
<div id="logger2" style="color:blue;"></div>

<script>
    setTimeout(()=>{
       $("#logger1").text = $('ul').length;
       $("#logger2").text = $('ul')[1].text;
    }, 500);

</script>
```

</html-viewer>

## length

目标要素の子要素の数を取得します。例は上記のようになります。

```javascript
$("#logger1").text = $('ul').length;
```