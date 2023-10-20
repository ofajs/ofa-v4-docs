# extend

extend 是一个高阶方法，用于扩展实例的属性或方法；

<html-viewer>

```html
<!-- 引入 ofa.js 到你的项目 -->
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

## 扩展 $ 底层

和 jQuery 类似，你也可以通过 fn.extend 扩展底层实例的属性或方法；从 fn 扩展的属性或方法会应用到所有实例上；

<html-viewer>

```html
<!-- 引入 ofa.js 到你的项目 -->
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