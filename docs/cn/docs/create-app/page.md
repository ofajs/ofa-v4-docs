# 使用 o-page 组件

在 ofa.js 内部，我们构建了一个名为 `o-page` 的自定义组件，旨在为页面的开发提供便利。这个组件在应用开发中扮演着关键的角色。当你想要使用组件的模板语法，但又不想创建全新的组件时，`o-page` 组件将成为你的最佳选择。

## 页面模块

创建一个单文件页面模块时，类似于创建组件模块。使用 `template` 标签来包裹页面的模板代码，并添加 `page` 属性。在该标签内部，可以自由使用模板语法与其他组件或页面模块进行交互。

```html
<!-- my-single-file-page.html -->
<template page>
  <h1>{{pageTitle}}</h1>
  <p>Welcome to my single file page!</p>
  <script>
    export default async ({ load }) => {
      return {
        data: {
          pageTitle: "My Single File Page",
        },
      };
    }
  </script>
</template>
```
在 HTML 文件中，使用 `o-page` 标签的 `src` 属性指定页面模块的文件路径。页面内容将在该组件内部进行渲染。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My App</title>
  <script src="../../ofa.js"></script>
</head>
<body>
  <o-page src="./my-single-file-page.html"></o-page>
</body>
</html>
```

## 双文件模式

双文件模式将 `静态模板` 和 `逻辑代码` 分开，使页面的内容更加清晰。

以下是使用 `o-page` 组件和页面模块的步骤：

1. 创建页面模块：

与创建组件模块类似，创建一个页面模块，但将 `type` 属性设置为 `$.PAGE`。页面模块可用的参数包括 `temp`、`data`、`proto` 和 `watch`。

```javascript
// my-page.mjs
export const type = $.PAGE;

export const temp = "./my-page-template.html";

export const data = {
  pageTitle: "My Page",
};

export const proto = {
  // ...
};

export const watch = {
  // ...
};
```

2. 创建页面模板：

在与页面模块相同的目录下，创建一个名为 `my-page-template.html` 的页面模板文件。在这个模板文件中，你可以使用模板语法进行交互，用法与前面提到的组件模板语法类似。

```html
<!-- my-page-template.html -->
<h1>{{pageTitle}}</h1>
<p>Welcome to my page!</p>
```

在你的 HTML 文件中，通过 `<o-page>` 标签来使用 `o-page` 组件，通过 `src` 属性引用页面模块的文件路径。页面的内容将会在这个组件内部渲染。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My App</title>
  <script src="../../ofa.js"></script>
</head>
<body>
  <o-page src="./my-page.mjs"></o-page>
</body>
</html>
```

这样，当你打开页面时，`o-page` 组件会动态加载 `my-page.mjs` 这个页面模块，并根据模块中的模板和数据渲染页面内容。页面模块的生命周期和模板语法与组件模块保持一致，使得页面的开发和管理变得更加统一和灵活。