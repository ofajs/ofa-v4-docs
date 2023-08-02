# 组件的注册参数说明

ofa.js允许你在组件模块中定义一些特定的注册参数，以便更灵活地配置组件。下面是各个注册参数的详细说明，并附带每个参数的示例演示。

## 基础参数

注册组件的最基本的参数，包含如下；

### 组件标识

组件模块必须带有 `export const type = $.COMP`，用于标识该模块为组件模块。

示例：

```javascript
// button-component.mjs
export const type = $.COMP;

// 组件模块的其他代码...
```

### tag

`tag` 代表注册的组件名。当没有定义 `tag` 属性时，注册的组件名与文件名保持一致。

示例：

```javascript
// button-component.mjs
export const type = $.COMP;
export const tag = 'my-button'; // 将组件名注册为 'my-button'

// 组件模块的其他代码...
```

### temp

`temp` 是一个字符串类型的属性，用于定义组件模板的地址。当没有定义 `temp` 时，默认载入和当前模块同目录下与组件同名的html文件。

示例：

```javascript
// button-component.mjs
export const type = $.COMP;
export const temp = './my-button-template.html'; // 指定组件模板的地址为 './my-button-template.html'

// 组件模块的其他代码...
```

### data

`data` 是一个对象，用于生成组件后，默认添加的自定义数据。

示例：

```javascript
// button-component.mjs
export const type = $.COMP;
export const data = {
  count: 0,
};

// 组件模块的其他代码...
```

### attrs

`attrs` 是一个对象，也属于 `data`，但是这个数据会反映到 element 的 attributes 上，attributes 上的改动也会动态改动到组件的 `data` 上。

示例：

```javascript
// button-component.mjs
export const type = $.COMP;
export const attrs = {
    buttonText: 'Click Me',
};

// 组件模块的其他代码...
```

### watch

`watch` 是一个对象，用于监听 `data` 变化的监听函数放在这里。注册成功后，监听的值会被立刻执行一次。

示例：

```javascript
// button-component.mjs
export const type = $.COMP;
export const data = {
  count: 0,
};
export const watch = {
  count(newValue, oldValue) {
    console.log(`count changed from ${oldValue} to ${newValue}`);
  },
};

// 组件模块的其他代码...
```

## 将上面的基础参数封装成一个案例

现在我们将上面的几个参数封装成一个按钮组件模块；

```javascript
// button-component.mjs
export const type = $.COMP;

export const tag = 'my-button';
export const temp = './my-button-template.html';

export const data = {
  count: 0,
};

export const attrs = {
    buttonText: 'Click Me',
};

export const watch = {
  count(newValue, oldValue) {
    console.log(`count changed from ${oldValue} to ${newValue}`);
  },
};
```

```html
<!-- my-button-template.html -->
<style>
  .shadow-button {
    background-color: #6b47fb;
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
</style>

<button class="shadow-button">{{buttonText}}</button>
```

```html
<!-- demo.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>my-button</title>
    <script src="../ofa.js"></script>
    <l-m src="./button-component.mjs"></l-m>
  </head>
  <body>
    <my-button button-text="My Button"></my-button>
  </body>
</html>

```

### default

`default` 是一个函数，用于在判断到是组件模块时，并且 `export default` 是函数时，先运行这个函数。这个函数可以是 `async function`。

在函数内返回一个对象，这个对象就是这个组件的注册参数。

使用 `default` 的好处是，在注册参数不确定的情况下可以使用这个方式。

函数的function会带过来一个对象，包含 `load`、`url` 和 `query`：

- `load` 方法是一个异步加载函数，使用方法和异步`import`加载一致，可以通过 `const data = await load(xxx)` 加载异步模块。
- 通过 `load` 加载的模块，会有和 `load-module` 加载一样的加成效果，`load` 方法是 `load-module` 组件的函数版，可以通过查阅[https://github.com/kirakiray/drill.js](https://github.com/kirakiray/drill.js)得到它的具体使用文档。
- `url` 是这个模块的文件名。
- `query` 是加载这个模块时的 URL 参数转成的对象。

示例：

```javascript
// button-component.mjs
export const type = $.COMP;
export default function ({ load, url, query }) {
  console.log('url:', url); // 输出当前模块的文件名
  console.log('query:', query); // 输出当前模块的 URL 参数转成的对象

  const asyncData = await load('./async-data.mjs'); // 使用 load 异步加载模块
  console.log('asyncData:', asyncData); // 输出异步加载的模块数据

  return {
    data: {
      buttonText: 'Click Me',
      count: 0,
    },
    attrs: {
      class: 'custom-button',
      disabled: false,
    },
  };
}

// 组件模块的其他代码...
```