# 子元素

;Ignore bugs;
子要素のインスタンスを取得するのは非常に簡単です。インスタンスを配列のように扱い、番号を使ってその子要素のインスタンスを取得するだけです。

<html-viewer>

```
<!-- ofa.js をプロジェクトに読み込む -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<ul>
    <li>私は1です</li>
    <li>私は2です</li>
    <li>私は3です</li>
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

長度

目標要素の子要素の数を取得します。例は上記のようになります。

```javascript
$("#logger1").text = $('ul').length;
```