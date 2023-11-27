# 盒模型

在網頁開發中，元素的尺寸是一個重要的概念，它包括了內容區域、內邊距、邊框和外邊距。以下是一些表示元素尺寸的相關屬性：

## width

`width` 表示元素的內容區域的寬度，它不包括內邊距、邊框和外邊距。

## height

`height` 表示元素的內容區域的高度，它不包括內邊距、邊框和外邊距。

## clientWidth

`clientWidth` 表示元素的可見內容區域的寬度，包括內邊距，但不包括邊框和外邊距。

## clientHeight

`clientHeight` 表示元素的可見內容區域的高度，包括內邊距，但不包括邊框和外邊距。

## offsetWidth

`offsetWidth` 表示元素的整體寬度，包括內容區域、內邊距、邊框和外邊距。

## offsetHeight

`offsetHeight` 表示元素的整體高度，包括內容區域、內邊距、邊框和外邊距。

## outerWidth

`outerWidth` 表示元素的整體寬度，包括內容區

<html-viewer>

```
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.40/dist/ofa.min.js"></script>
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