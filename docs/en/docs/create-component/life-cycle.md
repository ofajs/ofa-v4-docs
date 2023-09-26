# Component Lifecycle

In ofa.js, the component lifecycle is triggered by specific hooks at certain times. These hooks allow you to have finer control and interaction. ofa.js has five key lifecycle hooks: `created`, `ready`, `watch`, `loaded`, `attached`, and `detached`, which are triggered at different moments.

## Lifecycle Hooks

### created

The `created` lifecycle hook is triggered when the component is created. At this stage, the component's data has not been initialized and the template content has not been rendered. You can perform some initialization operations or prepare data to be used in subsequent stages.

### ready

The `ready` lifecycle hook is triggered right after the component's data and template have been initialized, indicating that the component is ready. At this stage, you can access the component's data and the template has been fully rendered, allowing you to perform some interactions with the interface.

If the component's template depends on other components, this stage does not wait for the dependencies to be loaded. Therefore, this stage is suitable for adding loading styles to the component, but you need to wait for the dependencies to be loaded before performing any relevant operations.

### watch

Once the `ready` stage is completed, the listener functions in the associated `watch` object will be triggered once. Afterwards, when a value of the data changes, the corresponding key's listener function will be triggered again.

### loaded

The `loaded` lifecycle hook is triggered after all dependencies within the component template have been loaded. This stage ensures that all dependencies have been loaded before rendering the component. It is suitable for removing the loading styles added in the `ready` stage.

### attached

`attached` lifecycle hook is triggered when the component is added to the document. In this stage, it is suitable for obtaining size-related information of the component's elements, performing data binding, and global event operations.

### detached

`detached` lifecycle hook is triggered when the component is removed from the document. In this stage, you can perform some cleanup operations, such as canceling event listeners or releasing resources, to prevent memory leaks.

## Example Demonstration

Here is an example demonstrating how to use these lifecycle hooks:

```javascript
// lifecycle-demo.mjs
export const type = $.COMP;
export const tag = "lifecycle-demo";
export const temp = "./lifecycle-demo-template.html";

export default async function () {
  return {
    data: {
      count: 0,
    },
    watch: {
      count(count) {
        console.log("count: ", count);
      },
    },
    created() {
      console.log("created: Component created, data not initialized.");
    },
    ready() {
      console.log(
        "ready: Component is ready with initialized data and template."
      );

      this.on("click", () => {
        this.count++;
      });
    },
    attached() {
      console.log("attached: Component attached to DOM.");
    },
    detached() {
      console.log("detached: Component detached from DOM.");
    },
  };
}

```

```html
<!-- lifecycle-demo-template.html -->
<l-m src="../simple-button/simple-button.mjs"></l-m>
<simple-button>Click Me ({{count}})</simple-button>
```

```html
<!-- lifecycle-demo.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Lifecycle Demo</title>
    <script src="../ofa.js"></script>
    <l-m src="./lifecycle-demo.mjs"></l-m>
  </head>
  <body>
    <lifecycle-demo></lifecycle-demo>
  </body>
</html>
```

In the above example, we have defined a component named 'lifecycle-demo' and placed a button in its template. Through different lifecycle hooks, we can observe the logs triggered at each stage in the console.

## Lifecycle Flow Chart

<img src="../../../publics/life-cycle.png" width="512" />
