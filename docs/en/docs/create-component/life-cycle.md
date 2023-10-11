# The Lifecycle of Components

In ofa.js, the component lifecycle is triggered by specific hooks at certain points in time. These hooks allow you to have more precise control and interaction. ofa.js has five key lifecycle hooks: `created`, `ready`, `watch`, `loaded`, `attached`, and `detached`, which are triggered at different times.

## Lifecycle Hooks

### Created

`created` lifecycle hook is triggered when a component is created. At this stage, the component's data has not been initialized and the template content has not been rendered. You can perform some initialization operations at this stage or prepare data to be used in later stages.

### ready

`ready` lifecycle hook is triggered after the component's data and template are initialized, indicating that the component is ready. At this stage, you can access the component's data, and the template has been rendered, allowing you to perform some interactive operations related to the interface.

If the component template relies on other components, this stage will not wait for the dependencies to be loaded. Therefore, this stage is suitable for adding loading styles to the component, but it is important to wait for the dependencies to be loaded before performing related operations.

### watch

Once the `ready` stage is completed, the listening function in the associated `watch` object will be triggered once. Afterwards, when a value of the data changes, the corresponding key's listening function will be triggered again.

### loaded

The `loaded` lifecycle hook is triggered after all dependencies in the component template have been loaded. This stage ensures that all dependencies are loaded before rendering the component. This is a good time to remove the Loading style added during the `ready` stage.

### attached

`attached` lifecycle hook is triggered when the component is added to the document. At this stage, it is suitable for obtaining size-related information of the elements within the component, performing data binding, and global event operations.

### detached

`detached` lifecycle hook is triggered when a component is removed from the document. During this stage, you can perform some cleanup operations, such as unregistering event listeners or releasing resources, to prevent memory leaks.

## Examples and Demonstrations

The following is an example demonstrating how to use these lifecycle hooks:

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

In the example above, we defined a component called `lifecycle-demo` and placed a button in its template. Through different lifecycle hooks, we can observe the logs triggered at each stage in the console.

## Lifecycle Flowchart

<img src="../../../publics/life-cycle.png" width="512" />
