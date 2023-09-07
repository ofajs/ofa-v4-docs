# Creating and Using Components

ofa.js uses basic HTML and JavaScript files to define components, avoiding the need to introduce new file types to reduce learning costs. With a certain understanding of HTML, you can quickly develop and use ofa.js components.

## Steps before creating a component

Before creating a component, there are some preparations to be made. Since creating a component involves browser requests for resources, if you simply double-click to open the HTML file for viewing, it will be viewed under the "file" protocol. Under the "file" protocol, loading JavaScript modules may result in errors. Therefore, you need to prepare a static server to view the components correctly.

If you are using the Visual Studio Code editor, you can simply install a plugin that supports a static server. We recommend using the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) plugin.

After installing the plugin, simply right-click on the `demo.html` file and select "Open with Live Server", and the plugin will automatically open the file in static server mode.

If you are using another editor, you can also create an Nginx or Apache server as long as it supports viewing static HTML. This ensures that you can preview and develop your components normally.

## Creating a Button Component

Next, we will create a simple button component named **simple-button**, which will have a more beautiful style than native buttons.

First, create a file named `simple-button.html`, which uses the `<template>` tag and adds the `component` attribute to identify it as a component.

Then, write the template code for the component inside the `<template>` tag. Next, add a `<script>` tag below the template content to include the component's JavaScript code.

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
    // Do not use import
    // import data from './other/module.mjs';

    // Component name to be registered, if tag property is not defined, the registered component name will be the same as the file name
    export const tag = 'simple-button';

    export default async ({load}) => {
      // Reference other modules
      // const data = await load("./other/module.mjs");
    }
  </script>
</template>
```

After successfully introducing ofa.js, the `load-module` component will be automatically registered. This is a component used to declaratively import modules, similar to a script tag. This component acts as a proxy to load the specified `src` module and preprocess the modules that need to be loaded. In this example, it will load the template and register the simple-button component.

The `load-module` component can also be abbreviated as `l-m` to reduce the amount of code.

```html
<!-- demo.html -->
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>simple-button</title>
<script src="../../ofa.js"></script>
<!-- <load-module src="./simple-button.html"></load-module> -->
<!-- l-m component is equivalent to the load-module component, it can be written with less code -->
<l-m src="./simple-button.html"></l-m>
</head>
<body>
<simple-button>I am a button</simple-button>
</body>
</html>
```

The `load-module` component is a custom **declarative loader** library that provides powerful functionality and can extend support for various types of files or intermediate processing of JavaScript modules. It has been split into a separate project, and the specific usage documentation is available at [https://github.com/kirakiray/drill.js](https://github.com/kirakiray/drill.js).

### Dual file mode

Dual file mode separates the `static template` and `logical code`, making the component clearer.

The logical code is placed in a js file, and this js file needs to indicate `export const type = $.COMP;` to inform the page that this is a component module. In this split mode, module code can use standard syntax like `import` of ES Modules.

The button component consists of two files:

1. **simple-button.html**: HTML template and styles for the button component.

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

2. **simple-button.mjs**: Registration code for the button component.

```javascript
// simple-button.mjs
export const type = $.COMP;

// Component name to be registered, when tag attribute is not defined, the registered component name remains the same as the file name
// export const tag = 'simple-button';

// Template URL for the component, when not defined, the component will default to loading the html file with the same name in the same directory as the current module
// export const temp = './simple-button.html';
```

To use this component, import this module using `l-m`. Here is an example page using simple-button (dual-file mode).

```html
<!-- demo.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>simple-button</title>
    <script src="ofa.js"></script>
    <l-m src="./simple-button.mjs"></l-m> 
  </head>
  <body>
    <simple-button>I am a button</simple-button>
  </body>
</html>
```

