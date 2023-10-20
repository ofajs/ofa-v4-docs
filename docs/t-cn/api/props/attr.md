# attr

`attr` 方法用於獲取或設置元素的 [attributes](https://developer.mozilla.org/en-US/docs/Web/API/Element/attributes)。

## 直接使用

你可以直接使用 `attr` 方法獲取或設置元素的屬性。下面是一個示例：

<html-viewer>

```
<!-- 引入 ofa.js 到你的項目 -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<style>
    [test-attr="1"] {
      color: red;
    }
    [test-attr="2"]{
      color: green;
    }
</style>
<div id="target1" test-attr="1">I am target 1</div>
<div id="target2">I am target 2</div>
<div id="logger" style="border:blue solid 1px;padding:8px;margin:8px;">logger</div>

<script>
    $("#logger").text = $("#target1").attr('test-attr');
    setTimeout(()=> {
        $("#target1").attr('test-attr', '2')
        $("#logger").text = $("#target1").attr('test-attr');
    }, 500);
</script>
```

</html-viewer>

## 模板語法方式使用

你還可以在模板內使用 `attr:aaa="bbb"` 方式，將目標元素的 **aaa** 屬性設置為組件 **bbb** 的值。這種方法對於組件渲染特別有用。下面是一個示例：

<comp-viewer comp-name="html-demo">

```html
<template component>
  <style>
    [test-attr="1"] {
      color: red;
    }
    [test-attr="2"]{
      color: green;
    }
  </style>
  <div attr:test-attr="txt">I am target</div>
  <script>
    export default {
      tag: "html-demo",
      data: {
        txt: "1"
      },
      ready(){
        setTimeout(()=>{
          this.txt = "2";
        }, 500);
      }
    };
  </script>
</template>
```

</comp-viewer>