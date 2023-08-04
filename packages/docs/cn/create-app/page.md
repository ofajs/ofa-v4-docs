# 开发页面

在 ofa.js 内部，我们特意构建了一个名为 `o-page` 的自定义组件，旨在便捷地制作页面。它在应用开发中扮演着关键角色。当你想要使用组件的模板语法，但又不想创建全新的组件时，`o-page` 组件将是一个绝佳的选择。

## 页面模块

当使用 `o-page` 组件时，实际上是在通过 `src` 属性引用一个专用的**页面模块**来渲染页面内容。

以下是使用 `o-page` 组件和页面模块的步骤：

1. 创建页面模块：

创建一个页面模块，就像创建组件模块一样，但是将 `type` 属性设置为 `$.PAGE`。页面模块的可用参数仅包括 `temp`、`data`、`proto` 和 `watch`。

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

在与页面模块相同的目录下，创建一个名为 `my-page-template.html` 的页面模板文件。在这个模板文件中，你可以使用模板语法和其他组件/页面模块进行交互。

```html
<!-- my-page-template.html -->
<h1>{{pageTitle}}</h1>
<p>Welcome to my page!</p>
```

3. 使用 `o-page` 组件：

在你的 HTML 文件中，通过 `<o-page>` 标签来使用 `o-page` 组件，通过 `src` 属性引用页面模块的文件路径。页面内容将会在这个组件中渲染出来。

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


## 单文件页面模块

当使用 `o-page` 组件开发应用页面时，还可以使用单文件页面模块的方式，使页面模块更加整洁。当页面逻辑相对简单时，强烈建议采用这种模式进行编写。

下面是使用单文件页面模块的步骤：

1. 创建单文件页面模块：

创建一个单文件页面模块，就像创建组件模块一样，但是使用 `<template page>` 标签来包裹页面的模板代码。在内部，你可以使用模板语法和其他组件/页面模块进行交互。

```html
<!-- my-single-file-page.html -->
<template page>
  <h1>{{pageTitle}}</h1>
  <p>Welcome to my single file page!</p>
  <script>
    export const data = {
      pageTitle: "My Single File Page",
    };
  </script>
</template>
```

2. 使用 `o-page` 组件加载单文件页面模块：

在你的 HTML 文件中，通过 `<o-page>` 标签来使用 `o-page` 组件，通过 `src` 属性引用单文件页面模块的文件路径。页面内容将会在这个组件中渲染出来。

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

这样，当你打开页面时，`o-page` 组件会动态加载 `my-single-file-page.html` 这个单文件页面模块，并根据模块中的模板和数据渲染页面内容。在单文件页面模块中，不需要标记 `export const type = $.PAGE`，而是直接在 `<script>` 标签中定义页面模块的内容。这种方式使页面模块更加简洁易读。
