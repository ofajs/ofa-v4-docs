# css

`css` 方法用於獲取或設置目標元素的樣式。

## 直接使用

你可以直接使用 `css` 方法來獲取或設置元素的樣式。下面是一個示例：

<html-viewer>

```
<!-- 引入 ofa.js 到你的項目 -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div id="target">origin text</div>
<br>
<h4>logger</h4>
<div id="logger" style="border:#aaa solid 1px;padding:8px;"></div>

<script>
    $("#logger").text = $("#target").css.color;
    setTimeout(()=> {
        $('#target').css.color = 'red';
        $("#logger").text = $("#target").css.color;
    }, 1000);
</script>
```

</html-viewer>

## 全量設置

通過獲取的 `css` 對象，你可以得到直接設置在元素上的 style 值。下面是一個示例：

<html-viewer>

```
<!-- 引入 ofa.js 到你的項目 -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div id="target" style="color:red">origin text</div>
<br>
<h4>logger</h4>
<div id="logger" style="border:#aaa solid 1px;padding:8px;"></div>

<script>
    $("#logger").text = Object.keys($("#target").css);
   
    setTimeout(()=>{
        // 覆蓋已有樣式
        $("#target").css = {
            color: "blue",
            lineHeight: "5em"
        };
        $("#logger").text = Object.keys($("#target").css);
    }, 500);
</script>
```

</html-viewer>

使用 `css` 對象的特性，你可以快速地調整目標元素的樣式。

## 模板語法方式使用

你還可以通過模板語法來設置目標元素的樣式。下面是一個示例：

<comp-viewer comp-name="css-demo">

```html
<template component>
  <div :css.color="txt">I am target</div>
  <script>
    export default {
      tag: "css-demo",
      data: {
        txt: "red"
      },
      ready(){
        setTimeout(()=>{
          this.txt = "blue";
        }, 500);
      }
    };
  </script>
</template>
```

</comp-viewer>

## 設置 css 的技巧

你可以通過 `$ele.css = {...$ele.css, color:'red'}` 的方式來修改元素的某個樣式屬性，而不影響其他樣式屬性。這種方式可以在不重寫整個樣式的情況下，只修改其中一個屬性。

### 示例

```html
<div id="myElement" style="color: blue; font-size: 18px;">Hello World</div>
<script>
  const myElement = $("#myElement");

  // 修改元素的顏色樣式，同時保留其他樣式屬性不變
  myElement.css = { ...myElement.css, color: 'red' };
</script>
```

在上面的示例中，通過使用 `{ ...myElement.css, color: 'red' }`，我們只修改了元素的顏色樣式，而將其他樣式屬性保持不變。這是一個很方便的技巧，可以靈活地修改元素的樣式。