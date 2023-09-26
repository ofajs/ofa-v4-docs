# Explanation of Component Registration Parameters

In ofa.js, you can define some specific registration parameters in the component module to configure the component more flexibly. The following explains each registration parameter in detail, accompanied by relevant demonstration examples.

## Basic Parameters

The basic parameters are the most basic configurations for registering a component and include the following properties:

### Component Identifier

The component module must have 'export const type = $.COMP' to identify it as a component module.

Example:

```javascript
// button-component.mjs
export const type = $.COMP;
```

### tag

`tag` represents the registered component name. When `tag` property is not defined, the registered component name remains the same as the file name.

Example:

```javascript
// button-component.mjs
export const type = $.COMP;
export const tag = "my-button"; // Register component name as 'my-button'
```

### temp

`temp` is a string type property used to define the address of the component template. When `temp` is not defined, it defaults to loading an HTML file with the same name as the component in the same directory as the current module.

Example:

```javascript
// button-component.mjs
export const type = $.COMP;
export const temp = "./my-button-template.html"; // Specify the address of the component template as './my-button-template.html'
```

### data

`data` is an object type property used to generate default custom data added after the component is created.

Example:

```javascript
// button-component.mjs
export const type = $.COMP;
export const data = {
  count: 0,
};
```

### attrs

`attrs` is an object type property belonging to `data`, but this data will be reflected in the element's attributes, and changes to the attributes will dynamically change the component's `data`. When there is a capital letter key, it will be converted to `-` camel case naming in the component attribute.

Example:

```javascript
// button-component.mjs
export const type = $.COMP;
export const attrs = {
  buttonText: "Click Me",
};
```

### proto

In the registration parameter of the component, you can add a `proto` object to define the methods that need to be added to the component's prototype. This way, when creating an instance of the component, these attributes and methods will be added to the prototype of the instance, allowing all instances to access and share these methods.

```javascript
// MyComponent.js
export const type = $.COMP;

export const data = {
  count: 0,
};

export const proto = {
  sayHello() {
    alert('Hello Count:'+ this.count);
  },
};
```

### watch

`watch` is an object type property used to listen for changes in `data`. The listener function is placed here. Once registered successfully, the listener function will be immediately executed.

- The function registered by `watch` will only be triggered once during a single thread change. Therefore, even if the monitored value is modified multiple times within a thread, it will only be triggered once.
- The first parameter is the current value.
- The second parameter is an object that contains a `watchers` data set. In most cases, the `watchers` object will only contain one object. You can retrieve the `oldValue` from this object. When the monitored value has been changed multiple times within a single thread, this data set will record multiple changes.

Example:

```javascript
// button-component.mjs
export const type = $.COMP;
export const data = {
  count: 0,
};
export const watch = {
  count(newValue, { watchers }) {
    let oldValue;
    if (watchers) {
      oldValue = watchers[0].oldValue;
    }
    console.log(`count changed from ${oldValue} to ${newValue}`);
  },
};
```

## Example Code

The following is a complete example code, including the definition of basic parameters and the component template.

```javascript
// button-component.mjs
export const type = $.COMP;
export const tag = "my-button";
export const temp = "./my-button-template.html";

export const attrs = {
  buttonText: "Click Me",
};

export const data = {
  count: 0,
};

export const watch = {
  count(newValue, { watchers }) {
    let oldValue;
    if (watchers) {
      oldValue = watchers[0].oldValue;
    }
    console.log(`count changed from ${oldValue} to ${newValue}`);
  },
};

export const proto = {
  sayHello() {
    alert("Hello Count:" + this.count);
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

<!-- Using template rendering syntax to render component data as text -->
<button class="shadow-button">{{buttonText}} - count:{{count}}</button>
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
    <script>
      $("my-button").on("click", () => {
        $("my-button").count++;
      });

      setTimeout(() => {
        $("my-button").sayHello();
      }, 1000);
    </script>
  </body>
</html>

```

### default

You can also use asynchronous functions to define the 'default' data in order to dynamically return the registration parameters of the component.

The 'function' of the function will bring an object that contains

 'load', 'url', and 'query':

- The 'load' method is an asynchronous loading function, which can be loaded asynchronously by using the same method as asynchronous 'import', and can load asynchronous modules using 'const data = await load(xxx)'.
- Modules loaded through 'load' will have the same effect as those loaded by 'load-module'. The 'load' method is a functional version of the 'load-module' component, and specific usage can be found in the documentation of [https://github.com/kirakiray/drill.js](https://github.com/kirakiray/drill.js).
- 'url' is the filename of the current module.
- 'query' is an object converted from URL parameters when loading this module.

Here is an example of using 'default':

```javascript
// button-component.mjs
export const type = $.COMP; // This must be defined first and cannot be a dynamic parameter
export const tag = "my-button";
export const temp = "./my-button-template.html";

export default async function ({ load, url, query }) {
  console.log("url:", url); // Outputs the filename of the current module
  console.log("query:", query); // Outputs the object converted from the URL parameters of the current module

  const asyncData = await load("./async-data.mjs"); // Loads the module asynchronously using 'load'
  console.log("asyncData:", asyncData); // Outputs the asynchronously loaded module data

  return {
    data: {
      count: 0,
    },
    attrs: {
      buttonText: "Click Me",
    },
    watch: {
      count(newValue, { watchers }) {
        let oldValue;
        if (watchers) {
          oldValue = watchers[0].oldValue;
        }
        console.log(`count changed from ${oldValue} to ${newValue}`);
      },
    },
    proto: {
      sayHello() {
        alert("Hello Count:" + this.count);
      },
    },
  };
}
```

In this example, we demonstrate how to customize the behavior of a component using the registration parameters ofa.js. By configuring these parameters properly, you can better adapt to different component requirements and achieve more flexible component development.

Write a documentation on how to use the registration parameters of the component proto.

