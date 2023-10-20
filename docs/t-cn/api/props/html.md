# html

設置目標內部的 html 代碼；

<html-viewer>

```
<!-- 將 ofa.js 引入項目 -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<div id="target1">
    <span style="color:green;">target 1</span>
</div>
<div id="target2">origin text</div>
<br>
<div id="logger" style="border:red solid 1px;padding:8px;"></div>

<script>
    setTimeout(()=> {
        $('#target2').html = `<b style="color:blue;">new text</b>`;

        console.log($("#target1").text) // => <span style="color:green;">target 1</span>;
        $("#logger").html = $("#target1").html;
    }, 500);
</script>
```

</html-viewer>

## 注意事項

html 是個比較危險的方法，被塞入 `script` 也會自動執行內部的 `javascript` 代碼，使用時注意預防 [XSS](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting)；

## 模板語法方式使用

你還可以在模板內使用 `:html` 屬性來向目標元素設置對應的屬性值。這在組件的渲染中特別有用。下面是一個示例：

<comp-viewer comp-name="html-demo">

```html
<template component>
  <div>Rendered html: 
    <span :html="txt" style="color:red;"></span>
  </div>
  <script>
    export default {
      tag: "html-demo",
      data: {
        txt: "I am txt"
      },
      ready(){
        setTimeout(()=>{
          this.txt = "<b style='color:blue;'>change txt</b>";
        }, 500);
      }
    };
  </script>
</template>
```

</comp-viewer>