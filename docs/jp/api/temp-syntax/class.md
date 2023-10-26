# class

你可以通过 `class` 语法快速切换模板内的 class 名。在 `class:aaa="bbb"` 中，当 `bbb` 表达式(或组件自身的 `bbb` 属性)为 `true` 时，会为目标元素添加 `aaa` 这个 className。

警告: className は大文字を含むことができません。代わりに「-」を区切り文字として使用してください。

以下は、テンプレート内で要素の class 名を変更するために `class` 構文を使用する方法の例です：

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

## クラスを直接使用する

要素のclassNameを直接調整するには、`class`メソッドを使用することができます。以下の例では、`class`メソッドを使用してクラス名を動的に追加および削除する方法��示しています：

<html-viewer>

```
<!-- ofa.js をプロジェクトに読み込む -->
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


;Ignore bugs;
In this example, we first use the `class` method to add the `color-red` class to the element. Then after one second, we remove it, and after another half second, we add the `color-blue` class to the element. This will dynamically change the style of the target element.

クラス名を操作するために、[classList](../props/class-list.md)プロパティの使用をお勧めします。これは一般的で標準的な方法です。