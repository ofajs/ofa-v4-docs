# 组件的制作和使用

ofa.js使用最基础的HTML和JavaScript文件来定义组件，避免引入新的文件类型增加学习成本。只要你对HTML有一定的了解，就能快速开发和使用ofa.js组件。

## 创建一个按钮组件

接下来，我们将创建一个简单的按钮组件，命名为**simple-button**，它将具有比原生按钮更好看的样式。按钮组件由三个文件组成：

1. **simple-button.html**：按钮组件的HTML模板和样式。

```html
<!-- simple-button.html -->
<style>
  .shadow-button {
    background-color: #4caf50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 10px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
  .shadow-button:hover {
    opacity: 0.8;
  }

  .shadow-button:active {
    transform: translateY(4px);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  }
</style>

<button class="shadow-button">
  <slot></slot>
</button>
```

2. **simple-button.mjs**：按钮组件的注册代码。

```javascript
// simple-button.mjs
export const type = $.COMP;

// 需要注册的组件名，当没有定义tag属性时，注册的组件和文件名保持一致
// export const tag = 'simple-button';

// 组件模板的地址，当没有定义时，默认载入和当前模块同目录下的和组件同名的html文件
// export const temp = './simple-button.html';
```

3. **demo.html**：使用simple-button的案例页面。

```html
<!-- demo.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>simple-button</title>
    <script src="ofa.js"></script>
    <!-- <load-module src="./simple-button.mjs"></load-module> -->
    <!-- l-m 组件等同于 load-module 组件，可以写少一点代码 -->
    <l-m src="./simple-button.mjs"></l-m> 
  </head>
  <body>
    <simple-button>I am button</simple-button>
  </body>
</html>
```

在成功引入ofa.js后，会注册`load-module`组件，它是一个声明式引用模块的组件，等同于使用script标签。这个定制的组件会代理加载对应`src`的模块，并对需要加载的模块进行预处理。在本案例中，加载`simple-button.mjs`后，预处理器发现type的值与`$.COMP`常量相等，因此会认为这个模块属于**组件模块**，然后动态加载模板并注册simple-button组件。

这个`load-module`组件是一个定制的**声明式加载器**库，提供了强大的功能，可以扩展支持各种类型的文件，或者对JavaScript模块进行中转处理。它已经拆分成独立的项目，具体的使用文档在[https://github.com/kirakiray/drill.js](https://github.com/kirakiray/drill.js)。

## 单文件模式

`ofa.js` 还支持将组件封装成单个文件的模式，这种模式更加整洁和简单。你可以在 HTML 文件中创建一个 `<template>` 标签，并添加 `component` 属性来定义组件。然后将组件的模板代码写在 `<template>` 内部。紧接着，在模板内容下方，添加一个 `<script>` 标签，将组件的 JavaScript 代码放在标签内部。在这种模式下，不需要暴露组件类型 `$.COMP`。

以下是将之前的示例改为单文件模式后的代码：

```html
<!-- simple-button.html -->
<template component>
  <style>
    .shadow-button {
      background-color: #4caf50;
      border: none;
      color: white;
      padding: 15px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      border-radius: 10px;
      box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
      cursor: pointer;
    }
    .shadow-button:hover {
      opacity: 0.8;
    }

    .shadow-button:active {
      transform: translateY(4px);
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    }
  </style>

  <button class="shadow-button">
    <slot></slot>
  </button>

  <script>
    // 需要注册的组件名，当没有定义tag属性时，注册的组件和文件名保持一致
    export const tag = 'simple-button';
  </script>
</template>
```

```html
<!-- demo.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>simple-button</title>
    <script src="../../ofa.js"></script>
    <l-m src="./simple-button.html"></l-m>
  </head>
  <body>
    <simple-button>I am button</simple-button>
  </body>
</html>
```

这种模式适合代码较少的组件，如果代码较多，建议拆分模板(html)和逻辑(mjs)；