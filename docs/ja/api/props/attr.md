# attr

`attr` メソッドは、要素の [attributes](https://developer.mozilla.org/en-US/docs/Web/API/Element/attributes) を取得または設定するために使用されます。

## 直接使用

`attr`メソッドを使用して、要素の属性を直接取得または設定することができます。以下は例です：%

<html-viewer>

```
<!-- ofa.jsをプロジェクトにインポートする -->
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

## テンプレート構文の使用方法

attr:aaa="bbb" のように、テンプレート内で使用することもできます。これにより、対象要素の **aaa** 属性をコンポーネント **bbb** の値に設定することができます。この方法は、コンポーネントのレンダリングに特に役立ちます。以下に例を示します。

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