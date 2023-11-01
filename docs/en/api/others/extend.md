# extend

extend is a higher-order function used to extend properties or methods of an instance;

<html-viewer>

```html
<!-- Import ofa.js into your project -->
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

## Extending $ Underlying

Like jQuery, you can also extend the properties or methods of the underlying instance through fn.extend; properties or methods extended from fn will be applied to all instances;

<html-viewer>

```html
<!-- Import ofa.js into your project -->
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

## Extended Template Syntax

By extending properties or functions through `extend`, you can enhance the functionality of template syntax and even provide exclusive template syntax for components. However, it should be noted that it is recommended **not to use** unofficial template syntax because they can be difficult for users to learn, and a large number of unofficial template syntax can degrade the development experience.

### Extended Properties

You can use `:` in templates to set extended attributes. Here we will extend a `red` attribute, and when `red` is `true`, the font color becomes red.

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

In this example, we added a `red` attribute to the template syntax, and when `count % 3` is not equal to 0, the font color will turn red.

### Extended Methods

You can also use the `extend` extension method to make it available in template syntax. The method name is the part before the colon. Here, we extended a `color` template syntax, and the arguments following it will be passed to the defined extension method.

This sets the `always` attribute to `true`, which means that every time the component needs to refresh the interface, this defined method will be called. If `always` is not set, the template syntax function will only run once.

The `options` provides additional parameters that can help you develop more customized template syntax.

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

## Template Syntax Principles

So far, you should have been able to understand that many template syntaxes on ofa.js are actually extended through `extend`.

- The `class` and `attr` methods will be executed every time the view is refreshed.
- Functions like `on` and `one` bindings will only be executed once.

You can refer to the example below to better understand the template rendering principle of ofa.js:

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