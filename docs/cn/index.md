# ofa.js 新时代渐进式JavaScript框架

<l-m src="https://cdn.jsdelivr.net/npm/obook@2.1.24/blocks/simp-block.html"></l-m>
<l-m src="../publics/comps/punch-logo.html"></l-m>
<l-m src="../publics/comps/support-platforms.html"></l-m>
<l-m src="../publics/comps/case-switch.html"></l-m>

<simp-block>

## 提供多种便利的模板语法

<case-switch>

<comp-viewer switch-name="text" comp-name="render-text" max-height="500" style="width:100%;">

```html
<template component>
  <div>渲染文本: {{txt}}</div>
  <script>
    export default {
      tag: "render-text",
      data: {
        txt:"我是txt"
      },
    };
  </script>
</template>
```

</comp-viewer>

<comp-viewer switch-name="prop" comp-name="render-prop" max-height="500" style="width:100%;">

```html
<template component>
  <div :text="txt1"></div>
  <div :html="txt2"></div>
  <script>
    export default {
      tag: "render-prop",
      data: {
        txt1:"<b>我是txt1</b>",
        txt2:"<b>我是txt2</b>",
      },
    };
  </script>
</template>
```

</comp-viewer>

</case-switch>

</simp-block>

<simp-block>

<punch-logo>
    <img src="../publics/logo.svg" width="100" logo alt="ofa.js" />
    <h2>ofa.js</h2>
    <img src="../publics/npm-logo.png" slot="fly" height="40" alt="npm" />
    <img src="../publics/nodejs-logo.png" slot="fly" height="40" alt="nodejs" />
    <img src="../publics/webpack-logo.png" slot="fly" height="40" alt="webpack" />
</punch-logo>

## 新时代最简单的 JavaScript 框架

### 不用学习npm，nodejs，webpack，直接动手就能用

[案例教程](./cases/index.md)

```html
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.20/dist/ofa.min.js"></script>
```

</simp-block>

<simp-block>

## ofa.js 基于  web components 封装

### 新时代已到，web components 已被普遍支持，试一下 ofa.js 看好不好用

<support-platforms></support-platforms>

<a href="../publics/download/start.zip" download="ofa-start.zip">下载初始化项目</a>
<a href="../publics/download/start/index.html" target="_blank">在线查看初始化项目</a>

</simp-block>


<simp-block>

## 极低的使用门槛

无论你使用哪个前端框架，基本避不开先把框架的入门指南看一遍，才能开始使用基于该框架开发的东西

而基于 ofa.js 开发的组件可以不看 ofa.js 的入门指南，现在，直接新建一个html，尝试一下使用一拳撞飞logo的组件

<html-viewer style="width:100%;">

```
<!-- 将 ofa.js 引入项目 -->
<script src="https://cdn.jsdelivr.net/gh/kirakiray/ofa.js@4.3.20/dist/ofa.min.js"></script>
<!-- 加载开发好的 punch-logo 组件 -->
<l-m src="https://kirakiray.github.io/ofa-v4-docs/docs/publics/comps/punch-logo.html"></l-m>
```

```html
<!-- 使用 punch-logo 组件 -->
<punch-logo style="margin:50px 0 0 100px;">
    <img src="https://kirakiray.github.io/ofa-v4-docs/docs/publics/logo.svg" logo height="90" />
    <h2>不加班了</h2>
    <p slot="fly">现在就要</p>
    <p slot="fly">晚点再走</p>
    <p slot="fly">周末加班</p>
</punch-logo>
```

</html-viewer>

</simp-block>

<simp-block>

## 一步封装组件，无繁琐流程

传统的 web components 封装需要学习很多知识，现在你只需要一个文件

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

## 银弹型开发框架

### 简化了网页组件的封装，既能当普通库使用，也能开发网页应用

</simp-block>

<simp-block>

## jQuery的替代品

### 类似 jQuery 一样的 api，用起来特别流畅

</simp-block>