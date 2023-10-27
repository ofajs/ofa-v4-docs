# refresh

To refresh the rendering view of a component, sometimes you can use this method when the data on the component is not updated.

<comp-viewer comp-name="custom-comp">

```html
<template component>
  <!-- Changes to private data starting with "_" won't trigger page refresh -->
  <div>{{_count}}</div>
  <button on:click="refresh()">Refresh</button>
  <script>
    export default {
      tag: "custom-comp",
      data: {
        _count: 0,
      },
      attached() {
        this._timer = setInterval(() => {
          this._count++;
        }, 200);
      },
    };
  </script>
</template>
```

</comp-viewer>