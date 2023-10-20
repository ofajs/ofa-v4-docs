# text

`text` 方法用於獲取或設置元素的文本內容。

## 直接使用

你可以直接獲取或設置元素的文本內容。下面是一個示例：

<html-viewer>

```
<!-- Include ofa.js in your project -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div id="target1">target 1</div>
<div id="target2">origin text</div>
<br>
<div id="logger" style="color:red;"></div>

<script>
    setTimeout(()=> {
        $('#target2').text = `<b style="color:blue;">new text</b>`; // 只能設置文本，如果想要標簽生效，請設置 html 屬性

        console.log($("#target1").text) // => 'target 1';
        $("#logger").text = $("#target1").text;
    }, 500);
</script>
```

</html-viewer>

## 模板語法方式使用

你還可以在模板內使用 `:text` 屬性來向目標元素設置對應的屬性值。這在組件的渲染中特別有用。下面是一個示例：

<comp-viewer comp-name="text-demo">

```html
<template component>
  <div>Rendered text: 
    <span :text="txt" style="color:red;"></span>
  </div>
  <script>
    export default {
      tag: "text-demo",
      data: {
        txt: "I am txt"
      },
      ready(){
        setTimeout(()=>{
          this.txt = "change txt";
        }, 500);
      }
    };
  </script>
</template>
```

</comp-viewer>