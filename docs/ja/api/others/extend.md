# extend

extendはインスタンスの属性やメソッドを拡張するための高度なメソッドです。

<html-viewer>

```html
<!-- ofa.jsをプロジェクトにインポートする -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<ul>
    <li>I am 1</li>
    <li id="target">I am target</li>
    <li>I am 3</li>
</ul>
<div id="logger">logger</div>

<script>
  const target = $("#target");
  
  target.extend({
    get good(){
      return "ofa.js is good";
    },
    say(){
      return 'mother fxxker';
    }
  });
   
  setTimeout(() => {
    const target = $("#target");
    $("#logger").html = `
    good : ${target.good} <br>
    say() : ${target.say()}
    `;
  }, 500);
</script>
```

</html-viewer>

## 拡張 $ 下層

よく似たように、fn.extendを使用してベースインスタンスのプロパティやメソッドを拡張することもできます。fnから拡張されたプロパティやメソッドは、すべてのインスタンスに適用されます。

<html-viewer>

```html
<!-- ofa.jsをプロジェクトにインポートする -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js/dist/ofa.min.js"></script>
```

```html
<ul>
    <li>I am 1</li>
    <li id="target">I am target</li>
    <li>I am 3</li>
</ul>
<div id="logger">logger</div>

<script>
  const target = $("#target");
  
  $.fn.extend({
    get good(){
      return "ofa.js is good";
    },
    say(){
      return 'mother fxxker';
    }
  });
   
  setTimeout(() => {
    $("#logger").html = `
    target good : ${$("#target").good} <br>
    logger say() : ${$("#logger").say()}
    `;
  }, 500);
</script>
```

</html-viewer>

## 拡張テンプレートの文法

`extend` 属性や関数を使用することで、テンプレートの文法を追加したり、コンポーネントに独自のテンプレートのシンタックスシュガーを提供したりすることができます。ただし、非公式のテンプレート言語を使用することは避けるべきです。非公式のテンプレート言語は学習コストを増やし、開発体験を低下させる可能性があるためです。

### 拡張プロパティ

あなたは、テンプレート内で `:` を使用して属性を拡張することができます。以下では、`red` 属性を追加して、`red`が `true` の場合にフォントの色を赤に変更します。

```javascript
$.fn.extend({
  set red(bool){
    if(bool){
      this.css.color = "red";
    }else{
      this.css.color = '';
    }
  }
});
```

<comp-viewer comp-name="temp-one">

```
<script>
$.fn.extend({
  set red(bool){
    if(bool){
      this.css.color = "red";
    }else{
      this.css.color = '';
    }
  }
});
</script>
<temp-one></temp-one>
```

```html
<template component>
  <button on:click="addCount">Add Count</button>
  <div :red="count % 3">{{count}}</div>
  <script>
    export default {
      tag: "temp-one",
      data: {
        count: 0
      },
      proto:{
        addCount(){
          this.count++;
        },
      }
    };
  </script>
</template>
```

</comp-viewer>

この例では、テンプレートの文法に `red` 属性を追加しました。`count % 3` が 0 でない場合、フォントの色が赤色になります。

### 拡張機能テンプレート

extendメソッドを使用して、テンプレートの構文で利用できるようにすることもできます。メソッド名はコロンの前の部分です。ここでは、`color`テンプレート構文を拡張しました。後に続くパラメータは定義された拡張メソッドに渡されます。

ここでは、`always` 属性が `true` に設定されており、コンポーネントが画面を更新するタイミングで常にこの定義されたメソッドが呼び出されることを意味します。`always` を設定しない場合、このテンプレートの関数は一度だけ実行されます。

optionsを使用すると、よりカスタマイズ性の高いテンプレート構文を開発することができます。

```javascript
$.fn.extend({
  color(color, func, options){
    const bool = func();
    // console.log(bool,options);
    if(bool){
      this.css.color = color;
    }else{
      this.css.color = '';
    }
  }
});

$.fn.color.always = true;
```

<comp-viewer comp-name="temp-two">

```
<script>
$.fn.extend({
  color(color, func, options){
    const bool = func();
    console.log(bool,options);
    if(bool){
      this.css.color = color;
    }else{
      this.css.color = '';
    }
  }
}); 

$.fn.color.always = true;
</script>
<temp-two></temp-two>
```

```html
<template component>
  <button on:click="addCount" color:blue="count % 3">Add Count</button>
  <div color:red="!(count % 3)">{{count}}</div>
  <script>
    export default {
      tag: "temp-two",
      data: {
        count: 0
      },
      proto:{
        addCount(){
          this.count++;
        },
      }
    };
  </script>
</template>
```

</comp-viewer>

## テンプレート構文の原理

現時点では、多くのテンプレート構文が `extend` を使って拡張されていることが、あなたには理解できているはずです。

- `class`、`attr` メソッドはビューを更新するたびに実行されます。
- `on`、`one` という関数バインディングは一度だけ実行されます。

以下は、ofa.jsのテンプレート・レンダリングの原則をよりよく理解するために使用できる例です：

<comp-viewer comp-name="temp-three">

```html
<template component>
  <div>class always => {{classalways}}</div>
  <div>attr always => {{attralways}}</div>
  <div>on always => {{onalways}}</div>
  <script>
    export default {
      tag: "temp-three",
      data: {
        classalways:"",
        attralways:"",
        onalways:""
      },
      ready(){
        this.classalways = $.fn.class.always;
        this.attralways = $.fn.attr.always;
        this.onalways = !!$.fn.on.always;
      }
    };
  </script>
</template>
```

</comp-viewer>