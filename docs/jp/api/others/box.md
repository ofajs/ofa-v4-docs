# ボックスモデル

ウェブ開発では、要素のサイズは重要な概念であり、内容領域、パディング、ボーダー、およびマージンを含みます。以下は要素のサイズを表す関連属性です：

## width

`width`は要素の内容領域の幅を表します。それにはパディング、ボーダー、マージンは含まれません。

## height

`height`は要素のコンテンツ領域の高さを表します。内側の余白、ボーダー、マージンは含まれません。

## clientWidth

`clientWidth` 表示元素的可见内容区域的宽度，包括内边距，但不包括边框和外边距。

## clientHeight

`clientHeight` 表示元素的可见内容区域的高度，包括内边距，但不包括边框和外边距。

## offsetWidth

`offsetWidth`は、要素の全体的な幅を表します。これには、コンテンツ領域、パディング、ボーダー、およびマージンが含まれます。

## offsetHeight

`offsetHeight` 表示元素的整体高度，包括内容区域、内边距、边框和外边距。

## outerWidth

outerWidthは、要素の全体の幅を示します。これには、内容領域を含みます。

<html-viewer>

```
<!-- ofa.js をプロジェクトに読み込む -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<style>
    #box {
      width: 150px;
      height: 100px;
      background-color: #f0f0f0;
      border: 2px solid #333;
      padding: 20px;
      margin: 30px;
    }
</style>
<div id="box">I am a div element.</div>

<div id="logger"></div>
<script>
    const box = $('#box');

    $("#logger").html = `
    width: ${box.width}px <br>
    height: ${box.height}px <br>
    clientWidth: ${box.clientWidth}px <br>
    clientHeight: ${box.clientHeight}px <br>
    offsetWidth: ${box.offsetWidth}px <br>
    offsetHeight: ${box.offsetHeight}px <br>
    outerWidth: ${box.outerWidth}px <br>
    outerHeight: ${box.outerHeight}px
    `;
</script>
```

</html-viewer>