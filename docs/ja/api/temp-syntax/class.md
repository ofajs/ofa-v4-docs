# class

あなたは `class` 構文を使用して、テンプレート内のクラス名を簡単に切り替えることができます。 `class:aaa="bbb"` では、 `bbb` 式（またはコンポーネント自体の `bbb` プロパティ）が `true` の場合、対象の要素に `aaa` という className が追加されます。

注意してください、className には大文字を含めることはできません。ハイフン `-` を区切り文字として使用してください。

以下は、テンプレートで要素のクラス名を切り替えるために `class` 構文を使用する方法を示す例です。

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

`class` メソッドを使用して要素の className を直接変更することができます。以下の例では、`class` メソッドを使用してクラス名を動的に追加および削除する方法を示しています。

<html-viewer>

```
<!-- ofa.js プロジェクトにインポートする -->
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


この例では、まず `class` メソッドを使用して `color-red` クラスを要素に追加し、1秒後にクラスを削除し、さらに0.5秒後に `color-blue` クラスを要素に追加します。これにより、対象の要素のスタイルが動的に変更されます。

私たちは、[classList](../props/class-list.md) プロパティを使用してクラス名を操作することをお勧めします。これはより一般的で標準的な方法です。