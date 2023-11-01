# extend

extend 是一個高階方法，用於擴展實例的屬性或方法；

<html-viewer>

```html
<!-- 引入 ofa.js 到你的項目 -->
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

## 擴展 $ 底層

和 jQuery 類似，你也可以通過 fn.extend 擴展底層實例的屬性或方法；從 fn 擴展的屬性或方法會應用到所有實例上；

<html-viewer>

```html
<!-- 引入 ofa.js 到你的項目 -->
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

## 擴展模板語法

通過 `extend` 擴展屬性或函數，可以增加模板語法的功能，甚至為組件提供專屬的模板語法糖。但需要注意的是，盡量**不要使用**非官方的模板語法，因為它們會給使用者帶來一定的學習成本，並且大量非官方模板語法糖會降低開發體驗。

### 擴展屬性

你可以通過擴展屬性，在模板中使用 `:` 來進行設置。下面我們將擴展一個 `red` 屬性，當 `red` 為 `true` 時，字體顏色變為紅色：

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

在這個示例中，我們為模板語法添加了一個 `red` 屬性，當 `count % 3` 不為 0 時，字體顏色將變為紅色。

### 擴展方法

你還可以通過 `extend` 擴展方法，使其在模板語法中可用。方法名稱就是冒號前的部分。在這裏，我們擴展了一個 `color` 模板語法，後面跟著的參數將被傳遞給定義的擴展方法。

此處設置了 `always` 屬性為 `true`，表示在組件每次需要刷新界面的時機時，都會調用這個定義好的方法。如果不設置 `always`，那麽這個模板語法函數只會運行一次。

其中，`options` 提供了更多的參數，可以幫助你開發更具定制性的模板語法；

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

## 模板語法原理

到目前為止，你應該已經能夠理解，ofa.js 上的許多模板語法實際上是通過 `extend` 擴展出來的：

- `class`、`attr` 方法每次刷新視圖都會運行
- `on`、`one` 這種函數綁定只會運行一次

你可以查看下面的示例來更好地理解 ofa.js 的模板渲染原理：

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