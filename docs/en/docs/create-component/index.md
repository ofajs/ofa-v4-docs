# Creating and Using Components

ofa.js uses basic HTML and JavaScript files to define components, avoiding the introduction of new file types to reduce learning costs. As long as you have a certain understanding of HTML, you can quickly develop and use ofa.js components.

## Steps before creating a component

Before starting to create components, there are some preparations that need to be done. Since creating components involves browser resource requests, if you only double-click to open an HTML file for viewing, it will be viewed under the "file" protocol. Under the "file" protocol, the loading of JavaScript modules may result in errors. Therefore, you need to prepare a static server to correctly view the components.

If you are using Visual Studio Code editor, you can simply install a plugin that supports a static server. We recommend using the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) plugin.

After installing the plugin, simply right-click on the `demo.html` file and select "Open with Live Server". The plugin will automatically open the file in static server mode.

If you are using a different editor, you can also create an Nginx or Apache server as long as it can support static HTML viewing. Doing so will ensure that you can preview and develop your components properly.

## Create a button component

Below, we will create a simple button component named **simple-button**, which will have a more stylish appearance than native buttons.

First, create a file named 'simple-button.html' that uses the 'template' tag and add the 'component' property to identify it as a component.

Then, write the template code for the component in the `template`. Next, below the template content, add a `script` tag and put the component's JavaScript code inside it.

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
    export default {
      tag: 'simple-button' // Component name to be registered, if the tag property is not defined, the registered component name remains the same as the filename
    }
  </script>
</template>
```

After successfully introducing ofa.js, the `load-module` component will be automatically registered. This is a component used to declaratively reference modules, similar to the script tag. This component will proxy load the specified `src` modules and preprocess the modules that need to be loaded. In this case, templates will be loaded and the simple-button component will be registered.

The `load-module` component can also be abbreviated as `l-m` to reduce code size.

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
    <!-- l-m component is equivalent to load-module component and allows for shorter code -->
    <l-m src="./simple-button.html"></l-m>
  </head>
  <body>
    <simple-button>I am a button</simple-button>
  </body>
</html>
```

`load-module` component is a customized **declarative loader** library that provides powerful functionality to extend support for various types of files or to perform intermediate processing on JavaScript modules. It has been split into a separate project, and the specific usage documentation can be found at [https://github.com/kirakiray/drill.js](https://github.com/kirakiray/drill.js).

### Dual File Mode

Dual-file mode separates `static templates` and `logic code`, making components more clear.

The logic code is put in a js file, and this js file needs to indicate `export const type = $.COMP;` to notify the page that it is a component module. In this split mode, the module code can use standard syntax like `import` in ES Module.

Button component consists of two files:

1. **simple-button.html**: HTML template and style for the button component.

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
export const type = $.COMP; // Double file modules must include `export const type = $.COMP`

// The component name to be registered. When the tag property is not defined, the registered component name remains the same as the file name
// export const tag = 'simple-button';

// The URL of the component template. When not defined, it defaults to loading the html file with the same name as the component in the same directory as the current module
// export const temp = './simple-button.html';
```

In the places where this component is needed, use `l-m` to import this module. Here is an example page using simple-button (dual-file mode).

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