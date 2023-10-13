# Explanation of registration parameters for components

In ofa.js, you can define certain specific registration parameters in the component module to configure the component more flexibly. The following explains each registration parameter in detail, accompanied by corresponding examples for demonstration.

## Basic Parameters

Basic parameters are the most basic configuration for registering a component, which includes the following attributes:

##### Component Identification

The component module must have `export const type = $.COMP` to identify it as a component module.

Example: 

```javascript
// button-component.mjs
export const type = $.COMP;
```

### tag

`tag` represents the registered component name. When the `tag` attribute is not defined, the registered component name remains the same as the file name.

Example: 

```javascript
// button-component.mjs
export const type = $.COMP;
export const tag = "my-button"; // Register the component name as 'my-button'
```

### temp

`temp` is a string-type property used to define the address of the component template. When `temp` is not defined, the HTML file with the same name as the component in the same directory as the current module will be loaded by default.

Example: 

```javascript
// button-component.mjs
export const type = $.COMP;
export const temp = "./my-button-template.html"; // 指定组件模板的地址为 './my-button-template.html'
```

### data

`data` is an object-type property used to add default custom data to the generated component.

Example: 

```javascript
// button-component.mjs
export const type = $.COMP;
export const data = {
  count: 0,
};
```

### attrs

`attrs` is an object-type attribute, which also belongs to `data`, but this data will be reflected in the attributes of the element. Changes in the attributes will also dynamically change the `data` of the component. When there is a capital key, it will be transformed into a kebab-case naming in the component attribute.

Example: 

```javascript
// button-component.mjs
export const type = $.COMP;
export const attrs = {
  buttonText: "Click Me",
};
```

### proto

In the registration parameter of the component, you can add a `proto` object to define the methods that need to be added to the component prototype. In this way, when creating an instance of the component, these properties and methods will be added to the prototype of the instance, so that all instances can access and share these methods.

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

`watch` is an object type property used to listen to the changes of `data`. The listener function is placed here. After being successfully registered, the value being listened to will be executed immediately.

- The function registered with `watch` will only be triggered once during a single-threaded change. Therefore, even if the value being listened to is modified multiple times within a single thread, it will only be triggered once.
- The first parameter is the current value.
- The second parameter is an object that contains the `watchers` data set. In general, there will only be one object on `watchers`, and you can obtain the `oldValue` from this object. When the value being listened to in a single thread is changed multiple times, this data set will record the changes multiple times.

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

## Example code

The following is a complete example code, including the definition of basic parameters and component templates.

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

<!-- Use template rendering syntax to render component data as text -->
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

You can also use asynchronous functions to define the `default` data, in order to dynamically return the registration parameters of the component.

Functions in JavaScript will introduce an object that includes

`load`, `url`, and `query`:

- The `load` method is an asynchronous loading function, used in the same way as asynchronous `import` loading. You can use `const data = await load(xxx)` to load asynchronous modules.
- Modules loaded through `load` have the same effect as modules loaded through `load-module`. The `load` method is a function version of the `load-module` component. For specific usage, you can refer to the documentation of [https://github.com/kirakiray/drill.js](https://github.com/kirakiray/drill.js).
- `url` is the file name of the current module.
- `query` is an object converted from the URL parameters when loading this module.

Below are examples of using `default`:

```javascript
// button-component.mjs
export const type = $.COMP; // This must be defined first and cannot be a dynamic parameter
export const tag = "my-button";
export const temp = "./my-button-template.html";

export default async function ({ load, url, query }) {
  console.log("url:", url); // Output the file name of the current module
  console.log("query:", query); // Output the object converted from the URL parameters of the current module

  const asyncData = await load("./async-data.mjs"); // Use load to asynchronously load modules
  console.log("asyncData:", asyncData); // Output the asynchronously loaded module data

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

In this example, we demonstrate how to customize the behavior of components using the registration parameters of ofa.js. By configuring these parameters appropriately, you can better adapt to different component requirements and achieve more flexible component development.

Write a documentation on the use of the proto registration parameters for components.