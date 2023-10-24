# class

你可以通過 `class` 語法快速切換模板內的 class 名。在 `class:aaa="bbb"` 中，當 `bbb` 表達式(或組件自身的 `bbb` 屬性)為 `true` 時，會為目標元素添加 `aaa` 這個 className。

請注意，className 不能包含大寫字母，請使用 `-` 作為分隔符。

以下是一個示例，演示了如何使用 `class` 語法在模板中切換元素的 class 名：

<comp-viewer comp-name="test-class">

```html
<template component>
    <style>
        .color-red{
            color:red;
        }
        .color-blue{
            color:blue;
        }
    </style>
    <div 
      class:color-red="txt == 1" 
      class:color-blue="txt == 2" 
      on:click="switch1">Click Me</div>
    <script>
        export default {
          tag:"test-class",
          data:{
            txt:"1"
          },
          proto:{
            switch1(){
              this.txt = (this.txt == 1) ? 2 : 1;
            }
          }
        };
    </script>
</template>
```

</comp-viewer>

## 直接使用 class

你可以使用 `class` 方法來直接調整元素的 className。在下面的示例中，演示了如何使用 `class` 方法來動態添加和刪除類名：

<html-viewer>

```
<!-- 將 ofa.js 引入項目 -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<style>
    .color-red{
        color:red;
    }
    .color-blue{
        color:blue;
    }
</style>
<div id="target">I am target</div>

<script>
    setTimeout(()=>{
        $('#target').class('color-red',true);
    },500);
    setTimeout(()=>{
        $('#target').class('color-red',false);
    },1000);
    setTimeout(()=>{
        $('#target').class('color-blue',true);
    },1500);
</script>
```

</html-viewer>


在這個示例中，我們首先通過 `class` 方法將 `color-red` 類添加到元素上，然後在一秒後將其移除，再過半秒後將 `color-blue` 類添加到元素上。這會動態更改目標元素的樣式。

我們建議使用 [classList](../props/class-list.md) 屬性來操作類名，因為這是更常見和標準的方法。