# ofa.js 新時代漸進式JavaScript框架

<simp-block>

<punch-logo>
    <img src="../publics/logo.svg" width="100" logo alt="ofa.js" />
    <h2>ofa.js</h2>
    <img src="../publics/npm-logo.png" slot="fly" height="40" alt="npm" />
    <img src="../publics/nodejs-logo.png" slot="fly" height="40" alt="nodejs" />
    <img src="../publics/webpack-logo.png" slot="fly" height="40" alt="webpack" />
</punch-logo>

## 新時代最簡單的 JavaScript 框架

### 無需繁瑣學習，無需 npm、nodejs、webpack，即刻上手

[案例教程](./cases/index.md)

```html
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.25/dist/ofa.min.js"></script>
```

</simp-block>

<simp-block>

## 基於 Web Components 封裝的 ofa.js

### 走進新時代，Web Components 已廣泛支持，嘗試一下 ofa.js，看它是否適合您。

<support-platforms></support-platforms>

<a href="../publics/download/ofajs-start.zip" target="_blank">下載初始化項目</a>
<a href="../publics/download/ofajs-start/index.html" target="_blank">在線查看初始化項目</a>

</simp-block>

<simp-block>

## 極低使用門檻

與其他前端框架不同，使用基於ofa.js開發的組件無需閱讀繁雜入門指南。立刻創建一個 HTML 文件，體驗一下“一拳撞飛logo”的組件。

<html-viewer style="width:100%;">

```
<!-- 將 ofa.js 引入項目 -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.25/dist/ofa.min.js"></script>
<!-- 加載開發好的 punch-logo 組件 -->
<l-m src="https://kirakiray.github.io/ofa-v4-docs/docs/publics/comps/punch-logo.html"></l-m>
```

```html
<!-- 使用 punch-logo 組件 -->
<punch-logo style="margin:50px 0 0 100px;">
    <img src="https://kirakiray.github.io/ofa-v4-docs/docs/publics/logo.svg" logo height="90" />
    <h2>不加班了</h2>
    <p slot="fly">下班給我</p>
    <p slot="fly">遲點下班</p>
    <p slot="fly">周末加班</p>
</punch-logo>
```

</html-viewer>

</simp-block>

<simp-block>

## 一步封裝組件，擺脫繁瑣流程

以往的 Web Components 封裝涉及繁雜的知識學習，而現在，只需一個文件。

<comp-viewer comp-name="my-switch" max-height="500" style="width:100%;">

```html
<template component>
  <style>
    .switch {
      position: relative;
      display: inline-block;
      width: 60px;
      height: 34px;
      background-color: #ccc;
      transition: background-color 0.4s;
      border-radius: 34px;
      cursor: pointer;
    }

    .slider {
      position: absolute;
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      transition: transform 0.4s;
      border-radius: 50%;
    }

    .switch.checked {
      background-color: #2196f3;
    }

    .switch.checked .slider {
      transform: translateX(26px);
    }
  </style>
  <div class="switch" class:checked="checked" on:click="checked = !checked">
    <span class="slider"></span>
  </div>
  <script>
    export default {
      tag: "my-switch",
      data: {
        checked: true,
      },
    };
  </script>
</template>
```

</comp-viewer>

</simp-block>


<simp-block>

## 提供多樣便捷的模板語法

<case-switch>

<comp-viewer switch-name="Render Text" comp-name="text-demo" max-height="500" style="width:100%;">

```html
<template component>
  <div>渲染文本: {{txt}}</div>
  <script>
    export default {
      tag: "text-demo",
      data: {
        txt:"我是txt"
      },
    };
  </script>
</template>
```

</comp-viewer>

<comp-viewer switch-name="Set Properties" comp-name="prop-demo" max-height="500" style="width:100%;">

```html
<template component>
  <div :text="txt1"></div>
  <div :html="txt2"></div>
  <script>
    export default {
      tag: "prop-demo",
      data: {
        txt1:"<b>我是txt1</b>",
        txt2:"<b>我是txt2</b>",
      },
    };
  </script>
</template>
```

</comp-viewer>


<comp-viewer switch-name="Sync Data" comp-name="sync-demo" max-height="500" style="width:100%;">

```html
<template component>
  <div>{{txt}}</div>
  <input type="text" sync:value="txt" />
  <script>
    export default {
      tag: "sync-demo",
      data: {
        txt:"I am txt",
      },
    };
  </script>
</template>
```

</comp-viewer>

<comp-viewer switch-name="Bind Event" comp-name="event-demo" max-height="500" style="width:100%;">

```html
<template component>
  <div>count: {{count}}</div>
  <button on:click="count++">count++</button>
  <script>
    export default {
      tag: "event-demo",
      data: {
        count: 0
      },
    };
  </script>
</template>
```

</comp-viewer>

<comp-viewer switch-name="Use If" comp-name="if-demo" max-height="500" style="width:100%;">

```html
<template component>
  <x-if :value="count % 2">
    <div style="color:red">{{count}}</div>
  </x-if>
  <x-else>
    <div style="color:blue">{{count}}</div>
  </x-else>
  <button on:click="count++">count++</button>
  <script>
    export default {
      tag: "if-demo",
      data: {
        count: 0
      },
    };
  </script>
</template>
```

</comp-viewer>


<comp-viewer switch-name="Use Fill" comp-name="fill-demo" max-height="500" style="width:100%;">

```html
<template component>
  <ul>
  <x-fill :value="lists">
    <li>{{$index}} - {{$data.name}}</li>
  </x-fill>
  </ul>
  <script>
    export default {
      tag: "fill-demo",
      data: {
        lists:[{name:"One"}, {name:"Two"}, {name:"Three"}]
      },
    };
  </script>
</template>
```

</comp-viewer>

</case-switch>

</simp-block>

<simp-block>

## 可替代 jQuery 的選擇

### 擁有與 jQuery 類似的 API，讓您感受同樣的便捷。

<split-code>

```javascript
// jQuery Code
$("#target").html("some html code"); // 設置 html
$("#target").text("set text"); // 設置 text
var ele_text = $("#target").text(); // 獲取 text
var parents = $("#target").parents(); // 獲取所有父層的數組
var child = $("#target").children()[0]; // 獲取第一個子元素
```

```javascript
// ofa.js Code
$("#target").html = "some html code";  // 設置 html
$("#target").text = "set text"; // 設置 text
var ele_text = $("#target").text; // 獲取 text
var parents = $("#target").parents; // 獲取所有父層的數組
var child = $("#target")[0]; // 獲取第一個子元素
```

</split-code>

</simp-block>

<simp-block>

## 使用案例

<a href="https://obook.ofajs.com/">obook 最簡單的文檔建站工具</a>

</simp-block>

<l-m src="https://cdn.jsdelivr.net/npm/obook@2.1.27/blocks/simp-block.html"></l-m>
<l-m src="../publics/comps/punch-logo.html"></l-m>
<l-m src="../publics/comps/support-platforms.html"></l-m>
<l-m src="../publics/comps/case-switch.html"></l-m>
<l-m src="../publics/comps/split-code.html"></l-m>