# ボックスモデル

ウェブ開発では、要素のサイズは重要な概念であり、コンテンツ領域、パディング、ボーダー、マージンを含みます。以下は要素のサイズを示す関連するプロパティです。

## width

`width`は要素のコンテンツ領域の幅を表しますが、内側のパディング、ボーダー、およびマージンは含まれません。

## height

`height` は要素のコンテンツ領域の高さを表します。内側の余白、枠線、および外側の余白は含まれません。

## clientWidth

`clientWidth`は、要素の可視コンテンツ領域の幅を表し、内側のパディングを含みますが、ボーダーやマージンは含まれません。

## clientHeight

`clientHeight`は要素の可視コンテンツ領域の高さを表し、内部余白を含みますが、ボーダーや外部余白は含まれません。

## offsetWidth

offsetWidthは、要素の全体の幅を表し、内容領域、パディング、ボーダー、マージンを含みます。

## offsetHeight

`offsetHeight`は要素の全体の高さを表します。これにはコンテンツ領域、パディング、ボーダー、マージンが含まれます。

## outerWidth

`outerWidth`は、要素の全体の幅を表します。これにはコンテンツ領域も含まれます。

<html-viewer>

```
<!-- ofa.js プロジェクトにインポートする -->
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