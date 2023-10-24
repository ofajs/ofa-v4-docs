# Explanation of registration parameters for components

In ofa.js, you can define certain specific registration parameters in the component module to configure the component more flexibly. The following explains each registration parameter in detail, accompanied by corresponding examples for demonstration.

## Basic Parameters

Basic parameters are the most basic configuration for registering a component, which includes the following attributes:

### tag

`tag` represents the registered component name. When the `tag` attribute is not defined, the registered component name remains the same as the file name.

Example: 

```javascript
export const tag = "my-button"; // Register the component name as 'my-button'
```

### data

`data` is an object-type property used to add default custom data to the generated component.

Example: 

```javascript
export const data = {
  count: 0,
};
```

### attrs

`attrs` is an object-type attribute, which also belongs to `data`, but this data will be reflected in the attributes of the element. Changes in the attributes will also dynamically change the `data` of the component. When there is a capital key, it will be transformed into a kebab-case naming in the component attribute.

Example: 

```javascript
export const attrs = {
  buttonText: "Click Me",
};
```

### proto

In the registration parameter of the component, you can add a `proto` object to define the methods that need to be added to the component prototype. In this way, when creating an instance of the component, these properties and methods will be added to the prototype of the instance, so that all instances can access and share these methods.

```javascript

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

### temp

Usually, there is no need to set this variable. It is mainly used in separation mode to specify the address of the component template. When `temp` is not defined, the HTML file with the same name as the current module will be loaded by default, and this file should be located in the same directory.

## Merge Variables into Default

You can write all exported variables onto default so that it is easier to write.

```javascript
export default {
  tag: "my-button",
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
```

## Example code

The following is a complete example code, including the definition of basic parameters and component templates.

<comp-viewer comp-name="my-button">

```
<my-button button-text="My Button"></my-button>
<!-- <script>
  $("my-button").on("click", () => {
    $("my-button").count++;
  });

  setTimeout(() => {
    $("my-button").sayHello();
  }, 1000);
</script> -->
```

```html
<template component>
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
  <button class="shadow-button" on:click="count++">{{buttonText}} - count:{{count}}</button>

  <script>
    export default {
      tag: "my-button",
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
          // alert("Hello Count:" + this.count);
        },
      },
    };
  </script>
</template>
```

</comp-viewer>

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
export const tag = "my-button";
export const temp = "./my-button-template.html";

export default async function ({ load, url, query }) {
  console.log("url:", url); // Output the filename of the current module
  console.log("query:", query); // Output the URL parameters of the current module as an object

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